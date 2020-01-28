const addContact = value => {
  console.log("value", value);
  return {
    type: "ADD_CONTACT",
    payload: value
  };
};

export { addContact };
