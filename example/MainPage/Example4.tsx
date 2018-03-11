import {h, render, srouter, State, JSXElements, IPage} from 'spiel-client';
import {Show, ShowChild} from "../components";

export class Example4 implements IPage {
    state = {
        title: 'Hello component',
        text: "And this is its child component"
    }

    view(state: State): JSXElements {
        return(
            <Show 
                title={state.title}
                onChangeTitle={() => {
                    state.title = state.title === ("Hello component") ?
                                                  "Hello Spiel component":  
                                                  "Hello component";
                    render(example4.view, state);
                }}
                onGo={()=> srouter.go("/home")}>
                <ShowChild 
                    text={state.text}
                    onChangeText = {() => {
                        state.text = state.text === ("And this is its child component") ?
                                                    "And this is its updated child component":
                                                    "And this is its child component";
                        render(example4.view, state);
                    }}>
                </ShowChild>
            </Show>
        )
    }
}

export const example4 = new Example4();
