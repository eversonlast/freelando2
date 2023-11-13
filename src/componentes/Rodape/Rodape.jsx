import logo from '../../img/Logo_branco.svg';
import { RodapeEstilizado } from './RodapeEstilizado';
import instagram from '../../img/Ícones/Ícones redes sociais/Instagram.svg'
import twiter from '../../img/Ícones/Ícones redes sociais/Twiter.svg'
import Twitch from '../../img/Ícones/Ícones redes sociais/Twitch.svg'
import whatsapp from '../../img/Ícones/Ícones redes sociais/Whatsapp.svg'

export const Rodape = ()=>{
    return(
        <RodapeEstilizado>
            <div>
                <img src={logo} alt="" height="40px" width="176.06px" />
                <p>Desenvolvido pela Unitau. Produto fictício</p>
            </div>
            <div className='redes'>
                <span>Acesse nossas redes:</span>
                <div className="icon">
                    <a href="www.whatsapp.com"><img src={whatsapp} alt="" /></a>
                    <a href="www.twitch.com"><img src={Twitch} alt="" /></a>
                    <a href="www.instragram.com"><img src={instagram} alt="" /></a>
                    <a href="www.twiter.com"><img src={twiter} alt="" /></a>
                </div>

            </div>
        </RodapeEstilizado>
    )
}
