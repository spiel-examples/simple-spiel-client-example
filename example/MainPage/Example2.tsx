import {h, Component, render, router} from 'spiel-client';

export class Example2 {
    state = {
        title: 'Hello'
    }

    view(state: any) {
        const element = document.createElement('div');

        function addElement() {
            element.innerText = 'div is added';
            document.body.appendChild(element);
        }
        
        return (
            <div>
                {(state.title === 'Hello Paco') ? 
                <span 
                    oncreate={() => console.log('the element is created')}
                    onremove={() => console.log('the element is removed')}
                >Title change</span>: null}
                <h1>{state.title} {state.params.number}</h1>
                <button
                    onclick ={() => {
                        state.title = (state.title === 'Hello') ? 'Hello Paco': 'Hello';
                        render(example2.view, state)
                    }}
                >Change Title</button>

                <button
                    onclick = {() => {
                        router.go('/home');
                    }}
                >go to root</button>
                <button onclick={() => addElement()}>add element</button>
            </div>
        )
    }

    removeElement() {
        
    }
}

export const example2 = new Example2();