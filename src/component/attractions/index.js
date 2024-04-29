import Heading from "../heading";
import "./index.css";
import Box from "../box"
import { Fragment } from "react";
export default function Attractions({ list }) {
    return (
        <Box>
            <Heading border>Пам'ятки поблизу</Heading>
            {list.map(({id, ...rest}) => (
                <Fragment key={id}>
<Item {...rest} />
                </Fragment>
            ))}
        </Box>
    )
}

function Item({ name, link }) {
    return (
        <div className="attractions">
            <a href={link} className="link">{name}</a>
        </div>
    )
}