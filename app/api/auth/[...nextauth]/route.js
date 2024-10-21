import NextAuth from 'next-auth'
import GithubProvider from "next-auth/providers/github"

const handler= NextAuth({
  providers: [
    // OAuth authentication providers...
GithubProvider({
    clientId:process.env.GIHUB_ID,
    clientSecret:process.env.GIHUB_SECRET,
}),
    

  ]
})
export {handler as GET, handler as POST}