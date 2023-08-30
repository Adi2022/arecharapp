import { createContext, useEffect } from "react";
import axios from "axios";
const AppContext = createContext();

const API = "http://localhost:3000/shop";

const AppProvider = ({ children }) => {
	const getProducts = async (url) => {
		const res = await axios.get(url);
		const products = await res.data;

		console.log(products);
	};

	useEffect(() => {
		getProducts(API);
	}, []);

	return <AppContext.Provider value="">{children}</AppContext.Provider>;
};
export { AppProvider ,AppContext};
