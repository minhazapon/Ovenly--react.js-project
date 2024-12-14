import BookTable from "./BookTable";
import Information from "./Information";
import Our from "./Our";
import PageBanner from "./PageBanner";
import Team from "./Team";



const Page = () => {

    return (
        <div>

            <PageBanner></PageBanner>
            <Our></Our>
            <Information></Information>
            <Team></Team>
            <BookTable></BookTable>
            
        </div>
    );
};

export default Page;