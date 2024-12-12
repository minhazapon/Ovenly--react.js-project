import About from "./home file/About";
import FreshFood from "./home file/FreshFood";
import HomeBanner from "./home file/HomeBanner";
import House from "./home file/House";



const Home = () => {
    return (
        <div>

            <HomeBanner></HomeBanner>
            <FreshFood></FreshFood>
            <About></About>
            <House></House>
            
        </div>
    );
};

export default Home;