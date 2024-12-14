import BookTable from "./BookTable";
import Information from "./Information";
import Our from "./Our";
import PageBanner from "./PageBanner";



const Page = () => {

    return (
        <div>

            <PageBanner></PageBanner>
            <Our></Our>
            <Information></Information>
            <BookTable></BookTable>
            
        </div>
    );
};

export default Page;