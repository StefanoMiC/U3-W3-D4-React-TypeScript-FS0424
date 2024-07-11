import { Component } from "react";
import { Link } from "react-router-dom";

// creiamo un'interfaccia per le props di questo componente
// siccome è un'interfaccia specifica di questo componente ha senso tenerla dentro al componente stesso

interface ClassComponentProps {
  subtitle: string;
  color?: string;
}

interface ClassComponentState {
  isLoading: boolean;
}

// per configurare un componente a Classe in TS dobbiamo fornire un'interfaccia per il primo parametro di tipo (P)
// sfruttando i generics e passando la nostra interfaccia per le props del componente
// dovremo passare anche un secondo parametro (S) di tipo nel caso in cui avessimo uno stato,
// forniremo la nostra interfaccia per lo state
class ClassComponent extends Component<ClassComponentProps, ClassComponentState> {
  state = {
    isLoading: true
  };

  render() {
    return (
      // nel setState potremo passare solo proprietà precedentemente definite nell'interfaccia per lo State
      <div onClick={() => this.setState({ isLoading: false })}>
        {/* adesso scrivere this.props. o this.state. ci darà suggerimenti coerenti, di quello che esiste effetivamente */}
        <h2 style={{ color: this.props.color }}>Componente a Classe{this.state.isLoading ? "..." : "!"}</h2>
        <p>{this.props.subtitle}</p>
        <Link to="/functional" className="btn btn-dark btn-sm">
          Vai al componente a Funzione
        </Link>
      </div>
    );
  }
}
export default ClassComponent;
