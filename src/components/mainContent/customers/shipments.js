import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import StyleShipp from "./shipments.module.scss";
import flower2 from "../../../image/flower2.jfif";
import { IoIosAdd } from 'react-icons/io';
import { AiOutlineSearch } from 'react-icons/ai';
import { ImArrowDownLeft2, ImArrowUpRight2 } from 'react-icons/im';
import { Form } from 'react-bootstrap'
import { useNavigate, Link } from 'react-router-dom';

function ShipmentsTwo() {
    const navigate = useNavigate();
    return (
        <div>
            <p><BiArrowBack className={StyleShipp.backCore} onClick={() => navigate(-1)} /></p>
            <div className={StyleShipp.holdPro}>
                <div className={StyleShipp.holdPro2}>
                    <img src={flower2} alt="Profile" className={StyleShipp.img} />
                    <div>
                        <h4 className={StyleShipp.name}>Albet Nelson</h4>
                        <p className={StyleShipp.email}>AlbetNelson@gmail.com</p>
                        <p className={StyleShipp.email}>09098402605</p>
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
                        <input type="search" placeholder="Search by Shipments ID, Destination" className={StyleShipp.search2} />
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
                            <tr>
                                <td className={StyleShipp.tableBorder}><span className={StyleShipp.import}><ImArrowUpRight2 /></span>Export</td>
                                <td className={StyleShipp.tableBorder}>
                                    <div>
                                        <p className={StyleShipp.ngapp}>NGAPP</p>
                                        <p className={StyleShipp.ngapp2}>Lagos, Nigeria</p>
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
                                        <p className={StyleShipp.ngapp}>NGAPP</p>
                                        <p className={StyleShipp.ngapp2}>Lagos, Nigeria</p>
                                    </div>
                                </td>
                                <td className={StyleShipp.tableBorder}>2022/08/10</td>
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
                            <tr>
                                <td className={StyleShipp.tableBorder}><div className={StyleShipp.holdImage}><span className={StyleShipp.import}><ImArrowDownLeft2 /></span><span>Import</span></div></td>
                                <td className={StyleShipp.tableBorder}>
                                    <div>
                                        <p className={StyleShipp.ngapp}>NGAPP</p>
                                        <p className={StyleShipp.ngapp2}>Lagos, Nigeria</p>
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
                                        <p className={StyleShipp.ngapp}>NGAPP</p>
                                        <p className={StyleShipp.ngapp2}>Lagos, Nigeria</p>
                                    </div>
                                </td>
                                <td className={StyleShipp.tableBorder}>2022/08/10</td>
                                <td className={StyleShipp.tableBorder}>78398368</td>
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
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default ShipmentsTwo;