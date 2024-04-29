
import { Fragment } from "react";
import Heading from "../heading";
import "./index.css";
import Box from "../box"

export default function Guest({ list }) {
    return (
        <div className="guest__block">
<Heading border>Відгуки клієнтів</Heading>

<div className="guest__list">
{list.map(({ id, ...rest }) => (
    <Fragment key={id}>
    <Item {...rest} />
</Fragment>
))}
</div>
        </div>
    );
}

function Item({ guestName, rating, review}) {
    return (
        <Box className="guest">
<div className="guest1">
<span className="guest__title">{guestName}</span>
<span className="guest__info">рейтинг: {rating}</span>
</div>
<span>{review}</span>
        </Box>
    );
}
