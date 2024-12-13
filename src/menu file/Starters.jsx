import { useEffect } from "react";
import { useState } from "react";
import SDeatils from "./SDeatils";



const Starters = () => {

    
    const [ start, setStart ] = useState([])


    useEffect( () =>{

     fetch('https://raw.githubusercontent.com/minhazapon/Ovenly--react.js-project/refs/heads/main/public/starter.json')
     .then( res => res.json())
     .then( data => setStart(data) )

    } , [])



    return (
        <div className=" mt-20 mb-10 ml-12 mr-12 ">

            <div>
              <div>
                <p className=" play text-center text-5xl ">Starters</p>
              </div>
              <div className=" mt-10 ">
                <div>
                    {
                      start.map( start => <SDeatils start={start}></SDeatils> )
                    }
                </div>
              </div>
            </div>
            
        </div>
    );
};

export default Starters;