import NextAuth, { User, Session } from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { NextRequest } from "next/server";
import { createGuest, getGuest } from "./data-service";
import { AuthSession, AuthUser } from "../../types";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,
    }),
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID!,
      clientSecret: process.env.AUTH_GITHUB_SECRET!,
    }),
  ],
  callbacks: {
    authorized({ auth }: { request: NextRequest; auth: Session | null }) {
      return !!auth?.user;
    },

    async signIn({ user }: { user: User }) {
      try {
        if (!user.email) {
          console.error("User email is required");
          return false;
        }

        const existingGuest = await getGuest(user.email);
        if (!existingGuest) {
          await createGuest({
            email: user.email,
            fullName: user.name || "",
          });
        }
        return true;
      } catch (error) {
        console.error("Error in signIn callback:", error);
        return false;
      }
    },

    async session({ session }: { session: Session }): Promise<AuthSession> {
      try {
        if (!session.user?.email) {
          throw new Error("User email not found in session");
        }

        const guest = await getGuest(session.user.email);
        if (!guest) {
          throw new Error("Guest not found");
        }

        const authSession: AuthSession = {
          ...session,
          user: {
            ...session.user,
            guestId: guest.id,
          } as AuthUser,
        };

        return authSession;
      } catch (error) {
        console.error("Error in session callback:", error);
        return session as AuthSession;
      }
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
