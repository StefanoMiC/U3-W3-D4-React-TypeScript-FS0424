import { Button, Card, Col } from "react-bootstrap";
import { IBook } from "../interfaces/IBook";

interface SingleBookProps {
  test: string;
  book: IBook;
}

const SingleBook = ({ book, test }: SingleBookProps) => {
  return (
    <Col xs={12} md={3}>
      <Card>
        <Card.Img variant="top" src={book.imageUrl} />
        <Card.Body>
          <Card.Title className="text-truncate">{book.title}</Card.Title>
          <Card.Text>{test}</Card.Text>
          <Card.Text className="line-truncate-3">{book.description}</Card.Text>
          <Button variant="primary">{book.price}€</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default SingleBook;
