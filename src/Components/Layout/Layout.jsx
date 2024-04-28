import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
    const navigation=useNavigation();
    console.log(navigation);
    return (
        <div>
            <Header></Header>
            {
                navigation=== 'loading'? <p>Loading..........</p> :
            <Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
};

export default Layout;