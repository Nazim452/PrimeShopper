import React from 'react'

import { useSearch } from '../context/search';
import Layout from '../components/Layout/Layout';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/cart';
import { toast } from 'react-toastify';
const Search = () => {

    const { values, setValues } = useSearch();
    const navigate = useNavigate();
    const { cart, setCart } = useCart([]);
  



    return (
        <Layout title={"Search results"}>

            <div className="container">
                <div className="text-center">
                    <h1>Search Results</h1>
                    <h4>
                        {/* results me all product ko hamne svae kara liya tha */}

                        {
                            values?.results.length < 1 ? "No Product Found"
                                :
                                `Total Found Product is ${values?.results.length}`
                        }

                    </h4>

                    <div className="d-flex flex-wrap">
                        {values?.results?.map((p) => (

                            <div className="card m-2" style={{ width: '18rem' }} >
                                <img src={`/api/v1/product/product-photo/${p._id}`} className="card-img-top" alt={p?.name}
                                    height={350}
                                    style={{ objectFit: 'cover' }} />
                                <div className="card-body">
                                    <h5 className="card-title">{p.name}</h5>
                                    <p className="card-text">{p.description.substring(0, 30)}...</p>
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
                            </div>


                        ))}
                    </div>
                </div>
            </div>


        </Layout>
    )
}

export default Search