const INITIAL_STATE = [
  { id: 1, text: 'Fazer café com leite' },
  { id: 3, text: 'Ir para a escola' },
  { id: 4, text: 'Ir para a escola' },
];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.payload.text }];
    default:
      return state;
  }
}
