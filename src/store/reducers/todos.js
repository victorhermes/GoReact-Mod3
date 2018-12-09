const INITIAL_STATE = [
    { id: 1, text: "Fazer café com leite" },
    { id: 2, text: "Ir para a escola" },
    { id: 2, text: "Ir para a escola" },
    { id: 2, text: "Ir para a escola" }
];

export default function todos(state = INITIAL_STATE, action) {
    switch (action.types) {
        default:
            return state;
    }
}
