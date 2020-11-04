import React from 'react'
import Avatar from 'react-avatar'
import { Link } from 'react-router-dom'
import {deleteContact} from '../Action/contactAction'
import {useDispatch} from 'react-redux'

function Contact({contact, selectAll}) {
    const dispatch = useDispatch();
    const {name, phone, email, id} = contact
    return (
        <tr key={id}>
            <th>
                <div className="custom-control custom-checkbox">
                    <input 
                    type="checkbox"
                    className="custom-control-input"
                    checked={selectAll}
                         />
                    <label className="custom-control-label"> </label>
                </div>
            </th>
            <td> <Avatar className="mr-2"
                name={name}
                size="45" round={true}
            /> {contact.name}
            </td>

            <td>{phone}</td>
            <td>{email}</td>
            <td className="actions">
                <Link to={`/contact/edit/${id}`}>
                    <span className="material-icons mr-2">
                        edit
                                </span>
                </Link>
                <a href="#">
                    <span className="material-icons text-danger"
                     onClick={() => dispatch(deleteContact(id))}
                     >
                        remove_circle
                                </span>
                </a>
            </td>
        </tr>
    )
}

export default Contact




   