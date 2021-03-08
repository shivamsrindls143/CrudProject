import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";
import axios from 'axios';

const initialState = {
    contacts: [],
    contact: null,
};

export const getPosts = () => async (dispatch) => {
    const result = await axios.get("https://jsonplaceholder.typicode.com/users");

    dispatch({
        type: "GET_POSTS",
        payload: result.data,
    });
}

export const newContacts = (contact) => async (dispatch) => {
    const result = await axios.post("https://jsonplaceholder.typicode.com/users",contact);
    
    dispatch({
        type: "ADD_CONTACTS",
        payload: result.data,
    });
};

// export const getContact = (id)=> {
//     return {
//         type: "GET_CONTACT",
//         payload: id,
//     };
// }

// export const editContacts = (contact) => async (dispatch) => {
//     const result = await axios.put(`https://jsonplaceholder.typicode.com/users/${contact.id}`,contact);
//     console.log(result.data);
//     dispatch({
//         type: "EDIT_CONTACTS",
//         payload: result.data,
//     });
// };

const useReducer = (state = initialState, action) => {
    switch(action.type){
        case "ADD_CONTACTS":
            return {
                ...state,
                contacts : [action.payload, ...state.contacts],
            };
        case "GET_CONTACT":
            let arr = state.contacts.filter(contact => contact.id == action.payload);
            arr = arr.values();
            for (let val of arr) {
                arr = val;
            }
            return {
               ...state,
               contact : arr, 
            };    
        case "EDIT_CONTACTS":
            return {
                ...state,
                contacts : [action.payload, ...state.contacts],
            };
        case "GET_POSTS":
            return {
                ...state,
                contacts : action.payload,
            };
        default:
            return state;
    }
}

const store = createStore(useReducer,composeWithDevTools(applyMiddleware(Thunk)));

export default store;