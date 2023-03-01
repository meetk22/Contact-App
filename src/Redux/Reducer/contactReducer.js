const initialState = [
    {
        id:0,
        name:"Meet Khanuja",
        number:9822474622,
        email:"meetkhanuja22@gmail.com",
    },
    {
        id:1,
        name:"Honey",
        number:9822686122,
        email:"honey@gmail.com"
    },
];

const contactReducer = (state = initialState,action) => {
    switch(action.type){

        case "Add_Contact":
            state = [...state, action.payload];
                return state;

        case "Update_Contact":
            const updateState = state.map(contact => contact.id === action.payload.id ? action.payload : contact);
            state = updateState;
                 return state;

        case "Delete_Contact":
            const filterContacts = state.filter(contact=> contact.id !== action.payload && contact)
                state = filterContacts;
                return state;
        default:
            return state;
    }
}
export default contactReducer;