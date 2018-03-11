import { h } from "spiel-client";

export interface ShowChild {
    text: string;
    onChangeText: () => void;
}

export function ShowChild({text, onChangeText}: ShowChild) {
    return (
        <div>
            <span>{text}</span><br/>
            <button onclick={() => onChangeText()}>Change child text</button>
        </div>
    );
}