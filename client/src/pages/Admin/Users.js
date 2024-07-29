import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout/Layout'
import AdminMenu from '../../components/Layout/AdminMenu'
import axios from 'axios'

const Users = () => {

  const [user, SetUser] = useState([])

  const getAllUser = async () => {

    const { data } = await axios.get('/api/v1/product/users');

    SetUser(data.users);

  }

  useEffect(() => {
    getAllUser();
  }, [])



  return (
    <Layout title={"Dashboard - All user here"}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1 className='text-center dashboard mt-3'>All Users List</h1>

            
            {
              user.map((u) => (
                <>

                  <p

                    className='user-list'

                    key={u._id}>User Name - {u.name} 
                   <br/>User-Id - {u._id}   </p>

                 
                </>

              ))
            }



          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Users