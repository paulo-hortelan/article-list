import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormEdit from "./FormEdit";

export default (props) => {
    return (
        <>
            <Modal
                size="lg"
                centered
                show={props.showModal}
                onHide={props.onClickCancel}>
                <Modal.Header closeButton>
                    <Modal.Title>Editar artigo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormEdit
                        value={props.article}
                        handleChange={props.handleChange}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={props.onClickCancel}>
                        Cancelar
                    </Button>
                    <Button variant="success" onClick={props.onClickSave}>
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
