import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { newContacts } from '../../store';
import { useHistory } from "react-router-dom";
// import {addContacts} from '../../store';

function AddContact() {

    const dispatch = useDispatch();
    let history = useHistory();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [username,setUsername] = useState('');
    
    const createContact = (e) => {
        e.preventDefault();
        const contact = {
            name: name,
            email: email,
            username: username,
        }
        dispatch(newContacts(contact));
        history.push("/");
    }

    return (
        <div>
            <div className="card border-0 shadow">
                <div className="card-header">Add Contact</div>
                <div className="card-body">
                <form onSubmit={(e)=>createContact(e)}>
                    <div className="mb-3 form-group">
                    <input type="name"
                    className="form-control" 
                    id="name" 
                    placeholder="Name"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}
                     />
                    </div>

                    <div className="mb-3 form-group">
                    <input type="email" 
                    className="form-control" 
                    id="email" 
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)} />
                    </div>

                    <div className="mb-3 form-group">
                    <input type="text" 
                    className="form-control" 
                    id="username" 
                    placeholder="User Name"
                    value={username}
                    onChange={(e)=> setUsername(e.target.value)} />
                    </div>

                    <div className="mb-3 form-group">
                    <button className="btn btn-primary" type="submit">Create Contact</button>
                    </div>
            </form>
                </div>
            </div>
            
        </div>
    )
}

export default AddContact
