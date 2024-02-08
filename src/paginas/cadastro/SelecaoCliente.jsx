import { Col, Row } from "react-grid-system";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";

import cliente from '../../img/Imagens/cliente.png'
import freelancer from '../../img/Imagens/freela.png'

const SelecaoCliente = () =>{
    return (<>
        <Tipografia variante="h1" componente="h1">
            Crie seu Cadastro
        </Tipografia>
        <Tipografia variante="h3" componente={'h2'}>
            Como podemos te ajudar?
        </Tipografia>
        <Row>
            <Col md={6} sm={12}>
                <img src={cliente} alt=""/>
            </Col>
            <Col md={6} sm={12}>
                <img src={freelancer} alt=""/>
            </Col>

        </Row>
    </>)
}

export default SelecaoCliente;