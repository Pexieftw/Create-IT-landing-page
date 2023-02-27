import './Sponsors.css'

function logo_gen(){
  return [`src/assets/logos/Condor.png`,
          `src/assets/logos/DigitalOcean.png` , 
          `src/assets/logos/Eduteck.png`,
          `src/assets/logos/Yassir.png`,
          `src/assets/logos/CM.png`]
}

function Sponsors() {
  return (
    <div id="Sponsors" className="Sponsors">
      <h1>Sponsors</h1>
      <div className="logos-container">
        {logo_gen().map((src, index) =>{ return <img className={"logo" + (index+1)} src={src}/> })}
      </div>
    </div>
  ) 
}

export default Sponsors