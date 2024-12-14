import { useEffect, useState } from "react";
import CardDeatils from "./CardDeatils";




const ContactForm = () => {


    const [contact, setContact] = useState([])

    useEffect( () => {
     
    fetch('https://raw.githubusercontent.com/minhazapon/Ovenly--react.js-project/refs/heads/main/public/contact.json')
    .then( res => res.json())
    .then(data => setContact(data))

    } , [])

    return (
        <div className=" mt-20 mb-10 ml-12 mr-12 ">
           <div className=" flex justify-center">
            <div className=" grid  md:grid-cols-3 gap-10 ">
                  {
                    contact.map( contact => <CardDeatils contact={contact} ></CardDeatils> )
                  }
            </div>
           </div>
        </div>
    );
};

export default ContactForm;