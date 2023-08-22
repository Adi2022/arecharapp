import React from 'react';

const FormatPrice = ({ price }) => {
  const formattedPrice = new Intl.NumberFormat("en_IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(price / 100);

  return <span>{formattedPrice}</span>;
};

export default FormatPrice;
