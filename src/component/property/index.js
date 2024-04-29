import "./index.css";
import Heading from "../heading"
import Box from "../box"
import ListItem from "../list-item";
import bild1 from "./bild1.svg";
import bild2 from "./bild2.svg";
import bild3 from "./bild3.svg";
import bild4 from "./bild4.svg";
export default function Property({  guests, bedrooms, beds, baths }) {
    return (
    <Box className="box--shadow">
<Heading>Деталі властивості:</Heading>

<ListItem imageSrc={bild1}>
   
<span className="property__info">{guests} гості</span>
</ListItem>

<ListItem imageSrc={bild2}>
   
<span className="property__info">{ bedrooms} спальня</span>
</ListItem>

<ListItem imageSrc={bild3}>
   
<span className="property__info">{beds} ліжко</span>
</ListItem>

<ListItem imageSrc={bild4}>
   
<span className="property__info">{baths} ванна кімната</span>
</ListItem>
    </Box>
    );
}