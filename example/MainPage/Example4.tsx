import {h, change, ultraBuilder, IPage} from 'spiel-ultradom';
import {Show, ShowChild} from "../components";

export const example4: IPage = {
    state: {
        title: 'Hello component',
        text: "And this is its child component"
    },

    view: (state: {title: string, text: string}) => {
        return(
            <Show 
                title={state.title}
                onChangeTitle={() => {
                    state.title = state.title === ("Hello component") ?
                                                  "Hello Spiel component":  
                                                  "Hello component";
                    change(example4.view, state);
                }}
                onGo={()=> ultraBuilder.go("/home")}>
                <ShowChild 
                    text={state.text}
                    onChangeText = {() => {
                        state.text = state.text === ("And this is its child component") ?
                                                    "And this is its updated child component":
                                                    "And this is its child component";
                        change(example4.view, state);
                    }}>
                </ShowChild>
            </Show>
        )
    }
}
