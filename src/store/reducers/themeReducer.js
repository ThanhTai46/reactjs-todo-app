let initialState = {
  color: '#fff',
};
export default function themeReducer(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_THEME':
      console.log('Theme Reducer: ' + JSON.stringify(state));
      return Object.assign({}, state, {
        color: action.payload.color,
      });
    default:
      return state;
  }
}
