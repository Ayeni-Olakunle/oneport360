import React, { useState } from 'react';
import logo from "../../image/logo.png"
import naviStyle from "./navigator.module.scss"
import { FaUserCircle, FaUsers } from 'react-icons/fa';
import { ImTruck } from 'react-icons/im';
import { IoDocumentText, IoGrid, IoMap } from 'react-icons/io5';
import { HiDocumentDuplicate, HiDocumentRemove } from 'react-icons/hi';
import { Link } from "react-router-dom"

function Navigator() {
    const [current, setCurrent] = useState(0)
    const switchCurrent = (index) => {
        setCurrent(index)
    }
    return (
        <div className={naviStyle.holdAll}>
            <div className={naviStyle.holdLogo}>
                <img src={logo} alt="logo" />
            </div>
            <div className={naviStyle.holdNavigate}>
                <div className={naviStyle.menu}>
                    <div className={naviStyle.point} onClick={() => { switchCurrent(0) }}>
                        <Link to="/dashboard" className={naviStyle.link}>
                            <span className={naviStyle.imkg}><IoGrid className={current === 0 ? naviStyle.actIcon : naviStyle.con} /></span>
                            <span className={current === 0 ? naviStyle.adminText : naviStyle.text}>Dashboard</span>
                        </Link>
                    </div>
                </div>
                <div className={naviStyle.menu}>
                    <div className={naviStyle.point} onClick={() => { switchCurrent(1) }}>
                        <Link to="/admin" className={naviStyle.link}>
                            <span className={naviStyle.imkg}><FaUserCircle className={current === 1 ? naviStyle.actIcon : naviStyle.con} /></span>
                            <span className={current === 1 ? naviStyle.adminText : naviStyle.text}>Admin</span>
                        </Link>
                    </div>
                </div>
                <div className={naviStyle.menu}>
                    <div className={naviStyle.point} onClick={() => { switchCurrent(2) }}>
                        <Link to="/customers" className={naviStyle.link}>
                            <span className={naviStyle.imkg}><FaUsers className={current === 2 ? naviStyle.actIcon : naviStyle.con} /></span>
                            <span className={current === 2 ? naviStyle.adminText : naviStyle.text}>Customers</span>
                        </Link>
                    </div>
                </div>
                <div className={naviStyle.menu}>
                    <div className={naviStyle.point} onClick={() => { switchCurrent(3) }}>
                        <Link to="/shipments" className={naviStyle.link}>
                            <span className={naviStyle.imkg}><ImTruck className={current === 3 ? naviStyle.actIcon : naviStyle.con} /></span>
                            <span className={current === 3 ? naviStyle.adminText : naviStyle.text}>Shipments</span>
                        </Link>
                    </div>
                </div>
                <div className={naviStyle.menu}>
                    <div className={naviStyle.point} onClick={() => { switchCurrent(4) }}>
                        <Link to="/tracking" className={naviStyle.link}>
                            <span className={naviStyle.imkg}><IoMap className={current === 4 ? naviStyle.actIcon : naviStyle.con} /></span>
                            <span className={current === 4 ? naviStyle.adminText : naviStyle.text}>Tracking</span>
                        </Link>
                    </div>
                </div>
                <div className={naviStyle.menu}>
                    <div className={naviStyle.point} onClick={() => { switchCurrent(5) }}>
                        <Link to="/documents" className={naviStyle.link}>
                            <span className={naviStyle.imkg}><IoDocumentText className={current === 5 ? naviStyle.actIcon : naviStyle.con} /></span>
                            <span className={current === 5 ? naviStyle.adminText : naviStyle.text}>Documents</span>
                        </Link>
                    </div>
                </div>
                <div className={naviStyle.menu}>
                    <div className={naviStyle.point} onClick={() => { switchCurrent(6) }}>
                        <Link to="/rates" className={naviStyle.link}>
                            <span className={naviStyle.imkg}><IoDocumentText className={current === 6 ? naviStyle.actIcon : naviStyle.con} /></span>
                            <span className={current === 6 ? naviStyle.adminText : naviStyle.text}>Rates</span>
                        </Link>
                    </div>
                </div>
                <div className={naviStyle.menu}>
                    <div className={naviStyle.point} onClick={() => { switchCurrent(7) }}>
                        <Link to="/quotes" className={naviStyle.link}>
                            <span className={naviStyle.imkg}><HiDocumentDuplicate className={current === 7 ? naviStyle.actIcon : naviStyle.con} /></span>
                            <span className={current === 7 ? naviStyle.adminText : naviStyle.text}>Quotes</span>
                        </Link>
                    </div>
                </div>
                <div className={naviStyle.menu}>
                    <div className={naviStyle.point} onClick={() => { switchCurrent(8) }}>
                        <Link to="/invoices" className={naviStyle.link}>
                            <span className={naviStyle.imkg}><HiDocumentRemove className={current === 8 ? naviStyle.actIcon : naviStyle.con} /></span>
                            <span className={current === 8 ? naviStyle.adminText : naviStyle.text}>Invoices</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navigator;