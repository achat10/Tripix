import { MikroORM } from "@mikro-orm/core";
import { _prod_ } from "./constant";
import { Post } from "./entities/Post";
import microConfig from './mikro-orm.config';
require('dotenv').config();

const main = async ()=>{
    const orm = await MikroORM.init (microConfig);
    await orm.getMigrator().up();
    const post = orm.em.fork({}).create(Post,{title: "insert Row" , createdAt: new Date(), updatedAt: new Date()});
    orm.em.fork({}).persistAndFlush(post);
   const posts = await orm.em.fork({}).find(Post,{});
}

main();