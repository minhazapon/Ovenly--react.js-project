import Swal from "sweetalert2";



const BookTable = () => {


    
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
    title: 'Table Booked!',
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
    setResult(data.message);
    }
    };


    return (


    <div className=" mt-20 mb-10 ml-12 mr-12 ">
    <div>
    <div>
    <p className=" play  text-center text-5xl ">Book a table</p>
    </div>
    <div className=" mt-10 ">
    <form onSubmit={onSubmit}>
    <div className=" flex-col md:flex-row lg:flex-row flex justify-between items-center gap-5 ">
    <div>
    <p className="  mb-2 ex text-xs  ">How Many</p>  
    <div>
    <input required type="number" placeholder="How Many People" class=" w-[350px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="many People" id="" />
    </div>
    </div>
    <div>
    <p className=" ex mb-2 text-xs ">When</p>  
    <div class="relative w-[350px]">
    <div class="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
    </svg>
    </div>
    <input datepicker required type="date" name="date" id="" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date"  />
    </div>
    </div>
    <div>
    <p className="  mb-2 ex text-xs  ">What time</p>  
    <div>
    <input type="text" placeholder="What Time" class=" w-[350px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  name="What Time" />
    </div>
    </div>
    </div>
    <div className=" flex justify-center mt-16">
    <input className=" btn w-full ex bg-black text-white " type="submit" value="Book Table" />
    </div>
    </form>
    </div>
    </div>
    </div>


    );
};

export default BookTable;