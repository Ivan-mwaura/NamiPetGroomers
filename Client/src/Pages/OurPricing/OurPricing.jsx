import React from "react";
import "./OurPricing.scss";
import Pricing from "../Homepage/Pricing/Pricing";
import Consultation from "../Homepage/Consultation/Consultation";

const OurPricing = () => {

    return (
        <div className="our-pricing">

            <div className="header">
                <p>Home / Membership</p>
                <h1>Membership</h1>
            </div>

            <div className="pricing">
                <Pricing/>
            </div>
            <div className="consultation">
                <Consultation/>
            </div>

        </div>
    )

}
export default OurPricing;