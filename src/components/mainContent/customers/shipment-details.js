import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import detailStyle from "./shipment-details.module.scss";
import { useNavigate } from 'react-router-dom';
import { ImArrowDownLeft2, ImArrowUpRight2 } from 'react-icons/im';

function ShipmentDetails(props) {
    const navigate = useNavigate();
    return (
        <div>
            <div className={detailStyle.holdTracking}>
                <div className={detailStyle.backArrow}>
                    <BiArrowBack className={detailStyle.backCore} onClick={() => navigate(-1)} />
                    <h2 className={detailStyle.h2Name}>Shipment Details</h2>
                </div>
                <div className={detailStyle.backArrow}>
                    <button className={detailStyle.whiteButton}>Invoice</button>
                    <button className={detailStyle.whiteButton}>Track/Update Shipment</button>
                </div>
            </div>
            <div className={detailStyle.holdTable}>
                <div>
                    <span className={detailStyle.import}><ImArrowUpRight2 /></span>
                    <span>Export</span>
                </div>
                <div>
                </div>
                <div>
                    <span>Apr 02, 2022</span>
                </div>
                <div>
                </div>
                <div>
                    <p className={detailStyle.ship}>Shipment ID</p>
                    <span>678399363</span>
                </div>
            </div>
            <div className={detailStyle.holdTable2}>
                <div>
                    <p>Port of Discharge</p>
                    <h3>NGAPP</h3>
                    <span>Lagos, Nigeria</span>
                </div>
                <div className={detailStyle.holdLine}>
                    <div className={detailStyle.smallCircle}></div>
                    <div className={detailStyle.lineMe}></div>
                    <div className={detailStyle.smallCircle}></div>
                </div>
                <div>
                    <p>Port of Discharge</p>
                    <h3>NGAPP</h3>
                    <span>Lagos, Nigeria</span>
                </div>
            </div>
        </div>
    );
}

export default ShipmentDetails;