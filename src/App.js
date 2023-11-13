import './App.css';
import { Estilos } from './componentes/EstilosGlobais/Estilos';
import { Card } from './componentes/Card/Card';
import { ProvedorTema } from './componentes/ProvedorTema/ProvedorTema';
import { Cabecalho } from './componentes/Cabecalho/Cabecalho';
import { Tipografia } from './componentes/Tipografia/Tipografia';
import { CampoTexto } from './componentes/CampoTexto/CampoTexto';
import { Rodape } from './componentes/Rodape/Rodape';
import { Col, Container, Row } from 'react-grid-system';
import { BotaoEstilizado } from './componentes/Botao/BotaoEstilizado';

const divStyle = {
  margin: '0px'
}

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Cabecalho />
      <Container>
        <Row justify='center' >
          <Col lg={6}>
            <Card>
              <Tipografia variante="h1" componente="h1">
                Freelando
              </Tipografia>
              <Tipografia variante="body" componente="body">
                Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
              </Tipografia>
              <CampoTexto label="Nome Completo" />
              <Row justify='space-between' style={divStyle}>
                <BotaoEstilizado variante='secundario' children={"Anterior"} />
                <BotaoEstilizado children={'Próximo'}/>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
      <Rodape />
    </ProvedorTema>
  );
}

export default App;
