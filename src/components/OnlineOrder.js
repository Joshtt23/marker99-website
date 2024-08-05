import React from 'react';

function OnlineOrder({ item }) {
  const toastOnlineOrderingUrl =
    'https://www.toasttab.com/your-restaurant-name';

  const handleOrderNow = () => {
    window.location.href = `${toastOnlineOrderingUrl}/order?item=${item.name}`;
  };

  return (
    <button
      onClick={handleOrderNow}
      className="bg-customGreen text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition"
    >
      Order Now
    </button>
  );
}

export default OnlineOrder;
