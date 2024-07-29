import React from 'react'
import Layout from '../components/Layout/Layout'
import useCategory from '../hooks/useCategory'
import { Link } from 'react-router-dom';
import { RiWomenFill } from "react-icons/ri";
import { CiStopwatch } from "react-icons/ci";
import { FaChild } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { FaMobileScreenButton } from "react-icons/fa6";
import { LuClock12 } from "react-icons/lu";
import { FcElectronics } from "react-icons/fc";
import Spinner from './Spinner';
const Categories = () => {

    const categories = useCategory();
    const {loading,setLoading} = useCategory();


    return (
        <Layout title={"All Categories"}>
            <h1 className='prodcut-heading'>All Categories</h1>

            <div className="container">

                {loading&& <Spinner/>}
                <div className="row">
                    {
                        categories.map((c) => (
                            <div className="col-md-6">

                                <Link
                                key={c._id}
                                 className='btn btn-secondary text-color m-2 filter-by1'
                                

                                    to={`/category/${c.slug}`}>
                                         {c.name==="Women Collection"&&<RiWomenFill />}
                                         {c.name==="Kids Collection"&&<FaChild />}
                                         {c.name==="Watches Collection"&&<CiStopwatch />}
                                         {c.name==="Men Collection"&&<FaPerson  />}
                                         {c.name==="Phone Collection"&&<FaMobileScreenButton   />}
                                         {c.name==="Clock Collection"&&<LuClock12 />}
                                         {c.name==="Electronic Collection"&&<FcElectronics  />}
                                    {c.name}
                                </Link>


                            </div>
                        ))
                    }
                </div>
            </div>

        </Layout>
    )
}

export default Categories