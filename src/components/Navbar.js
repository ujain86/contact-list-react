import React,{useState} from "react";
import CreateContact from "./CreateContact";

function Navbar(){

    const [isClicked, setIsClicked] = useState(false);

    const handleAddContact = () => {
        
        setIsClicked(true); 
    }

    return(
        <div className="navbar" >
            <h1> Contacts List  </h1> 

            <button className="add-contact-btn" onClick={handleAddContact}>Add Contact</button>
            {/* {isClicked && <CreateContact />} */}
            <CreateContact heading= 'Add Contact' isClicked= {isClicked} setIsClicked= {setIsClicked} />
        </div>
    );
}

export default Navbar;
