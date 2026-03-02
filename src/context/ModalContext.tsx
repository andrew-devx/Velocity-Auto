import { type ReactNode } from 'react';

// This hook now uses window events to trigger the modal across Astro islands
export const useModal = () => {
  const openModal = () => {
    window.dispatchEvent(new CustomEvent('open-construction-modal'));
  };
  
  return { openModal };
};

// Kept for backward compatibility if any component still uses it, 
// though we don't strictly need it anymore for triggering.
export const ModalProvider = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};
