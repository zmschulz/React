import { useState } from "react";
import DangerBar from "../DangerBar/DangerBar";

const DangerInput = () => {

    const [value, setValue] = useState(0);

    const HandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(event.target.value))
    }

  return (
    <>
        <h2 style={{marginLeft:'15px', marginTop:'25px'}}>Ejemplo 1</h2>
        <div style={{ display: 'flex', justifyContent: 'center'}}>
          <input type="range" value ={value} className="form-range w-50" id="customRange1" onChange={HandleChange}/>
        </div>
        <DangerBar value = {value}></DangerBar>
    </>
  )
}

export default DangerInput;