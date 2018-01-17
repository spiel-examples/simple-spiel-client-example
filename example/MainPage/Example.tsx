import {h, Component, router} from 'spiel-client';
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
                        router.go('/home/child/5');
                    }}
                >go to child</button>
                <button
                    onclick = {() => {
                        router.go('/home/child/2/child2/primo');
                    }}
                >go to child 2</button>
                <button
                    onclick = {() => {
                        router.go('/home/brother');
                    }}
                >go to child brother</button>
                <button
                    onclick = {() => {
                        router.go('/aframe');
                    }}
                >go to aframe</button>
            </div>
        )
    }
}

export const example = new Example();