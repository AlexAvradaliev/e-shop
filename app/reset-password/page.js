// app/reset-password/page.js
'use client';

import { useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { BsLockFill, BsCheckCircleFill, BsArrowLeft } from 'react-icons/bs';
import { resetPasswordAction } from '@/actions/auth';
import './reset-password.css';

// 1. Изнасяме същинската логика във вътрешен компонент
function ResetPasswordContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get('token');

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      setLoading(false);
      return;
    }

    try {
      await resetPasswordAction(token, password);
      setSuccess(true);
      setTimeout(() => {
        router.push('/'); // Автоматично пренасочване към главната страница
      }, 3000);
    } catch (err) {
      setError(err.message || "Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='reset-box-container'>
      <div className='reset-box-content'>
        {success ? (
          <div className='reset-success-view' style={{ textAlign: 'center' }}>
            <BsCheckCircleFill className='success-icon-geo' style={{ fontSize: '48px', color: '#2e7d32', marginBottom: '16px' }} />
            <h2>Mot de passe modifié !</h2>
            <p style={{ fontSize: '14px', color: '#333', margin: '10px 0' }}>Votre mot de passe a été réinitialisé avec succès.</p>
            <p style={{ fontSize: '13px', color: '#666' }}>Redirection vers la page d'accueil...</p>
            <Link href='/' className='back-to-store-btn' style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: '20px', color: '#005cbf', fontWeight: 'bold' }}>
              <BsArrowLeft /> Retourner à la boutique
            </Link>
          </div>
        ) : (
          <>
            <h1 className='reset-box-title' style={{ fontSize: '24px', color: '#002d72', marginBottom: '10px' }}>Nouveau mot de passe</h1>
            <p className='reset-box-subtitle' style={{ fontSize: '13px', color: '#666', marginBottom: '20px' }}>Choisissez un nouveau mot de passe sécurisé.</p>

            {/* ПОПРАВЕНО: text-align стана textAlign */}
            {error && <div className='reset-error-alert' style={{ backgroundColor: '#ffebee', color: '#d32f2f', padding: '10px', borderRadius: '4px', marginBottom: '15px', textAlign: 'center', fontSize: '13px' }}>{error}</div>}

            {!token ? (
              <div className='reset-error-alert' style={{ backgroundColor: '#ffebee', color: '#d32f2f', padding: '10px', borderRadius: '4px' }}>Jeton de réinitialisation manquant ou invalide.</div>
            ) : (
              <form onSubmit={handleSubmit} className='reset-box-form'>
                <div className='reset-form-group' style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 'bold' }}>Nouveau mot de passe</label>
                  <div className='reset-input-wrapper' style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <BsLockFill className='input-icon-lock' style={{ position: 'absolute', left: '12px', color: '#888' }} />
                    <input type='password' placeholder='Minimum 6 caractères' value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '12px 12px 12px 38px', border: '1px solid #ccc', borderRadius: '6px', fontSize: '14px' }} required />
                  </div>
                </div>

                <div className='reset-form-group' style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '24px' }}>
                  <label style={{ fontSize: '13px', fontWeight: 'bold' }}>Confirmer le mot de passe</label>
                  <div className='reset-input-wrapper' style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <BsLockFill className='input-icon-lock' style={{ position: 'absolute', left: '12px', color: '#888' }} />
                    <input type='password' placeholder='Répétez le mot de passe' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} style={{ width: '100%', padding: '12px 12px 12px 38px', border: '1px solid #ccc', borderRadius: '6px', fontSize: '14px' }} required />
                  </div>
                </div>

                <button type='submit' className='reset-submit-btn' style={{ width: '100%', padding: '14px', backgroundColor: '#002d72', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }} disabled={loading}>
                  {loading ? 'Modification...' : 'Enregistrer'}
                </button>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
}

// 2. Главният компонент задължително обвива логиката в Suspense
export default function ResetPasswordPage() {
  return (
    <Suspense fallback={
      <div className="reset-box-container">
        <div style={{ textAlign: 'center', color: '#002d72', padding: '40px' }}>Chargement...</div>
      </div>
    }>
      <ResetPasswordContent />
    </Suspense>
  );
}