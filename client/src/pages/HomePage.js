import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout/Layout'
import { useAuth } from '../context/auth'
import axios from 'axios';
// import toast from 'react-hot-toast';
import { toast } from 'react-toastify';
import { Checkbox, Radio } from 'antd';

import { Prices } from '../components/Prices';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/cart';
import loginImage from '../images/slider.png'
import loginImage2 from '../images/slider2.png'
import loginImage3 from '../images/slider3.png'
import Spinner from './Spinner';
import SearchInput from '../components/Forms/SearchInput';
import '../styles/LogoSlider.css';
import logo1 from '../images/logo11.png'
import logo2 from '../images/logo12.png'
import logo3 from '../images/logo13.png'
import logo4 from '../images/logo14.png'
import logo5 from '../images/logo15.png'
import logo6 from '../images/logo16.png'
import logo7 from '../images/logo17.png'
import logo8 from '../images/logo18.png'
const HomePage = () => {

  const navigate = useNavigate();
  const { cart, setCart } = useCart([]);

  const { auth, setAuth } = useAuth();
  // const { products, setProducts } = useState([]);
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);



  const getAllCategories = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('/api/v1/category/get-category');
      setLoading(false)
      if (data?.success) {
        setCategories(data?.category); //category controller ke line 86 par  hamne reaponse me category bheja tha is liye category ko fetch karn hai
      }

    } catch (error) {
      console.log("Error in product.js/admin/page", error);
      setLoading(false)
      //toast.error("Something wennt wrong with createCategory")

    }
  }

  //get products

  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);

      setProduct(data.products);  //products  hamne response me pass kiya tha

    } catch (error) {
      setLoading(false);
      console.log("Error in fetching all products in product.json: " + error);
      // toast.error("Something went wrong")

    }
  }

  const handleFilter = (value, id) => {
    let all = [...checked]
    if (value) {
      all.push(id);

    }
    else {
      all = all.filter(c => c !== id);
    }
    setChecked(all);
  }



  //get Filter-produt _______________________________________________________________________


  const filterProduct = async () => {
    try {
      setLoading(true);

      //checked,radio - controller me jo pass kiya gaya h ai wo yahan se pass karna parega
      const { data } = await axios.post('/api/v1/product/product-filters', { checked, radio })
      setLoading(false);

      setProduct(data?.products);

    } catch (error) {

      setLoading(false);

      console.log("Error during Filter-produt ", error);

    }
  }





  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProduct([...product, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };



  useEffect(() => {
    //checked ya rdio button select nahi hai tab hi yah call hoga otherwise filter wala call hoga
    if (!checked.length || !radio.length) getAllProducts();
    getAllCategories();
    getTotal();
  }, [])

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio])

  // State to keep track of the current slide index
  const [activeIndex, setActiveIndex] = useState(0);

  // Array of images
  const images = [loginImage, loginImage2, loginImage3];

  // Function to handle slide change
  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  // Effect to automatically slide to the next image
  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the index of the next slide
      const nextIndex = (activeIndex + 1) % images.length;
      // Update the active slide index
      setActiveIndex(nextIndex);
    }, 3000); // Adjust the interval (in milliseconds) as needed

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [activeIndex, images.length]);





  return (
    <Layout




      title={'All Products - Best Offers'} className="homepage">







      <div className="row text-center homepage-heading ">
        <h1>Unlock Exclusive Savings with PrimeShopper Today! </h1>

      </div>



      {/* Logo SLider_____________________________________ */}

      <div className="logos">
        <div className="logos-slide">

          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
          <img src={logo6} alt="" />
          <img src={logo7} alt="" />
          <img src={logo8} alt="" />

        </div>
        <div className="logos-slide">

          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
          <img src={logo6} alt="" />
          <img src={logo7} alt="" />
          <img src={logo8} alt="" />

        </div>

      </div>


















      <div className='search-input'>
        <SearchInput />
      </div>




      <div className="homepage">


        {/* Slider __________________________________*/}

        <div id="carouselExampleCaptions" className="carousel slide slider ">
          <div className="carousel-indicators ">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleSlideChange(index)}
                className={index === activeIndex ? "active" : ""}
                aria-current={index === activeIndex ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="carousel-inner">
            {images.map((image, index) => (
              <div key={index} className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
                <img src={image} className="d-block w-100 slider-image" alt={`Slide ${index + 1}`} />
                <div className="carousel-caption d-none d-md-block">
                  {/* <h5>{`Slide ${index + 1} label`}</h5> */}
                  <h3>{`PrimeShopper Slide ${index + 1} `}</h3>
                  {/* <p>Some representative placeholder content for slide {index + 1}.</p> */}
                  {index == 0 && <p className='slider-p'>Unlock Exclusive Deals: Shop Smarter, Save Bigger!</p>}
                  {index == 1 && <p className='slider-p' >Discover More, Spend Less: Exclusive Offers Await!</p>}
                  {index == 2 && <p className='slider-p'>Experience the Difference: Exclusive Offers, Endless Savings!</p>}
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev" type="button" onClick={() => handleSlideChange((activeIndex - 1 + images.length) % images.length)}>
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" onClick={() => handleSlideChange((activeIndex + 1) % images.length)}>
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

























      <div className="row mt-3 homepage ">

        <div className="col-md-3 home-left">


          <h4 className='text-center filter-by '>Filter By Category</h4>
          <div className="d-flex flex-column filter">
            {
              categories.map((c) => (
                <Checkbox
                  style={{ margin: '10px', fontSize: '15px' }}

                  key={c._id} onChange={(e) => handleFilter(e.target.checked, c._id)}>
                  {c.name}
                </Checkbox>
              ))
            }
          </div>
          {/* Price filter___________________________________________________________________ */}


          <h4 className='text-center mt-4 filter filter-by'>Filter By Price</h4>
          <div className="d-flex flex-column filter">


            <Radio.Group onChange={(e) => setRadio(e.target.value)}>

              {
                Prices.map((p) => (
                  <div


                    key={p._id}>

                    <Radio
                      style={{ margin: '10px', fontSize: '15px' }}

                      value={p.array}>{p.name}</Radio>

                  </div>
                ))
              }




            </Radio.Group>
            <div className="d-flex flex-column ">
              <button
                className="btn btn-danger margin"
                onClick={() => window.location.reload()}>Reset All Filter</button>

            </div>
          </div>
        </div>

        <div className="col-md-9">
          {/* For test purpose we are checking ----------  {JSON.stringify(radio,null,4)} */}
          <h1 className="text-center prodcut-heading">  All Products</h1>
          {loading && <Spinner />}
          <div className="d-flex flex-wrap product">

            {product.map((p) => (

              <button
                onClick={() => navigate(`/product/${p.slug}`)}
                key={p._id}
                className="card m-2 " style={{ width: '18rem' }} >
                <img src={`/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={p?.name}
                  height={350}
                  style={{ objectFit: 'cover' }} />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.description.substring(0, 60)}...</p>
                  <p className="card-text">$ {p.price}</p>
                  <button
                    className='btn btn-primary ms-1'
                    onClick={() => navigate(`/product/${p.slug}`)}>More Details</button>
                  <button
                    className='btn btn-secondary ms-1'

                    onClick={() => {
                      setCart([...cart, p])
                      toast.success("Item added to cart successfully")

                    }}

                  >Add to Cart</button>

                </div>
              </button>


            ))}
          </div>





          <div className='m-2 p-3'>
            {product && product.length < total && (
              <button
                className='btn btn-warning'
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}

              >
                {loading ? "Loading..." : "Loadmore"}
              </button>
            )}
          </div>







        </div>
      </div>





    </Layout>
  )
}

export default HomePage




