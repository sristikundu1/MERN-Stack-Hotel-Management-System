import Categories from "../../components/Rooms/Categories/Categories";
import Rooms from "../../components/Rooms/Rooms";


const Home = () => {
    return (
        <div>
            {/* category section  */}
            <Categories></Categories>
            
            {/* rooms section  */}
            <Rooms></Rooms>
        </div>
    );
};

export default Home;