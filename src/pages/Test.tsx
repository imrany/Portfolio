// import * as React from 'react'
// import QrReader from 'react-qr-scanner'

// type prop={
//   delay:number,
//   result:string
// }

// class Test extends React.Component {
//   constructor(props:prop){
//     super(props)
//     this.state = {
//       delay: 100,
//       result: 'No result',
//     }

//     this.handleScan = this.handleScan.bind(this)
//   }

//   handleScan(data:any){
//     this.setState({
//       result: data,
//     })
//   }

//   handleError(err:any){
//     console.error(err)
//   }
//   render(){
//     const previewStyle = {
//       height: 240,
//       width: 320,
//     }

//     return(
//       <div>
//         <QrReader
//           delay={this.state.delay}
//           style={previewStyle}
//           onError={this.handleError}
//           onScan={this.handleScan}
//           />
//         <p>{this.state.result}</p>
//       </div>
//     )
//   }
// }
// export default Test;

import { useState } from "react";
import QrReader from "react-qr-reader";

const Test = () => {
  const [selected, setSelected] = useState("environment");
  const [startScan, setStartScan] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);
  const [data, setData] = useState("");

  const handleScan = async (scanData:any) => {
    setLoadingScan(true);
    console.log(`loaded data data`, scanData);
    if (scanData && scanData !== "") {
      console.log(`loaded >>>`, scanData);
      setData(scanData);
      setStartScan(false);
      setLoadingScan(false);
      // setPrecScan(scanData);
    }
  };
  const handleError = (err:any) => {
    console.error(err);
  };
  
  return (
    <div className="Test">
      <h1>Hello CodeSandbox</h1>
      <h2>
        Last Scan:
        {selected}
      </h2>

      <button
        onClick={() => {
          setStartScan(!startScan);
        }}
      >
        {startScan ? "Stop Scan" : "Start Scan"}
      </button>
      {startScan && (
        <>
          <select onChange={(e) => setSelected(e.target.value)}>
            <option value={"environment"}>Back Camera</option>
            <option value={"user"}>Front Camera</option>
          </select>
          <QrReader
            facingMode={selected}
            delay={1000}
            onError={handleError}
            onScan={handleScan}
            // chooseDeviceId={()=>selected}
            style={{ width: "300px" }}
          />
        </>
      )}
      {loadingScan && <p>Loading</p>}
      {data !== "" && <p>{data}</p>}
    </div>
  );
};

export default Test;
