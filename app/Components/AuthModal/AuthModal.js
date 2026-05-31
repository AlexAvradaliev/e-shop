// components/AuthModal.js
'use client';

import { useState } from 'react';

import { BsX, BsFacebook, BsApple, BsArrowLeft } from 'react-icons/bs';

import { FcGoogle } from 'react-icons/fc';

import { signIn } from 'next-auth/react';

import { loginAction } from '@/actions/login';

import {
	registerAction,
	verifyOtpAction,
	resendOtpAction,
} from '@/actions/auth';

import './AuthModal.css';

import Link from 'next/link';

const AuthModal = ({ isOpen, onClose }) => {
	const [activeTab, setActiveTab] = useState('login');

	const [loginData, setLoginData] = useState({
		email: '',
		password: '',
	});

	const [registerData, setRegisterData] = useState({
		email: '',
		password: '',
	});

	const [verificationCode, setVerificationCode] = useState('');

	const [tempEmail, setTempEmail] = useState('');

	const [loading, setLoading] = useState(false);

	const [error, setError] = useState('');

	const [successMsg, setSuccessMsg] = useState('');

	if (!isOpen) return null;

	const switchTab = (tab) => {
		setActiveTab(tab);

		setError('');

		setSuccessMsg('');
	};

	// ========================================
	// LOGIN
	// ========================================

	const handleLogin = async (e) => {
		e.preventDefault();

		setLoading(true);

		setError('');

		try {
			// validation + rate limit
			await loginAction({
				email: loginData.email,
				password: loginData.password,
			});

			// next-auth session login
			const res = await signIn('credentials', {
				email: loginData.email,
				password: loginData.password,
				redirect: false,
			});

			if (res?.error) {
				if (res.error === 'NOT_VERIFIED') {
					setTempEmail(loginData.email);

					await resendOtpAction(loginData.email);

					setSuccessMsg(
						"Votre compte n'est pas vérifié. Un code vous a été envoyé.",
					);

					setActiveTab('verify');
				} else {
					setError(res.error);
				}
			} else {
				onClose();

				window.location.reload();
			}
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	// ========================================
	// REGISTER
	// ========================================

	const handleRegister = async (e) => {
		e.preventDefault();

		setLoading(true);

		setError('');

		try {
			await registerAction({
				email: registerData.email,
				password: registerData.password,
			});

			setTempEmail(registerData.email);

			setSuccessMsg(
				'Code de vérification envoyé à votre adresse e-mail.',
			);

			setActiveTab('verify');
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	// ========================================
	// VERIFY OTP
	// ========================================

	const handleVerifyOTP = async (e) => {
		e.preventDefault();

		setLoading(true);

		setError('');

		try {
			await verifyOtpAction(tempEmail, verificationCode);

			setSuccessMsg('Compte vérifié ! Connexion en cours...');

			const passToUse =
				registerData.email === tempEmail
					? registerData.password
					: loginData.password;

			await signIn('credentials', {
				email: tempEmail,
				password: passToUse,
				redirect: false,
			});

			setTimeout(() => {
				onClose();

				window.location.reload();
			}, 1500);
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	// ========================================
	// RESEND OTP
	// ========================================

	const handleResendCode = async () => {
		try {
			await resendOtpAction(tempEmail);

			setSuccessMsg('Un nouveau code a été envoyé.');
		} catch (err) {
			setError(err.message);
		}
	};

	return (
		<div
			className='modal-overlay'
			onClick={onClose}
		>
			<div
				className='modal-content'
				onClick={(e) => e.stopPropagation()}
			>
				<button
					className='close-btn'
					onClick={onClose}
				>
					<BsX />
				</button>

				{activeTab !== 'verify' && (
					<div className='modal-tabs'>
						<button
							className={`tab-btn ${
								activeTab === 'login' ? 'active' : ''
							}`}
							onClick={() => switchTab('login')}
						>
							Connexion
						</button>

						<button
							className={`tab-btn ${
								activeTab === 'register' ? 'active' : ''
							}`}
							onClick={() => switchTab('register')}
						>
							Inscription
						</button>
					</div>
				)}

				{error && (
					<div
						style={{
							color: '#d32f2f',
							backgroundColor: '#ffebee',
							padding: '10px',
							borderRadius: '6px',
							marginBottom: '15px',
							fontSize: '13px',
							textAlign: 'center',
						}}
					>
						{error}
					</div>
				)}

				{successMsg && (
					<div
						style={{
							color: '#2e7d32',
							backgroundColor: '#e8f5e9',
							padding: '10px',
							borderRadius: '6px',
							marginBottom: '15px',
							fontSize: '13px',
							textAlign: 'center',
						}}
					>
						{successMsg}
					</div>
				)}

				{/* LOGIN */}

				{activeTab === 'login' && (
					<form
						className='auth-form'
						onSubmit={handleLogin}
					>
						<div className='form-group'>
							<label>Adresse e-mail</label>

							<input
								type='email'
								placeholder='votre@email.com'
								value={loginData.email}
								onChange={(e) =>
									setLoginData({
										...loginData,
										email: e.target.value,
									})
								}
								required
							/>
						</div>

						<div className='form-group'>
							<label>Mot de passe</label>

							<input
								type='password'
								placeholder='••••••••'
								value={loginData.password}
								onChange={(e) =>
									setLoginData({
										...loginData,
										password: e.target.value,
									})
								}
								required
							/>
						</div>

						<div className='forgot-password'>
							<Link
								href='/forgot-password'
								onClick={onClose}
							>
								Mot de passe oublié ?
							</Link>
						</div>

						<button
							type='submit'
							className='submit-btn'
							disabled={loading}
						>
							{loading ? 'Chargement...' : 'Se connecter'}
						</button>
					</form>
				)}

				{/* REGISTER */}

				{activeTab === 'register' && (
					<form
						className='auth-form'
						onSubmit={handleRegister}
					>
						<div className='form-group'>
							<label>Adresse e-mail</label>

							<input
								type='email'
								placeholder='votre@email.com'
								value={registerData.email}
								onChange={(e) =>
									setRegisterData({
										...registerData,
										email: e.target.value,
									})
								}
								required
							/>
						</div>

						<div className='form-group'>
							<label>Mot de passe</label>

							<input
								type='password'
								placeholder='Minimum 6 caractères'
								value={registerData.password}
								onChange={(e) =>
									setRegisterData({
										...registerData,
										password: e.target.value,
									})
								}
								required
							/>
						</div>

						<button
							type='submit'
							className='submit-btn'
							disabled={loading}
						>
							{loading ? 'Envoi...' : 'Créer mon compte'}
						</button>
					</form>
				)}

				{/* VERIFY */}

				{activeTab === 'verify' && (
					<form
						className='auth-form'
						onSubmit={handleVerifyOTP}
					>
						<div
							style={{
								textAlign: 'center',
								marginBottom: '20px',
							}}
						>
							<h3
								style={{
									color: '#002d72',
									marginBottom: '6px',
								}}
							>
								Vérification de compte
							</h3>

							<p
								style={{
									fontSize: '13px',
									color: '#666',
								}}
							>
								Code envoyé à :<strong>{tempEmail}</strong>
							</p>
						</div>

						<div className='form-group'>
							<label
								style={{
									textAlign: 'center',
								}}
							>
								Code à 6 chiffres
							</label>

							<input
								type='text'
								placeholder='000000'
								value={verificationCode}
								onChange={(e) =>
									setVerificationCode(
										e.target.value.replace(/\D/g, ''),
									)
								}
								maxLength={6}
								style={{
									textAlign: 'center',
									fontSize: '24px',
									letterSpacing: '6px',
									fontWeight: 'bold',
								}}
								required
							/>
						</div>

						<button
							type='submit'
							className='submit-btn'
							disabled={loading || verificationCode.length !== 6}
						>
							{loading ? 'Vérification...' : 'Confirmer'}
						</button>

						<div
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								marginTop: '20px',
							}}
						>
							<button
								type='button'
								style={{
									background: 'none',
									border: 'none',
									color: '#005cbf',
									cursor: 'pointer',
									display: 'flex',
									alignItems: 'center',
									gap: '4px',
								}}
								onClick={() => switchTab('register')}
							>
								<BsArrowLeft />
								Retour
							</button>

							<button
								type='button'
								style={{
									background: 'none',
									border: 'none',
									color: '#666',
									cursor: 'pointer',
								}}
								onClick={handleResendCode}
							>
								Renvoyer le code
							</button>
						</div>
					</form>
				)}

				{activeTab !== 'verify' && (
					<>
						<div className='social-divider'>
							<span>ou continuer avec</span>
						</div>

						<div className='social-login-container'>
							<button
								type='button'
								className='social-btn'
								onClick={() =>
									signIn('google', {
										callbackUrl: '/',
									})
								}
							>
								<FcGoogle className='social-icon' />
								Google
							</button>

							<div className='social-row'>
								<button
									type='button'
									className='social-btn facebook'
								>
									<BsFacebook className='social-icon' />
									Facebook
								</button>

								<button
									type='button'
									className='social-btn apple'
								>
									<BsApple className='social-icon' />
									Apple
								</button>
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default AuthModal;
