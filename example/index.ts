import { srouter, ConfigRouters } from 'spiel-client';
import {example, example2, example3, example4, aframe, notFound} from './MainPage';
import {hooks, genericHooks} from './hooks'

const configRouters: ConfigRouters = {
    default: '/home',
    genericHooks: genericHooks,
    notFound: true,
    notFoundPath: '/not-found',
    hash: '#!',
    routers: [{
        path: '/home',
        page: example,
        routers: [{
            path: '/child/:number',
            page: example2,
            hooks: hooks,
            routers: [{
                path: '/child2/:word',
                page: example3
            }]
        },{
            path: '/brother',
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

srouter.setRouters(configRouters).resolve();