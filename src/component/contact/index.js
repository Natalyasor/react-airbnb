

import "./index.css";
import photoKerthy from "./photoKerthy.svg";


export default function Contact({name, image, response_rate, response_time, info, phone}) {
    return (
        <div>
          <div className="photoblock">
          <img src ={photoKerthy} alt="photoKerthy"/>

       <div className="contact__block">
       <h1 className="contact__title">Господар – Kerthy</h1> 
            <span className="contact__value">{phone}</span>
          <span className="contact__value">{response_time}</span>
          <span className="contact__value">{response_rate}% відсотків швидкості відгуку</span>
       </div>
         
          </div>
            <div className="contact__value1">{info}</div>
            </div>
    )
}