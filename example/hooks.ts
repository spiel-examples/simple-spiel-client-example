import {IHooks, IGenericHooks} from 'spiel-build';

export const hooks: IHooks = {
    before: (done: (suppress?: boolean) => void, params: {number: number}) => {
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

export const genericHooks: IGenericHooks = {
    before: (done: (suppress?: boolean) => void) => {
        console.log("generic before");
        done();
    },
    after: () => {
        console.log("generic after");
    }
}