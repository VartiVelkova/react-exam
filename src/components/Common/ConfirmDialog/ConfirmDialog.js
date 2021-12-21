import { Button, Modal } from "react-bootstrap"

const ConfirmDialog = ({
    show,
    onClose,
    onSave,
    message
}) => {

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Are you sure to delete?</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>Close</Button>
                <Button variant="primary" onClick={onSave}>Delete</Button>
            </Modal.Footer>

        </Modal>
    )

}

export default ConfirmDialog;