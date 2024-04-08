import React from 'react';
import DraggableImage from '../../component/DraggableImage/DraggableImage';
import ButtonBottom from '../../component/ButtonBottom/ButtonBottom';

import available_icon from '../../Assets/available_icon.png';
import unavailable_icon from '../../Assets/unavailable_icon.png';
import DJ_icon from '../../Assets/DJ_icon.png';
import mapImage from "../../Assets/MAP.png";
import Keyboard_arrow_right from "../../Assets/Keyboard_arrow_right.png";
import close_icon from "../../Assets/_Menu icon.png";

const Zone = () => {

    const clubAreas = [
        { id: 1, imgSrc: available_icon, status: "Available" },
        { id: 2, imgSrc: unavailable_icon, status: "Unavailable" },
        { id: 3, imgSrc: DJ_icon, status: "DJ Booth" }
    ];

    return (
        <div className='zone-container'>
            <div className='content-head'>
                <div className='go-back-container'>
                    <div className='go-back-text' style={{ cursor: "pointer" }} >
                        <img src={Keyboard_arrow_right} alt="" />
                        <span>Go Back</span>
                    </div>
                    <img src={close_icon} style={{ cursor: "pointer" }} alt="" />
                </div>
                <p>What area of the club would you prefer?</p>
            </div>
            <div className='club-status'>
                <ul>
                    {clubAreas.map(area => (
                        <li key={area.id}>
                            <img src={area.imgSrc} alt={`Area ${area.id}`} />
                            <span>{area.status}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='image-scroll-wrap'>
                <DraggableImage />
            </div>
            <div className='button-wrap'>
                <ButtonBottom text={"Select this zone"} color="#FF003D" />
            </div>
        </div>
    );
}

export default Zone;
