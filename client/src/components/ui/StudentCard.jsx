import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function StudentCard({ student, deleteHandler, addBonusHandler }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={student.github + ".png"} />
      <Card.Body>
        <Card.Title>{student.bonus}</Card.Title>
        <Card.Text>{student.name}</Card.Text>
        <Button onClick={() => addBonusHandler(student.id)} variant="primary">+1 ББ</Button>
        <Button onClick={() => deleteHandler(student.id)} variant="danger">
          Удалить
        </Button>
      </Card.Body>
    </Card>
  );
}
