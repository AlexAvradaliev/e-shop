'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BsTrash, BsCartPlus, BsHeartbreak, BsArrowLeft } from 'react-icons/bs';
import './WishlistPage.css'; // Импортирайте CSS файла

// Примерни данни (Можете да ги замените с реални данни от базата ви)
const initialWishlist = [
  {
    id: 1,
    title: 'Piscine auto ronde 305x76cm',
    brand: 'Sans marque',
    image: 'https://media.e.leclerc/3459223592033_1?op_sharpen=1&resmode=bilin&fmt=pjpeg&qlt=85&trim=0.5&hei=130',
    price: '28,90€',
    inStock: true,
  },
  {
    id: 2,
    title: 'Salon de jardin encastrable 10 places en résine tressée',
    brand: 'Concept Usine',
    image: 'https://media.e.leclerc/3760285050905_1?op_sharpen=1&resmode=bilin&fmt=pjpeg&qlt=85&trim=0.5&hei=130',
    price: '699,90€',
    inStock: true,
  },
  {
    id: 3,
    title: 'Barbecue gaz en inox avec 5 brûleurs dont 1 latéral',
    brand: 'Habitat et Jardin',
    image: 'https://fgellaobb.filerobot.com/3701577650458_1?op_sharpen=1&resmode=bilin&fmt=pjpeg&qlt=85&trim=0.5&hei=130',
    price: '239,00€',
    inStock: false, // Изчерпан продукт
  },
  {
    id: 4,
    title: "Plancha gaz 3 brûleurs - Sélection d'Experts - Beaux Jours",
    brand: 'Beaux jours',
    image: 'https://media.e.leclerc/3603313232464_1?op_sharpen=1&resmode=bilin&fmt=pjpeg&qlt=85&trim=0.5&hei=130',
    price: '159,00€',
    inStock: true,
  },
  {
    id: 5,
    title: 'Kit piscine tubulaire 366x76cm',
    brand: 'Sans marque',
    image: 'https://media.e.leclerc/3459223466549_1?op_sharpen=1&resmode=bilin&fmt=pjpeg&qlt=85&trim=0.5&hei=130',
    price: '119,00€',
    inStock: true,
  }
];

const WishlistPage = () => {
  // Състояние, което държи списъка с продукти
  const [wishlist, setWishlist] = useState(initialWishlist);

  // Функция за премахване на продукт от списъка
  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  // --- ЕКРАН ПРИ ПРАЗЕН СПИСЪК ---
  if (wishlist.length === 0) {
    return (
      <div className="wishlist-container empty-state">
        <BsHeartbreak className="empty-icon" />
        <h2>Votre liste d'envies est vide</h2>
        <p>Vous n'avez pas encore ajouté d'articles à votre liste. Découvrez nos produits et trouvez votre bonheur !</p>
        <Link href="/" className="continue-shopping-btn">
          <BsArrowLeft /> Retour à la boutique
        </Link>
      </div>
    );
  }

  // --- ЕКРАН С ПРОДУКТИ ---
  return (
    <div className="wishlist-container">
      <div className="wishlist-header">
        <h1 className="wishlist-title">Ma Liste d'Envies</h1>
        <span className="wishlist-count">{wishlist.length} article(s)</span>
      </div>

      <div className="wishlist-grid">
        {wishlist.map((item) => (
          <div key={item.id} className="wishlist-card">
            
            {/* Бутон за изтриване (Горе вдясно) */}
            <button 
              className="remove-btn" 
              onClick={() => removeFromWishlist(item.id)}
              title="Retirer de la liste"
            >
              <BsTrash />
            </button>

            <Link href={`/product/${item.id}`} className="wishlist-image-link">
              <img src={item.image} alt={item.title} className="wishlist-image" />
            </Link>

            <div className="wishlist-info">
              <Link href={`/product/${item.id}`} className="wishlist-item-title">
                {item.title}
              </Link>
              <p className="wishlist-brand">{item.brand}</p>
              
              {/* Статус за наличност */}
              <span className={`stock-status ${item.inStock ? 'in-stock' : 'out-of-stock'}`}>
                {item.inStock ? 'En stock' : 'Épuisé'}
              </span>
            </div>

            <div className="wishlist-footer">
              <span className="wishlist-price">{item.price}</span>
              
              <button 
                className={`add-cart-btn ${!item.inStock ? 'disabled' : ''}`}
                disabled={!item.inStock}
              >
                <BsCartPlus /> {item.inStock ? 'Ajouter' : 'Indisponible'}
              </button>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistPage;