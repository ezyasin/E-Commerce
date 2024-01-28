import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";

const CheckoutHandle = ({ onSubmit }) => {
  const router = useRouter();

  const handlePaymentOnClick = () => {
    router.push("/payment");
  };

  return (
    <button
      type="submit"
      className="bg-blue-500 text-white px-6 py-2 rounded"
      onClick={() => {
        handlePaymentOnClick();
        onSubmit();
      }}
    >
      Place Order
    </button>
  );
};

CheckoutHandle.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default CheckoutHandle;
