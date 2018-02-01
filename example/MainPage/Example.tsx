import {h, Component, srouter} from 'spiel-client';
import 'aframe';

export class Example {
    state = {
        title: 'Hello world'
    }

    view(state: any){
        return (
            <div>
                <h1>{state.title}</h1>
                <button
                    onclick = {() => {
                        srouter.go('/home/child/5');
                    }}
                >go to child</button>
                <button
                    onclick = {() => {
                        srouter.go('/home/child/2/child2/primo');
                    }}
                >go to child 2</button>
                <button
                    onclick = {() => {
                        srouter.go('/home/brother');
                    }}
                >go to child brother</button>
                <button
                    onclick = {() => {
                        srouter.go('/aframe');
                    }}
                >go to aframe</button>
            </div>
        )
    }
}

export const example = new Example();