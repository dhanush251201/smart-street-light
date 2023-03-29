import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import './App.css';
import ProgressBar from "@ramonak/react-progress-bar";
import axios from 'axios';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BsFillLightbulbFill } from 'react-icons/bs';

function App() {
  const [data1,setData1] = useState(null);
  const [data2,setData2] = useState(null);
  const [data3,setData3] = useState(null);
  const [data4,setData4] = useState(null);
  const [color,setColor] = useState('#000000');
  const [width,setWidth] = useState(400);

  useEffect(() => {
        const url = "https://api.thingspeak.com/channels/2083199/feeds.json?api_key=0IAORLIZBKLHXJ9W";
        const interval = setInterval(() => {
          axios.get(url)
          .then(response => {
            const res = response.data;
            const tmp = res['feeds'].slice(-1)[0]['field3']
            if (tmp == 0){
              setData4("Off")
              setColor("#ebebeb")
            }
            if (tmp == 3){
              setData4("Dim")
              setColor("#fff9c9")
            } 
            if (tmp == 255){
              setData4("Bright")
              setColor("#e8cf07")
            }
            console.log(res['feeds'].slice(-1)[0])
            setData1(res['feeds'].slice(-1)[0]['field1']);
            setData2(res['feeds'].slice(-1)[0]['field2']);
            setData3(res['feeds'].slice(-1)[0]['field3']);
            setWidth(400)
          })
          .catch(error => {
            console.log(error);
          });
        }, 1000);
          return () => clearInterval(interval)
      }, []);

      return (
            <div>
              <div className="Header"><h3>Smart Street Light</h3></div>
              {data1&&data2 ? (
              <div className="MainDiv">
                
                <div className="container1">
                  <div>Distance from Sensor</div>
                    <ProgressBar completed={data1} maxCompleted={100} className='Progress' labelAlignment='center' />
                  <div>{data1} cm</div>
                </div>

                <div className="container2">
                  <div>LDR Value</div>
                    <CircularProgressbar  value={data2} maxValue={400} className='Progress1'/>
                  <div>LDR Readout : {data2}</div>
                </div>

                <div className="container3">
                  <div>Light Value</div>
                    <div style={{color : color}}><BsFillLightbulbFill size={200}/></div>
                  <div> Light is {data4}</div>
                </div>

              </div>
              ) : (
                <p>Loading data...</p>
              )}
            </div>
          );
}

export default App;
