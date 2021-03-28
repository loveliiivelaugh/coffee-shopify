import { client } from '../util/shopify';

// hook like function to console.log() the checkout as well as return the checkout session to use in other functions
async function getCheckout(checkoutId) {
    const checkout_response = await client.checkout.fetch(checkoutId);
    console.log(checkout_response);
    return checkout_response;
}

const Storage = (cartItems) => {
    localStorage.setItem('cart', JSON.stringify(cartItems.length > 0 ? cartItems: []));
}

// add lineItem initally to checkout session
async function addItems(id, items) {
    const response = await client.checkout.addLineItems(id, items);
    // check localStorage for webUrl
    if (!localStorage.getItem('webUrl')) {
        // if none then set webUrl in localstorage
        localStorage.setItem('webUrl', response.webUrl);
    }
    console.log(response)
}

//remove last lineItem of type in checkout session
async function removeItems(checkoutId, items) {
    const checkout = await getCheckout(checkoutId);
    // loop through each line item
    checkout.lineItems.forEach( async (lineItem) => {
        // check if lineItem title = action.payload title
        if ( lineItem.title === items.title ) {
            // if its true then...
            try {
                // set id to be the id of the line item
                const id = lineItem.id;
                // pass the variables to the shopify checkout method
                const res = await client.checkout.removeLineItems(checkoutId, id); // current checkoutId and the [line item id and quantity]
                console.info(res);
            } catch (error) {
                console.info(error);
                if (error.code === "LINE_ITEM_NOT_FOUND") {
                    console.log("Need to put code here to handle this error!\nMost likely reset the cart items.")
                    alert("Sorry for the inconvenience an error occured. Your cart has been reset.")
                }
            }
        }
    });
}

//increase lineItem quantity of type by 1
async function increaseItem(checkoutId, item) {
    // get current checkout object
    const checkout = await getCheckout(checkoutId);
    // console.info(checkout)
    // loop through lineItems
    checkout.lineItems.forEach( async (lineItem) => {
        // if lineItem title = item title then...
        if (lineItem.title === item.title){
            // set id to be the id of the line item
            const id = lineItem.id;
            // find the current quantity of the selected line item
            const q = lineItem.quantity;
            // set a new variable equal to the quantity + 1
            const newQ = q + 1;
            // set a variable in the shape the updateLineItems method calls for
            const itemToIncrease = [{ id: id, quantity: newQ }];
            // pass the variables to the shopify checkout method
            const res = await client.checkout.updateLineItems(checkoutId, itemToIncrease); // current checkoutId and the [line item id and quantity]
            console.log(res);
        }
    });
}

//decrease lineItem quantity of type by 1
async function decreaseItem(checkoutId, item) {
    const checkout = await getCheckout(checkoutId);
    checkout.lineItems.forEach( async (lineItem) => {
        if ( lineItem.title === item.title ) {
            // set id to be the id of the line item
            const id = lineItem.id;
            // find the current quantity of the selected line item
            const q = lineItem.quantity;
            // set a new variable equal to the quantity - 1
            const newQ = q - 1;
            // set a variable in the shape the updateLineItems method calls for
            const itemToDecrease = [{ id: id, quantity: newQ }];
            // pass the variables to the shopify checkout method
            const res = await client.checkout.updateLineItems(checkoutId, itemToDecrease); // current checkoutId and the [line item id and quantity]
            console.log(res);
        }
    });
}

const createCheckout = async () => {
    const checkout = await client.checkout.create();
    localStorage.setItem("checkout", checkout.id);
    console.info("Checkout has been created: " + checkout.id)
};

//clear all lineItems from checkout
async function clear_checkout(checkoutId, items) {
    const checkout = await getCheckout(checkoutId);
    // set variable to empty array to store all lineItems
    const itemsToClear = [];
    // loop through all lineItems
    checkout.lineItems.forEach( async (item) => {
        // store lineItem id to variable
        const lineItemId = item.id;
        // asynchronously push object of correct shape with lineItem id and updated quantity: 0
        await itemsToClear.push({
            id: lineItemId,
            quantity: 0
        });
    });
    // pass the variables to the shopify checkout method
    const res = await client.checkout.updateLineItems(checkoutId, itemsToClear);
    console.log(res);
    // last but not least -- clear local storage
    localStorage.removeItem("checkout")

    //trying this out -- we'll want to recreate a new checkout right away so might as well put this here to insure it's automatic
    // createCheckout();
}

async function handle_checkout(state) {
    console.info(state)
    const checkout = await getCheckout(state.checkout_id);
    console.log(checkout)
    const url = checkout.webUrl;
    window.open(url);
}

export const someItems = cartItems => {
    Storage(cartItems);
    let itemCount = cartItems.reduce((total, product) => total + product.quantity, 0);
    let total = cartItems.reduce((total, product) => total + product.variants[0].price * product.quantity, 0).toFixed(2);
    return { itemCount, total };
};

export const CartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.cartItems.find(item => item.id === action.payload.id)) {
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1
                });
                const variantId = action.payload.variants[0].id;
                const lineItemsToAdd = [{ variantId, quantity: 1 }];
                addItems(localStorage.checkout, lineItemsToAdd);
            }
            return {
                ...state,
                ...someItems(state.cartItems),
                cartItems: [...state.cartItems]
            };
        case "REMOVE_ITEM":
            removeItems(localStorage.checkout, action.payload);
            return {
                ...state,
                ...someItems(state.cartItems.filter(item => item.id !== action.payload.id)),
                cartItems: [...state.cartItems.filter(item => item.id !== action.payload.id)]
            };
        case "INCREASE":
            state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity++;
            console.log({checkout: localStorage.checkout, payload: action.payload})
            increaseItem(localStorage.checkout, action.payload);
            return {
                ...state,
                ...someItems(state.cartItems),
                cartItems: [...state.cartItems]
            };
        case "DECREASE":
            state.cartItems[state.cartItems.findIndex(item => item.id === action.payload.id)].quantity--;
            decreaseItem(localStorage.checkout, action.payload);
            return {
                ...state,
                ...someItems(state.cartItems),
                cartItems: [...state.cartItems]
            };
        case "CHECKOUT":
            return {
                cartItems: [],
                checkout: true,
                ...someItems([]),
            };
        case "CLEAR":
            clear_checkout(localStorage.checkout, state.cartItems);
            return {
                cartItems: [],
                ...someItems([]),
            }
        case "CHECKOUT_FOUND":
            handle_checkout(state);
			return { 
                checkout: action.payload,
                ...state,
                cartItems: [...state.cartItems]
            }
        default:
            return state;
    }
}