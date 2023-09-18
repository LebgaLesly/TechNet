import { Outlet , NavLink,Link } from "react-router-dom";
import { FaRegHeart, FaRegUser, FaShoppingCart } from "react-icons/fa";
import "../Styles/PageLayout.css";





const PageLayout = () => {
    return(
        <>
            <header>
                <nav className="nav">
                    <Link className="logo">TECH NET</Link>
                    <nav>
                        <NavLink index >Home</NavLink>
                        <NavLink to="product">Products</NavLink>
                        <NavLink to="articles">Blog</NavLink>
                        <NavLink to="about">About</NavLink>
                        <NavLink to="contact">Contact</NavLink>
                        <Link><FaShoppingCart /></Link>
                        <Link><FaRegHeart /></Link>
                        <Link><FaRegUser /></Link>
                    </nav>
                    
                </nav>
        </header>

        <main>
            <Outlet />
        </main>

        <footer>

        </footer>
        </>
    )
}

export default PageLayout;