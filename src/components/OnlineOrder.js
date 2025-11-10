import React from 'react';
import { toastConfig } from '../lib/siteConfig';

function OnlineOrder({ item }) {
  const toastOrderingUrl =
    toastConfig.locationAlias && toastConfig.menuId
      ? `${toastConfig.baseUrl}/${toastConfig.locationAlias}`
      : null;

  const handleOrderNow = () => {
    if (!toastOrderingUrl) {
      console.warn('Toast ordering configuration missing.');
      return;
    }

    const normalizedItem = encodeURIComponent(item.name);
    window.open(`${toastOrderingUrl}/order?menuItem=${normalizedItem}`, '_blank');
  };

  return (
    <button
      type="button"
      onClick={handleOrderNow}
      disabled={!toastOrderingUrl}
      className="bg-customGreen text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label={`Order ${item.name} on Toast`}
    >
      Order Now
    </button>
  );
}

export default OnlineOrder;
