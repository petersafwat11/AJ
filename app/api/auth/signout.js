import NextAuth from "next-auth";

export default async (req, res) => {
  await NextAuth(req, res, { signOut: true });
};
