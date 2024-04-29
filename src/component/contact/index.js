

import "./index.css";
import  photoKerthy from "./photoKerthy.svg"


export default function Contact({name, image, response_rate, response_time, info, phone}) {
    return (
        <div>
           <h1 className="contact__title">Господар – Kerthy</h1> 
           <li className="contact__block">
            <imageSrc photoKerthy ={photoKerthy} />
            <span className="contact__value">{phone}</span>
            <span className="contact__value">{response_time}</span>
            <span className="contact__value">{response_rate}% відсотків швидкості відгуку</span>
           </li>
           <div className="contact__value">{info}</div>
            </div>
    )
}