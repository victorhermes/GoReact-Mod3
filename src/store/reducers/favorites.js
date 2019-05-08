const INITIAL_STATE = {
  number: 0,
  data: [],
};

export default function favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return [
        ...state,
        {
          id: Math.random(),
          name: 'facebook/react',
          description:
            'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
          url: 'https://github.com/facebook/react',
        },
      ];
    case 'SOMAR':
      return { ...state, number: parseInt(action.payload.number, 0) + 1 };
    default:
      return state;
  }
}
