import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default (props) => {
    return (
        <>
            <Modal
                size="sm"
                centered
                show={props.showAlert}
                onHide={props.onCloseAlert}>
                <Modal.Header>
                    <Modal.Title>Erro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Verifique se o titulo e o link estão corretos!!
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={props.onCloseAlert}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
