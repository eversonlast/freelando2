import styled from "@emotion/styled";


export const RodapeEstilizado = styled.footer`
    background: ${props => props.theme.cores.primarias.a};
    padding: ${props => props.theme.espacamentos.xl};
    color: ${props => props.theme.cores.branco};
    height: 100px; 
    display:flex;
    justify-content: space-between;
    padding: 24px 60px 24px 60px;
    align-items: center

    span{
        font-size: 16x;
        font-weight: 400;
        line-height: 19.5px;
    }

    .redes{
        display: flex;
        flex-direction: column;
    }

    .redes .icon{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding-top: 15px;
    }

`