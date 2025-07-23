import { PrismaClient } from "../generated/prisma/index.js"; 
import type { OnRampTranstion } from "../generated/prisma"
const prismaClientSingleton = () => {
    return new PrismaClient() ;
}

declare global {
    var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>; 
}

const prisma : ReturnType<typeof prismaClientSingleton>  = global.prismaGlobal ?? prismaClientSingleton();

export default prisma   
export type { OnRampTranstion };

if(process.env.NODE_ENV !== "production") {
    global.prismaGlobal = prisma ;
}