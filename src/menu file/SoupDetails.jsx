



const SoupDetails = ({soup}) => {
    

    const {image, name, price, title} = soup

    return (
        <div>

        <div>
            
            <div className=" flex-col md:flex-row lg:flex-row flex justify-between mt-10" >
            <div className=" flex items-center gap-5">
            <img className=" h-[100px] w-[100px] rounded-full " src={image} alt="" />
            <div>
            <p className=" text-xl ex ">{name}</p>
            <p className=" ex text-gray-500 ">{title}</p>
            </div>
            </div>
            <div>
            <p className=" text-xl ex ">{price}</p>
            </div>
            </div>
            <div>
            <p className=" bg-gray-300 h-[1px] w-full mt-5 "></p>
            </div>
            </div>
            
        </div>
    );
};

export default SoupDetails;