import React from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { FaBagShopping } from "react-icons/fa6";
import { useAuth } from '../../context/auth';
// import toast from 'react-hot-toast';
import { toast } from 'react-toastify';
import SearchInput from '../Forms/SearchInput';
import useCategory from '../../hooks/useCategory';
import { useCart } from '../../context/cart';
import { Badge } from 'antd'
import { FaShoppingCart } from "react-icons/fa";


const Header = () => {
  const navigate = useNavigate();
  const { cart } = useCart();

  const { auth, setAuth } = useAuth();

  const categories = useCategory();
  const handleLogout = () => {
    //ham sirf user ko null kar rahe hai , baki sara data ko save karke rakhn ahi aisliye ham.

    setAuth({
      ...auth,
      user: null,
      token: "",
    })
    toast.success("User logout Successfully")
    localStorage.removeItem("auth");



  }


  return (



    <div className="header-nav">
      <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid ">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand" > PrimeShopper App</Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              {/* TODO - Design------------------------------------------------------------------------------ */}

              <SearchInput />



              <li className="nav-item ">
                <NavLink to="/" className="nav-link">Home</NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/about" className="nav-link">About</NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/contact" className="nav-link">Contact Us</NavLink>
              </li>


              <li className="nav-item dropdown">
                <Link
                  to={"/categories"}

                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown" >
                  Categories
                </Link>

                <ul className="dropdown-menu">
                  <li> <Link className='dropdown-item' to={"/categories"}>All Categories</Link></li>
                  {categories?.map((c, i) => (

                    <Link

                      key={i}
                      to={`/category/${c.slug}`}
                      className="dropdown-item" >{c.name}</Link>





                  ))}
                </ul>
              </li>



              {
                !auth.user ? (<> <li className="nav-item">
                  <NavLink to="/register" className="nav-link" >Register</NavLink>
                </li>
                  <li className="nav-item">
                    <NavLink to="/login" className="nav-link" >Login</NavLink>
                  </li></>) :

                  (<>



                    <li className="nav-item dropdown">

                      <NavLink
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        style={{ border: "none" }}
                      >
                        {auth?.user?.name}
                      </NavLink>
                      <ul className="dropdown-menu ">
                        <li><NavLink to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"
                          }`} className="dropdown-item admin-dropdown" >Dashboard</NavLink></li>
                        <li><NavLink onClick={handleLogout} to="/login" className="dropdown-item admin-dropdown" >Logout</NavLink></li>


                      </ul> 
                    </li>







                  </>
                  )
              }



              {/* <li className="nav-item">
                <Badge count={cart?.length} showZero>
                
                <NavLink to="/cart" className="nav-link" >Cart </NavLink>
                </Badge>
              </li> */}


              <li>
                <Badge
                  className='badg'
                  count={cart?.length} showZero>
                  <NavLink to="/cart" > <FaShoppingCart className='cart' /> </NavLink>

                </Badge>

              </li>


            </ul>

          </div>
        </div>
      </nav >
    </div>



  )
}

export default Header