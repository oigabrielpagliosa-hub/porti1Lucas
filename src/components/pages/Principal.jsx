import Botao from "../Botao"
import TextoDestacado from "../TextoDestacado"
import TextoPrincipal from "../TextoPrincipal"
import TextoSimples from "../TextoSimples"
import foto from "../../assets/L.jpg"
import "./Principal.css"

export default function Principal() {

    return(
    <selection  >
        <div className="se">

        <TextoDestacado  texto={'Olá meu nome é'}/>  
        <TextoPrincipal
        texto={"Lucas"}
        />
        <img src={foto} alt="" className="foto"/>
        </div>
        <TextoSimples
       texto={'Tenho 16 anos, gosto de Falar ouvir e ver os espiritos, estudar o mundo espiritual recomendo a todos estudarem e gosto de todos os assuntos interessantes sobre curiosidade em que a maioria acham loucura'}
       ></TextoSimples>
       <Botao texto={''}></Botao>
       <div className="foto-config">

       </div>
    </selection>
    )
}