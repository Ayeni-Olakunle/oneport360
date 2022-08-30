import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { HiOutlineDocumentAdd } from 'react-icons/hi'
import modalStyles from "./uploadFileModal.module.scss"

function UploadFileModal(props) {

    return (
        <>

            <Modal
                {...props}
                aria-labelledby="contained-modal-title-vcenter"
            >
                <Modal.Header closeButton>
                    <Modal.Title className={modalStyles.documentHeader} id="contained-modal-title-vcenter">
                        <p className={modalStyles.document}>Documents Upload</p>
                        <span className={modalStyles.vitae}>Rhoncus dui convallis lorem egestas molestie vitae nibh.</span>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <p className={modalStyles.selecter}>Select Document type to upload</p>
                        <Form.Select>
                            <option>Select Document type</option>
                            <option>PDF</option>
                            <option>JPE</option>
                            <option>JPEG</option>
                            <option>SVG</option>
                        </Form.Select>
                    </div>
                    <div className={modalStyles.uploadKoko}>
                        <div>
                            <HiOutlineDocumentAdd style={{ color: '#3AB44A', fontSize: '30px', margin: '10px' }} />
                        </div>
                        <p><span style={{ color: '#3AB44A' }}>Click to upload a file </span>or drag and drop</p>
                        <p style={{ color: '#6B7280' }}>PNG, JPG, , GIF upto 5MB</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                        <button className={modalStyles.uplo}>Upload</button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default UploadFileModal