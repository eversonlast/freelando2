
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import GrupoRadio from "../../componentes/GrupoRadio/GrupoRadio"
import { useState } from "react";
import { Col, Row } from "react-grid-system";
import {BotaoEstilizado} from "../../componentes/Botao/BotaoEstilizado"
import { Link } from "react-router-dom";
//estou fazendo

const opcoes = [
    {
        valor: 1,
        label: 'TI e Programação',
    },
    {
        valor: 2,
        label: 'Design e Multimídia',
    },
    {
        valor: 3,
        label: 'Revisão',
    },
    {
        valor: 4,
        label: 'Tradução',
    },
    {
        valor: 5,
        label: 'Transcrição',
    },
    {
        valor: 6,
        label: 'Marketing',
    },
]

const Interesses = () =>{
    const [opcao, setOpcao] = useState('');
    return (<div  style={{textAlign:"center"}}>
        <Tipografia variante="h1" componente="h1">
            Crie seu Cadastro
        </Tipografia>
        <GrupoRadio opcoes={opcoes} valor={opcao} onChange={setOpcao}/>
        <Tipografia variante="h3" componente={'h2'}>
            Qual a área de interesse?
        </Tipografia>
        <Row>
            <Col lg={6} md={6} sm={6}>
                <BotaoEstilizado variante="secundaria">
                    Anterior
                </BotaoEstilizado>
            </Col>
            <Col lg={6} md={6} sm={6}>
                <div style={{textAlign: 'right'}}>
                    <Link to="/cadastro/dados-pessoais">
                        <BotaoEstilizado>
                            Próximo 
                        </BotaoEstilizado>
                    </Link>
                </div>
            </Col>
        </Row>
       
        
    </div>)
}

export default Interesses;