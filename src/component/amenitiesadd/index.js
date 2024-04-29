import "./index.css";
import ListItem from "../list-item";
import Box from "../box"
import Heading from "../heading";
export default function Amenitiesadd({house_rules,  cancellation_policy, local_transportation,
    host_languages, special_offers
}) {
    return (
        <Box className="box--shadow">
            <Heading border>Додаткові властивості</Heading>
<div className="head">
<ListItem title="Правила дому">
<span className="add__value">{house_rules}</span>
            </ListItem>
            <ListItem title="Політика скасування">
<span className="add__value">{cancellation_policy}</span>
            </ListItem>
            <ListItem title="Місцевий транспорт">
<span className="add__value">{local_transportation}</span>
            </ListItem>
            <ListItem title="Мови хоста">
<span className="add__value">{host_languages}</span>
            </ListItem>
            <ListItem title="Спеціальні пропозиції:">
<span className="add__value">{special_offers}</span>
            </ListItem>
            <ListItem title="Інструкції щодо реєстрації:">
<span className="add__value">{}</span>
            </ListItem>
</div>
        </Box>
    )
}