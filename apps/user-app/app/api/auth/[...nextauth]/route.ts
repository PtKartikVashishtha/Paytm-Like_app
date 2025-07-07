import NextAuth from "next-auth" ;
import { authOptions } from "../../../../../lib/auth";

console.log("DATABASE_URL:", process.env.DATABASE_URL);

const handler = NextAuth(authOptions) ;

export {handler as GET , handler as POST} 