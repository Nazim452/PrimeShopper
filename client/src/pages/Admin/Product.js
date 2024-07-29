
import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { toast } from "react-toastify";

import { Link } from "react-router-dom";
import Spinner from "../Spinner";
const Products = () => {
    const [products, setProducts] = useState([]);
    const[loading,setLoading] = useState(false);
  
    //getall products
    const getAllProducts = async () => {
        try {
            setLoading(true);

            const { data } = await axios.get("/api/v1/product/get-product");
            setLoading(false);
            setProducts(data.products);
            console.log("Received products: in product js", data.products);
        } catch (error) {
            console.log(error);
          
        }
    };

    //lifecycle method
    useEffect(() => {
        getAllProducts();
    }, []);
    return (
        <Layout>

           
            <div className="row m-3 p-3 container-fluid">
                <div className=" col-md-3">
                    <AdminMenu />
                </div>
                <div className="col-md-9 ">
                    <h1 className="text-center dashboard">All Products List</h1>
                    <div className="d-flex flex-wrap">
                    {loading&&<Spinner/>}
                        {products?.map((p) => (
                            <Link
                                key={p._id}
                                to={`/dashboard/admin/product/${p.slug}`}
                                className="product-link"
                            >
                                <div 
                               
                                className="card m-2" style={{ width: "18rem",height:"500px" }}>
                                    <img
                                        src={`/api/v1/product/product-photo/${p._id}`}
                                        className="card-img-top"
                                        alt={p.name}
                                        height={350}
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{p.name}</h5>
                                        <p className="card-text">{p.description.substring(0,100)}...</p>
                                    </div>
               
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Products;