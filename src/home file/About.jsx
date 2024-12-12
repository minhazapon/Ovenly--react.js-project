


const About = () => {
    return (
        <div className=" mt-10 mb-20 ml-12 mr-12 ">


            <div className=" flex-col md:flex-row lg:flex-row flex justify-between gap-10  ">


            <div>
             
             <p className=" text-xl play ">History</p>
             <p className=" mt-5 text-6xl font-bold nav ">About Us</p>
             <p className=" mt-5 text-xl text-black ex ">Welcome to Dina, a modern restaurant with a focus on<br></br> premium food tastes</p>
             <p className=" mt-10 ex text-gray-500 text-xs ">We invite you to celebrate our restaurant’s delicious recipes whether you are here<br></br> for a business lunch or dinner. Discover new tastes and inspired recipes from all<br></br> over the world.</p>
 
             <div className=" mt-10 ">
             <a href="#_" class="relative inline-block text-lg group">
             <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
             <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
             <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
             <span class="relative ex ">FIND MORE</span>
             </span>
             <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
             </a>
             </div>


            </div>



            <div>
                <img className=" h-[400px] w-[700px] rounded-xl " src="https://images.unsplash.com/photo-1516953951091-5051d8bebb74?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D" alt="" />
            </div>





            </div>
            
        </div>
    );
};

export default About;