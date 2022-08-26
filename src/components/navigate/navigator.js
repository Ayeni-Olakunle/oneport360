import React from 'react';
import Icon from "../../image/Icon.png"
import person from "../../image/person.png"
import manyPerson from "../../image/manyperson.png"
import bus from "../../image/bus.png"
import tracking from "../../image/tracking.png"
import document from "../../image/document.png"
import copy from "../../image/copy.png"
import invoice from "../../image/invoice.png"
import logo from "../../image/logo.png"
import naviStyle from "./navigator.module.scss"

function Navigator() {
    return (
        <div className={naviStyle.holdAll}>
            <div className={naviStyle.holdLogo}>
                <img src={logo} alt="logo" />
            </div>
            <div className={naviStyle.holdNavigate}>
                <div className={naviStyle.menu}>
                    <span className={naviStyle.imkg}><img src={Icon} alt="Box" /></span>
                    <span className={naviStyle.text + " " + naviStyle.adminText}>Dashboard</span>
                </div>
                <div className={naviStyle.menu}>
                    <span className={naviStyle.imkg}><img src={person} alt="Box" /></span>
                    <span className={naviStyle.text}>Admin</span>
                </div>
                <div className={naviStyle.menu}>
                    <span className={naviStyle.imkg}><img src={manyPerson} alt="Box" /></span>
                    <span className={naviStyle.text}>Customers</span>
                </div>
                <div className={naviStyle.menu}>
                    <span className={naviStyle.imkg}><img src={bus} alt="Box" /></span>
                    <span className={naviStyle.text}>Shipments</span>
                </div>
                <div className={naviStyle.menu}>
                    <span className={naviStyle.imkg}><img src={tracking} alt="Bus" /></span>
                    <span className={naviStyle.text}>Tracking</span>
                </div>
                <div className={naviStyle.menu}>
                    <span className={naviStyle.imkg}><img src={document} alt="Bus" /></span>
                    <span className={naviStyle.text}>Documents</span>
                </div>
                <div className={naviStyle.menu}>
                    <span className={naviStyle.imkg}><img src={document} alt="Bus" /></span>
                    <span className={naviStyle.text}>Rates</span>
                </div>
                <div className={naviStyle.menu}>
                    <span className={naviStyle.imkg}><img src={copy} alt="Bus" /></span>
                    <span className={naviStyle.text}>Quotes</span>
                </div>
                <div className={naviStyle.menu}>
                    <span className={naviStyle.imkg}><img src={invoice} alt="Bus" /></span>
                    <span className={naviStyle.text}>Invoices</span>
                </div>
            </div>
        </div>
    );
}

export default Navigator;