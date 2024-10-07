import React, { lazy, Suspense, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

// Lazy-loaded components
const Dashboard = lazy(() => import("./Pages/Dashboard/Dashboard"));
const UserNew = lazy(() => import("./Pages/UserNew/UserNew"));
const User = lazy(() => import("./Pages/User/User"));
const Login = lazy(() => import("./Pages/Login/Login"));
const Veterinarians = lazy(() => import("./Pages/Veterinarians/Veterinarians"));
const AccomodationNew = lazy(() => import("./Pages/VeterinarianNew/VeterinarianNew"));
const Services = lazy(() => import("./Pages/Services/Services"));
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
const Users = lazy(() => import("./Pages/Users/Users"));

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
						
						path="*"
						element={loading ? <LoadingFallback /> : <Users />}
					/>
					<Route
						path="/admin/user/new"
						element={loading ? <LoadingFallback /> : <UserNew />}
					/>
					<Route
						path="/admin/user/:id"
						element={loading ? <LoadingFallback /> : <User />}
					/>
					<Route
						path="/admin/messages"
						element={loading ? <LoadingFallback /> : <Messages />}
					/>
					<Route
						path="/admin/contactUsInquiries"
						element={loading ? <LoadingFallback /> : <ContactUsInquiries />}
					/>
					<Route
						path="/admin/login"
						element={loading ? <LoadingFallback /> : <Login />}
					/>
					<Route
						path="/admin/Veterinarians"
						element={loading ? <LoadingFallback /> : <Veterinarians />}
					/>
					<Route
						path="/admin/veterinarian/new"
						element={loading ? <LoadingFallback /> : <AccomodationNew />}
					/>
					<Route
						path="/admin/Services"
						element={loading ? <LoadingFallback /> : <Services />}
					/>
					<Route
						path="admin/service/new"
						element={loading ? <LoadingFallback /> : <ServiceNew />}
					/>
					<Route
						path="/admin/payments"
						element={loading ? <LoadingFallback /> : <Payments />}
					/>
					<Route
						path="/admin/blogs"
						element={loading ? <LoadingFallback /> : <Blogs />}
					/>
					<Route
						path="/admin/pricings"
						element={loading ? <LoadingFallback /> : <Pricings />}
					/>
					<Route
						path="/admin/pricing/new"
						element={loading ? <LoadingFallback /> : <PricingNew />}
					/>
					<Route
						path="/admin/users"
						element={loading ? <LoadingFallback /> : <Users />}
					/>
					<Route
						path="/admin/user/new"
						element={loading ? <LoadingFallback /> : <UserNew />}
					/>
					<Route
						path="/admin/Products"
						element={loading ? <LoadingFallback /> : <Products />}
					/>
					<Route
						path="/admin/product/new"
						element={loading ? <LoadingFallback /> : <ProductNew />}
					/>
					<Route
						path="/admin/animalGallery"
						element={loading ? <LoadingFallback /> : <AnimalGallery />}
					/>
					<Route
						path="/admin/animalGallery/new"
						element={loading ? <LoadingFallback /> : <AnimalGalleryNew />}
					/>
					<Route
						path="/admin/blog/new"
						element={loading ? <LoadingFallback /> : <BlogNew />}
					/>
					<Route
						path="/admin/subscribers"
						element={loading ? <LoadingFallback /> : <Subscribers />}
					/>
				</Routes>
			</Suspense>
		</React.Fragment>
	);
};

export default SidebarPages;
