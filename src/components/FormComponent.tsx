import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";

const FormComponent = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  //   function handleChange<T>(setState: Dispatch<SetStateAction<T>>, targetData: T) {
  //     setState(targetData);
  //   }

  //   sintassi equivalente (ma più lunga) di una funzione definita come arrow dentro una variabile alla quale
  // dobbiamo specificare il tipo attraverso un Custom Type

  type HandleChangeType = <T>(x: Dispatch<SetStateAction<T>>, y: T) => void;

  const handleChange: HandleChangeType = (setState, targetData) => {
    setState(targetData);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //   console.log("name", name);
    //   console.log("surname", surname);
    //   console.log("checkbox", checkbox);

    console.table({ name, surname, checkbox });
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <h2>Form Component</h2>
          <Form
            // onSubmit={e => {
            //   e.preventDefault();

            //   //   console.log("name", name);
            //   //   console.log("surname", surname);
            //   //   console.log("checkbox", checkbox);

            //   console.table({ name, surname, checkbox });
            // }}

            // così riusciamo a spostare la funzione fuori dalla nostra struttura JSX mantenendo le logiche separate
            // oltretutto manteniamo il tipo corretto, avendo usato lo stesso tipo che sarebbe stato inferito in automatico
            // se la funzione fosse stata scritta inline (vedi definizione sul parametro e di handleSubmit)
            onSubmit={e => handleSubmit(e)}
          >
            <Form.Group className="mb-3" controlId="name-input">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il tuo nome"
                value={name}
                //   onChange={e => setName(e.target.value)}
                onChange={e => handleChange(setName, e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="surname-input">
              <Form.Label>Cognome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Inserisci il tuo cognome"
                value={surname}
                //   onChange={e => setSurname(e.target.value)}
                onChange={e => handleChange(setSurname, e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Check
                id="random-check"
                type="checkbox"
                label="Check me out"
                checked={checkbox}
                //   onChange={e => setCheckbox(e.target.checked)}
                onChange={e => handleChange(setCheckbox, e.target.checked)}
              />
            </Form.Group>
            <Button type="submit">Invia</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default FormComponent;
