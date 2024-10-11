import  { lazy, useState, useEffect, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import ErrorBoundary from "./Utils/ErrorBoundary";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Cart from "./Pages/Cart/Cart";
import PublicRoute from "./Components/PublicRoute";
import ProtectedRoute from "./Components/ProtectedRuote";
import CircularProgress from '@mui/material/CircularProgress';

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
const LoginSignUp = lazy(() => import("./Pages/LoginSignUp/LoginSignUp"));
const CustomerCart = lazy(() => import("./Pages/CustomerCart/CustomerCart"));

const MainRoutes = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

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

  const isLoginPage = location.pathname === '/login';

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
          {!isLoginPage && <Navbar />}
          <Suspense fallback={<div style={loaderContainer}></div>}>
            <Routes>
              {/* Public Route */}
              <Route path="/login" element={
                <PublicRoute>
                  <LoginSignUp />
                </PublicRoute>
              } />
              
              {/* Protected Routes */}
              <Route path="/" element={
                
                  <Homepage />
                
              } />
              <Route path="/petCategorySection" element={
                
                  <PetCategorySection />
                
              } />
              <Route path="/ContactUs" element={
                
                  <ContactUs />
                
              } />
              <Route path="/Services" element={
                
                  <Services />
                
              } />
              <Route path="/Veterinarians" element={
               
                  <Veterinarians />
                
              } />
              <Route path="/Pricing" element={
                
                  <Pricing />
                
              } />
              <Route path="/Blogs" element={
                
                  <Blogs />
                
              } />
              <Route path="/AddToCart" element={
                <ProtectedRoute>
                  <AddToCart />
                </ProtectedRoute>
              } />
              <Route path="/Cart" element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              } />
              <Route path="/AboutUs" element={
                
                  <AboutUs />
                
              } />
              <Route path="/Gallery" element={
               
                  <Gallery />
                
              } />
              <Route path="/subscription" element={
                <ProtectedRoute>
                  <SubscriptionDetails />
                </ProtectedRoute>
              } />
              <Route path="/blogDetails" element={
                <ProtectedRoute>
                  <BlogDetails />
                </ProtectedRoute>
              } />
              <Route path="/CustomerCart" element={
                <ProtectedRoute>
                  <CustomerCart />
                </ProtectedRoute>
              } />
            </Routes>
          </Suspense>
          {!isLoginPage && <Footer />}
        </ErrorBoundary>
      )}
    </>
  );
};

export default MainRoutes;
