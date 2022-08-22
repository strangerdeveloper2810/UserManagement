const initialState = {
  number: 1,
};

const UserManagementReducer = (state = initialState, action) => {
  switch (action.type) {
    case "": {
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};
export default UserManagementReducer;
