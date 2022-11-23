import React, {useState} from "react";

function CreateContact(props){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Changes Submitted Successfully");
        
        fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          body: JSON.stringify({
            Name: name,
            Email: email,
            PhoneNo: phone,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));

        
        
    };

    const handleClose = () => {
        props.setIsClicked(false);
    }


    return props.isClicked ? (

        <div className="create-contact">

            <h1>{props.heading}</h1>
                        <form onSubmit={handleSubmit}>
                            <label>
                                Name : 
                                <input value={name}  onChange={(e) => {
                                setName(e.target.value);
                                }}/>
                            </label>
                             
                            <label>
                                Email :
                                <input type={'email'}  value={email} onChange={(e) => {
                                setEmail(e.target.value);
                                }}/>
                            </label>
                            
                            <label>
                                Phone :
                                <input type={'number'}  value={phone} onChange={(e) => {
                                    setPhone(e.target.value);
                                }}/>
                            </label>
                            
                            <button type='submit' className="add-btn">Submit</button>
                            <button className="close-btn" onClick={handleClose}></button>
                        </form>
        </div>
    ) : "";
}

export default CreateContact;