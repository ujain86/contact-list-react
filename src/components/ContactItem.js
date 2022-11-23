import React, {useState} from "react";

import CreateContact from "./CreateContact";

function ContactItem(props) {    

        const [isClicked, setIsClicked] = useState(false);

        const handleEdit = () => {
            
            setIsClicked(true);
        };

        
        const handleDelete = () => {
            alert('Contact ID: ' + props.contact.id + ' Deleted');
            alert('It was a dummy call');
            fetch('https://jsonplaceholder.typicode.com/users/this.props.contact.id', {
            method: 'DELETE',
            });
        }

 return(
            <div className="contact-item">
                Contact Id: &nbsp;
                {props.contact.id} <br /> <br />
                Name: &nbsp;
                {props.contact.name} <br /> <br />
                <button className="delete-btn" onClick={handleDelete}></button>
                <button className="edit-btn" onClick={handleEdit}></button>

                {/* {isClicked && 
                    <CreateContact />
                } */}

                <CreateContact heading= 'Edit Contact' isClicked= {isClicked} setIsClicked= {setIsClicked} />
            </div>
        )
    }


export default ContactItem;