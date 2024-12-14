import Swal from "sweetalert2";



const ReBookForm = () => {


    const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "e87151e8-7baa-471d-b58a-0bd71fe1cd67");
    const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
    });
    const data = await response.json();
    if (data.success) {
    Swal.fire({
    title: 'Reserved!',
    text: 'Do you want to continue',
    icon: 'success',
    confirmButtonText: 'Cool'
    })
    event.target.reset();
    } else {
    Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool'
    })
    setResult(data.message);}};
    



    return (

        <div className=" mt-20 mb-10 ml-20 mr-20 ">

        <div>
        <div>
        <p className=" play  text-6xl text-center ">Make a Reservation</p>
        <p className=" ex mt-10 text-center text-gray-400 ">You can make a reservation any time online or by calling (000) 111 2222 during our opening hours:</p>
        </div>
        <div>
        <div>
        <form onSubmit={onSubmit}>
        <div className=" flex justify-center mt-10">
        <div className=" grid  md:grid-cols-3 gap-16 ">
        <div>
        <p className="  mb-2 ex text-xs  ">Name</p>  
        <div>
        <input type="text" required placeholder="Name" name="name" class=" w-[350px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        </div>
        <div>
        <p className="  mb-2 ex text-xs  ">Email</p>  
        <div>
        <input type="text" required placeholder="Email" name="email" class=" w-[350px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        </div>
        <div>
        <p className="  mb-2 ex text-xs  ">Phone</p>  
        <div>
        <input type="text" required placeholder="Phone" name="phone" class=" w-[350px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        </div>
        <div>
        <p className="  mb-2 ex text-xs  ">Date</p>  
        <div>
        <input type="text" required placeholder="Date" name="Date" class=" w-[350px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        </div>
        <div>
        <p className="  mb-2 ex text-xs  ">Times</p>  
        <div>
        <input type="text" required placeholder="Times" name="time" class=" w-[350px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        </div>
        <div>
        <p className="  mb-2 ex text-xs  ">Seats</p>  
        <div>
        <input type="text" required placeholder="Seats" name="seats" class=" w-[350px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        </div>
        </div>
        </div>
        <div className=" mt-5">
        <div>
        <p className="  mb-2 ex text-xs  ">Special Requests</p>  
        <div>
        <input type="text" required placeholder="Special Requests" name="Special Requests" class=" w-full h-[150px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>
        </div>
        </div>
        <div className=" flex justify-center ">
        <input className=" mt-10 btn  w-full ex bg-black text-white " type="submit" value="Reserve Table" />
        </div>
        </form>
        </div>
        </div>
        </div>
        </div>
    );
};

export default ReBookForm;