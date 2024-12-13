import { useEffect, useState } from "react";
import DessertDetails from "./DessertDetails";




const Dessert = () => {

    const [dessert, setDessert] = useState([])

    
    useEffect( () =>{

      fetch('https://raw.githubusercontent.com/minhazapon/Ovenly--react.js-project/refs/heads/main/public/dessert.json')
      .then( res => res.json())
      .then( data => setDessert(data) )

    } , [])


    return (
        <div className=" mt-20 mb-10 ml-12 mr-12  ">

            <div>

            <div>
                <p className=" text-center text-5xl play ">Desserts</p>
            </div> 


            <div>
                <div>
                   
                   {

                     dessert.map( dessert => <DessertDetails  dessert={dessert} ></DessertDetails> )

                   }

                </div>
            </div>






            </div>
            
        </div>
    );
};

export default Dessert;