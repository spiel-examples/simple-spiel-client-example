import {h, render, srouter, IPage} from 'spiel-client';

export class Example3 implements IPage {
    state = {
        title: 'Si noo'
    }

    view(state: any) {
        return (
            <div>
                <h1>{state.title} {state.params.word} {state.params.number}</h1>
                <button
                    onclick ={() => {
                        state.title = 'Of course Spiel';
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