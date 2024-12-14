



const Information = () => {

    return (
        <div className=" mt-20 mb-10">

            <div className="  bg-no-repeat bg-cover    "
            style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1625604087024-7fb428fc4626?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGFyayUyMGZvb2QlMjBwaG90b2dyYXBoeXxlbnwwfHwwfHx8MA%3D%3D)",
            }}>
            <div className="  flex justify-center gap-48 items-center p-48 text-white bg-gradient-to-r from-black ">
            <div>
            <p className=" text-center text-7xl play ">10</p>
            <p className=" text-center ex mt-10 text-xl ">High Restaurants</p>
            </div>
            <div>
            <p className=" text-center text-7xl play ">2</p>
            <p className=" text-center ex mt-10 text-xl ">Michelin Star</p>
            </div>
            <div>
            <p className=" text-center text-7xl play ">150</p>
            <p className=" text-center ex mt-10 text-xl ">Talented Employees</p>
            </div>
            </div>    
            </div>
            
        </div>
    );
};

export default Information;