// src/components/Toast.jsx
import React, { useEffect } from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

export const Toast = ({ message, type = 'success', onClose, duration = 4000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className="toast-notification">
      {type === 'success' ? (
        <CheckCircle size={22} color="#DFA316" />
      ) : (
        <AlertCircle size={22} color="#FF4D4D" />
      )}
      <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{message}</span>
      <button
        onClick={onClose}
        style={{
          background: 'none',
          border: 'none',
          color: '#888',
          cursor: 'pointer',
          marginLeft: '12px',
          padding: 0
        }}
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default Toast;
