import React from "react";
import "./WhyChooseUs.scss";
import about1 from "../../../assets/images/about-1.jpg";
import WhyChooseUs1 from "../../../assets/images/whychooseus/customer-service (1).png";
import WhyChooseUs2 from "../../../assets/images/whychooseus/call.png";
import WhyChooseUs3 from "../../../assets/images/whychooseus/stethoscope (1).png";
import WhyChooseUs4 from "../../../assets/images/whychooseus/veterinarian (1).png"


const WhyChooseUs = () => {

    return(
        <div className="why-choose-us">

            <div className="why-us-image">
                <img src={about1}/>
            </div>
            <div className="why-choose-us-content">

                <h2>Why Choose Us ?</h2>

              <div className="why-choose-us-cards">

                <div className="why-choose-us-card">

                    <img src={WhyChooseUs1}/>  

                    <div className="card-content">
                        <h3>Care Advices</h3>
                        <p>Far far away, behind the word mountains, far from the countries.</p>
                    </div>
                
                    
                </div>
                <div className="why-choose-us-card">
                    <img src={WhyChooseUs2}/>  

                    <div className="card-content">
                        <h3>Quality Care</h3>
                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                    </div>
                </div>
                <div className="why-choose-us-card">
                    <img src={WhyChooseUs3}/>  

                    <div className="card-content">
                        <h3>Emergency Services</h3>
                        <p>Far far away, behind the word mountains, far from the countries.</p>
                    </div>
                </div>

                <div className="why-choose-us-card">
                    <img src={WhyChooseUs4}/>  

                    <div className="card-content">
                        <h3>Veterinary Help</h3>
                        <p>Far far away, behind the word mountains, far from the countries.</p>
                    </div>
                </div>

                

              </div>
            </div>
        </div>
    )

}
export default WhyChooseUs;

