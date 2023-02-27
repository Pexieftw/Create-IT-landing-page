import './Goals.css'

function image_gen(index){
  return [`src/assets/image${index}/yellow-bg.png`,
          `src/assets/image${index}/blue-bg.png` , 
          `src/assets/image${index}/main-image.png`]
}

function Goals() {
  return (
    <div id="Goals" className="Goals">
      <div className="image-container-left-goals">)
        {image_gen(4).map((src, index) =>{ return <img className={"img" + (index+1)} src={src}/> })}
        </div>
        <div className="overview">
        <h1>Goals</h1>
        <ul>
          <li>Introduce beginners to the art of creative coding through workshops</li>
          <li>Expand the coding art community inside the club</li>
          <li>Bring together people that have the same interests in this coding field</li>
          <li>Give an opportunity to the people who are already in this field to express their art</li>
          <li>Show people who are already familiar with coding a new side</li>
          <li>Find hidden talent between the participants</li>
        </ul>
      </div>
    </div>
  )
}

export default Goals