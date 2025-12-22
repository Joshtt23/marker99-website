'use client';

import { trackEvent, AnalyticsEvent } from '../../lib/analytics/events';
import { toastConfig } from '../../lib/siteConfig';

function OnlineOrder({ item }) {
  const toastOrderingUrl =
    toastConfig.locationAlias && toastConfig.menuId
      ? `${toastConfig.baseUrl}/${toastConfig.locationAlias}`
      : null;

  const handleOrderNow = () => {
    if (!toastOrderingUrl) {
      return;
    }

    // Track online order click
    trackEvent(AnalyticsEvent.ONLINE_ORDER_CLICK, {
      source: 'menu',
      itemName: item.name,
      itemPrice: item.price,
    });

    const normalizedItem = encodeURIComponent(item.name);
    window.open(
      `${toastOrderingUrl}/order?menuItem=${normalizedItem}`,
      '_blank',
    );
  };

  return (
    <button
      type="button"
      onClick={handleOrderNow}
      disabled={!toastOrderingUrl}
      className="bg-customGreen text-white px-4 py-2 rounded-lg shadow-md hover:bg-customGreen/90 transition transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label={`Order ${item.name} on Toast`}
    >
      Order Now
    </button>
  );
}

export default OnlineOrder;
