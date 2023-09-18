import User from "@/models/user";
import connectToDB from "@/utils/database";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';

export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {}, 

            async authorize(credentials) {
                const { username, password } = credentials;
                try {
                    // return { id: 1, name: 'admin'}
                    await connectToDB();
                    const user = await User.findOne({ username });
                    if (!user) return null;
                    const isEqual = await bcrypt.compare(password, user.password);

                    // const dummy = {
                    //   username: 'dummy username',
                    //   daata: 'dummy data'
                    // }
                    // return dummy;
                    if (isEqual) return user;
                    return null;
                } catch (e) {
                    console.log(`Authorization failed: ${e}`)
                    return null;     // returning null will prevent sign-in
                }
            },

            async session({ session }) {
                const user = await User.findOne({
                    username: session.user.username
                })
                return user; 
            },
        })
    ],
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login"
    },
    callbacks: {
      async session({ session, token }) {
        // console.log(`session ${session}`)
        // console.log(`token ${token}`)
        // session.user = token.user;
        const modifiedSession = {
          expires: session.expires,
          user: token.user
        }
        // console.log(`modified session: ${modifiedSession}`)
        return modifiedSession;
      },
      async jwt({ token, user }) {
        if (user) {
          token.user = user;
        }
        return token;
      },
    },
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }