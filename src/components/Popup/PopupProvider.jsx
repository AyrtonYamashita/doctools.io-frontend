import { createContext, useState } from 'react';
import Popup from './Popup';

export const PopupContext = createContext();

export function PopupProvider({ children }) {
  const [popup, setPopup] = useState({ visible: false, message: '', type: 'success' });

  const showPopup = (message, type = 'success') => {
    setPopup({ visible: true, message, type });
    setTimeout(() => {
      setPopup({ visible: false, message: '', type: 'success' });
    }, 3000);
  };

  const closePopup = () => {
    setPopup({ visible: false, message: '', type: 'success' });
  };

  return (
    <PopupContext.Provider value={{ showPopup, closePopup }}>
      {children}
      {popup.visible && (
        <Popup message={popup.message} type={popup.type} onClose={closePopup} />
      )}
    </PopupContext.Provider>
  );
}