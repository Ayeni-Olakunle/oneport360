import React, { useState, useEffect } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import StyleShipp from "./shipments.module.scss";
import flower2 from "../../../image/flower2.jfif";
import { IoIosAdd } from 'react-icons/io';
import { AiOutlineSearch } from 'react-icons/ai';
import { ImArrowDownLeft2, ImArrowUpRight2 } from 'react-icons/im';
import { Form } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Loader from "../../loader/loader"
import { useSelector } from "react-redux";

function ShipmentsTwo() {
    const navigate = useNavigate();
    const [allShipment, setAllShipment] = useState([]);
    const [loader, setLoader] = useState(false);
    const [inputText, setInputText] = useState("");
    const [error, setError] = useState("");
    const [imge, setImg] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const useSelect = useSelector((state) => state.customer.value);

    let inputHandler = (e) => {
        let lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase);
    };
    const filteredData = allShipment.filter((el) => {
        if (inputText === "") {
            return el;
        } else {
            return el.shipping_type.toLowerCase().includes(inputText);
        }
    });

    // const singleCustomer = () => {
    //     axios
    //         .get(`https://demo3522726.mockable.io/get_single_customer/${useSelect}`)
    //         .then((response) => {
    //             console.log(response);
    //             setImg(response.data.Avatar);
    //             setEmail(response.data.email);
    //             setPhone(response.data.phone);
    //             setName(`${response.data.first_name} ${response.data.last_name}`);
    //         })
    //         .catch((error) => {
    //             console.log(error.message);
    //         })
    // }

    const singleCustomer = () => {
        axios
            .get("https://demo3522726.mockable.io/get_single_customer/123456789")
            .then((response) => {
                setImg(response.data.Avatar);
                setEmail(response.data.email);
                setPhone(response.data.phone);
                setName(`${response.data.first_name} ${response.data.last_name}`);
            })
            .catch((error) => {
                console.log(error.message);
            })
    }

    const allShipments = () => {
        setLoader(true)
        axios
            .get("https://demo3522726.mockable.io/get_single_customer_shipments/123456789")
            .then((response) => {
                setAllShipment(response.data);
                setLoader(false)
            })
            .catch((error) => {
                setError(error.message);
                setLoader(false)
            })
    }

    useEffect(() => {
        allShipments()
        singleCustomer()

    }, []);
    return (
        <div>
            <p><BiArrowBack className={StyleShipp.backCore} onClick={() => navigate(-1)} /></p>
            <div className={StyleShipp.holdPro}>
                <div className={StyleShipp.holdPro2}>
                    <img src={imge} alt="Profile" className={StyleShipp.img} />
                    <div>
                        <h4 className={StyleShipp.name}>{name}</h4>
                        <p className={StyleShipp.email}>{email}</p>
                        <p className={StyleShipp.email}>{phone}</p>
                    </div>
                </div>
                <button className={StyleShipp.editButton}>Edit</button>
            </div>
            <div>
                <div></div>
                <div className={StyleShipp.holdSelect}>
                    <div className={StyleShipp.holdAddNewShip}>
                        <div className={StyleShipp.holdAddNewShipfor}>
                            <button className={StyleShipp.customerButton}>Add New Shipments <IoIosAdd className={StyleShipp.iconKoko} /></button>
                        </div>
                        <div className={StyleShipp.holdAddNewShip}>
                            <Form.Select aria-label="Default select example" className={StyleShipp.sele}>
                                <option>Shipment Type</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                        <div className={StyleShipp.holdAddNewShip}>
                            <Form.Select aria-label="Default select example">
                                <option>Shipment Date</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </Form.Select>
                        </div>
                    </div>
                    <div className={StyleShipp.search} >
                        <AiOutlineSearch />
                        <input type="search" placeholder="Search by Shipments ID, Destination" className={StyleShipp.search2} onChange={inputHandler} />
                    </div>
                </div>
                <div>
                    <table className={StyleShipp.holdTable}>
                        <thead>
                            <tr>
                                <td>Shipment Type</td>
                                <td>origin</td>
                                <td></td>
                                <td>destination</td>
                                <td>Shipment Date</td>
                                <td>Shiping ID</td>
                                <td></td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredData.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td className={StyleShipp.tableBorder}>
                                                {item.shipping_type === "import" ? <span><span className={StyleShipp.import}><ImArrowUpRight2 /></span>{item.shipping_type}</span> : <span><span className={StyleShipp.import}><ImArrowDownLeft2 /></span>{item.shipping_type}</span>}
                                            </td>
                                            <td className={StyleShipp.tableBorder}>
                                                <div>
                                                    <p className={StyleShipp.ngapp}>{item.origin_port_code}</p>
                                                    <p className={StyleShipp.ngapp2}>{`${item.state}, ${item.origin_port_country}`}</p>
                                                </div>
                                            </td>
                                            <td className={StyleShipp.tableBorder}>
                                                <div className={StyleShipp.holdLine}>
                                                    <div className={StyleShipp.smallCircle}></div>
                                                    <div className={StyleShipp.lineMe}></div>
                                                    <div className={StyleShipp.smallCircle}></div>
                                                </div>
                                            </td>
                                            <td className={StyleShipp.tableBorder}>
                                                <div>
                                                    <p className={StyleShipp.ngapp}>{item.destination_port_code}</p>
                                                    <p className={StyleShipp.ngapp2}>{`${item.destination_port_city}, ${item.destination_port_country}`}</p>
                                                </div>
                                            </td>
                                            <td className={StyleShipp.tableBorder}>{item.shipment_pickup_date.slice(0, 10)}</td>
                                            <td className={StyleShipp.tableBorder}>38846729</td>
                                            <td className={StyleShipp.tableBorder}>
                                                <div className={StyleShipp.holdButin}>
                                                    <Link to="/shipmentDetails" className={StyleShipp.customerWhaite2}>
                                                        <button className={StyleShipp.editButton}>
                                                            View Details
                                                        </button>
                                                    </Link>
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
        </div>
    );
}

export default ShipmentsTwo;