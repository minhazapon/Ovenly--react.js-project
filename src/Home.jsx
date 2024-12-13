import About from "./home file/About";
import FreshFood from "./home file/FreshFood";
import HomeBanner from "./home file/HomeBanner";
import House from "./home file/House";
import Menu from "./home file/Menu";



const Home = () => {
    return (
        <div>

            <HomeBanner></HomeBanner>
            <FreshFood></FreshFood>
            <About></About>
            <House></House>
            <Menu></Menu>
            
        </div>
    );
};

export default Home;