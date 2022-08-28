import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import StyleShipp from "./shipments.module.scss";
import flower2 from "../../../image/flower2.jfif";
import { IoIosAdd } from 'react-icons/io';
import { Form } from 'react-bootstrap'
function ShipmentsTwo() {
    return (
        <div>
            <p><BiArrowBack className={StyleShipp.backCore} /></p>
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
                <div>
                    <div>
                        <button className={StyleShipp.customerButton}>Add New Shipments <IoIosAdd className={StyleShipp.iconKoko} /></button>
                        <Form.Select aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <Form.Select aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </div>
                    <input type="search" placeholder="Search by Shipments ID, Destination" />
                </div>
            </div>
        </div>
    );
}

export default ShipmentsTwo;