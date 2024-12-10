import { prisma } from '@/db/connector'
import { NextAuthOptions } from 'next-auth'
import Google from 'next-auth/providers/google'

export const auth: NextAuthOptions = {
    secret: process.env.SECRET,
    providers: [
        Google({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),
    ],
    pages: {},
    callbacks: {
        session: async ({ session, token, user }) => {
            
            
            return session
        },
    },
}