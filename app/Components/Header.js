'use client';

import Link from 'next/link';
import { useState } from 'react';
import AuthModal from './AuthModal/AuthModal'; 
import { useAuth } from '@/features/auth/context/AuthContext';

import { 
  BsInfoSquareFill, 
  BsList, 
  BsHeartFill,     
  BsPersonFill, 
  BsPersonCheckFill, 
  BsCartFill,
  BsChevronDown    
} from 'react-icons/bs';

import './Header.css'; 
import SideMenu from './SideMenu/SideMenu';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // НОВО: Състояние за падащото меню на потребителя
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    
    const { user, isAuthenticated, logout } = useAuth();

  return (
    <header className="leclerc-header">
      
      {/* <div className="top-banner">
        <BsInfoSquareFill className="banner-icon" />
        <div className="banner-text">
          <p>La mise à jour des prix des carburants est actuellement indisponible</p>
          <p>Nous vous invitons à consulter les prix directement en magasin ou sur prix-carburants.gouv.fr</p>
        </div>
      </div> */}

      <div className="main-nav">
        
        <div className="nav-left">
         <button className="menu-btn" onClick={() => setIsMenuOpen(true)}>
              <BsList className="menu-icon" />
              <span>Menu</span>
            </button>

          <Link href="/" className="logo-circle">
             <span>L</span>
          </Link>
        </div>

        <div className="nav-right">
          
          <div className="lang-dropdown">
            <button className="lang-btn">
              EN <BsChevronDown className="lang-arrow" />
            </button>
            <div className="lang-menu">
              <button className="lang-option active">EN</button>
              <button className="lang-option">FR</button>
            </div>
          </div>

          <Link href="/wishlist" className="icon-btn">
            <BsHeartFill />
          </Link>
          
          {/* --- ПРОМЕНЕНА ЛОГИКА ЗА ПОТРЕБИТЕЛЯ --- */}
          {isAuthenticated ? (
            <div className="user-menu-container" style={{ position: 'relative' }}>
              <button 
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} 
                className="icon-btn user-trigger-btn"
              >
                <span className="user-short-name">
                  {user?.name || user?.email?.split('@')[0]}
                </span>
                <BsPersonCheckFill style={{ color: '#002d72', fontSize: '20px' }} />
                <BsChevronDown style={{ fontSize: '12px', color: '#002d72' }} />
              </button>

              {/* Падащо меню */}
              {isUserMenuOpen && (
                <div className="user-dropdown-menu">
                  <div className="user-menu-header">
                    <p className="user-full-name">{user?.name || 'Client'}</p>
                    <p className="user-email">{user?.email}</p>
                  </div>
                  
                  <div className="user-menu-divider"></div>
                  
                  <Link href="/profile" className="user-menu-item" onClick={() => setIsUserMenuOpen(false)}>
                    Mon profil (Профил)
                  </Link>
                  <Link href="/orders" className="user-menu-item" onClick={() => setIsUserMenuOpen(false)}>
                    Mes commandes (Поръчки)
                  </Link>
                  <Link href="/settings" className="user-menu-item" onClick={() => setIsUserMenuOpen(false)}>
                    Paramètres (Настройки)
                  </Link>
                  
                  <div className="user-menu-divider"></div>
                  
                  <button 
                    className="user-menu-item logout-btn" 
                    onClick={() => { setIsUserMenuOpen(false); logout(); }}
                  >
                    Se déconnecter (Изход)
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button onClick={() => setIsModalOpen(true)} className="icon-btn" title="Se connecter">
              <BsPersonFill />
            </button>
          )}
          {/* --- КРАЙ НА ПРОМЯНАТА --- */}
          
          <Link href="/cart" className="icon-btn">
            <BsCartFill />
          </Link>
        </div>

      </div>
      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <SideMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};

export default Header;