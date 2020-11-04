import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getContact } from '../Action/contactAction'
import {useHistory, useParams} from 'react-router-dom'
import {updateContact} from '../Action/contactAction'


function EditContact() {
    let {id} = useParams()
    let history = useHistory()
    const dispatch = useDispatch()
    const contact = useSelector((state) => state.contacts.contact)
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")

    useEffect(() => {
        if(contact != null) {
            setName(contact.name);
            setPhone(contact.phone)
            setEmail(contact.email)
        }
            dispatch(getContact(id));
    }, [contact]);

    const onUpdateContact = (e) => {
        e.preventDefault();

        const update_contact = Object.assign(contact, {
            name: name,
            phone: phone,
            email:email
        });
        dispatch(updateContact(update_contact))
        history.push("/")
    };


    return (
        <div className="card border-0 shadow">
            <div className="card-header bg-danger text-white">Add a Contact</div>
            <div className="card-body">
                <form onSubmit={(e) => onUpdateContact(e)}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button className="btn btn-primary" type="submit">Update Contact</button>
                </form>
            </div>
        </div>
    )
}

export default EditContact
