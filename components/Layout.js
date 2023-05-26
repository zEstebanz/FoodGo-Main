import Navigator from './navigation';
import Footer from "./Footer";

const Layout = (props) => {
    return (
        <div>
            <Navigator />
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout;