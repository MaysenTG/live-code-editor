import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function FormModal(props) {
    return (
      <>
        <Modal {...props} fullscreen={true}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        id="fullscreenModal">
          <Modal.Header closeButton>
            <Modal.Title as='modalTitle'>Live Fullscreen Webpage</Modal.Title>
          </Modal.Header>
          <Modal.Body><iframe title="CodePreview" id="iframePreview" srcDoc={"<html><head><style>"+props.css + "</style></head><body>"+props.html+"</body</html>"} src="preview.html"></iframe></Modal.Body>
        </Modal>
      </>
    );
  }

export default FormModal;