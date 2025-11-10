export const siteFeatureFlags = {
  onlineOrderingEnabled:
    process.env.NEXT_PUBLIC_ONLINE_ORDERING_ENABLED === 'true',
  onlineReservationEnabled:
    process.env.NEXT_PUBLIC_ONLINE_RESERVATION_ENABLED === 'true',
  facebookEventsWidgetEnabled: true,
  googleReviewsWidgetEnabled: false,
};

export const toastConfig = {
  baseUrl: 'https://www.toasttab.com',
  locationAlias: process.env.NEXT_PUBLIC_TOAST_LOCATION_ALIAS ?? '',
  menuId: process.env.NEXT_PUBLIC_TOAST_MENU_ID ?? '',
};

export const reservationConfig = {
  provider: process.env.NEXT_PUBLIC_RESERVATION_PROVIDER ?? 'toast',
  embedUrl: process.env.NEXT_PUBLIC_RESERVATION_EMBED_URL ?? '',
  phone: '+1-321-253-1369',
  email: 'irmarker99@gmail.com',
};
