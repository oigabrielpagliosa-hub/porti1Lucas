import TextoDestacado from "../TextoDestacado"
import TextoPrincipal from "../TextoPrincipal"
import "./Principal.css"

export default function Principal() {

    return(
    <selection>
        <TextoDestacado  texto={'Olá meu nome é'}/>  
        <TextoPrincipal
        texto={"Lucas"}
        />
       <p>Tenho 16 anos, gosto de FREE FIRE, musicas diferentes e muitas outras coisa</p>
    </selection>
    )
}