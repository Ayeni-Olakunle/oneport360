import React, { useState } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import detailStyle from "./shipment-details.module.scss";
import { useNavigate } from 'react-router-dom';
import { ImArrowUpRight2 } from 'react-icons/im';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { RiDeleteBinLine } from 'react-icons/ri';
import UploadFileModal from './uploadFileModal';

function ShipmentDetails(props) {
    const navigate = useNavigate();
    const [current, setCurrent] = useState(0)
    const [modalShow, setModalShow] = useState(false);
    const currentStake = (index) => {
        setCurrent(index)
    }
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
                    <h6>NGAPP</h6>
                    <span>Lagos, Nigeria</span>
                </div>
                <div className={detailStyle.holdLine}>
                    <div className={detailStyle.smallCircle}></div>
                    <div className={detailStyle.lineMe}></div>
                    <div className={detailStyle.smallCircle}></div>
                </div>
                <div>
                    <p>Port of Discharge</p>
                    <h6>NGAPP</h6>
                    <span>Lagos, Nigeria</span>
                </div>
                <div className={detailStyle.holdLine3}>
                </div>
            </div>
            <div className={detailStyle.buttonLine}>
                <button className={current === 0 ? detailStyle.butActive : detailStyle.but} onClick={() => { currentStake(0) }}>Documents</button>
                <button className={current === 1 ? detailStyle.butActive : detailStyle.but} onClick={() => { currentStake(1) }}>Cargo Details</button>
                <button className={current === 2 ? detailStyle.butActive : detailStyle.but} onClick={() => { currentStake(2) }}>Additional Services</button>
                <button className={current === 3 ? detailStyle.butActive : detailStyle.but} onClick={() => { currentStake(3) }}>Rate</button>
            </div>
            <div>
                <div className={current === 0 ? detailStyle.disG : detailStyle.disG2}>
                    <div className={detailStyle.docs}>
                        <h5 className={detailStyle.uploadText}>Uploaded Documents</h5>
                        <div className={detailStyle.holdButin}>
                            <button className={detailStyle.customerWhaite}>
                                Shipments
                            </button>
                            <button className={detailStyle.editButton} onClick={() => setModalShow(true)}>Upload Documents{"  "} <IoDocumentTextOutline /></button>
                        </div>
                    </div>
                    <div className={detailStyle.holdUpload}>
                        <div className={detailStyle.holdUpload2}>
                            <span className={detailStyle.fileIcon}><IoDocumentTextOutline /></span>
                            <div>
                                <p className={detailStyle.tiltle5}>NXP Form</p>
                                <p className={detailStyle.tiltle6}>NXP-Form.pdf</p>
                                <p className={detailStyle.tiltle7}>Uploaded by you</p>
                            </div>
                        </div>
                        <div>
                            <span className={detailStyle.fileIcon2}> <RiDeleteBinLine /></span>
                        </div>
                    </div>
                    <div className={detailStyle.holdUpload}>
                        <div className={detailStyle.holdUpload2}>
                            <span className={detailStyle.fileIcon}><IoDocumentTextOutline /></span>
                            <div>
                                <p className={detailStyle.tiltle5}>NXP Form</p>
                                <p className={detailStyle.tiltle6}>NXP-Form.pdf</p>
                                <p className={detailStyle.tiltle7}>Uploaded by you</p>
                            </div>
                        </div>
                        <div>
                            <span className={detailStyle.fileIcon2}> <RiDeleteBinLine /></span>
                        </div>
                    </div>
                </div>
                <div className={current === 1 ? detailStyle.disG : detailStyle.disG2}>Cargo Details</div>
                <div className={current === 2 ? detailStyle.disG : detailStyle.disG2}>Additional Services</div>
                <div className={current === 3 ? detailStyle.disG : detailStyle.disG2}>Rate</div>
            </div>
            <UploadFileModal show={modalShow} onHide={() => setModalShow(false)} />
        </div >
    );
}

export default ShipmentDetails;