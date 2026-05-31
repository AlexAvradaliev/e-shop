import NextAuth from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';

import bcrypt from 'bcryptjs';

import { prisma } from '@/server/db/prisma';

export const authOptions = {
	session: {
		strategy: 'jwt',
	},

	secret: process.env.NEXTAUTH_SECRET,

	providers: [
		CredentialsProvider({
			name: 'credentials',

			credentials: {
				email: {},
				password: {},
			},

			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) {
					throw new Error('Email et mot de passe requis.');
				}

				const user = await prisma.user.findUnique({
					where: {
						email: credentials.email,
					},
				});

				if (!user || !user.password) {
					throw new Error('Utilisateur introuvable.');
				}

				if (!user.isChecked) {
					throw new Error('Veuillez vérifier votre adresse e-mail.');
				}

				const passwordMatch = await bcrypt.compare(
					credentials.password,
					user.password,
				);

				if (!passwordMatch) {
					throw new Error('Mot de passe incorrect.');
				}

				return {
					id: user.id,
					email: user.email,
					role: user.role,
				};
			},
		}),
	],

	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.role = user.role;
			}

			return token;
		},

		async session({ session, token }) {
			if (session.user) {
				session.user.role = token.role;
			}

			return session;
		},
	},

	pages: {
		signIn: '/',
	},
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
