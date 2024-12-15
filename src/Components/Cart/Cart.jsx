import './Cart.css'
const Cart = ({ cart }) => {
	return (
		<div className="cart-container">
			<h4>Cart: {cart.length}</h4>
			{
				cart.map((bottle, idx) => <img key={idx} src={bottle.img}></img>)
			}
		</div>
	);
};

export default Cart;