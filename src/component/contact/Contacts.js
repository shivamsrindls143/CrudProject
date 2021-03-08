import React, { useEffect } from 'react';
import { useSelector,useDispatch } from "react-redux";
import { getPosts } from '../../store';
import Contact from './Contact';

function Contacts() {

  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getPosts());
  }, []);

    return (
        <div>
            <table className="table table-hover table-border">
          <thead className="table-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          {
            contacts.map(contact => (
              <Contact contact={contact} key={contact.id} />
              ))
          }
          </tbody>
        </table>
        </div>
    )
}

export default Contacts
