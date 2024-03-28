
import { Tipografia } from "../../componentes/Tipografia/Tipografia";
import GrupoRadio from "../../componentes/GrupoRadio/GrupoRadio"
import { Col, Row } from "react-grid-system";
import {BotaoEstilizado} from "../../componentes/Botao/BotaoEstilizado"
import { Link, useNavigate } from "react-router-dom";
import { useCadastroUsuarioContext } from "../../contexto/CadastroUsuario";
import { useEffect } from "react";

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
    const {usuario, setInteresse, possoSelecionarInteresse} = useCadastroUsuarioContext();

    const navegar = useNavigate();
    useEffect(()=>{
        if(!possoSelecionarInteresse()){
            navegar('/cadastro');
        }
    }, [navegar, possoSelecionarInteresse])
    return (<div  style={{textAlign:"center"}}>
        <Tipografia variante="h1" componente="h1">
            Crie seu Cadastro
        </Tipografia>
        <GrupoRadio opcoes={opcoes} valor={usuario.interesse} onChange={setInteresse}/>
        <Tipografia variante="h3" componente={'h2'}>
            Qual a área de interesse?
        </Tipografia>
        <Row>
            <Col lg={6} md={6} sm={6}>
                <Link to="/cadastro">
                    <BotaoEstilizado variante="secundaria">
                        Anterior
                    </BotaoEstilizado>                
                </Link>
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