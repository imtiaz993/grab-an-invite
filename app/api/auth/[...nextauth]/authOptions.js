import { login } from "@/app/services/auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = (req, res) => {
  return NextAuth(req, res, {
    session: {
      strategy: "jwt",
      maxAge: 60 * 60 * 24 * 30,
    },
    pages: {
      signIn: "/login",
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
      jwt({ token, user }) {
        if (user) {
          token.user = user.user.data;
        }
        return { ...token };
      },
      async session({ session, token }) {
        const user = token.user;

        session.user.id = user._id;
        session.user.name = user.name;
        session.user.email = user.email;
        session.user.role = user.role;
        session.jwt = token.jwt;

        return session;
      },
      async redirect({ url, baseUrl }) {
        return baseUrl;
      },
    },
    providers: [
      CredentialsProvider({
        name: "Sign in",
        credentials: {
          email: {
            label: "Email",
            placeholder: "example@example.com",
          },
          password: { label: "Password", type: "password" },
        },

        async authorize(credentials) {
          try {
            const { status, data } = await login({
              provider: "credentials",
              email: credentials?.email,
              password: credentials?.password,
            });
            if (status === 200) {
              return { user: data };
            } else {
              return null;
            }
          } catch (error) {
            throw new Error(error.message);
          }
        },
      }),
    ],
  });
};
