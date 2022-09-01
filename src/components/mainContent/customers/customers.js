import React, { useEffect, useState } from 'react';
import { IoIosAdd } from 'react-icons/io';
import customerStyles from "./customers.module.scss";
import { Link } from "react-router-dom"
import axios from 'axios';
import Loader from "../../loader/loader"
import { useDispatch } from "react-redux";
import { positionState } from "../../../feature/customer"

function Customers() {
    const dispatch = useDispatch();
    const [allUsers, setAllUsers] = useState([]);
    const [loader, setLoader] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setLoader(true)
        axios
            .get("https://demo3522726.mockable.io/get_customers")
            .then((response) => {
                setAllUsers(response.data);
                setLoader(false)
            })
            .catch((err) => {
                setError(err.message);
                setLoader(false)
            })
    }, []);
    return (
        <div>
            <div>
                <button className={customerStyles.customerButton}>Add Customer <IoIosAdd className={customerStyles.iconKoko} /></button>
                <div>
                    <table className={customerStyles.holdTable}>
                        <thead>
                            <tr>
                                <td>First Name</td>
                                <td>Last Name</td>
                                <td>Email Address</td>
                                <td>Phone Number</td>
                                <td>Last Login</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allUsers.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className={customerStyles.tableBorder}><div className={customerStyles.holdImage}><img src={item.Avatar} alt="Profile" className={customerStyles.img} /> <span>{item.first_name}</span></div></td>
                                            <td className={customerStyles.tableBorder}>{item.last_name}</td>
                                            <td className={customerStyles.tableBorder}>{item.email}</td>
                                            <td className={customerStyles.tableBorder}>{item.phone}</td>
                                            <td className={customerStyles.tableBorder}>2022/08/10</td>
                                            <td className={customerStyles.tableBorder}>
                                                <div className={customerStyles.holdButin}>
                                                    <Link to="/shipment" className={customerStyles.customerWhaite2}>
                                                        <button className={customerStyles.customerWhaite} onClick={() => {
                                                            dispatch(positionState(item.id))
                                                        }}>
                                                            Shipments
                                                        </button>
                                                    </Link>
                                                    <button className={customerStyles.editButton}>Edit</button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <p style={{ textAlign: 'center' }}>{error}</p>
            {loader ? <Loader /> : null}
        </div >
    );
}

export default Customers;