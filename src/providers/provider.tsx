"use client";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Provider = ({ children }: Props) => {
  useEffect(() => {
    AOS.init({
      duration: 300,
    
    });
  }, []);

  return <>{children}</>;
};

export default Provider;
