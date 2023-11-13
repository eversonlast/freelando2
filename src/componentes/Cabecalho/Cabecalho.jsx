import { EstilosCabecalho } from "./EstilosCabecalho"
import logo from '../../img/Logo_branco.svg'



export const Cabecalho = ()=>{
    return (
        <EstilosCabecalho>
            <div>
                <img src={logo} alt="" height="56px" width="246.48px" />
            </div>
            <div>
                Login
            </div>
        </EstilosCabecalho>
    )
}