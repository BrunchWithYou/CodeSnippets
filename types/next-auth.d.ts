import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      image: string | undefined;
      /** The user's postal address. */
      address: string;
      id: string | undefined;
      name: string;
      email: string;
    };
    token: JWT;
  }
}
