
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";


const Footer = () => {
    return (
        <div className=" mt-20 ">

            <div className=" flex-col md:flex-row lg:flex-row flex justify-center gap-44 mr-14  ">

                 
                 <div>
                   <p className=" text-2xl play  text-center ">ADDRESS:</p>
                   <p className=" ex text-center mt-5 ">Dina Restaurant</p>
                   <p className=" ex text-center mt-5 ">40 Park Ave, Brooklyn, New York 70250</p>
                 </div>

                 <div>
                   <p className=" text-2xl play  text-center ">RESERVATION:</p>
                   <p className=" ex text-center mt-5 ">000-111-222</p>
                   <p className=" ex text-center mt-5 ">ovenly@food.com</p>
                 </div>

                 <div>
                   <p className=" text-2xl play  text-center ">OPEN HOURS:</p>
                   <p className=" ex text-center mt-5 ">Monday - Friday: 10 AM - 11 PM</p>
                   <p className=" ex text-center mt-5 ">Saturday - Sunday: 9 AM - 1 PM</p>
                 </div>



            </div>


            <div className=" flex justify-center items-center gap-2 mt-10 ">
              
              <p><FaFacebookF className=" h-[20px] w-[20px] "></FaFacebookF></p>
              <p><FaTwitter className=" h-[20px] w-[20px] "></FaTwitter></p>
              <p><FaSquareInstagram className=" h-[20px] w-[20px] "></FaSquareInstagram></p>
              <p><FaWhatsapp className=" h-[20px] w-[20px] "></FaWhatsapp></p>


            </div>

            <div>
            <h1 className=" text-center ex mt-5 ">2024 © Ovenly . Designed by <span className=" text-pink-500 play ">Minhazul Abedin Apon</span></h1> 
            </div>
           
            <div className=" flex justify-center">
             

            <div className=" grid  md:grid-cols-8 mt-10">
               <img className=" h-[180px] w-[200px]" src="https://dina.matchthemes.com/wp-content/uploads/sb-instagram-feed-images/157688896_121267609928522_4120224871425394273_nlow.jpg" alt="" />
               <img className=" h-[180px] w-[200px]" src="https://dina.matchthemes.com/wp-content/uploads/sb-instagram-feed-images/156752765_825864221333119_8378680595886233890_nlow.jpg" alt="" />
               <img className=" h-[180px] w-[200px]" src="https://dina.matchthemes.com/wp-content/uploads/sb-instagram-feed-images/157033874_466636564535109_5007992302534056254_nlow.jpg" alt="" />
               <img className=" h-[180px] w-[200px]" src="https://dina.matchthemes.com/wp-content/uploads/sb-instagram-feed-images/156675538_472344493979926_1658538045818179352_nlow.jpg" alt="" />
               <img className=" h-[180px] w-[200px]" src="https://dina.matchthemes.com/wp-content/uploads/sb-instagram-feed-images/157206067_138247718105219_1653272933139895738_nlow.jpg" alt="" />
               <img className=" h-[180px] w-[200px]" src="https://dina.matchthemes.com/wp-content/uploads/sb-instagram-feed-images/156709840_2826515010897261_1319274575472745811_nlow.jpg" alt="" />
               <img className=" h-[180px] w-[200px]" src="https://dina.matchthemes.com/wp-content/uploads/sb-instagram-feed-images/156746314_428790565078758_1547459469142072633_nlow.jpg" alt="" />
               <img className=" h-[180px] w-[200px]" src="https://dina.matchthemes.com/wp-content/uploads/sb-instagram-feed-images/157197652_3742380705861091_6557079344600179294_nlow.jpg" alt="" />
            </div>


            </div>

           
            
        </div>
    );
};

export default Footer;