'use client';

import { useState } from 'react';
import { BsGeoAltFill, BsTelephoneFill, BsEnvelopeFill, BsSend, BsCheckCircleFill } from 'react-icons/bs';
import './ContactPage.css'; // Импортирайте вашия CSS файл тук

const ContactPage = () => {
  // Състояние, което следи дали формата е изпратена успешно
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Функция, която се изпълнява при натискане на бутона "Изпрати"
  const handleSubmit = (e) => {
    e.preventDefault();
    // Тук в бъдеще ще сложите кода, който реално праща имейла към вашия сървър
    setIsSubmitted(true);
  };

  return (
    <div className="contact-container">
      
      <div className="contact-header">
        <h1 className="contact-title">Nous contacter</h1>
        <p className="contact-subtitle">
          Vous avez une question ou besoin d'aide ? N'hésitez pas à nous écrire, notre équipe vous répondra dans les plus brefs délais.
        </p>
      </div>

      <div className="contact-grid">
        
        {/* ЛЯВА ЧАСТ: Информация за връзка */}
        <div className="contact-info">
          <h2>Informations de contact</h2>
          
          <div className="info-item">
            <div className="info-icon-wrapper">
              <BsTelephoneFill className="info-icon" />
            </div>
            <div>
              <h3>Téléphone</h3>
              <p>+33 1 23 45 67 89</p>
              <span className="info-subtext">Du lundi au vendredi, de 9h à 18h</span>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon-wrapper">
              <BsEnvelopeFill className="info-icon" />
            </div>
            <div>
              <h3>E-mail</h3>
              <p>support@votreboutique.fr</p>
              <span className="info-subtext">Nous répondons sous 24h</span>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon-wrapper">
              <BsGeoAltFill className="info-icon" />
            </div>
            <div>
              <h3>Adresse</h3>
              <p>123 Avenue des Champs-Élysées<br/>75008 Paris, France</p>
            </div>
          </div>
        </div>

        {/* ДЯСНА ЧАСТ: Форма за контакти */}
        <div className="contact-form-wrapper">
          {isSubmitted ? (
            // Съобщение за успех (Показва се след изпращане)
            <div className="success-message">
              <BsCheckCircleFill className="success-icon" />
              <h2>Message envoyé !</h2>
              <p>Merci de nous avoir contactés. Notre équipe reviendra vers vous très rapidement.</p>
              <button className="reset-btn" onClick={() => setIsSubmitted(false)}>
                Envoyer un autre message
              </button>
            </div>
          ) : (
            // Самата форма
            <form className="contact-form" onSubmit={handleSubmit}>
              
              <div className="form-row">
                <div className="form-group half">
                  <label>Prénom</label>
                  <input type="text" placeholder="Jean" required />
                </div>
                <div className="form-group half">
                  <label>Nom</label>
                  <input type="text" placeholder="Dupont" required />
                </div>
              </div>

              <div className="form-group">
                <label>Adresse e-mail</label>
                <input type="email" placeholder="jean.dupont@email.com" required />
              </div>

              <div className="form-group">
                <label>Sujet</label>
                <select required>
                  <option value="">Sélectionnez un sujet...</option>
                  <option value="order">Question sur une commande</option>
                  <option value="product">Information sur un produit</option>
                  <option value="return">Retour et remboursement</option>
                  <option value="other">Autre demande</option>
                </select>
              </div>

              <div className="form-group">
                <label>Votre message</label>
                <textarea rows="5" placeholder="Comment pouvons-nous vous aider ?" required></textarea>
              </div>

              <button type="submit" className="submit-btn">
                <BsSend /> Envoyer le message
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};

export default ContactPage;