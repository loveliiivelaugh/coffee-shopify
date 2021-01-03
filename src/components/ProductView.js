import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useShopify } from "./../../../hooks"

import Button from 'react-bootstrap/Button'
import './Product.scss'

import MyCarousel from "./Carousel";

export default (props) => {
	// const {
	// 	product,
	// 	fetchProduct,
	// 	openCart,
	// 	checkoutState,
	// 	addVariant,
	// } = useShopify()
	// const id = props.match.params.productId
	// const defaultSize = product.variants && product.variants[0].id.toString()
	// const [size, setSize] = useState("")
	// const [quantity, setQuantity] = useState(1)

	// const description = product.description && product.description.split(".")

	// function changeSize(sizeId, quantity) {
	// 	openCart()
	// 	if (sizeId === "") {
	// 		sizeId = defaultSize
	// 		const lineItemsToAdd = [
	// 			{ variantId: sizeId, quantity: parseInt(quantity, 10) },
	// 		]
	// 		const checkoutId = checkoutState.id
	// 		addVariant(checkoutId, lineItemsToAdd)
	// 	} else {
	// 		const lineItemsToAdd = [
	// 			{ variantId: sizeId, quantity: parseInt(quantity, 10) },
	// 		]
	// 		const checkoutId = checkoutState.id
	// 		addVariant(checkoutId, lineItemsToAdd)
	// 	}
	// }

	// useEffect(() => {
	// 	fetchProduct(id)
	// }, [id])

	return (
		<div id="individualProduct">
			<div className="Product-wrapper2">
			<Link to={"/products"}>
				<Button className="button" >Back to the shop</Button>
			</Link>
				{/* <center>
					{ product.images &&
						<div>
							<MyCarousel images={product.images} />
							<br />
							{product.images.length} images
						</div>
					}
				</center> */}
				<div className="Product__info">
					{/* <h2 className="Product__title2">{product.title}</h2> */}
					{/* <ul className="Product__description">
						{description &&
							description.map((each, i) => {
								return <li key={`line-description +${i}`}>{each}</li>
							})}
					</ul> */}
					<div>
						<label htmlFor={"prodOptions"}>Size</label>
						<select
							id="prodOptions"
							name={size}
							onChange={(e) => {
								setSize(e.target.value)
							}}
						>
							{product.variants &&
								product.variants.map((item, i) => {
									return (
										<option
											value={item.id.toString()}
											key={item.title + i}
										>{`${item.title}`}</option>
									)
								})}
						</select>
					</div>
					<div>
						<label>Quantity</label>
						<input
							className="quantity"
							type="number"
							min={1}
							value={quantity}
							onChange={(e) => {
								setQuantity(e.target.value)
							}}
						></input>
					</div>
					<h3 className="Product__price">
						${product.variants && product.variants[0].price}
					</h3>
					<button
						className="prodBuy button"
						onClick={(e) => changeSize(size, quantity)}
					>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	)
}
