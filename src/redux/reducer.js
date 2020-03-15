const initialState = {
  counters: [
    {id: 1, name: 'Counter1', value: 26},
    {id: 2, name: 'Counter2', value: 18},
    {id: 3, name: 'Counter3', value: 71}
  ],
  counterDeleteConfirmation: {}
};

const counters = (state = initialState, action) => {
  switch (action.type) {
    case 'RESET_ALL_VALUE':
      return ({
        ...state,
        counters: state.counters.map(el => ({...el, value: 0}))
      });

    case 'COUNTER_DECREMENT_VALUE':
      return ({
        ...state,
        counters: state.counters.map(el => {
          if (action.payload === el.id) return {...el, value: el.value - 1};
          return el;
        })
      });

    case 'COUNTER_INCREMENT_VALUE':
      return ({
        ...state,
        counters: state.counters.map(el => {
          if (action.payload === el.id) return {...el, value: el.value + 1};
          return el;
        })
      });

    case 'COUNTER_RESET_VALUE':
      return ({
        ...state,
        counters: state.counters.map(el => {
          if (action.payload === el.id) return {...el, value: 0};
          return el;
        })
      });

    case 'COUNTER_DELETE_VALUE':
      return ({
        ...state,
        counters: state.counters.filter(el => el.id !== action.payload)
      });

    case 'ADD_COUNTER':
      return ({
        ...state,
        counters: [
          ...state.counters,
          {
            id: Math.random(),
            name: action.payload.name,
            value: action.payload.value
          }
        ]
      });

    case 'COUNTER_DELETE_CONFIRMATION':
      return ({
        ...state,
        counterDeleteConfirmation: state.counters.filter(el => el.id === action.payload)[0]
      });

    case 'RESET_COUNTER_DELETE_CONFIRMATION':
      return ({
        ...state,
        counterDeleteConfirmation: {}
      });

    case 'SAVE_NEW_COUNTER_NAME':
      return ({
        ...state,
        counters: state.counters.map(el => {
          if (action.payload.id === el.id) return {...el, name: action.payload.newCounterName};
          return el;
        })
      });

    default:
      return state;
  }
};

export default counters;
