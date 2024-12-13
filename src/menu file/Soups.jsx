import { useEffect } from "react";
import { useState } from "react";
import SoupDetails from "./SoupDetails";




const Soups = () => {
    
    const [soup, setSoup] = useState([])


    useEffect( () => {

      fetch('https://raw.githubusercontent.com/minhazapon/Ovenly--react.js-project/refs/heads/main/public/soup.json')
      .then( res => res.json())
      .then( data => setSoup(data) )

    } , [])

    return (
        <div className=" mt-20 mb-10 ml-12 mr-12 ">

            <div>
             
             <div>
                <p className=" play text-5xl  text-center ">Soups</p>
             </div>


             <div className=" mt-10 ">
                <div>

                    {

                       soup.map( soup => <SoupDetails soup={soup} ></SoupDetails> )

                    }

                </div>
             </div>
    
            </div>
            
        </div>
    );
};

export default Soups;