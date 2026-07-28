import logoHeader from "../assets/images/logo_header.png";
import logoConfig from "../assets/images/logo_config_header.png"
function CounterHeader(){
    return(
        <>  <div>
            <img src={logoHeader} alt="Header logo"/>
            <h3>Character Counter</h3>
            <img src={logoConfig} alt="Header config button" className="config-button"/>
            </div>
            <h1>Analyze your text in real-time.</h1>
        </>
    )
}

export { CounterHeader }