import React from 'react';
import SlickSlider from '../Slider/Slider';
import close_icon from "../../Assets/_Menu icon.png";
import ButtonBottom from '../../component/ButtonBottom/ButtonBottom';
import SliderWithArrow from "../SliderWithArrow/SliderWithArrow";

function Modal({ isOpen, onClose, hotspotData }) {
    if (!isOpen || !hotspotData) {
        return null;
    }

    const { name, AmountWithVAT, AmountWithoutVAT, gallery } = hotspotData;

    return (
        <div className={`modal ${isOpen ? 'show' : ''}`} onClick={onClose}>
            <div className={`modal-content ${isOpen ? '' : 'hide'}`} onClick={(e) => e.stopPropagation()}>
                <div className='modal-close' onClick={onClose}>
                    <img src={close_icon} alt="Close" />
                </div>
                <div className='modal-body-content'>
                    <SliderWithArrow />
                    <div className='hotspot-details'>
                        <p>{name}</p>
                        <div className='vat-wrapper'>
                            <span>Minimum Spend</span>
                            <div className='with-vat'>
                                <p>{AmountWithVAT}</p>
                                <span>VAT included</span>
                            </div>
                            <div className='without-vat'>
                                <p>{AmountWithoutVAT}</p>
                                <span>VAT not included</span>
                            </div>
                        </div>
                    </div>
                    <div className="gallery">
                        <SlickSlider images={gallery} />
                    </div>
                </div>
                <div className='button-wrap'>
                    <ButtonBottom text={"Select this zone"} color="#FF003D" />
                </div>
            </div>
        </div>
    );
}

export default Modal;
