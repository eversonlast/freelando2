import { Tipografia } from "../../componentes/Tipografia/Tipografia";

const CabecalhoCadastro = ({titulo, subtitulo, descricao})=>{
    return(
        <div style={{textAlign:'center'}}>
            <Tipografia variante='h2' componente="h2">
                {titulo}
            </Tipografia>
            {subtitulo && <Tipografia variante='h3' componente="h2">
                    {subtitulo}
                </Tipografia>}
            {descricao && <Tipografia variante="body" componente="body">
                {descricao}
            </Tipografia>}
 
        </div>
    )
}

export default CabecalhoCadastro;