import "./index.css";

import Box from "../box";
import Heading from "../heading";
import ListItem from "../list-item";
import pool from "./pool.svg";
import gym from "./gym.svg";
import breakfast from "./breakfast.svg";
import wifi from "./wifi.svg";
import parking from "./parking.svg";
import Allowed from "./Allowed.svg";
import Shuttle from "./Shuttle.svg";
import service from "./service.svg";
import roomservice from "./roomservice.svg";
import childfriendly from "./childfriendly.svg"

export default function Amenities({ hasPool, hasGym, hasFreeBreakfast, hasFreeWiFi,
    hasParking, hasPetsAllowed, hasAirportShuttle, hasConciergeService, hasRoomService,
    hasChildFriendly
}) {
    return (
        <Box className="box--shadow">
<Heading>Зручності</Heading>

<ListItem imageSrc={pool}>
{hasPool && <span className="amenities">Басейн</span>}
</ListItem>

<ListItem imageSrc={gym}>
{hasGym && <span className="amenities">Спортивний зал</span>}
</ListItem>

<ListItem imageSrc={breakfast}>
{hasFreeBreakfast && <span className="amenities">Безкоштовний сніданок</span>}
</ListItem>

<ListItem imageSrc={wifi}>
{hasFreeWiFi && <span className="amenities">Безкоштовний Wi-Fi</span>}
</ListItem>

<ListItem imageSrc={parking}> 
{hasParking && <span className="amenities">Безкоштовний вуличний паркінг</span>}
</ListItem>

<ListItem imageSrc={Allowed}>
{hasPetsAllowed && <span className="amenities">Дозволено розміщення з домашніми тваринами</span>}
</ListItem>

<ListItem imageSrc={Shuttle}>
{hasAirportShuttle && <span className="amenities">Трансфер до/з аеропорту</span>}
</ListItem>
<ListItem imageSrc={service}>
{hasConciergeService && <span className="amenities">Консьєрж-сервіс</span>}
</ListItem>

<ListItem imageSrc={roomservice}>
{hasRoomService && <span className="amenities">Обслуговування номерів</span>}
</ListItem>

<ListItem imageSrc={ childfriendly}>
{hasChildFriendly && <span className="amenities">Обслуговування номерів</span>}
</ListItem>
        </Box>
    )
}