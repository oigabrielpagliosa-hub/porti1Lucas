import fotoo from "../assets/LL.jpg"
import "./Contato.css"
function Contato() {
  return (
    <section className="contato" id="contato">
      <h1>Entre em contato comigo</h1>
      <p>
        Gmail:oigabrielpagliosa@gmail.com 
        Instagram:Coelhogoti
        Whats app: 45988187768
      </p>
      <img src={fotoo} alt="" className="fot"/>
    </section>
  );
}

export default Contato;
