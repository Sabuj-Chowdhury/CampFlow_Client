import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import "./CheckoutForm.css";
import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import PropTypes from "prop-types";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const CheckoutForm = ({ handleCancel, payment }) => {
  //   console.log(payment);
  const [clientSecret, setClientSecret] = useState("");
  console.log(clientSecret);

  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    getPaymentIntent();
  }, [payment?._id]);

  const getPaymentIntent = async () => {
    try {
      // API call
      const { data } = await axiosSecure.post("/payment-intent", payment);
      setClientSecret(data.client_secret);
      //   console.log(data)
    } catch (err) {
      console.log(err);
    }
  };

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      {/* <button type="submit" disabled={!stripe}>
        Pay
      </button> */}

      {/* buttons */}
      <div className="mt-6 flex flex-row justify-around gap-4">
        {/* Pay now button*/}
        <Button type="submit" disabled={!stripe}>
          Pay <span className="text-yellow-200">${payment?.price}</span> Now
        </Button>

        {/* cancel button */}
        <Button
          type="button"
          onClick={handleCancel}
          className=" text-gray-700 bg-gray-200 "
        >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default CheckoutForm;

CheckoutForm.propTypes = {
  handleCancel: PropTypes.func,
  payment: PropTypes.object,
};
