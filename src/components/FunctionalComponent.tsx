import { useEffect, useState } from "react";
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

interface FunctionalComponentProps {
  subtitle: string;
  color?: string;
}

interface MovieObject {
  title: string;
  year: number;
}

const FunctionalComponent = ({ subtitle, color }: FunctionalComponentProps) => {
  // non è obbligatorio specificare PER FORZA il tipo nel caso di dati primitivi e semplici come questo false
  // secondo le best practices di TS laddove sia possibile lasciare che il tipo venga inferito, sarebbe il caso di lasciarglielo fare in automatico
  const [isLoading, setIsLoading] = useState(true);

  // in questo caso se creiamo uno stato iniziale null, esigenza normale in caso di stati che dovranno contenere oggetti (per es. dopo una fetch)
  // non possiamo permettere a TS di inferire in automatico SOLO il tipo null, perché sarà sempre e solo quello, senza possibilità di cambiare.

  // piuttosto, dobbiamo avvertirlo dell'eventualità che possa INIZIARE con null, e diventare un oggetto in un qualche momento nel futuro
  // quindi dovremmo lasciarci la possibilità che SIA null SIA oggetto (di tipo MovieObject) siano tipi validi per il contenuto della variabile movieObj,
  // e per il valore passato nell'argomento di setMovieObj
  const [movieObj, setMovieObj] = useState<null | MovieObject>(null);

  useEffect(() => {
    console.log("componentDidMount");
  }, []);

  return (
    <div
      onClick={() => {
        setIsLoading(false);
      }}
    >
      {/* adesso scrivere this.props. o this.state. ci darà suggerimenti coerenti, di quello che esiste effetivamente */}
      <h2 style={{ color }}>Componente a Funzione{isLoading ? "..." : "!"}</h2>
      <p>{subtitle}</p>

      <Button
        onClick={() =>
          setMovieObj({
            title: "Batman Begins",
            year: 2009
          })
        }
      >
        Create Object
      </Button>

      {movieObj ? (
        <div>
          <h4>{movieObj.title}</h4>
          <p>{movieObj.year}</p>
        </div>
      ) : (
        <Alert variant="warning">niente da visualizzare</Alert>
      )}

      <Link to="/" className="btn btn-dark btn-sm">
        Vai al componente a Classe
      </Link>
    </div>
  );
};

export default FunctionalComponent;
