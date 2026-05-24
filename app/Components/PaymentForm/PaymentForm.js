'use client';

import { useState } from 'react';
import { FaCreditCard, FaPaypal, FaApplePay } from 'react-icons/fa';
import './PaymentForm.css'; // Импортирайте CSS файла

const PaymentForm = () => {
  // Състояние, което пази избрания метод за плащане
  const [paymentMethod, setPaymentMethod] = useState('card');

  return (
    <div className="payment-container">
      <h2 className="payment-title">Moyen de paiement</h2>
      <p className="payment-subtitle">Toutes les transactions sont sécurisées et cryptées.</p>

      {/* --- Избор на метод за плащане --- */}
      <div className="payment-methods">
        <button 
          type="button"
          className={`method-btn ${paymentMethod === 'card' ? 'active' : ''}`}
          onClick={() => setPaymentMethod('card')}
        >
          <FaCreditCard className="method-icon" />
          <span>Carte Bancaire</span>
        </button>

        <button 
          type="button"
          className={`method-btn ${paymentMethod === 'paypal' ? 'active' : ''}`}
          onClick={() => setPaymentMethod('paypal')}
        >
          <FaPaypal className="method-icon paypal-color" />
          <span>PayPal</span>
        </button>

        <button 
          type="button"
          className={`method-btn ${paymentMethod === 'applepay' ? 'active' : ''}`}
          onClick={() => setPaymentMethod('applepay')}
        >
          <FaApplePay className="method-icon apple-color" />
          <span>Apple Pay</span>
        </button>
      </div>

      {/* --- ДИНАМИЧНА ФОРМА СПОРЕД ИЗБОРА --- */}
      
      {/* 1. Форма за Кредитна/Дебитна Карта */}
      {paymentMethod === 'card' && (
        <form className="card-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Nom sur la carte</label>
            <input type="text" placeholder="Ex: Jean Dupont" required />
          </div>

          <div className="form-group">
            <label>Numéro de carte</label>
            <div className="input-with-icon">
              <FaCreditCard className="input-icon" />
              <input type="text" placeholder="0000 0000 0000 0000" maxLength="19" required />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group half">
              <label>Date d'expiration</label>
              <input type="text" placeholder="MM/AA" maxLength="5" required />
            </div>
            <div className="form-group half">
              <label>CVC</label>
              <input type="text" placeholder="123" maxLength="4" required />
            </div>
          </div>

          <button type="submit" className="pay-submit-btn">
            Payer 149,90 €
          </button>
        </form>
      )}

      {/* 2. Екран за PayPal */}
      {paymentMethod === 'paypal' && (
        <div className="alternative-payment">
          <FaPaypal className="alt-icon paypal-color" />
          <p>Vous allez être redirigé vers le site de PayPal pour valider votre paiement en toute sécurité.</p>
          <button type="button" className="pay-submit-btn paypal-bg">
            Payer avec PayPal
          </button>
        </div>
      )}

      {/* 3. Екран за Apple Pay */}
      {paymentMethod === 'applepay' && (
        <div className="alternative-payment">
          <FaApplePay className="alt-icon apple-color" />
          <p>Utilisez l'application Wallet sur votre appareil Apple pour confirmer le paiement.</p>
          <button type="button" className="pay-submit-btn apple-bg">
            <FaApplePay className="btn-inline-icon" /> Payer
          </button>
        </div>
      )}

    </div>
  );
};

export default PaymentForm;