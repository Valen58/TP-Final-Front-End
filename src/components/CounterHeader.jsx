import logoHeader from "../assets/images/logo_header.png";
import logoConfig from "../assets/images/logo_config_header.png"
function CounterHeader(){
    return(
        <>  <div className="character-header">
                <img src={logoHeader} alt="Header logo" className="header-logo"/>
                <h3>Character Counter</h3>
                <button className="config-button"> <img src={logoConfig} alt="Config"/> </button>
            </div>
            <h1>Analyze your text in real-time.</h1>
        </>
    )
}

export { CounterHeader }