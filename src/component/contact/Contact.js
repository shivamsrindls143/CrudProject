import React from 'react';
import {Link} from 'react-router-dom'

function Contact(props) {
    return (
        
            <tr key={props.contact.id}>
              <td>{props.contact.name}</td>
              <td>{props.contact.username}</td>
              <td>{props.contact.email}</td>
              <td className="touch">
              <Link to={`contacts/edit/${props.contact.id}`}><i class="fa fa-edit fa-lg" aria-hidden="true"></i></Link>
              <Link to="#"><i class="fa fa-remove fa-lg" aria-hidden="true"></i></Link>
              </td>
            </tr>
    )
}

export default Contact
