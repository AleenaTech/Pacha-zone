import React from 'react';
import availableHotspotImg from "../../Assets/available_icon.png";
import unavailableHotspotImg from "../../Assets/unavailable_icon.png";
import djBoothImg from "../../Assets/dj-animation.gif";

function Hotspot({ hotspot, handleClick }) {

    return (
        <img
            className={`hotspot hotspot-${hotspot.type}`}
            src={hotspot.type === 'available' ? availableHotspotImg : hotspot.type === 'unavailable' ? unavailableHotspotImg : djBoothImg}
            style={{ left: hotspot.x, top: hotspot.y, position: 'absolute', cursor: 'pointer' }}
            onClick={() => handleClick(hotspot.id)}
            alt="Hotspot"
        />
    );
}

export default Hotspot;
