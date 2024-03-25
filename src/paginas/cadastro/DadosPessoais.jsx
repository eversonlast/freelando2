
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import { Col, Row } from "react-grid-system";
import { BotaoEstilizado } from "../../componentes/Botao/BotaoEstilizado"
import { Link } from "react-router-dom";
import { CampoTexto } from "../../componentes/CampoTexto/CampoTexto";
import { ListaSuspensa } from "../../componentes/ListaSuspensa/ListaSuspensa";

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

const DadosPessoais = () => {
    return (<div >
        <div style={{ textAlign: "center" }}>
            <Tipografia variante="h1" componente="h1">
                Crie seu Cadastro
            </Tipografia>
            <Tipografia variante="body" componente="body">
                Crie seu perfil gratuitamente para começar a trabalhar com os melhores freelancers. Em seguida, você poderá dar mais detalhes sobre suas demandas e sobre sua forma de trabalho.
            </Tipografia>
        </div>
        <Row>
            <Col lg={12} md={12} sm={12}>
                <CampoTexto label="Nome Completo" />
            </Col>
        </Row>
        <Row>
            <Col lg={4} md={4} sm={4}>
                <ListaSuspensa titulo="Estado" opcoes={estadosBrasileiros} />
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
            <Col lg={6} md={6} sm={6}>
                <Link to="/cadastro/interesses">
                    <BotaoEstilizado variante="secundaria">
                        Anterior
                    </BotaoEstilizado>                
                </Link>
            </Col>
            <Col lg={6} md={6} sm={6}>
                <div style={{ textAlign: 'right' }}>
                    <Link to="/cadastro/concluido">
                        <BotaoEstilizado>
                            Próximo
                        </BotaoEstilizado>
                    </Link>
                </div>
            </Col>
        </Row>


    </div>)
}

export default DadosPessoais;