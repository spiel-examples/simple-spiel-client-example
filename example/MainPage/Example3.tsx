import {h, Component, render, srouter} from 'spiel-client';

export class Example3 {
    state = {
        title: 'Si noo'
    }

    view(state: any) {
        return (
            <div>
                <h1>{state.title} {state.params.word} {state.params.number}</h1>
                <button
                    onclick ={() => {
                        state.title = 'Claro Paco';
                        render(example3.view, state)
                    }}
                >Change Title</button>
                <button
                    onclick = {() => {
                        srouter.go('/home');
                    }}
                >go to root</button>
            </div>
        )
    }
}

export const example3 = new Example3();