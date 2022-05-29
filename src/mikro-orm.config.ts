import { MikroORM } from "@mikro-orm/core";
import { _prod_ } from "./constant";
import { Post } from "./entities/Post";
import path from 'path';
require('dotenv').config();

export default {
        migrations: {
          path: path.join(__dirname, './migrations'),
          glob: '!(*.d).{js,ts}'
        },
    entities:  [Post],
    dbName: 'tripixDb',
    type: 'postgresql',
    debug: !_prod_,
    user: process.env.USER_NAME ,
    password: process.env.PASS?.toString()
} as Parameters<typeof MikroORM.init> [0];