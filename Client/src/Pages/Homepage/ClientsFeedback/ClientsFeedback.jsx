import React, { useState, useEffect } from "react";
import "./ClientsFeedback.scss";
import ClientsData from "./ClientsData";
import bg1 from "../../../assets/images/bg_1.jpg";

const ClientsFeedback = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(3);

    const totalSlides = ClientsData.length;

    const nextSlide = () => setCurrentSlide((prev) => (prev + itemsToShow) % totalSlides);
    const prevSlide = () => setCurrentSlide((prev) => (prev - itemsToShow + totalSlides) % totalSlides);

    const visibleSlidesIndices = Array.from({ length: itemsToShow }, (_, i) => (currentSlide + i) % totalSlides);

    useEffect(() => {
        const interval = setInterval(nextSlide, 10000);
        return () => clearInterval(interval);
    }, [currentSlide, itemsToShow]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsToShow(1);
            } else if (window.innerWidth < 1200) {
                setItemsToShow(2);
            } else {
                setItemsToShow(3);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="clients-feedback-section">
            <div className="clients-feedback-background">
                <div className="clients-feedback-content">
                    <h2> Happy Clients & Feedbacks</h2>
                    <div className="clients-feedback-container">
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            {ClientsData.filter((_, index) => visibleSlidesIndices.includes(index)).map((client) => (
                                <div key={client.id} className="client-feedback-card">
                                    <div className="feedback">
                                        <p>{client.feedback}</p>
                                    </div>
                                    <div className="client-info">
                                        <div className="client-img">
                                            <img src={bg1} alt="client" />
                                        </div>
                                        <div className="client-details">
                                            <h4>{client.name}</h4>
                                            <p>{client.position}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="slider-controls">
                        <button className="prev" onClick={prevSlide}>&#10094;</button>
                        <button className="next" onClick={nextSlide}>&#10095;</button>
                    </div>
                    <div className="dots">
                        {Array.from({ length: Math.ceil(totalSlides / itemsToShow) }).map((_, index) => (
                            <span
                                key={index}
                                className={`dot ${Math.floor(currentSlide / itemsToShow) === index ? "active" : ""}`}
                                onClick={() => setCurrentSlide(index * itemsToShow)}
                            ></span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientsFeedback;
