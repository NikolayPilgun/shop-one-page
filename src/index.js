import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AboutUs from "./Components/AboutUs/AboutUs";
import Catalogue from "./Components/Catalogue/Catalogue";
import Contacts from "./Components/Contacts/Contacts";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Home from "./Components/Home/Home";
import LookBook from "./Components/LookBook/LookBook";
import ProductPage from "./Components/ProductPage/ProductPage";
import SignUp from "./Components/SignUp/SignUp";
import "./styles/index.css";
import "./styles/resetStalely.css";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "catalogue",
				element: <Catalogue />,
			},
			{
				path: "catalogue/:ProductPageId",
				element: <ProductPage />,
			},
			{
				path: "aboutUs",
				element: <AboutUs />,
			},
			{
				path: "lookBook",
				element: <LookBook />,
			},
			{
				path: "contacts",
				element: <Contacts />,
			},
			{
				path: "signUp",
				element: <SignUp />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
