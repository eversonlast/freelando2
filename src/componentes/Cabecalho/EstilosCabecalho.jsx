import styled from '@emotion/styled'

export const EstilosCabecalho = styled.header`
    background: ${props => props.theme.cores.primarias.a};
    padding: ${props => props.theme.espacamentos.m};
    height: 60px;
    color: ${props => props.theme.cores.branco};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 24px 120px 24px 120px;
    font-size: 20px;    
`