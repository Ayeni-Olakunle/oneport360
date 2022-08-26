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
        <div>
            <div className={naviStyle.holdLogo}>
                <img src={logo} alt="logo" />
            </div>
            <div>
                <div>
                    <span><img src={Icon} alt="Box" /></span>
                    <span>Dashboard</span>
                </div>
                <div>
                    <span><img src={person} alt="Box" /></span>
                    <span>Admin</span>
                </div>
                <div>
                    <span><img src={manyPerson} alt="Box" /></span>
                    <span>Customers</span>
                </div>
                <div>
                    <span><img src={bus} alt="Box" /></span>
                    <span>Shipments</span>
                </div>
                <div>
                    <span><img src={tracking} alt="Bus" /></span>
                    <span>Tracking</span>
                </div>
                <div>
                    <span><img src={document} alt="Bus" /></span>
                    <span>Documents</span>
                </div>
                <div>
                    <span><img src={document} alt="Bus" /></span>
                    <span>Rates</span>
                </div>
                <div>
                    <span><img src={copy} alt="Bus" /></span>
                    <span>Quotes</span>
                </div>
                <div>
                    <span><img src={invoice} alt="Bus" /></span>
                    <span>Invoices</span>
                </div>
            </div>
        </div>
    );
}

export default Navigator;