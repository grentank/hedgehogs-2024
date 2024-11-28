import { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import StudentCard from "../ui/StudentCard";
import AddStudentModal from "../ui/AddStudentModal";
import axiosInstance from "../../services/axiosInstance";

export default function StudentsPage() {
  const [students, setStudents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  useEffect(() => {
    // fetch("/api/hedgehogs")
    //   .then((res) => res.json())
    //   .then((data) => setStudents(data));
    axiosInstance("/hedgehogs").then((res) => setStudents(res.data));
  }, []);

  const addStudentHandler = async (formData) => {
    const response = await axiosInstance.post("/hedgehogs", formData);
    if (response.status === 201) {
      setStudents((prev) => [...prev, response.data]);
    }
  };

  const deleteHandler = async (studentId) => {
    await axiosInstance.delete(`/hedgehogs/${studentId}`);
    setStudents((prev) => prev.filter((student) => student.id !== studentId));
  };

  const addBonusHandler = async (studentId) => {
    // if(students.find(st => id).bonus >= 30) deleteHandler(studentId)
    // else 
    await axiosInstance.patch(`/hedgehogs/${studentId}/bonus`);
    setStudents((prev) =>
      prev.map((student) =>
        student.id === studentId
          ? {
              ...student,
              bonus: student.bonus + 1,
            }
          : student
      )
    );
  };
  return (
    <>
      <Row>
        <Col xs={12} className="text-center mb-3 mt-3">
          <Button onClick={() => setShowModal(true)}>Добавить студента</Button>
        </Col>
        {students.map((student) => (
          <Col xs={4} key={student.id}>
            <StudentCard addBonusHandler={addBonusHandler} deleteHandler={deleteHandler} student={student} />
          </Col>
        ))}
      </Row>
      <AddStudentModal
        addStudentHandler={addStudentHandler}
        show={showModal}
        handleClose={handleClose}
      />
    </>
  );
}
