'use client';

import { Phone, MapPin, Calendar, Utensils } from 'lucide-react';
import Link from 'next/link';

const actions = [
  {
    href: 'tel:3212531369',
    label: 'Call',
    icon: Phone,
  },
  {
    href: '#menu',
    label: 'Menu',
    icon: Utensils,
  },
  {
    href: '#reserve',
    label: 'Reserve',
    icon: Calendar,
  },
  {
    href: 'https://maps.google.com/?q=Marker+99+Restaurant+%26+Lounge',
    label: 'Directions',
    icon: MapPin,
    external: true,
  },
];

export default function MobileActionBar() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-customDark/95 text-white border-t border-white/10 backdrop-blur supports-[backdrop-filter]:bg-customDark/80"
      aria-label="Quick actions"
    >
      <ul className="flex justify-around items-center py-3">
        {actions.map(({ href, label, icon: Icon, external }) => (
          <li key={label}>
            <Link
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="flex flex-col items-center gap-1 text-xs font-medium text-white/80 hover:text-white transition-transform transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white active:scale-95"
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
