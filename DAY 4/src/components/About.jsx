import Image from "./about/Image";
import Price from "./about/Price";
import Location from "./about/Location";
import { Outlet,Link } from "react-router-dom";

1
function About(){
    return(
        <div className="about">
            <h2>about component</h2>
            <p>this is the about place in the component</p>

            <ul>
                <li>
                    <Link to={"image"}>Images</Link>
                </li>
                <li>
                    <Link to={"price"}>Prices</Link>
                </li>
                <li>
                    <Link to={"location"}>location    </Link>
                </li>
            </ul>

           <Outlet/>

        </div>
    )
}



export default About;