import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { IBook } from "../interfaces/IBook";

const FetchComponent = () => {
  //  "https://striveschool-api.herokuapp.com/food-books"

  // se non assegnassimo il tipo a questo stato iniziale diventerebbe, per inferenza, un array di never (never[])
  // non avremo mai la possibilità di utilizzare le proprietà degli oggetti interni in quanto avrebbero un tipo never assegnato (che non può avere proprietà interne)

  // in questo caso stiamo assegnando un tipo Book, derivante da un'interfaccia, ma non solo. Stiamo specificando un array di questi libri Book (Book[])
  const [books, setBooks] = useState<IBook[]>([]);

  const fetchBooks = async () => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/food-books");

      if (resp.ok) {
        const arrOfBooks = await resp.json();

        setBooks(arrOfBooks);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <Container className="mt-5">
      <Row className="justify-content-center text-center">
        <Col xs={12} md={6}>
          <h2>Libri disponibili:</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {books.map(book => (
          <SingleBook key={book.id} book={book} test="test" />
        ))}
      </Row>
    </Container>
  );
};

export default FetchComponent;
