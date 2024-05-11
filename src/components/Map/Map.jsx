
import { Map, Draggable } from "pigeon-maps";
import { useState } from "react";

const Maps = () => {
    const [anchor, setAnchor] = useState([50.879, 4.6997]);

    return (
        <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
            <Draggable offset={[60, 87]} anchor={anchor} onDragEnd={setAnchor}>
                
            </Draggable>
        </Map>
    )
}

export default Maps