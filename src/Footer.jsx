import './Footer.css'
function Footer() {
  return (
    <div id="Footer" className="Footer">
      <hr/>
      <div className="footer-container">
        <div className="Media">
          <h3>Community:</h3>
          <div className="footer-logos">
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"><img src="src/assets/footer-logos/Youtube.png"/></a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"><img src="src/assets/footer-logos/Facebook.png"/></a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"><img src="src/assets/footer-logos/Instagram.png"/></a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"><img src="src/assets/footer-logos/Discord.png"/></a>
          </div>
        </div>

        <div className="MC-CIT-Logo">
          <img src="src/assets/footer-logos/mc-cit.png"/>
        </div>  

        <div className="Docs">
        <h3>Resources</h3>
          <ul>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><li>Code Art Documentation</li></a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><li>Terms And Conditions</li></a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><li>Sponsoring File</li></a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><li>Event Schedule</li></a>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><li>Privacy Policy</li></a>
          </ul>
        </div>
      </div>
    </div>
  ) 
}

export default Footer