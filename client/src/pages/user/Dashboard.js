import React from 'react'
import Layout from '../../components/Layout/Layout'
import UserMenu from '../../components/Layout/UserMenu'
import { useAuth } from '../../context/auth'
const Dashboard = () => {
  const { auth } = useAuth();
  return (
    <Layout title={'DashBoard - Ecommerce App'}>
      <div className="container-flui m-3 p-3">

        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          {/* <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>Name - {auth?.user?.name}</h3>
              <h3>Email - {auth?.user?.email}</h3>
              <h3>Address - {auth?.user?.address}</h3>

            </div>
          </div> */}




         

          <div className="card mt-10" style={{ width: '58rem' }} m>
          <div className="card-header dashboard-item1">
            {auth?.user?.name}'s DashBoard
            </div>
          
            <ul className="list-group list-group-flush">
              <li className="list-group-item dashboard-item">Name - {auth?.user?.name}</li>
              <li className="list-group-item dashboard-item">Email - {auth?.user?.email}</li>
              <li className="list-group-item dashboard-item">Address - {auth?.user?.address}
              </li>
            </ul>
          </div>

        </div>
      </div>
    </Layout>
  )
}

export default Dashboard