import { Col, Row } from "react-grid-system";
import { Tipografia } from "../../componentes/Tipografia/Tipografia";

import cliente from '../../img/Imagens/cliente.png'
import freelancer from '../../img/Imagens/freela.png'
import {Link} from "../../componentes/Link/Link";

import {Link as RouterLink} from 'react-router-dom';
import { useCadastroUsuarioContext } from "../../contexto/CadastroUsuario";

const SelecaoCliente = () =>{
    const {setPerfil} = useCadastroUsuarioContext();
    return (<div  style={{textAlign:"center"}}>
        <Tipografia variante="h1" componente="h1">
            Crie seu Cadastro
        </Tipografia>
        <Tipografia variante="h3" componente={'h2'}>
            Como podemos te ajudar?
        </Tipografia>
        <Row>
            <Col md={6} sm={12}>
                <RouterLink to='interesses' onClick={()=>setPerfil('cliente')}>
                    <img src={cliente} alt=""/>
                    <Tipografia variante="body" componente="body">
                        Sou um cliente e preciso de um freela
                    </Tipografia>
                </RouterLink>
            </Col>
            <Col md={6} sm={12}>
                <img src={freelancer} alt=""/>
                <Tipografia variante="body" componente="body">
                    Sou um freela e preciso de cliente
                </Tipografia>
            </Col>
        </Row>
        <div>
            <Tipografia variante="body2" componente="body2">
                Já tem conta?
            </Tipografia>
            <p>
                <Link variante="secundaria">Faça Login!</Link>
            </p>
        </div>
    </div>)
}

export default SelecaoCliente;