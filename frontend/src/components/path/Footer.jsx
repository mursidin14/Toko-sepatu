import Button from "components/Button";
import { useLocation } from "react-router-dom";
import FooterJson from 'json/footer';


const Footer = () => {

    const location = useLocation();

    const getNaviLinkClass = path => {
        return location.pathname === path ? " active" : "";
    }

    return(
        <footer className="footer">
            <div className="container pt-3">
                <div className="row">
                    {
                        FooterJson.map((item, i) => (
                            <div className="col-lg-4 col-md-6 col-sm-12" key={i}>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title text-white">{item.title}</h5>
                                        <p className="card-text text-white">{item.text}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <br /> <hr className="bg-white" />
                <nav className="navbar navbar-expand-lg navbar-light">
                <h1 className="h2 font-weight-bold text-white">Medium</h1>        
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className={`nav-item${getNaviLinkClass("/")}`}>
                            <Button className="nav-link text-white" type="link" href="">About</Button>
                        </li>
                        <li className={`nav-item${getNaviLinkClass("/product")}`}>
                            <Button className="nav-link text-white" type="link" href="/product">Help</Button>
                        </li>
                        <li className={`nav-item${getNaviLinkClass("/about")}`}>
                            <Button className="nav-link text-white" type="link" href="/about">Legal</Button>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
        </footer>
    )
}

export default Footer;