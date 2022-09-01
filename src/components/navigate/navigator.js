import React, { useEffect, useState } from 'react';
import logo from "../../image/logo.png"
import naviStyle from "./navigator.module.scss"
import { FaUserCircle, FaUsers } from 'react-icons/fa';
import { ImTruck } from 'react-icons/im';
import { IoDocumentText, IoGrid, IoMap } from 'react-icons/io5';
import { HiDocumentDuplicate, HiDocumentRemove } from 'react-icons/hi';
import { Link, useLocation } from "react-router-dom"

function Navigator() {
    const [current, setCurrent] = useState("/")
    const switchCurrent = (index) => {
        setCurrent(index)
    }
    useEffect(() => {
        switchCurrent(locations.pathname)
    })
    const locations = useLocation();
    return (
        <div className={naviStyle.holdAll}>
            <div className={naviStyle.holdLogo}>
                <img src={logo} alt="logo" />
            </div>
            <div className={naviStyle.holdNavigate}>
                <div className={naviStyle.menu}>
                    <div className={naviStyle.point} onClick={() => { switchCurrent(locations.pathname) }}>
                        <Link to="/" className={naviStyle.link}>
                            <span className={naviStyle.imkg}><IoGrid className={current === "/" ? naviStyle.actIcon : naviStyle.con} /></span>
                            <span className={current === "/" ? naviStyle.adminText : naviStyle.text}>Dashboard</span>
                        </Link>
                    </div>
                </div>
                <div className={naviStyle.menu}>
                    <div className={naviStyle.point} onClick={() => { switchCurrent(locations.pathname) }}>
                        <Link to="/admin" className={naviStyle.link}>
                            <span className={naviStyle.imkg}><FaUserCircle className={current === "/admin" ? naviStyle.actIcon : naviStyle.con} /></span>
                            <span className={current === '/admin' ? naviStyle.adminText : naviStyle.text}>Admin</span>
                        </Link>
                    </div>
                </div>
                <div className={naviStyle.menu}>
                    <div className={naviStyle.point} onClick={() => { switchCurrent(locations.pathname) }}>
                        <Link to="/customers" className={naviStyle.link}>
                            <span className={naviStyle.imkg}><FaUsers className={current === "/customers" || current === "/shipments" || current === "/shipmentDetails" ? naviStyle.actIcon : naviStyle.con} /></span>
                            <span className={current === "/customers" || current === "/shipments" || current === "/shipmentDetails" ? naviStyle.adminText : naviStyle.text}>Customers</span>
                        </Link>
                    </div>
                </div>
                <div className={naviStyle.menu}>
                    <div className={naviStyle.point} onClick={() => { switchCurrent(locations.pathname) }}>
                        <Link to="/shipment" className={naviStyle.link}>
                            <span className={naviStyle.imkg}><ImTruck className={current === "/shipment" ? naviStyle.actIcon : naviStyle.con} /></span>
                            <span className={current === "/shipment" ? naviStyle.adminText : naviStyle.text}>Shipments</span>
                        </Link>
                    </div>
                </div>
                <div className={naviStyle.menu}>
                    <div className={naviStyle.point} onClick={() => { switchCurrent(locations.pathname) }}>
                        <Link to="/tracking" className={naviStyle.link}>
                            <span className={naviStyle.imkg}><IoMap className={current === "/tracking" ? naviStyle.actIcon : naviStyle.con} /></span>
                            <span className={current === "/tracking" ? naviStyle.adminText : naviStyle.text}>Tracking</span>
                        </Link>
                    </div>
                </div>
                <div className={naviStyle.menu}>
                    <div className={naviStyle.point} onClick={() => { switchCurrent(locations.pathname) }}>
                        <Link to="/documents" className={naviStyle.link}>
                            <span className={naviStyle.imkg}><IoDocumentText className={current === "/documents" ? naviStyle.actIcon : naviStyle.con} /></span>
                            <span className={current === "/documents" ? naviStyle.adminText : naviStyle.text}>Documents</span>
                        </Link>
                    </div>
                </div>
                <div className={naviStyle.menu}>
                    <div className={naviStyle.point} onClick={() => { switchCurrent(locations.pathname) }}>
                        <Link to="/rates" className={naviStyle.link}>
                            <span className={naviStyle.imkg}><IoDocumentText className={current === "/rates" ? naviStyle.actIcon : naviStyle.con} /></span>
                            <span className={current === "/rates" ? naviStyle.adminText : naviStyle.text}>Rates</span>
                        </Link>
                    </div>
                </div>
                <div className={naviStyle.menu}>
                    <div className={naviStyle.point} onClick={() => { switchCurrent(locations.pathname) }}>
                        <Link to="/quotes" className={naviStyle.link}>
                            <span className={naviStyle.imkg}><HiDocumentDuplicate className={current === "/quotes" ? naviStyle.actIcon : naviStyle.con} /></span>
                            <span className={current === "/quotes" ? naviStyle.adminText : naviStyle.text}>Quotes</span>
                        </Link>
                    </div>
                </div>
                <div className={naviStyle.menu}>
                    <div className={naviStyle.point} onClick={() => { switchCurrent(locations.pathname) }}>
                        <Link to="/invoices" className={naviStyle.link}>
                            <span className={naviStyle.imkg}><HiDocumentRemove className={current === "/invoices" ? naviStyle.actIcon : naviStyle.con} /></span>
                            <span className={current === "/invoices" ? naviStyle.adminText : naviStyle.text}>Invoices</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navigator;