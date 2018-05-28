import {h, ultraBuilder, IPage} from 'spiel-ultradom';
import 'aframe';

export const example: IPage = {
    state: {
        title: 'Hello world'
    },

    view: (state: {title: string}) => {
        return (
            <div>
                <h1>{state.title}</h1>
                <button
                    onclick = {() => {
                        ultraBuilder.go('/home/child/5');
                    }}
                >go to child</button>
                <button
                    onclick = {() => {
                        ultraBuilder.go('/home/child/2/child2/param');
                    }}
                >go to child 2</button>
                <button
                    onclick = {() => {
                        ultraBuilder.go('/home/component');
                    }}
                >go to child component</button>
                <button
                    onclick = {() => {
                        ultraBuilder.go('/aframe');
                    }}
                >go to aframe</button>
            </div>
        )
    }
}
