import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const AppContext = createContext();

const ApiContext = ({children}) => {
	
	const [selectedPet, setSelectedPet] = useState('Dog');
	const [selectedPetCategory, setSelectedPetCategory] = useState('Dog Food & Treats');
	const [selectedPetSubcategory, setSelectedPetSubcategory] = useState('');
	const [cart, setCart] = useState([]);
	const [blog, setBlog] = useState([]);
	const [subscriptionId, setSubscriptionId] = useState('');

	const addToCart = (product) => {
		const existingCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
		const updatedCartItems = [...existingCartItems, product];
		
		localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
		setCart(updatedCartItems);
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
			subscriptionId,
			setSubscriptionId,
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