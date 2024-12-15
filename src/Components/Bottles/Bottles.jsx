import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../bottle/bottle";
import './Bottles.css'
import { addToLs, getStoredCart } from "../Utilities/Localstorage";
import Cart from "../Cart/Cart";


const Bottles = () => {
	const [bottles, setBottles] = useState([])
	const [cart, setCart] = useState([])

	useEffect(() => {
		fetch('Water.json')
			.then(res => res.json())
			.then(data => setBottles(data))
	}, [])

	useEffect(() => {
		if (bottles.length > 0) {
			const storedCart = getStoredCart();
			console.log(storedCart, bottles)
			const saveCart = [];
			for (const id of storedCart) {
				const bottle = bottles.find(bottle => bottle.id === id)
				if (bottle) {
					saveCart.push(bottle)
				}
			}

			setCart(saveCart)
		}
	}, [bottles])

	const handleAddCart = bottle => {
		const newCart = [...cart, bottle]
		setCart(newCart)
		addToLs(bottle.id)
	}
	return (
		<div>
			<h2>Bottles Available: {bottles.length}</h2>
			<Cart cart={cart}></Cart>
			<div className="bottle-container">
				{
					bottles.map(bottle =>
						<Bottle key={bottle.id}
							bottle={bottle}
							handleAddCart={handleAddCart}
						></Bottle>)
				}
			</div>
		</div>
	);
};

export default Bottles;