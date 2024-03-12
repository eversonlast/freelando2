import { Outlet } from "react-router-dom/dist";
import { Cabecalho } from "../componentes/Cabecalho/Cabecalho";
import Rodape from '../componentes/Rodape/Rodape'

const LayoutBase = () => {
    return (
        <>
            <Cabecalho />
            <Outlet />
            <Rodape />
        </>
    )
}

export default LayoutBase;