import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import connectToDatabase from "../../../mongodb";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    Providers.Apple({
      clientId: process.env.APPLE_CLIENT_ID,
      clientSecret: {
        apple: { clientSecret: process.env.APPLE_CLIENT_SECRET },
      },
    }),
    Providers.Twitter({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn(user, account, profile) {
      const db = await connectToDatabase();

      const collection = db.collection("users");

      const currentUser = await collection.findOne({ email: user.email });

      if (!currentUser) {
        await collection.insertOne({
          email: user.email,
          name: user.name,
          image: user.image,
        });
      }

      return true;
    },
  },
  adapter: MongoDBAdapter({
    db: await connectToDatabase(),
  }),
  secret: process.env.NEXTAUTH_SECRET,
  debug: false,
});
