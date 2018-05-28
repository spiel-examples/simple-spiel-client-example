import {change} from "spiel-ultradom";
import {example2, IExample2} from "./Example2";

export class Example2Controller {
    state: IExample2

    constructor(state: IExample2) {
        this.state = state;
    }

    changeTitle() {
        const promise: Promise<string> = new Promise((resolve) => {
            const title = (this.state.title === 'Hello') ? 'Hello Spiel': 'Hello';
            resolve(title);
        });

        promise.then((data) => {
            this.state.title = data;
            change(example2.view, this.state)
        });
    }
}