import {h, Component, render, patch, Page, State} from 'spiel-client';

export class NotFound implements Page{
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