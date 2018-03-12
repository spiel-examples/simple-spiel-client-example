import {render, State} from "spiel-client";
import {example2} from "./Example2";

export class Example2Controller {
    state: State

    constructor(state: State) {
        this.state = state;
    }

    changeTitle() {
        const promise = new Promise((resolve) => {
            const title = (this.state.title === 'Hello') ? 'Hello Spiel': 'Hello';
            resolve(title);
        });

        promise.then(data => {
            this.state.title = data;
            render(example2.view, this.state)
        });
    }
}