'use client';

import dynamic from 'next/dynamic';

// Only load AxeDevtools in development to avoid bundling axe-core in production
const AxeDevtools = dynamic(
  () =>
    process.env.NODE_ENV === 'development'
      ? import('./AxeDevtools')
      : Promise.resolve({ default: () => null }),
  { ssr: false },
);

export default function AxeDevtoolsWrapper() {
  return <AxeDevtools />;
}


