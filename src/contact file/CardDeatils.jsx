



const CardDeatils = ({contact}) => {

    const {image, title, h1, h2} = contact

    return (
        <div>

        <div className=" bg-base-100 w-96 shadow-xl  hover:border-[1px]  ">
          <figure className="">
            <img
              src={image}
              alt="Shoes"
              className="" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title play "> {title} </h2>
            <p className=" ex "> {h1} </p>
            <p className=" ex "> {h2} </p>
            <div className="card-actions">
              <button className="btn  bg-black text-white nav mt-5 "> GET DIRECTIONS </button>
            </div>
          </div>
        </div>
            
        </div>
    );
};

export default CardDeatils;