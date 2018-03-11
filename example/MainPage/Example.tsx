import {h, srouter, IPage} from 'spiel-client';
import 'aframe';

export class Example implements IPage {
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
                        srouter.go('/home/child/2/child2/param');
                    }}
                >go to child 2</button>
                <button
                    onclick = {() => {
                        srouter.go('/home/component');
                    }}
                >go to child component</button>
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