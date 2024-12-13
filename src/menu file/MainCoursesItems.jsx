import { useEffect, useState } from "react";
import CoursesDeatils from "./CoursesDeatils";


const MainCoursesItems = () => {

    
    const [courses, setCourses] = useState([])


    useEffect( () => {

       fetch('https://raw.githubusercontent.com/minhazapon/Ovenly--react.js-project/refs/heads/main/public/maincourses.json')
       .then( res => res.json())
       .then( data => setCourses(data) )

    } , [])



    return (
        <div className=" mt-20 mb-10 ml-12 mr-12 ">
 

            <div>
              

             <div>
                <p className=" play text-center text-5xl">Main Courses</p>
             </div> 


             <div className=" mt-10 ">
                <div>
                  
                    { 
                        
                        courses.map( courses => <CoursesDeatils courses={courses} ></CoursesDeatils>  )

                    }
  
                </div>
             </div>

            </div>
            
        </div>
    );
};

export default MainCoursesItems;