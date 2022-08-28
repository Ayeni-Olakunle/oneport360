import React from 'react';
import { IoIosAdd } from 'react-icons/io';
import customerStyles from "./customers.module.scss";
import flower2 from "../../../image/flower2.jfif";

function Customers() {
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
                            <tr>
                                <td className={customerStyles.tableBorder}>Jonh</td>
                                <td className={customerStyles.tableBorder}>Tom</td>
                                <td className={customerStyles.tableBorder}>jonh@gmail.com</td>
                                <td className={customerStyles.tableBorder}>09098402605</td>
                                <td className={customerStyles.tableBorder}>2022/08/10</td>
                                <td className={customerStyles.tableBorder}>
                                    <div className={customerStyles.holdButin}>
                                        <button className={customerStyles.customerWhaite}>Shipments</button>
                                        <button className={customerStyles.editButton}>Edit</button>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className={customerStyles.tableBorder}><div className={customerStyles.holdImage}><img src={flower2} alt="Profile" className={customerStyles.img} /> <span>Jonh</span></div></td>
                                <td className={customerStyles.tableBorder}>Tom</td>
                                <td className={customerStyles.tableBorder}>jonh@gmail.com</td>
                                <td className={customerStyles.tableBorder}>09098402605</td>
                                <td className={customerStyles.tableBorder}>2022/08/10</td>
                                <td className={customerStyles.tableBorder}>
                                    <div className={customerStyles.holdButin}>
                                        <button className={customerStyles.customerWhaite}>Shipments</button>
                                        <button className={customerStyles.editButton}>Edit</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
}

export default Customers;