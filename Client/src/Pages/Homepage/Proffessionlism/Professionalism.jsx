import React, { useState, useEffect, useRef } from "react";
import "intersection-observer"; // Import if using the polyfill
import "./Professionalism.scss";

const Professionalism = () => {
  const [customerCount, setCustomerCount] = useState(0);
  const [professionalsCount, setProfessionalsCount] = useState(0);
  const [productsCount, setProductsCount] = useState(0);
  const [petsHostedCount, setPetsHostedCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  const customerTarget = 3456;
  const professionalsTarget = 5076;
  const productsTarget = 3567;
  const petsHostedTarget = 6785;

  const customerIncrement = 50;
  const professionalsIncrement = 50;
  const productsIncrement = 50;
  const petsHostedIncrement = 50;


  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsCounting(true);
        }
      },
      {
        root: null, // Use the viewport as the container
        rootMargin: "0px",
        threshold: 0.1, // Trigger when 10% of the component is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isCounting) {
      const interval = setInterval(() => {
        setCustomerCount((prevCount) => (prevCount + customerIncrement <= customerTarget ? prevCount + customerIncrement : customerTarget));
        setProfessionalsCount((prevCount) => (prevCount + professionalsIncrement <= professionalsTarget ? prevCount + professionalsIncrement : professionalsTarget));
        setProductsCount((prevCount) => (prevCount + productsIncrement <= productsTarget ? prevCount + productsIncrement : productsTarget));
        setPetsHostedCount((prevCount) => (prevCount + petsHostedIncrement <= petsHostedTarget ? prevCount + petsHostedIncrement : petsHostedTarget));
      }, 50); // Adjust the interval time as needed

      return () => clearInterval(interval);
    }
  }, [isCounting]);

  return (
    <div className="professionalism" ref={ref}>
      <div className="customer">
        <h1>{customerCount.toLocaleString()}</h1>
        <p>customer</p>
      </div>

      <div className="professionals">
        <h1>{professionalsCount.toLocaleString()}</h1>
        <p>professionals</p>
      </div>

      <div className="products">
        <h1>{productsCount.toLocaleString()}</h1>
        <p>products</p>
      </div>

      <div className="pets-hosted">
        <h1>{petsHostedCount.toLocaleString()}</h1>
        <p>pets-hosted</p>
      </div>
    </div>
  );
};

export default Professionalism;
