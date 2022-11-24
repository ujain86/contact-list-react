import React,{useState} from "react";
import CreateContact from "./CreateContact";

function Navbar(){

    const [isClicked, setIsClicked] = useState(false);

    // Function to handle add contact functionality
    const handleAddContact = () => {
        
        setIsClicked(true); 
    }

    return(
        <div className="navbar" >
            <h1> Contacts List  </h1> 

            <button className="add-contact-btn" onClick={handleAddContact}>Add Contact</button>
            {/* {isClicked && <CreateContact />} */}

            {/* Passing isClicked variable and setIsClicked function as props  */}
            <CreateContact heading= 'Add Contact' isClicked= {isClicked} setIsClicked= {setIsClicked} />
        </div>
    );
}

export default Navbar;
