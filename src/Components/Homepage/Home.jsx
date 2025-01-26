import Navbar from "../Navbar";
import Search from "./Search";
import Recent from "./Recent";
import Access from "./Access";
import './styles.css';
function Home(){
    return(
        <div>
            <Navbar />
            <Search />
            <div className="sections">
                <Recent />
                <Access />
            </div>
        </div>
    )
}

export default Home