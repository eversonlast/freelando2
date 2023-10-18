import logo from './logo.svg';
import './App.css';
import { Estilos } from './componentes/EstilosGlobais/Estilos';
import { Card } from './componentes/Card/Card';
import { ProvedorTema } from './componentes/ProvedorTema/ProvedorTema';

function App() {
  return (
    <ProvedorTema>
      <Estilos />
        <Card>
          <h1>Freelando</h1>
        </Card>
    </ProvedorTema>
  );
}

export default App;
