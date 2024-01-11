import NextAuth from "next-auth";
import { Account, User as AuthUser } from "next-auth";
import type { NextAuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import User from "@/models/User";
import connect from "@/utils/db";

const authOptions: NextAuthOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_ID!,
      clientSecret: process.env.DISCORD_SECRET!,
    }),
  ],
  callbacks: {
    // @ts-expect-error
    async signIn({ user, account }: { user: AuthUser; account: Account }) {
      if (account?.provider == "discord") {
        await connect();
        try {
          const existingUser = await User.findOne({ email: user.email });
          if (!existingUser) {
            const newUser = new User({
              email: user.email,
            });

            await newUser.save();
            return true;
          }
          return true;
        } catch (err) {
          console.log("Error saving user", err);
          return false;
        }
      }
    },
  }
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
