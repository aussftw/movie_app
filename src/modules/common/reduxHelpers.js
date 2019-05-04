export const createReducer = (
  initialState = {},
  actionHandlerKeyFuncs = {}
) => {
  return (state = initialState, action) => {
    const actionHadler = actionHandlerKeyFuncs[action.type];
    return actionHandler ? actionHadler(state, action) : state;
  };
};
