// app/forgot-password/page.js
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BsEnvelopeFill, BsArrowLeft, BsCheckCircleFill } from 'react-icons/bs';
import { forgotPasswordAction } from '@/actions/auth';
import './forgot-password.css';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await forgotPasswordAction(email);
      setSuccess(true);
    } catch (err) {
      setError(err.message || "Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-box-container">
      <div className="forgot-box-content">
        {success ? (
          <div className="forgot-success-view" style={{ textAlign: 'center' }}>
            <BsCheckCircleFill className="success-icon-geo" style={{ fontSize: '48px', color: '#2e7d32', marginBottom: '16px' }} />
            <h2>Vérifiez votre boîte mail</h2>
            <p style={{ margin: '12px 0 24px', color: '#555', fontSize: '14px' }}>
              Si un compte existe pour <strong>{email}</strong>, un e-mail contenant les instructions de réinitialisation ви е изпратен.
            </p>
            <Link href="/" className="back-to-store-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#005cbf', fontWeight: 'bold' }}>
              <BsArrowLeft /> Retour à la boutique
            </Link>
          </div>
        ) : (
          <>
            <h1 className="forgot-box-title" style={{ fontSize: '24px', color: '#002d72', marginBottom: '10px' }}>Mot de passe oublié ?</h1>
            <p className="forgot-box-subtitle" style={{ fontSize: '13px', color: '#666', marginBottom: '20px' }}>
              Saisissez l'adresse e-mail associée à votre compte. Nous vous enverrons un lien pour réinitialiser votre mot de passe.
            </p>

            {/* ПОПРАВЕНО: text-align стана textAlign */}
            {error && <div className="forgot-error-alert" style={{ backgroundColor: '#ffebee', color: '#d32f2f', padding: '10px', borderRadius: '4px', marginBottom: '15px', textAlign: 'center', fontSize: '13px' }}>{error}</div>}

            <form onSubmit={handleSubmit} className="forgot-box-form">
              {/* ПОПРАВЕНО: flexNavigation стана flexDirection */}
              <div className="forgot-form-group" style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '20px' }}>
                <label style={{ fontSize: '13px', fontWeight: 'bold' }}>Adresse e-mail</label>
                <div className="forgot-input-wrapper" style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <BsEnvelopeFill className="input-icon-mail" style={{ position: 'absolute', left: '12px', color: '#888' }} />
                  <input 
                    type="email" 
                    placeholder="votre@email.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ width: '100%', padding: '12px 12px 12px 38px', border: '1px solid #ccc', borderRadius: '6px', fontSize: '14px' }}
                    required 
                  />
                </div>
              </div>

              <button type="submit" className="forgot-submit-btn" style={{ width: '100%', padding: '14px', backgroundColor: '#002d72', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }} disabled={loading}>
                {loading ? 'Envoi...' : 'Envoyer le lien'}
              </button>
            </form>

            <Link href="/" className="forgot-back-link" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: '20px', color: '#005cbf', fontSize: '14px' }}>
              <BsArrowLeft /> Retour à la connexion
            </Link>
          </>
        )}
      </div>
    </div>
  );
}