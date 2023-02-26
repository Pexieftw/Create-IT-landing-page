import './Navbar.css'

function Navbar() {
  return (
    <div className="Navbar">
			<div className="Logo">  
        <div className="svg-container">
          <a href="https://drive.google.com/drive/u/1/folders/1XCNN7DlWEwk0J2Njc-tHus4gTVAI47bb" target="_blank">
            <svg width="100" height="100" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id= "create-it-logo">
                <g id= "paint-brush">
                  <path d="M518.396 332.451L569.776 333.146C646.232 312.973 655.232 190.079 543.001 125.468C537.029 122.031 529.898 127.037 530.824 133.868C532.792 148.348 529.995 170.434 506.682 195.373C459.766 245.422 455.952 315.484 518.4 332.453L518.396 332.451Z" fill="white"/>
                  <path d="M594 372.5H487L373.954 788.96C369.257 806.531 373.707 825.295 385.79 838.89C397.879 852.485 415.993 859.103 434 856.5C452.007 853.897 467.505 842.431 475.243 825.968L594 372.5Z" fill="white"/>
                </g>
                <g id= "code-stuff">
                  <g id= "left">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M324.609 335.089C314.548 325.043 300.905 319.4 286.688 319.4C272.464 319.4 258.821 325.043 248.759 335.089L87.6984 495.946C77.6442 506.006 72 519.641 72 533.862C72 548.084 77.6442 561.718 87.6984 571.778L248.759 732.442C262.296 745.984 282.025 751.287 300.525 746.344C319.026 741.401 333.484 726.965 338.447 708.474C343.417 689.983 338.14 670.244 324.61 656.697L201.611 534.196L324.61 410.928C334.657 400.868 340.308 387.227 340.308 373.012C340.308 358.79 334.657 345.149 324.609 335.089Z" fill="white"/>
                  </g>
                  <g id= "right">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M912.347 495.946L751.286 335.089C737.603 322.228 718.195 317.452 700.108 322.495C682.021 327.545 667.891 341.673 662.841 359.757C657.797 377.842 662.574 397.253 675.437 410.928L798.436 534.197L675.437 656.697C661.906 670.245 656.629 689.984 661.599 708.475C666.563 726.966 681.021 741.401 699.521 746.345C718.022 751.288 737.75 745.984 751.287 732.443L912.348 571.685C922.376 561.626 928 548.011 928 533.815C928 519.613 922.375 505.999 912.347 495.946Z" fill="white"/>
                  </g>
                </g>
              </g>
            </svg>
          </a>
        </div>
        <h1>Create I.T</h1>
      </div>
      <nav class="openMenu">
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#Categories">Categories</a></li>
          <li><a href="#Goals">Goals</a></li>
          <li><a href="#Sponsors">Sponsors</a></li>
          <li><div className="contact-container"><a href="#">Contact Us</a></div></li>
        </ul> 
      </nav> 
    </div>
  )
}

export default Navbar