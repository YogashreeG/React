import logo from './logo.svg';
import './App.css';
import React from 'react';
// import { useCallback } from "https://cdn.skypack.dev/react@17";
import confetti from "https://cdn.skypack.dev/canvas-confetti@1";
// import useWindowSize from 'react-use/lib/useWindowSize'
// import Confetti from 'react-confetti'
// import {Confetti} from './confetti.min.js'

function App() {
  // const { width, height } = useWindowSize()
  const onClick = () => {
    confetti({
      particleCount: 20,
      spread: 30
    })
  }
  
  return (
    <div className='card'>
    <div className="App">
      <div> 
        <h1>Briyani 350</h1>
        <img src="https://th.bing.com/th/id/OIP.f9Ng-73ZMEfbfjNPAT-YSAHaFj?pid=ImgDet&rs=1" alt="" width="100px"></img>
        <p>
          <img src="https://www.freepngimg.com/thumb/map/62873-map-computer-location-icon-icons-free-transparent-image-hd.png"
          alt="map" width='30px' height='30px'></img>
          <h5>No:67 chennai ,thiruvallur</h5>
          <img src="https://www.logolynx.com/images/logolynx/07/07a8dfdca677a1b24d8b98a24c9c05ab.png"
            alt="wp" width="30" height="34" ></img>
          <h5>8765497767</h5>
        </p> 
        <div className="columns"></div>
        <ul className="price">
          price list <br/>
          Aadi spl <br/>
           chicken 10% <br/>
          mutton 20% <br/>
           <button id='btn' className="button" onClick={onClick}>
      
      <span>button</span>
    </button>
        </ul>
      </div>
      </div>
      </div>
  );
}

            /* <h1 style="text-align: center;"> Briyani 350</h1>
            <img src="https://th.bing.com/th/id/OIP.f9Ng-73ZMEfbfjNPAT-YSAHaFj?pid=ImgDet&rs=1" alt="" width="500px"></img>
            <p><img src="https://www.freepngimg.com/thumb/map/62873-map-computer-location-icon-icons-free-transparent-image-hd.png"
                alt="map" width="30" height="34" style="vertical-align: left;"></img>
                <h8>No:67 chennai ,thiruvallur</h8>
                <img src="https://www.logolynx.com/images/logolynx/07/07a8dfdca677a1b24d8b98a24c9c05ab.png"
                    alt="wp" width="30" height="34" style="vertical-align: right;"></img>
                    <h7>8765497767</h7></p>
            
            <div className="columns">
            <ul className="price"> 
                <li className="header">price list</li>
                <li className="grey">Aadi spl</li>
                <li> chicken 10%</li>
                <li>mutton 20%</li>
                <a href="#" className="button">click here</a>
            </ul>
        </div> */
    //</div >
        
    
    //</div>
  //);
//}

export default App;
