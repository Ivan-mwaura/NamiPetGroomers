import React, { lazy, useState, useEffect, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import ErrorBoundary from "./Utils/ErrorBoundary";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Cart from "./Pages/Cart/Cart";


const Homepage = lazy(() => import("./Pages/Homepage/Homepage"));
const PetCategorySection = lazy(() => import("./Pages/Homepage/Petshop/PetCategorySection/PetCategorySection"));
const Veterinarians = lazy(() => import("./Pages/Veterinarians/Veterinarians"));
const Services = lazy(() => import("./Pages/Services/Services"));
const ContactUs = lazy(() => import("./Pages/ContactUs/ContactUs"));
const Pricing = lazy(() => import("./Pages/OurPricing/OurPricing"));
const Blogs = lazy(() => import("./Pages/Blogs/Blogs"));
const AddToCart = lazy(() => import("./Pages/AddToCart/AddToCart"));
const AboutUs = lazy(() => import("./Pages/About/AboutUs"));
const Gallery = lazy(() => import("./Pages/Gallery/Gallery"));
const SubscriptionDetails = lazy(() => import("./Pages/SubscriptionDetails/SubscriptionDetails"));
const BlogDetails = lazy(() => import("./Pages/Blogs/BlogDetails"));

const MainRoutes = () => {
    const [loading, setLoading] = useState(true);

    const loaderContainer = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "var(--primary-color)",
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {loading ? (
                <div style={loaderContainer}>
                    <ColorRing
                        colors={["rgb(0, 189, 86)", "rgb(0, 189, 86)", "rgb(0, 189, 86)", "rgb(0, 189, 86)", "rgb(0, 189, 86)"]}
                        height={80}
                        width={50}
                        timeout={1000}
                    />
                </div>
            ) : (
                <ErrorBoundary>
                    <Navbar />
                    <Suspense 
					fallback={<div style={loaderContainer}>
                      {/*}  <ColorRing
                        colors={["rgb(0, 189, 86)", "rgb(0, 189, 86)", "rgb(0, 189, 86)", "rgb(0, 189, 86)", "rgb(0, 189, 86)"]}
                        height={80}
                        width={80}
                        timeout={3000}
                        />*/}
                    </div>}
					
					>
                        <Routes>
                            <Route path="/"  element={<Homepage />} />
                            <Route path="/Petshop/PetCategorySection" element={<PetCategorySection />} />
                            <Route path="/ContactUs" element={<ContactUs/>}/>
                            <Route path="/Services" element={<Services/>}/>
                            <Route path="/Veterinarians" element={<Veterinarians/>} />
                            <Route path="/Pricing" element={<Pricing/>} />
                            <Route path="/Blogs" element={<Blogs/>} />
                            <Route path="/AddToCart" element={<AddToCart/>} />
                            <Route path="/Cart" element={<Cart/>}/>
                            <Route path="/AboutUs" element={<AboutUs/>}/>
                            <Route path="/Gallery" element={<Gallery/>}/>
                            <Route path="/subscription/:id" element={<SubscriptionDetails/>} />.
                            <Route path="/blogDetails" element={<BlogDetails />} />
                            {/*  <Route path="/Petshop/PetCategorySection/:category" element={<PetCategorySection />} />
                            <Route path="/Petshop/PetCategorySection/:category/:subcategory" element={<PetCategorySection />} />*/}
                        </Routes>
                    </Suspense>
                    <Footer />
                </ErrorBoundary>
            )}
        </>
    );
}

export default MainRoutes;
