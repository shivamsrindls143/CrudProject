import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { newContacts } from '../../store';
import { useHistory } from "react-router-dom";
import { getContacts } from '../../store';

function EditContact() {

    const dispatch = useDispatch();
    let history = useHistory();
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [username,setUsername] = useState('');
    

    return (
        <div>
            <div className="card border-0 shadow">
                <div className="card-header">Edit Contact</div>
                <div className="card-body">
                <form>
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
                    <button className="btn btn-primary" type="submit">Update Contact</button>
                    </div>
            </form>
                </div>
            </div>
            
        </div>
    )
}

export default EditContact;
