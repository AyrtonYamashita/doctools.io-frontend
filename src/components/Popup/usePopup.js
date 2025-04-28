import { useContext } from 'react';
import { PopupContext } from './PopupProvider';

export function usePopup() {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error('usePopup deve ser usado dentro de um PopupProvider');
  }
  return context;
}