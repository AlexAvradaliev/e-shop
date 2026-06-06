'use client';

import Link from 'next/link';
import { 
  BsX, 
  BsTagFill, 
  BsBasketFill, 
  BsHouseDoorFill, 
  BsLaptop, 
  BsQuestionCircle,
  BsChevronRight
} from 'react-icons/bs';
import './SideMenu.css'; // Импортирайте CSS файла

const SideMenu = ({ isOpen, onClose }) => {
  return (
    <>
      {/* 1. Тъмният фон (Overlay) */}
      <div 
        className={`side-menu-overlay ${isOpen ? 'open' : ''}`} 
        onClick={onClose}
      ></div>

      {/* 2. Самият панел на менюто */}
      <div className={`side-menu-panel ${isOpen ? 'open' : ''}`}>
        
        {/* Заглавна част с бутон за затваряне */}
        <div className="side-menu-header">
          <div className="menu-logo-circle">
            <span>L</span>
          </div>
          <h2 className="menu-title">Menu</h2>
          <button className="menu-close-btn" onClick={onClose}>
            <BsX />
          </button>
        </div>

        {/* Списък с категории */}
        <div className="side-menu-content">
          
          <ul className="menu-list">
            <li>
              <Link href="/promotions" className="menu-item highlight" onClick={onClose}>
                <div className="menu-item-left">
                  <BsTagFill className="menu-icon" />
                  <span>Bons Plans & Promos</span>
                </div>
                <BsChevronRight className="menu-arrow" />
              </Link>
            </li>

            <li>
              <Link href="/courses" className="menu-item" onClick={onClose}>
                <div className="menu-item-left">
                  <BsBasketFill className="menu-icon" />
                  <span>Courses & Épicerie</span>
                </div>
                <BsChevronRight className="menu-arrow" />
              </Link>
            </li>

            <li>
              <Link href="/maison-jardin" className="menu-item" onClick={onClose}>
                <div className="menu-item-left">
                  <BsHouseDoorFill className="menu-icon" />
                  <span>Maison & Jardin</span>
                </div>
                <BsChevronRight className="menu-arrow" />
              </Link>
            </li>

            <li>
              <Link href="/high-tech" className="menu-item" onClick={onClose}>
                <div className="menu-item-left">
                  <BsLaptop className="menu-icon" />
                  <span>High-Tech & Multimédia</span>
                </div>
                <BsChevronRight className="menu-arrow" />
              </Link>
            </li>
          </ul>

          {/* Долна част (Помощ и настройки) */}
          <div className="menu-footer">
            <div className="menu-divider"></div>
            <Link href="/aide" className="menu-item secondary" onClick={onClose}>
              <div className="menu-item-left">
                <BsQuestionCircle className="menu-icon" />
                <span>Centre d'aide</span>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default SideMenu;