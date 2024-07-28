import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const AppContext = createContext();

const ApiContext = ({children}) => {
	
	const [selectedPet, setSelectedPet] = useState('Dog');
	const [selectedPetCategory, setSelectedPetCategory] = useState('Dog Food & Treats');
	const [selectedPetSubcategory, setSelectedPetSubcategory] = useState('');
	const [cart, setCart] = useState([]);
	const [blog, setBlog] = useState([]);

	const addToCart = (product) => {

	localStorage.setItem("cartItems", JSON.stringify(product));

	const cartItems = JSON.parse(localStorage.getItem("cartItems"));	
	setCart([...cart, cartItems]);
	};


	return (
		<AppContext.Provider 
		value={{
			selectedPet, setSelectedPet,
			selectedPetCategory, setSelectedPetCategory,
			setSelectedPetSubcategory, selectedPetSubcategory,
			cart,
			setCart,
			addToCart,
			blog,
			setBlog,
		}}	
		>
			{children}
		</AppContext.Provider>
	);
};


ApiContext.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ApiContext;