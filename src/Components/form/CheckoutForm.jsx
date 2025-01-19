import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import "./CheckoutForm.css";
import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { TbFidgetSpinner } from "react-icons/tb";

const CheckoutForm = ({ handleCancel, payment }) => {
  // console.log(payment);
  const [clientSecret, setClientSecret] = useState("");
  const [buttonLoading, setButtonLoading] = useState(false);
  // console.log(clientSecret);

  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

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
      toast.error("Failed to fetch payment intent. Please try again.");
    }
  };

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    setButtonLoading(true);
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      toast.error("Stripe.js has not loaded yet. Please wait and try again.");
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      toast.error("Card information is not provided.");
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
      // console.log("[PaymentMethod]", paymentMethod);
    }

    // show confirm payment
    const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: payment?.participant?.name,
        },
      },
    });
    // console.log(paymentIntent);

    if (paymentIntent.status === "succeeded") {
      const paymentInfo = {
        ...payment,
        payment_status: "paid",
        registrationId: payment._id,
      };

      try {
        //  api call
        const { data } = await axiosSecure.post("/payments", paymentInfo);
        // console.log(data);
      } catch (err) {
        console.log(err);
      } finally {
        setButtonLoading(false);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `transaction successful : ${paymentIntent.id}`,
          showConfirmButton: false,
          timer: 1500,
        });
        // toast.success(paymentIntent.id);
        navigate("/dashboard/registered-camps");
      }
      // console.log(paymentInfo);
    }

    // console.log(paymentIntent);
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

      {/* buttons */}
      <div className="mt-6 flex flex-row justify-around gap-4">
        {/* Pay now button*/}
        <Button type="submit" disabled={!stripe}>
          {buttonLoading ? (
            <div className="flex items-center justify-center gap-2 text-center">
              <TbFidgetSpinner className="animate-spin"></TbFidgetSpinner>{" "}
              please wait ..
            </div>
          ) : (
            <>
              Pay <span className="text-yellow-200">${payment?.price}</span> Now
            </>
          )}
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
