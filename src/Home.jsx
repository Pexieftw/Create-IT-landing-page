import './Home.css'

function image_gen(index){
  return [`src/assets/image${index}/yellow-bg.png`,
          `src/assets/image${index}/blue-bg.png` , 
          `src/assets/image${index}/main-image.png`]
}

function Home() {
  return (
    <div className="Home">
      <div className="Info">
        <div className="card">
          <h2>Welcome to</h2>
          <h1>Create I.T 2023</h1>
          <p>
            Create I.T an event that handles the art of creative coding through a series 
            of workshops about the main categories of this art and an opportunity for Art 
            Code enthusiasts to compete in
          </p>
          <div className="buttons-container">
            <button id="join">Join Us</button>
            <div className="button-arrow">
              <a href="#desc"><button id="learn-more">Learn More</button></a>
              <svg width="100" height="200" viewBox="0 0 131 279" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.4712 4.17579C13.6453 3.36587 13.1299 2.56815 12.32 2.39404C11.5101 2.21993 10.7123 2.73536 10.5382 3.54529L13.4712 4.17579ZM128.207 256.977C128.793 256.391 128.793 255.442 128.207 254.856L118.661 245.31C118.075 244.724 117.126 244.724 116.54 245.31C115.954 245.896 115.954 246.845 116.54 247.431L125.025 255.916L116.54 264.402C115.954 264.988 115.954 265.937 116.54 266.523C117.126 267.109 118.075 267.109 118.661 266.523L128.207 256.977ZM9.62337 8.21334C9.47219 9.02786 10.0099 9.8107 10.8245 9.96188C11.639 10.1131 12.4218 9.57531 12.573 8.76079L9.62337 8.21334ZM9.50982 28.0332C9.62137 27.2123 9.04635 26.4564 8.22546 26.3449C7.40458 26.2333 6.6487 26.8083 6.53714 27.6292L9.50982 28.0332ZM5.32668 37.2743C5.23184 38.0973 5.82212 38.8413 6.6451 38.9361C7.46808 39.031 8.21212 38.4407 8.30695 37.6177L5.32668 37.2743ZM6.47457 56.9555C6.53584 56.1293 5.91578 55.4099 5.08962 55.3486C4.26346 55.2874 3.54406 55.9074 3.48279 56.7336L6.47457 56.9555ZM2.86199 66.4948C2.81822 67.3221 3.45337 68.0282 4.28064 68.072C5.1079 68.1157 5.81403 67.4806 5.8578 66.6533L2.86199 66.4948ZM5.26405 86.0807C5.2702 85.2523 4.60364 84.5757 3.77523 84.5696C2.94683 84.5634 2.27028 85.23 2.26413 86.0584L5.26405 86.0807ZM2.31153 95.8512C2.32593 96.6794 3.00907 97.3393 3.83738 97.3249C4.66568 97.3105 5.32548 96.6273 5.31108 95.799L2.31153 95.8512ZM6.16846 115.165C6.10846 114.339 5.39 113.718 4.56375 113.778C3.7375 113.838 3.11633 114.556 3.17634 115.382L6.16846 115.165ZM4.03449 125.131C4.1201 125.955 4.85749 126.554 5.68148 126.468C6.50547 126.383 7.10404 125.645 7.01843 124.821L4.03449 125.131ZM9.68315 144.015C9.53926 143.199 8.76125 142.655 7.94542 142.798C7.12958 142.942 6.58486 143.72 6.72875 144.536L9.68315 144.015ZM8.62452 154.149C8.80169 154.958 9.60135 155.471 10.4106 155.293C11.2199 155.116 11.7323 154.317 11.5551 153.507L8.62452 154.149ZM16.5588 172.185C16.305 171.396 15.46 170.963 14.6714 171.216C13.8828 171.47 13.4493 172.315 13.7031 173.104L16.5588 172.185ZM16.9705 182.37C17.2682 183.143 18.1363 183.529 18.9094 183.231C19.6824 182.933 20.0678 182.065 19.7701 181.292L16.9705 182.37ZM27.8231 198.787C27.426 198.06 26.5147 197.792 25.7876 198.189C25.0606 198.586 24.7932 199.498 25.1903 200.225L27.8231 198.787ZM30.2352 208.681C30.6872 209.375 31.6164 209.571 32.3106 209.119C33.0049 208.667 33.2013 207.738 32.7493 207.044L30.2352 208.681ZM44.557 222.17C43.9904 221.565 43.0411 221.534 42.4368 222.101C41.8324 222.668 41.8017 223.617 42.3683 224.221L44.557 222.17ZM49.4556 231.09C50.0779 231.637 51.0256 231.576 51.5726 230.954C52.1195 230.331 52.0584 229.384 51.4362 228.837L49.4556 231.09ZM66.9864 239.968C66.268 239.556 65.3512 239.804 64.9387 240.522C64.5262 241.24 64.7742 242.157 65.4926 242.57L66.9864 239.968ZM74.3106 247.07C75.0659 247.41 75.9541 247.074 76.2943 246.319C76.6345 245.563 76.2981 244.675 75.5427 244.335L74.3106 247.07ZM93.6284 250.562C92.8246 250.362 92.0105 250.851 91.8101 251.655C91.6097 252.458 92.0988 253.273 92.9026 253.473L93.6284 250.562ZM102.535 255.469C103.352 255.605 104.125 255.053 104.262 254.236C104.398 253.419 103.846 252.646 103.029 252.51L102.535 255.469ZM122.189 254.342C121.361 254.317 120.669 254.968 120.644 255.796C120.619 256.624 121.27 257.316 122.098 257.341L122.189 254.342ZM12.0047 3.86054C10.5382 3.54529 10.5382 3.54533 10.5382 3.54538C10.5382 3.5454 10.5382 3.54546 10.5382 3.54551C10.5382 3.54561 10.5381 3.54573 10.5381 3.54588C10.538 3.54618 10.538 3.54657 10.5378 3.54707C10.5376 3.54806 10.5373 3.54945 10.537 3.55124C10.5362 3.55481 10.5351 3.55996 10.5337 3.5667C10.5308 3.58016 10.5266 3.59993 10.5211 3.62594C10.5101 3.67797 10.4939 3.75496 10.4728 3.85641C10.4305 4.0593 10.3687 4.36002 10.2894 4.75448C10.1309 5.54338 9.9029 6.70726 9.62337 8.21334L12.573 8.76079C12.8497 7.26987 13.0749 6.12048 13.2307 5.34537C13.3085 4.95782 13.369 4.66385 13.4099 4.46755C13.4303 4.36941 13.4458 4.29568 13.4561 4.24688C13.4613 4.22248 13.4651 4.20431 13.4677 4.19244C13.4689 4.18651 13.4699 4.18215 13.4705 4.17937C13.4708 4.17798 13.471 4.17699 13.4711 4.17639C13.4712 4.17609 13.4712 4.17589 13.4712 4.17579C13.4712 4.17574 13.4712 4.17572 13.4712 4.17572C13.4712 4.17572 13.4712 4.17574 13.4712 4.17574C13.4712 4.17576 13.4712 4.17579 12.0047 3.86054ZM6.53714 27.6292C6.13025 30.6234 5.72152 33.8479 5.32668 37.2743L8.30695 37.6177C8.69935 34.2126 9.10553 31.0083 9.50982 28.0332L6.53714 27.6292ZM3.48279 56.7336C3.2481 59.8982 3.03864 63.1565 2.86199 66.4948L5.8578 66.6533C6.03328 63.3371 6.24138 60.0999 6.47457 56.9555L3.48279 56.7336ZM2.26413 86.0584C2.24017 89.282 2.25414 92.5496 2.31153 95.8512L5.31108 95.799C5.25414 92.5234 5.24027 89.2806 5.26405 86.0807L2.26413 86.0584ZM3.17634 115.382C3.41156 118.621 3.69601 121.874 4.03449 125.131L7.01843 124.821C6.6833 121.596 6.40154 118.374 6.16846 115.165L3.17634 115.382ZM6.72875 144.536C7.29644 147.755 7.92678 150.962 8.62452 154.149L11.5551 153.507C10.8666 150.362 10.2441 147.195 9.68315 144.015L6.72875 144.536ZM13.7031 173.104C14.7105 176.234 15.7979 179.326 16.9705 182.37L19.7701 181.292C18.6187 178.303 17.5499 175.264 16.5588 172.185L13.7031 173.104ZM25.1903 200.225C26.7694 203.115 28.4491 205.937 30.2352 208.681L32.7493 207.044C31.0072 204.368 29.3669 201.613 27.8231 198.787L25.1903 200.225ZM42.3683 224.221C44.6112 226.614 46.9718 228.907 49.4556 231.09L51.4362 228.837C49.0269 226.719 46.7355 224.494 44.557 222.17L42.3683 224.221ZM65.4926 242.57C68.3125 244.189 71.2504 245.692 74.3106 247.07L75.5427 244.335C72.5716 242.997 69.721 241.538 66.9864 239.968L65.4926 242.57ZM92.9026 253.473C96.0124 254.248 99.2222 254.915 102.535 255.469L103.029 252.51C99.7923 251.969 96.6598 251.318 93.6284 250.562L92.9026 253.473ZM122.098 257.341C123.759 257.391 125.442 257.416 127.147 257.416L127.147 254.416C125.472 254.416 123.819 254.392 122.189 254.342L122.098 257.341ZM14.9377 4.49104C15.2859 2.8712 14.2551 1.27576 12.6352 0.927543C11.0154 0.579324 9.41995 1.61018 9.07174 3.23003L14.9377 4.49104ZM129.268 258.038C130.439 256.866 130.439 254.967 129.268 253.795L110.176 234.703C109.004 233.532 107.105 233.532 105.933 234.703C104.762 235.875 104.762 237.774 105.933 238.946L122.904 255.916L105.933 272.887C104.762 274.059 104.762 275.958 105.933 277.13C107.105 278.301 109.004 278.301 110.176 277.13L129.268 258.038ZM8.14856 7.93961C7.84621 9.56865 8.92169 11.1343 10.5507 11.4367C12.1798 11.739 13.7455 10.6636 14.0478 9.03452L8.14856 7.93961ZM10.9962 28.2352C11.2193 26.5934 10.0692 25.0816 8.42745 24.8585C6.78568 24.6354 5.27391 25.7855 5.0508 27.4272L10.9962 28.2352ZM3.83654 37.1026C3.64686 38.7485 4.82742 40.2366 6.47338 40.4263C8.11934 40.616 9.60742 39.4354 9.79709 37.7894L3.83654 37.1026ZM7.97047 57.0664C8.09301 55.4141 6.85287 53.9753 5.20056 53.8527C3.54824 53.7302 2.10944 54.9703 1.9869 56.6227L7.97047 57.0664ZM1.36409 66.4155C1.27654 68.0701 2.54683 69.4823 4.20137 69.5699C5.85591 69.6574 7.26816 68.3871 7.35571 66.7326L1.36409 66.4155ZM6.764 86.0918C6.77631 84.435 5.44318 83.0819 3.78638 83.0696C2.12957 83.0573 0.776483 84.3904 0.764167 86.0473L6.764 86.0918ZM0.811755 95.8772C0.840556 97.5338 2.20684 98.8534 3.86345 98.8246C5.52005 98.7958 6.83965 97.4295 6.81085 95.7729L0.811755 95.8772ZM7.66452 115.056C7.54451 113.404 6.10761 112.161 4.4551 112.281C2.8026 112.401 1.56027 113.838 1.68028 115.491L7.66452 115.056ZM2.54252 125.287C2.71375 126.934 4.18852 128.132 5.8365 127.96C7.48448 127.789 8.68162 126.314 8.51039 124.666L2.54252 125.287ZM11.1604 143.755C10.8726 142.123 9.31654 141.033 7.68487 141.321C6.0532 141.609 4.96377 143.165 5.25155 144.797L11.1604 143.755ZM7.15922 154.47C7.51357 156.088 9.1129 157.113 10.7314 156.759C12.3499 156.404 13.3747 154.805 13.0204 153.186L7.15922 154.47ZM17.9867 171.725C17.4791 170.148 15.789 169.281 14.2118 169.789C12.6347 170.296 11.7676 171.986 12.2752 173.563L17.9867 171.725ZM15.5707 182.909C16.1662 184.456 17.9023 185.226 19.4484 184.631C20.9946 184.035 21.7653 182.299 21.1699 180.753L15.5707 182.909ZM29.1395 198.067C28.3452 196.613 26.5226 196.079 25.0685 196.873C23.6145 197.667 23.0796 199.49 23.8739 200.944L29.1395 198.067ZM28.9781 209.499C29.8821 210.888 31.7405 211.28 33.129 210.376C34.5175 209.472 34.9103 207.614 34.0063 206.225L28.9781 209.499ZM45.6513 221.144C44.5182 219.935 42.6197 219.874 41.4109 221.007C40.2021 222.14 40.1408 224.038 41.2739 225.247L45.6513 221.144ZM48.4653 232.217C49.7098 233.31 51.6054 233.188 52.6992 231.944C53.7931 230.699 53.6709 228.804 52.4265 227.71L48.4653 232.217ZM67.7333 238.667C66.2965 237.842 64.4629 238.338 63.6379 239.775C62.8129 241.212 63.3089 243.046 64.7457 243.871L67.7333 238.667ZM73.6945 248.438C75.2052 249.118 76.9815 248.445 77.662 246.935C78.3424 245.424 77.6695 243.648 76.1588 242.967L73.6945 248.438ZM93.9913 249.107C92.3837 248.706 90.7555 249.684 90.3546 251.292C89.9538 252.899 90.9321 254.528 92.5397 254.928L93.9913 249.107ZM102.288 256.948C103.922 257.221 105.468 256.118 105.741 254.483C106.014 252.849 104.911 251.303 103.276 251.03L102.288 256.948ZM122.234 252.843C120.578 252.793 119.195 254.095 119.145 255.751C119.095 257.407 120.397 258.79 122.053 258.84L122.234 252.843ZM12.0047 3.86054C9.07174 3.23003 9.07172 3.23011 9.0717 3.2302C9.07169 3.23024 9.07167 3.23033 9.07166 3.2304C9.07162 3.23055 9.07159 3.23072 9.07154 3.23092C9.07146 3.23132 9.07135 3.23181 9.07122 3.23241C9.07097 3.2336 9.07063 3.23519 9.0702 3.23717C9.06935 3.24114 9.06817 3.24669 9.06665 3.25382C9.0636 3.26808 9.05923 3.28866 9.05356 3.31547C9.04221 3.36911 9.02567 3.44773 9.00422 3.55083C8.96131 3.75702 8.89876 4.06112 8.81882 4.45903C8.65894 5.25483 8.42949 6.42595 8.14856 7.93961L14.0478 9.03452C14.3231 7.55117 14.5469 6.40904 14.7013 5.64082C14.7784 5.25672 14.8382 4.96613 14.8784 4.77313C14.8985 4.67663 14.9136 4.60453 14.9236 4.55735C14.9286 4.53375 14.9323 4.51639 14.9347 4.50532C14.9359 4.49978 14.9367 4.49582 14.9372 4.49344C14.9375 4.49225 14.9376 4.49145 14.9377 4.49105C14.9378 4.49085 14.9378 4.49075 14.9378 4.49075C14.9378 4.49075 14.9378 4.49077 14.9378 4.49082C14.9378 4.49085 14.9378 4.4909 14.9378 4.49092C14.9377 4.49098 14.9377 4.49104 12.0047 3.86054ZM5.0508 27.4272C4.64262 30.431 4.2326 33.6656 3.83654 37.1026L9.79709 37.7894C10.1883 34.3949 10.5932 31.2007 10.9962 28.2352L5.0508 27.4272ZM1.9869 56.6227C1.75146 59.7973 1.54132 63.0662 1.36409 66.4155L7.35571 66.7326C7.5306 63.4274 7.73802 60.2008 7.97047 57.0664L1.9869 56.6227ZM0.764167 86.0473C0.740127 89.2827 0.754144 92.5627 0.811755 95.8772L6.81085 95.7729C6.75414 92.5102 6.74031 89.2799 6.764 86.0918L0.764167 86.0473ZM1.68028 115.491C1.91657 118.745 2.20237 122.013 2.54252 125.287L8.51039 124.666C8.17695 121.457 7.89652 118.251 7.66452 115.056L1.68028 115.491ZM5.25155 144.797C5.82262 148.035 6.4569 151.262 7.15922 154.47L13.0204 153.186C12.3364 150.062 11.7179 146.916 11.1604 143.755L5.25155 144.797ZM12.2752 173.563C13.2908 176.719 14.3876 179.837 15.5707 182.909L21.1699 180.753C20.0291 177.791 18.9696 174.779 17.9867 171.725L12.2752 173.563ZM23.8739 200.944C25.4706 203.867 27.1701 206.722 28.9781 209.499L34.0063 206.225C32.2863 203.583 30.6656 200.861 29.1395 198.067L23.8739 200.944ZM41.2739 225.247C43.549 227.674 45.9443 230.001 48.4653 232.217L52.4265 227.71C50.0544 225.625 47.7977 223.433 45.6513 221.144L41.2739 225.247ZM64.7457 243.871C67.6082 245.514 70.5898 247.039 73.6945 248.438L76.1588 242.967C73.2322 241.649 70.4253 240.213 67.7333 238.667L64.7457 243.871ZM92.5397 254.928C95.6887 255.714 98.9372 256.389 102.288 256.948L103.276 251.03C100.077 250.496 96.9835 249.853 93.9913 249.107L92.5397 254.928ZM122.053 258.84C123.729 258.891 125.427 258.916 127.147 258.916L127.147 252.916C125.486 252.916 123.849 252.892 122.234 252.843L122.053 258.84Z" fill="#0188C2"/>
              </svg>
            </div>
          </div>
        </div>
        <div className="image-container">
          {image_gen(1).map((src, index) =>{ return <img className={"img1-" + (index+1)} src={src}/> })}
        </div>
      </div>
      <div id="desc" className="Description">
        <div className="image-container-left">
          {image_gen(3).map((src, index) =>{ return <img id={"bottom" + (index+1)} className={"img2-" + (index+1)} src={src}/> })}
          {image_gen(2).map((src, index) =>{ return <img className={"img2-" + (index+1)} src={src}/> })}
        </div>
        <div className="overview">
          <h1>Description</h1>
          <p>
            Learning to program is no longer just for computer specialists and software developers.
            People from many different backgrounds now want to understand the basics of programming,
            because it's both fun and an increasingly valuable skill. one of the most exciting ways
            to learn programming is through authoring your own creative programs. Known as <span>creative coding</span>, 
            this growing field uses computer software as a medium to develop original creative expression.
            So if you're an artist who's interested in how you can expand your creative skills, or even 
            a computer programmer looking to work in creative applications, you will find this event very helpful.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home