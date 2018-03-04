import {createNode, render, srouter, IPage} from 'spiel-client';

export class Example2 implements IPage {
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
                    oncreate={() => console.log('the change title is created')}
                    onupdate={() => console.log('the change title is updated')}
                    ondestroy={() => console.log('the change title is destroyed')}
                >Title change</span>: null}
                <h1 
                    key="title"
                    oncreate={() => console.log('the title is created')}
                    onupdate={() => console.log('the title is updated')}
                    ondestroy={() => console.log('the title is destroyed')}
                >{state.title} {state.params.number}</h1>
                <button
                    onclick ={() => {
                        state.title = (state.title === 'Hello') ? 'Hello Paco': 'Hello';
                        render(example2.view, state)
                    }}
                >Change Title</button>

                <button
                    onclick = {() => {
                        srouter.go('/home');
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