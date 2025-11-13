import Emcima from "./components/pages/emcima";
import Principal from "./components/pages/principal";
import Contato from "./components/Contato";
function App() {
 return(
   <div>
    <Emcima/>
    <Principal/>
    <Contato/>
   </div> 
 )
}

// Exporta o componente App para ser usado em outros arquivos (ex: main.jsx)
export default App;
