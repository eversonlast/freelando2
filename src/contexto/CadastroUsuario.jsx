import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


const usuarioInicial={
    perfil: '',
    interesse: '',
    nomeCompleto: '',
    uf: '',
    cidade:'',
    email: '',
    senha: '',
    senhaConfirmada: ''
}
export const CadastroUsuarioContext = createContext({
    usuario: usuarioInicial,
    erros: {},
    setPerfil: ()=> null,
    setInteresse: ()=> null,
    setNomeCompleto: ()=>null,
    setUf: ()=>null,
    setCidade: ()=>null,
    setEmail: ()=>null,
    setSenha: ()=>null,
    setSenhaConfirmada: ()=>null,
    submeterUsuario: ()=>null,
    possoSelecionarInteresse: ()=>null,
    
})

export const useCadastroUsuarioContext = ()=>{
    return useContext(CadastroUsuarioContext);
}

export const  CadastroUsuarioProvider= ({children}) =>{

    const  [usuario, setUsuario] = useState(usuarioInicial);
    const navegar = useNavigate();

    const setPerfil = (perfil)=>{
        setUsuario( estadoAnterior=>{
            return{
                ...estadoAnterior,
                 perfil
            }
        })
    }

    const setNomeCompleto = (nomeCompleto)=>{
        setUsuario( estadoAnterior=>{
            return{
                ...estadoAnterior,
                nomeCompleto
            }
        })
    }

    const setUf = (UF)=>{
        setUsuario( estadoAnterior=>{
            return{
                ...estadoAnterior,
                UF
            }
        })
    }

    const setInteresse = (interesse)=>{
        setUsuario( estadoAnterior=>{
            return{
                ...estadoAnterior,
                interesse
            }
        })
    }

    const setCidade = (cidade)=>{
        setUsuario( estadoAnterior=>{
            return{
                ...estadoAnterior,
                cidade
            }
        })
    }

    const setEmail = (email)=>{
        setUsuario( estadoAnterior=>{
            return{
                ...estadoAnterior,
                email
            }
        })
    }

    const setSenha = (senha)=>{
        setUsuario( estadoAnterior=>{
            return{
                ...estadoAnterior,
                senha
            }
        })
    }

    const setSenhaConfirmada= (senhaConfirmada)=>{
        setUsuario( estadoAnterior=>{
            return{
                ...estadoAnterior,
                senhaConfirmada 
            }
        })
    }

    const submeterUsuario = ()=>{
        console.log(usuario);
        // if(usuario.senha.length < 8){

        // }
        navegar('/cadastro/concluido');
    }


    const possoSelecionarInteresse = ()=>{
        return !!usuario.perfil
    }

    const contexto ={
        usuario,
        setPerfil,
        setNomeCompleto,
        setUf,
        setCidade,
        setEmail,
        setInteresse,
        setSenha,
        setSenhaConfirmada,
        submeterUsuario,
        possoSelecionarInteresse
    }
    return(<CadastroUsuarioContext.Provider value={contexto}>
        {children}
    </CadastroUsuarioContext.Provider>

    )
}         