import 'reflect-metadata';
import { PrismaClient } from '@prisma/client'
import { ApolloServer } from 'apollo-server-express'
import { buildSchema } from 'type-graphql'
import { UserResolver } from './resolvers/User'
import express from "express"
import { TodoResolver } from './resolvers/Todo';

const prisma = new PrismaClient()

async function main() {

    const app = express()

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [UserResolver, TodoResolver],
            validate: false,
        }),
        context: () => ({ prisma })
    })

    await apolloServer.start();

    apolloServer.applyMiddleware({ app })

    app.listen(5000, () => {
        console.log("Server started on port 5000.")
    })


    // const allUsers = await prisma.user.findMany()
    // await prisma.user.create({
    //     data: {
    //         username: "diegovs05",
    //         password: "diego200",
    //         Todo: {
    //             create: [{ task: "Creating my first Todo!", isCompleted: false }]
    //         }
    //     }
    // })
    // console.log(allUsers)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })