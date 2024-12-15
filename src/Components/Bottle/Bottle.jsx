
import './Bottle.css'
const bottle = ({ bottle, handleAddCart }) => {
	const { name, img, price } = bottle;
	console.log(bottle)
	return (
		<div className="bottle">
			<h2>bottle: </h2>
			<p>{name}</p>
			<img src={img} alt="" />
			<p>{price}</p>
			<button onClick={() => handleAddCart(bottle)}>Purchase:</button>
		</div >
	);
};

export default bottle;