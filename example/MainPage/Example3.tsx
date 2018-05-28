import {h, change, ultraBuilder, IPage} from 'spiel-ultradom';

export const example3: IPage = {
    state: {
        title: 'Yes'
    },

    view: (state: any) => {
        return (
            <div>
                <h1>{state.title} {state.params.word} {state.params.number}</h1>
                <button
                    onclick ={() => {
                        state.title = 'Of course Spiel';
                        change(example3.view, state)
                    }}
                >Change Title</button>
                <button
                    onclick = {() => {
                        ultraBuilder.go('/home');
                    }}
                >go to root</button>
            </div>
        )
    }
}
