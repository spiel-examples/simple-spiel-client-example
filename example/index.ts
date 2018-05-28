import 'es6-shim';
import { ultraBuilder, IConfigRouter } from 'spiel-ultradom';
import {example, example2, example3, example4, aframe, notFound} from './MainPage';
import {hooks, genericHooks} from './hooks'

const configRouter: IConfigRouter = {
    default: '/home',
    genericHooks: genericHooks,
    notFound: true,
    notFoundPath: '/not-found',
    hash: '#!',
    routes: [{
        path: '/home',
        page: example,
        routes: [{
            path: '/child/:number',
            page: example2,
            hooks: hooks,
            routes: [{
                path: '/child2/:word',
                page: example3
            }]
        },{
            path: '/component',
            page: example4
        }]
    },
    {
        path: '/aframe',
        page: aframe
    },
    {
        path: '/not-found',
        page: notFound
    }]
};

ultraBuilder.setRouter(configRouter).resolve();