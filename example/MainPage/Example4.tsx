import {h, Component, render, srouter, State, JSXElements, Children} from 'spiel-client';

interface Show {
    value: string;
    onGo: Function;
}

export class Example4 {
    state = {
        title: 'hello brother'
    }

    view(state: State): JSXElements {
        return(
            <Show value={state.text} onGo={()=> srouter.go('/')}>
                <span>And this is its child</span>
            </Show>
        )
    }
}

function Show ({value, onGo}: Show, children: Children) {
    return (
        <div oncreate ={() => console.log('the component is created')}>
            <span>{value}</span>
            <div id='child'>{children}</div>
            <button id="go-parent" onclick={() => srouter.go('/home')}>Go to root</button>
        </div>
    )
}

export const example4 = new Example4();