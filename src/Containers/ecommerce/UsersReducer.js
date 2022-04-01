const initialState = {
  users: [],
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "users/usersFetch": {
      return {
        users: action.payload.map((user) => {
          return user;
        }),
      };
    }

    case "users/usersDeleted": {
      return {
        users: state.users.filter(
          (item) => Number(item.id) !== Number(action.payload)
        ),
      };
    }

    default:
      return state;
  }
}
