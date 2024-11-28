import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

export default function AddStudentModal({
  show,
  handleClose,
  addStudentHandler,
}) {
  const [formData, setFormData] = useState({
    name: "",
    github: "",
  });
  const clearFormData = () =>
    setFormData({
      name: "",
      github: "",
    });

  // const [err, setErr] = useState(null)
  // useEffect(() => { if(...) setErr('некорректно') else setErr(null) }, [formData])
  const changeHandler = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const githubIsValid = /^https:\/\/github\.com\/[a-zA-Z0-9-]+$/.test(
    formData.github
  );
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Форма добавления студента</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Имя студента</Form.Label>
            <Form.Control
              name="name"
              value={formData.name}
              onChange={changeHandler}
              type="text"
              placeholder="Иван Иванов"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Github</Form.Label>
            <Form.Control
              name="github"
              value={formData.github}
              onChange={changeHandler}
              type="text"
              placeholder="https://github.com/username"
              isInvalid={!githubIsValid && formData.github.length > 0}
            />
            <Form.Control.Feedback type="invalid">
              Введи корректную ссылку на гитхаб
            </Form.Control.Feedback>
          </Form.Group>
          {/* <Button variant="primary" type="submit">
            Submit
          </Button> */}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => {
            handleClose();
            clearFormData();
          }}
        >
          Отменить
        </Button>
        <Button
          variant="primary"
          onClick={() =>
            githubIsValid &&
            addStudentHandler(formData).then(handleClose).then(clearFormData)
          }
          disabled={!githubIsValid}
        >
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
