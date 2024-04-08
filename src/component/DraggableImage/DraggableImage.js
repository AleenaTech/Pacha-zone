import React, { useRef, useState, useEffect } from 'react';
import Hotspot from '../Hotspot/Hotspot';
import Modal from '../Modal/Modal';
import mapImage from "../../Assets/MAP.png";
import gallery1 from "../../Assets/gallery1.png";
import gallery2 from "../../Assets/gallery2.png";
import gallery3 from "../../Assets/gallery3.png";

function DraggableImage() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedHotspot, setSelectedHotspot] = useState(null);
    const [hotspotData, setHotspotData] = useState(null);
    const containerRef = useRef(null);
    const imgRef = useRef(null);
    const startX = useRef(0);
    const startY = useRef(0);
    const dragging = useRef(false);
    const hotspots = [
        { x: 125, y: 98, id: 1, type: 'available', name: 'This zone is right behind the DJ booth', AmountWithVAT: "€ 3500", AmountWithoutVAT: "3181.82€", gallery: [gallery1, gallery2, gallery3] },
        { x: 356, y: 101, id: 2, type: 'available', name: 'This zone is right behind the DJ booth', AmountWithVAT: "€ 3500", AmountWithoutVAT: "3181.82€", gallery: [gallery1, gallery2, gallery3] },
        { x: 382, y: 202, id: 3, type: 'dj_booth', name: 'This zone is the DJ booth', AmountWithVAT: "€ 3500", AmountWithoutVAT: "3181.82€", gallery: [gallery1, gallery2, gallery3] },
        { x: 267, y: 300, id: 4, type: 'available', name: 'Hotspot 3', AmountWithVAT: "€ 3500", AmountWithoutVAT: "3181.82€", gallery: [gallery1, gallery2, gallery3] },
        { x: 541, y: 214, id: 5, type: 'available', name: 'Hotspot 4', AmountWithVAT: "€ 3500", AmountWithoutVAT: "3181.82€", gallery: [gallery1, gallery2, gallery3] },
        { x: 477, y: 147, id: 1, type: 'available', name: 'This zone is right behind the DJ booth', AmountWithVAT: "€ 3500", AmountWithoutVAT: "3181.82€", gallery: [gallery1, gallery2, gallery3] },
        { x: 390, y: 144, id: 2, type: 'available', name: 'This zone is right behind the DJ booth', AmountWithVAT: "€ 3500", AmountWithoutVAT: "3181.82€", gallery: [gallery1, gallery2, gallery3] },
        { x: 588, y: 198, id: 3, type: 'available', name: 'This zone is right behind the DJ booth', AmountWithVAT: "€ 3500", AmountWithoutVAT: "3181.82€", gallery: [gallery1, gallery2, gallery3] },
        { x: 608, y: 265, id: 4, type: 'available', name: 'Hotspot 3', AmountWithVAT: "€ 3500", AmountWithoutVAT: "3181.82€", gallery: [gallery1, gallery2, gallery3] },
        { x: 119, y: 233, id: 5, type: 'unavailable', name: 'Hotspot 4', AmountWithVAT: "€ 3500", AmountWithoutVAT: "3181.82€", gallery: [gallery1, gallery2, gallery3] },
        { x: 655, y: 200, id: 4, type: 'available', name: 'Hotspot 3', AmountWithVAT: "€ 3500", AmountWithoutVAT: "3181.82€", gallery: [gallery1, gallery2, gallery3] },
        { x: 677, y: 195, id: 5, type: 'available', name: 'Hotspot 4', AmountWithVAT: "€ 3500", AmountWithoutVAT: "3181.82€", gallery: [gallery1, gallery2, gallery3] },
    ];


    const handleClick = (hotspotId) => {
        const hotspot = hotspots.find(h => h.id === hotspotId);
        setSelectedHotspot(hotspotId);
        setHotspotData(hotspot);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    useEffect(() => {
        imgRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
    }, [position]);

    return (
        <>
            <Modal isOpen={modalVisible} onClose={handleCloseModal} hotspotData={hotspotData} />

            <div className="container" style={{ position: 'relative', width: '100%', overflow: 'hidden' }} ref={containerRef}>
                <div className='imgWrapper' style={{ width: '100%', overflow: 'scroll', position: 'absolute', top: '0', left: '0' }}>
                    <img
                        ref={imgRef}
                        className="draggable-image"
                        src={mapImage}
                        alt="Hotspot Image"

                    />
                    <div className="hotspot-container">
                        {hotspots.map((hotspot) => (
                            <Hotspot
                                key={hotspot.id}
                                hotspot={hotspot}
                                handleClick={handleClick}
                                style={{
                                    position: 'absolute',
                                    left: `${hotspot.x}px`,
                                    top: `${hotspot.y}px`,
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default DraggableImage;
