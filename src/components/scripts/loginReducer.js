const defaultState = {
  user: {},
};

export const loadState = () => {
  try {
    const user = localStorage.getItem('user');
    if (user == null) {
      return defaultState;
    }

    return {
      user: JSON.parse(user),
    };
  } catch (err) {
    return defaultState;
  }
};

const initState = loadState();

export const saveState = (addedItems) => {
  try {
    const serializedUser = JSON.stringify(addedItems);
    localStorage.setItem('user', serializedUser);
  } catch {}
};
const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case types.INIT_PRODUCTS:
      state.products = action.products;
      break;
  }
  return {
    ...state,
  };
};

export default loginReducer;
