import './Categories.css'

function Categories() {
return (
    <div id="Categories" className="Categories">
      <h1>Categories</h1>
      <div className="category-container">
        <div className="category">
          <div className="outside">
            <img src="src/assets/categories/ascii.png"/>
            <div className="inside">
              <h3>ASCII Art</h3>
              <p>
                It's a graphic design technique that uses computers for presentation and consists of 
                pictures pieced together from the 95 printable characters defined by the ASCII Standard
              </p> 
            </div>
          </div>
        </div>
        <div className="category">
          <div className="outside">
            <img src="src/assets/categories/pixel.png"/>
            <div className="inside">
              <h3>Pixel Art</h3>
              <p>
                It's a form of digital art where images are built using pixels as the only building block. 
                It is widely associated with the low-resolution graphic and arcade video game console
              </p> 
            </div>
          </div>
        </div>
        <div className="category">
          <div className="outside">
            <img src="src/assets/categories/int-gen.png"/>
            <div className="inside">
              <h3>Interactive Generative Art</h3>
              <p>
                it's a form of digital art that involves the use of algorithms and computational processes 
                to generate and display visually appealing and unique pieces of art
              </p> 
            </div>
          </div>
        </div>
        <div className="category">
          <div className="outside">
            <img src="src/assets/categories/animated.png"/>
            <div className="inside">
              <h3>Animated Art</h3>
              <p>
                Any form of artistic expression that uses movement and change over time to convey a message 
                or tell a story and create dynamic and engaging experiences for the viewer
              </p> 
            </div>
          </div>
        </div>  
      </div>
    </div>
  )
}

export default Categories