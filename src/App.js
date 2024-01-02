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
import { ListaSuspensa } from './componentes/ListaSuspensa/ListaSuspensa';

const estadosBrasileiros = [
  { "text": "Acre", "value": "AC" },
  { "text": "Alagoas", "value": "AL" },
  { "text": "Amapá", "value": "AP" },
  { "text": "Amazonas", "value": "AM" },
  { "text": "Bahia", "value": "BA" },
  { "text": "Ceará", "value": "CE" },
  { "text": "Distrito Federal", "value": "DF" },
  { "text": "Espírito Santo", "value": "ES" },
  { "text": "Goiás", "value": "GO" },
  { "text": "Maranhão", "value": "MA" },
  { "text": "Mato Grosso", "value": "MT" },
  { "text": "Mato Grosso do Sul", "value": "MS" },
  { "text": "Minas Gerais", "value": "MG" },
  { "text": "Pará", "value": "PA" },
  { "text": "Paraíba", "value": "PB" },
  { "text": "Paraná", "value": "PR" },
  { "text": "Pernambuco", "value": "PE" },
  { "text": "Piauí", "value": "PI" },
  { "text": "Rio de Janeiro", "value": "RJ" },
  { "text": "Rio Grande do Norte", "value": "RN" },
  { "text": "Rio Grande do Sul", "value": "RS" },
  { "text": "Rondônia", "value": "RO" },
  { "text": "Roraima", "value": "RR" },
  { "text": "Santa Catarina", "value": "SC" },
  { "text": "São Paulo", "value": "SP" },
  { "text": "Sergipe", "value": "SE" },
  { "text": "Tocantins", "value": "TO" }
]

const divStyle = {
  margin: '0px'
}

function App() {
  return (
    <ProvedorTema>
      <Estilos />
      <Cabecalho />
      <Container style={{margin: '80px 0px'}}>
        <Row justify='center' >
          <Col lg={6} md={8} sm={12}>
            <Card>
              <Tipografia variante="h1" componente="h1">
                Freelando
              </Tipografia>
              <Tipografia variante="body" componente="body">
                Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
              </Tipografia>
              <Row>
                <Col lg={12} md={12} sm={12}>
                    <CampoTexto label="Nome Completo" />
                </Col>
              </Row>
              <Row>
                <Col lg={4} md={4} sm={4}>
                    <ListaSuspensa titulo="Estado" opcoes={estadosBrasileiros}/>
                </Col>
                <Col lg={8} md={8} sm={8}>
                    <CampoTexto label="Cidade" />
                </Col>
              </Row>
              <Row>
                <Col lg={12} md={12} sm={12}>
                    <CampoTexto label="E-mail" />
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6} sm={6}>
                    <CampoTexto label="Senha" />
                </Col>
                <Col lg={6} md={6} sm={6}>
                    <CampoTexto label="Repita a Senha" />
                </Col>
              </Row>
              <Row>
                  <Col lg={6} m={6} sm={6}>
                    <BotaoEstilizado variante="secundaria">Anterior</BotaoEstilizado>
                  </Col>
                  <Col lg={6} m={6} sm={6}>
                    <div style={{textAlign: 'right'}}>
                      <BotaoEstilizado>Próximo</BotaoEstilizado>
                    </div>
                  </Col>
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
