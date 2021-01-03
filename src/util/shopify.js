import Client from "shopify-buy";

// Creates the client with Shopify-Buy and store info
// Example Storefront
// export const client = Client.buildClient({
//   storefrontAccessToken: "dd4d4dc146542ba7763305d71d1b3d38",
//   domain: "graphql.myshopify.com",
// });

export const client = Client.buildClient({
  storefrontAccessToken: "82c11e070381463465df43242147166d",
  domain: "react-coffee-shop-test.myshopify.com",
});