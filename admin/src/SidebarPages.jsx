import React, { lazy, Suspense, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

// Lazy-loaded components
const Dashboard = lazy(() => import("./Pages/Dashboard/Dashboard"));
const Users = lazy(() => import("./Pages/Users/Users"));
const UserNew = lazy(() => import("./Pages/UserNew/UserNew"));
const User = lazy(() => import("./Pages/User/User"));
const Login = lazy(() => import("./Pages/Login/Login"));
//const NotFound = lazy(() => import("./Pages/NotFound/NotFound"));
//const Accomodation = lazy(() => import("./Pages/Accomodation/Accomodation"));
const Veterinarians = lazy(() => import("./Pages/Veterinarians/Veterinarians"));
const AccomodationNew = lazy(() =>
	import("./Pages/VeterinarianNew/VeterinarianNew")
);
const Services = lazy(() => import("./Pages/Services/Services"));
//const Event = lazy(() => import("./Pages/Event/Event"));
//const Reports = lazy(() => import("./Pages/Reports/Reports"));
const Messages = lazy(() => import("./Pages/Messages/Messages"));
const ServiceNew = lazy(() => import("./Pages/ServiceNew/ServiceNew"));
const Payments = lazy(() => import("./Pages/Payments/Payments"));
const Products = lazy(() => import("./Pages/Products/Products"));
const Blogs = lazy(() => import("./Pages/Blogs/Blogs"));
const BlogNew = lazy(() => import("./Pages/BlogNew/BlogNew"));
const ProductNew = lazy(() => import("./Pages/ProductNew/ProductNew"));
const AnimalGallery = lazy(() => import("./Pages/Animalgallery/AnimalGallery"));
const AnimalGalleryNew = lazy(() => import("./Pages/AnimalGroomingNew/AnimalGroomingNew"));
const ContactUsInquiries = lazy(() => import("./Pages/ContactUsInquiries/ContactUsInquiries"));
const Subscribers = lazy(() => import("./Pages/Subcribers/Subscribers"));
const Pricings = lazy(() => import("./Pages/Pricing/Pricing"));
const PricingNew = lazy(() => import("./Pages/PricingNew/PricingNew"));

const LoadingFallback = () => (
	<div className="Loading">
		<div className="Spinner"></div>
	</div>
);

const SidebarPages = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 1000);
	}, []);

	return (
		<React.Fragment>
			<Suspense fallback={<LoadingFallback />}>
				<Routes>
					<Route
						path="/"
						element={loading ? <LoadingFallback /> : <Dashboard />}
					/>
					<Route
						path="/users"
						element={loading ? <LoadingFallback /> : <Users />}
					/>
					<Route
						path="/user/new"
						element={loading ? <LoadingFallback /> : <UserNew />}
					/>
					<Route
						path="/user/:id"
						element={loading ? <LoadingFallback /> : <User />}
					/>
					<Route
						path="/messages"
						element={loading ? <LoadingFallback /> : <Messages />}
					/>
					<Route
						path="/contactUsInquiries"
						element={loading ? <LoadingFallback /> : <ContactUsInquiries />}
					/>

					<Route
						path="/login"
						element={loading ? <LoadingFallback /> : <Login />}
					/>
					<Route
						path="/Veterinarians"
						element={loading ? <LoadingFallback /> : <Veterinarians />}
					/>
					<Route
						path="veterinarian/new"
						element={loading ? <LoadingFallback /> : <AccomodationNew />}
					/>
					<Route
						path="Services"
						element={loading ? <LoadingFallback /> : <Services/>}
					/>
					<Route
						path="service/new"
						element={loading ? <LoadingFallback /> : <ServiceNew/>}
					/>
					<Route
						path="payments"
						element={loading ? <LoadingFallback /> : <Payments />}
					/>
					<Route
						path="blogs"
						element={loading ? <LoadingFallback /> : <Blogs />}
					/>
					<Route
						path="pricings"
						element={loading ? <LoadingFallback /> : <Pricings />}
					/>
					<Route
						path="pricing/new"
						element={loading ? <LoadingFallback /> : <PricingNew />}

					/>


					<Route
						path="Products"
						element={loading ? <LoadingFallback /> : <Products />}
					/>
					<Route
						path="product/new"
						element={loading ? <LoadingFallback /> : <ProductNew />}
					/>
					<Route
						path="animalGallery"
						element={loading ? <LoadingFallback /> : <AnimalGallery/>}
					/>
					<Route
						path="animalGallery/new"
						element={loading ? <LoadingFallback /> : <AnimalGalleryNew/>}
					/>
					<Route
						path="blog/new"
						element={loading ? <LoadingFallback /> : <BlogNew />}
					/>
					<Route
						path="subscribers"
						element={loading ? <LoadingFallback /> : <Subscribers/>}
					/>
				</Routes>
			</Suspense>
		</React.Fragment>
	);
};

export default SidebarPages;

// // props validation

// SidebarPages.propTypes = {
// 	user: PropTypes.object,
// 	users: PropTypes.array,
// 	products: PropTypes.array,
// 	getTimeLabel: PropTypes.func,
// 	requests: PropTypes.array,
// 	chats: PropTypes.array,
// 	messages: PropTypes.array,
// 	orders: PropTypes.array,
// 	getCustomer: PropTypes.func,
// 	getProduct: PropTypes.func,
// 	earnings: PropTypes.array,
// };
