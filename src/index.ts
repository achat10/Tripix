import { MikroORM } from "@mikro-orm/core";
import { _prod_ } from "./constant";
import { Post } from "./entities/Post";
import microConfig from './mikro-orm.config';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { InitialResolver } from "./resolvers/initial";
require('dotenv').config();

const main = async ()=>{
    const orm = await MikroORM.init (microConfig);
    await orm.getMigrator().up();
    const app = express();

    const apolloServer = new ApolloServer({
        schema : await buildSchema({
            resolvers: [InitialResolver],
            validate: false
        })
    })
    await apolloServer.start();
    apolloServer.applyMiddleware({app});

    // Rest Endpoint
    // app.get('/', (_,res)=>{
    //     res.send("send");
    // });

    app.listen(4000, () =>{
        console.log("Server started on port : 4000");
    });
//     const post = orm.em.fork({}).create(Post,{title: "insert Row" , createdAt: new Date(), updatedAt: new Date()});
//     orm.em.fork({}).persistAndFlush(post);
//    const posts = await orm.em.fork({}).find(Post,{});
//    console.log(posts)
}

main();