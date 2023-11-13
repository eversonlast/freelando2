import styled from "@emotion/styled"

const componentes = {
    h1: 'h1',
    body: 'p',
    h2: 'h2',
    h3: 'h3',
    bodyBold: 'strong',
    body2: 'p',
    body2Bold: 'strong',
    legenda: 'p'
}

const estilos = {
    h1: `
        font-weight: 600;
        font-size: 40px;
        line-height: 49px
    `,
    h2: `
        font-weight: 600;
        font-size: 16px;
        line-height: 19.5px
    `,
    h3: `
        font-weight: 500;
        font-size: 24px;
        line-height: 29.26px
    `,
    body: `
        font-weight: 400;
        font-size: 20px;
        line-height: 24px
    `,
    body1regular: `
        font-weight: 400;
        font-size: 20px;
        line-height: 24.38px
    `,
    body1bold: `
        font-weight: 700;
        font-size: 20px;
        line-height: 24.38px
    `,
    body2regular: `
        font-weight: 400;
        font-size: 16px;
        line-height: 19.5px
    `,
    body2bold: `
        font-weight: 700;
        font-size: 16px;
        line-height: 19.5px
    `,
    subtitle: `
        font-weight: 400;
        font-size: 14px;
        line-height: 17.07px
    `,
    subtitle2: `
        font-weight: 400;
        font-size: 14px;
        line-height: 17.07px
    `,
}


export const Tipografia = ({ variante, componente, children }) => {
    const tag = componentes[componente]
    const ComponenteUtlizado = styled[tag]`
        ${estilos[variante]}
    `
    return (<ComponenteUtlizado>
        {children}
    </ComponenteUtlizado>)
}