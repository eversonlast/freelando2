import Radio from '../Radio/Radio';

const GrupoRadio = ({opcoes, valor, change})=>{
    return(
        <div>
            {opcoes.map((option)=>{
                <Radio key={option.valor}
                valor={option.valor}
                label={option.label}
                checked={option.valor === valor}
                onClick={()=>onChange(option.valor)}/>
            })}
        </div>
    )
}


export default GrupoRadio;