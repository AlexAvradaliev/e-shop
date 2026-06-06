'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BsTrash, BsPlus, BsDash, BsArrowLeft, BsShieldCheck, BsCartX } from 'react-icons/bs';
import './CartPage.css'; // Импортирайте CSS файла

// Примерни данни в количката
const initialCart = [
  {
    id: 1,
    title: 'Piscine auto ronde 305x76cm',
    brand: 'Sans marque',
    image: 'https://media.e.leclerc/3459223592033_1?op_sharpen=1&resmode=bilin&fmt=pjpeg&qlt=85&trim=0.5&hei=130',
    price: 28.90, // Важно: тук цената е число, за да можем да смятаме
    quantity: 1,
  },
  {
    id: 4,
    title: "Plancha gaz 3 brûleurs - Sélection d'Experts - Beaux Jours",
    brand: 'Beaux jours',
    image: 'https://media.e.leclerc/3603313232464_1?op_sharpen=1&resmode=bilin&fmt=pjpeg&qlt=85&trim=0.5&hei=130',
    price: 159.00,
    quantity: 2,
  }
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCart);

  // Функция за промяна на количеството
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  // Функция за премахване на продукт
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Пресмятане на сумите
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 9.90; // Безплатна доставка над 100€
  const total = subtotal + shipping;

  // --- ЕКРАН ПРИ ПРАЗНА КОЛИЧКА ---
  if (cartItems.length === 0) {
    return (
      <div className="cart-container empty-state">
        <BsCartX className="empty-icon" />
        <h2>Votre panier est vide</h2>
        <p>Il semble que vous n'ayez rien ajouté à votre panier pour le moment.</p>
        <Link href="/" className="continue-shopping-btn">
          <BsArrowLeft /> Retour à la boutique
        </Link>
      </div>
    );
  }

  // --- ЕКРАН С ПРОДУКТИ В КОЛИЧКАТА ---
  return (
    <div className="cart-container">
      <h1 className="cart-page-title">Mon Panier</h1>

      <div className="cart-content">
        
        {/* ЛЯВА ЧАСТ: Списък с продукти */}
        <div className="cart-items-list">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              
              <Link href={`/product/${item.id}`} className="cart-item-image-wrapper">
                <img src={item.image} alt={item.title} className="cart-item-image" />
              </Link>

              <div className="cart-item-details">
                <Link href={`/product/${item.id}`} className="cart-item-title">
                  {item.title}
                </Link>
                <p className="cart-item-brand">{item.brand}</p>
                <p className="cart-item-price">{item.price.toFixed(2).replace('.', ',')} €</p>
              </div>

              <div className="cart-item-actions">
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}><BsDash /></button>
                  <span className="quantity-value">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}><BsPlus /></button>
                </div>
                
                <button className="remove-item-btn" onClick={() => removeItem(item.id)}>
                  <BsTrash /> Supprimer
                </button>
              </div>

              <div className="cart-item-total">
                {(item.price * item.quantity).toFixed(2).replace('.', ',')} €
              </div>

            </div>
          ))}
        </div>

        {/* ДЯСНА ЧАСТ: Обобщение на поръчката */}
        <div className="cart-summary">
          <h2 className="summary-title">Résumé de la commande</h2>
          
          <div className="summary-row">
            <span>Sous-total</span>
            <span>{subtotal.toFixed(2).replace('.', ',')} €</span>
          </div>
          
          <div className="summary-row">
            <span>Frais de livraison</span>
            <span>{shipping === 0 ? 'Gratuit' : `${shipping.toFixed(2).replace('.', ',')} €`}</span>
          </div>
          
          <hr className="summary-divider" />
          
          <div className="summary-row total-row">
            <span>Total</span>
            <span>{total.toFixed(2).replace('.', ',')} €</span>
          </div>

          <p className="taxes-info">Taxes incluses. Frais de port calculés à l'étape suivante.</p>

          <Link href="/checkout" className="checkout-btn">
            Passer la commande
          </Link>

          <div className="secure-checkout">
            <BsShieldCheck className="secure-icon" />
            Paiement 100% sécurisé
          </div>
        </div>

      </div>
    </div>
  );
};

export default CartPage;