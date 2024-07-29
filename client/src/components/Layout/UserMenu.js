import { NavLink } from "react-router-dom"

const UserMenu = () => {
    return (
        <>

            <div className="text-center ">
                <div className="list-group">
                    <h3 className="dashboard  ">Dashboard</h3>

                    <NavLink to="/dashboard/user/profile" className="list-group-item list-group-item-action dashboard">Profile</NavLink>
                    <NavLink to="/dashboard/user/orders" className="list-group-item list-group-item-action dashboard ">Your Orders</NavLink>
                   

                </div>

            </div>


        </>
    )
}

export default UserMenu