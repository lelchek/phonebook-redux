const initialState = {
  contacts: [
    {
      name: "Ily",
      phone: "302-02-09",
      id: 1
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      // изменила return
      return { contacts: [...state.contacts, action.payload] };

    default:
      return state;
  }
};

export default reducer;
