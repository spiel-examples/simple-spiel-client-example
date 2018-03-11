import { h, Children } from "spiel-client";

export interface Show {
    title: string;
    onChangeTitle: () => void;
    onGo: () => void;
}

export function Show ({title, onChangeTitle, onGo}: Show, children: Children) {
    return (
        <div oncreate ={() => console.log('the component is created')}>
            <h1>{title}</h1>
            <div id='child'>{children}</div>
            <button onclick={() => onChangeTitle()}>Change title</button>
            <button id="go-parent" onclick={() => onGo()}>Go to root</button>
        </div>
    )
}