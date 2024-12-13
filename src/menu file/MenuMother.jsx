import Dessert from "./Dessert";
import MainCoursesItems from "./MainCoursesItems";
import MenuBanner from "./MenuBanner";
import Soups from "./Soups";
import Starters from "./Starters";



const MenuMother = () => {
    return (
        <div>

            <MenuBanner></MenuBanner>
            <Starters></Starters>
            <MainCoursesItems></MainCoursesItems>
            <Soups></Soups>
            <Dessert></Dessert>
            
            
        </div>
    );
};

export default MenuMother;