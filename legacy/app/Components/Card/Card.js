'use client';

import Link from 'next/link';
import { BsCartPlus } from 'react-icons/bs';
 import './card.css'; // Импортирайте CSS файла тук

const products = [
  // ... (Същият масив с 5-те продукта от предишното ми съобщение)
  {
    id: 1,
    title: 'Piscine auto ronde 305x76cm',
    brand: 'Sans marque',
    image: 'https://media.e.leclerc/3459223592033_1?op_sharpen=1&resmode=bilin&fmt=pjpeg&qlt=85&trim=0.5&hei=130',
    oldPrice: '38,90€',
    newPrice: '28,90€',
    discount: '-26%',
    badge: 'BON PLAN',
  },
  {
    id: 2,
    title: 'Salon de jardin encastrable 10 places en résine tressée gris SAMOA',
    brand: 'Concept Usine',
    image: 'https://media.e.leclerc/3760285050905_1?op_sharpen=1&resmode=bilin&fmt=pjpeg&qlt=85&trim=0.5&hei=130',
    oldPrice: '949,90€',
    newPrice: '699,90€',
    discount: '-26%',
    badge: 'BON PLAN',
  },
  {
    id: 3,
    title: 'Salon de jardin en métal coloris gris avec coussins - 2 personnes',
    brand: 'Sans marque',
    image: 'https://media.e.leclerc/3267070039492_1?op_sharpen=1&resmode=bilin&fmt=pjpeg&qlt=85&trim=0.5&hei=130',
    oldPrice: null,
    newPrice: '89,00€',
    discount: null,
    badge: null,
  },
  {
    id: 4,
    title: 'Barbecue gaz en inox avec 5 brûleurs dont 1 latéral "Brazzo"',
    brand: 'Habitat et Jardin',
    image: 'https://fgellaobb.filerobot.com/3701577650458_1?op_sharpen=1&resmode=bilin&fmt=pjpeg&qlt=85&trim=0.5&hei=130',
    oldPrice: '299,00€',
    newPrice: '239,00€',
    discount: '-20%',
    badge: 'BON PLAN',
  },
];

const Card = () => {
  return (
    <div className="products-section">
      
      {/* Заглавие на секцията */}
      <div className="section-header">
        <h2 className="section-title">Nos Bons Plans</h2>
        <Link href="/promotions" className="view-all-link">
          Voir tout
        </Link>
      </div>

      {/* Контейнерът на решетката */}
      <div className="product-grid">
        {products.map((product) => {
          const [mainPrice, cents] = product.newPrice.split(',');

          return (
            <div key={product.id} className="product-card">
              
              {product.badge && <div className="badge">{product.badge}</div>}

              <Link href={`/product/${product.id}`} className="product-image-link">
                <img src={product.image} alt={product.title} className="product-image" />
              </Link>

              <div className="product-info">
                <Link href={`/product/${product.id}`} className="product-title">
                  {product.title}
                </Link>
                <p className="product-brand">{product.brand}</p>
              </div>

              <div className="product-footer">
                <div className="price-section">
                  <span className="old-price">{product.oldPrice || '\u00A0'}</span>
                  <div className="current-price-row">
                    <span className="current-price">
                      {mainPrice}<span className="cents">{cents ? `,${cents}` : '€'}</span>
                    </span>
                    {product.discount && <span className="discount-badge">{product.discount}</span>}
                  </div>
                </div>

                <button className="add-to-cart-btn">
                  <BsCartPlus />
                </button>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;