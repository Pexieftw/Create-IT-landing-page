import './Home.css'

function Home() {
  return (
    <div className="Home">
      <div className="card">
        <h2>Welcome to</h2>
        <h1>Create I.T 2023</h1>
        <p>
          Create I.T an event that handles the art of creative coding through a series 
          of workshops about the main categories of this art and an opportunity for Art 
          Code enthusiasts to compete in
        </p>
        <button id="join">Join Us</button>
        <button id="learn-more">Learn More</button>
      </div>
      <div className="image-container">
        <img id="img1" src="src/assets/yellow-bg1.png" alt="People Sitting" />
        <img id="img2" src="src/assets/black-bg1.png" alt="People Sitting" />
        <img id="img3" src="src/assets/Main Image.png" alt="People Sitting" />
      </div>
    </div>
  )
}

export default Home