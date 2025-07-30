import CredentialsProvider from "next-auth/providers/credentials";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials) => {
        if (!credentials?.username || !credentials?.password) {
          console.error("❌ Missing credentials");
          return null;
        }
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_API}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              username: credentials?.username,
              password: credentials?.password,
            }),
          });

          const result = await res.json();
          console.log("🔁 Login result from backend:", result);

          if (!res.ok || !result?.data?.user) {
            console.error("❌ Login failed at NextAuth:", result?.message);
            return null;
          }

          return {
            id: result.data.user._id,
            username: result.data.user.username, // Added 'username' to conform to the User interface
            name: result.data.user.username, // Optional: 'name' can still be included
            email: result.data.user.email,
            role: result.data.user.role,
            token: result.data.token, // optional: useful for backend communication
          };
        } catch (error) {
          console.error("❌ Error in authorize():", error);
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login/partner", // ✅ Custom login UI
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};
