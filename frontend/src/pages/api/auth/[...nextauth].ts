import NextAuth, { type NextAuthOptions } from "next-auth";


export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
  },
  // Configure one or more authentication providers
  providers: [

    // ...add  providers here
  ],
};

export default NextAuth(authOptions);
