const initialState = {
  contacts: [
    {
      name: "Ily",
      phone: "302-02-09",
      id: 1
    }
  ],
  filteredContacts: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "SEARCH_CONTACT":
      return {
        ...state,
        filteredContacts: [...state.contacts].filter(contact =>
          contact.name.includes(action.payload)
        )
      };
    default:
      return state;
  }
};

export default reducer;
