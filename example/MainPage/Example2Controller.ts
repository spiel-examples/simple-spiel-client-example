import {render, State} from "spiel-client";
import {example2} from "./Example2";

export class Example2Controller {
    state: State

    constructor(state: State) {
        this.state = state;
    }

    changeTitle() {
        this.state.title = (this.state.title === 'Hello') ? 'Hello Spiel': 'Hello';
        render(example2.view, this.state)
    }
}