import {createNode, Component, render, patch, IPage, State} from 'spiel-client';

export class NotFound implements IPage{
    state = {
        message: 'Page not found sorry'
    }

    view(state: State) {
        return (
            <div>
                <h1>{state.message}</h1>
            </div>
        )
    }
}

export const notFound = new NotFound();