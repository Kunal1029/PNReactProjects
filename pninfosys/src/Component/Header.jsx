import { Link } from "react-router-dom";
import "../App.css";

function Header() {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-primary ">
                    <div className="container-fluid ">
                        <a className="navbar-brand bg-light border" href="#">
                            <img src="/logo.png" alt="" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                            <div className="nav navbar-nav ms-auto">
                                <Link className="nav-link text-light" aria-current="page" to="/">
                                    Home
                                </Link>
                                <Link className="nav-link text-light" to="/about">
                                    About
                                </Link>
                                <a className="nav-link text-light" href="#">
                                    Courses
                                </a>
                                <a className="nav-link text-light" href="#">
                                    <i className="fa-brands fa-facebook fa-xl"></i>
                                </a>
                                <a className="nav-link text-light" href="#">
                                    <i className="fa-brands fa-youtube fa-xl"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className="container nav2 mt-5 mb-5">
                    <h5>
                       <i>We are part of this IT industry since 2018, we not only developed products and websites but also provides internship and trainning to students and make them capable to work in this It software industry, our internship and trainning program is totally based on hand to hand pratical with live projects.
                       </i>
                    </h5>
                </div>
            </header>
        </>
    );
}

export default Header;
