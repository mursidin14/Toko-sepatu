import Button from "components/Button";
import Brand from './BrandIconText';
import { useLocation } from "react-router-dom";

export default function Header() {

    const location = useLocation();

    const getNaviLinkClass = path => {
        return location.pathname === path ? " active" : "";
    }

    return (
        <header className="spacing-sm">
           <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
                <Brand />        
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className={`nav-item${getNaviLinkClass("/")}`}>
                            <Button className="nav-link" type="link" href="">Home</Button>
                        </li>
                        <li className={`nav-item${getNaviLinkClass("/product")}`}>
                            <Button className="nav-link" type="link" href="/product">Product</Button>
                        </li>
                        <li className={`nav-item${getNaviLinkClass("/about")}`}>
                            <Button className="nav-link" type="link" href="/about">About Us</Button>
                        </li>
                        <li className={`nav-item${getNaviLinkClass("/contact")}`}>
                            <Button className="nav-link" type="link" href="/contact">Contact</Button>
                        </li>
                    </ul>
                </div>
             </nav>
           </div>
        </header>
    )
}