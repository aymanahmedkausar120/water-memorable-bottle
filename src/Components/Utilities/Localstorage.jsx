const getStoredCart = () => {
	const storedCartStringify = localStorage.getItem('cart')
	if (storedCartStringify) {
		return JSON.parse(storedCartStringify)
	}
	return [];
}



const saveStoredCart = (cart) => {
	const saveCartStringified = JSON.stringify(cart)
	localStorage.setItem('cart', saveCartStringified)
}

const addToLs = (id) => {
	const cart = getStoredCart();
	cart.push(id)
	saveStoredCart(cart)
}

export { addToLs, getStoredCart }














