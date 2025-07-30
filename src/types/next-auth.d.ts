// types/next-auth.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username: string;
      email: string;
      role?: string;
      image?: string | null;
      token: string;
    };
  }

  interface User {
    id: string;
    username: string;
    email: string;
    role?: string;
    token: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: string;
      username: string;
      email: string;
      role?: string;
      token: string;
    };
  }
}
