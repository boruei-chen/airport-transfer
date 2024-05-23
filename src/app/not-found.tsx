'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const NotFound: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/dropoff-service');
  }, [router]);

  return null;
};

export default NotFound;
