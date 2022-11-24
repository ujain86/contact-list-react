import React, {useState} from "react";

import CreateContact from "./CreateContact";

function ContactItem(props) {    

        const [isClicked, setIsClicked] = useState(false);

        // Edit Contact function

        const handleEdit = () => {
            
            setIsClicked(true);
        };

        // This function will handle delete functionality

        const handleDelete = () => {
            alert('Contact ID: ' + props.contact.id + ' Deleted');
            alert('It was a DUMMY call');
            fetch('https://jsonplaceholder.typicode.com/users/this.props.contact.id', {
            method: 'DELETE',
            });
        }

 return(
            <div className="contact-item">
                Contact Id: &nbsp;
                {props.contact.id}  <br />
                Name: &nbsp;
                {props.contact.name}  <br />
                Email: &nbsp;
                {props.contact.email}  <br />
                Phone: &nbsp;
                {props.contact.phone}  <br />
                <button className="delete-btn" onClick={handleDelete}></button>
                <button className="edit-btn" onClick={handleEdit}></button>

                {/* Passing isClicked variable and setIsClicked function as props */}
                
                <CreateContact heading= 'Edit Contact' isClicked= {isClicked} setIsClicked= {setIsClicked} />
            </div>
        )
    }


export default ContactItem;