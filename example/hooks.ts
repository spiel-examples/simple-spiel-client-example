import {Hooks, Params} from 'spiel-client';

type hooks = Hooks;

export const hooks = {
    before: (done: (suppress?: boolean) => void, params: Params) => {
        params.number = +params.number + 2;
        console.log("before");
        done();
    },
    after: () => {
        console.log("after");
    },
    leave: () => {
        console.log("leave");
    },
    already: () => {
        console.log("already");
    }
}

export const genericHooks = {
    before: (done: (suppress?: boolean) => void) => {
        console.log("generic before");
        done();
    },
    after: () => {
        console.log("generic after");
    }
}