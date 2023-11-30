import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import TimelineOurServices from './TimelineOurServices';
import TimelineWhyChooseUs from './TimelineWhyUs';
import TimelinePartners from './TimelinePartners';
import { useEffect } from 'react';
import { SERVICES } from '../../constants';
import Modal from '../Services/Modal';

const timelineData = [
    {
        id: 1,
        position: '0%',
        title: 'timeline_os',
    },
    {
        id: 2,
        position: '50%',
        title: 'timeline_wcs',
    },
    {
        id: 3,
        position: '100%',
        title: 'timeline_partners',
    },
];

const Timeline = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const { t } = useTranslation()
    const [trackWidth, setTrackWidth] = useState(0)
    const [activeServiceModal, setActiveServiceModal] = useState(0)
    const activeServiceData = activeServiceModal ? SERVICES.find(service => service.id === activeServiceModal).modalData : null

    const sliderRef = useRef()
    const NUM_SLIDES = timelineData.length;

    useEffect(() => {
        const slider = sliderRef.current
        if (slider) {
            const onWheel = e => {
                // console.log(e);
                if (e.deltaY === 0) return;
                e.preventDefault();
                if (e.deltaY > 0) {
                    setActiveSlideIndex((prevSlide) => Math.min(prevSlide + 1, NUM_SLIDES - 1));
                } else if (e.deltaY < 0) {
                    setActiveSlideIndex((prevSlide) => Math.max(prevSlide - 1, 0));
                }
            };
            slider.addEventListener("wheel", onWheel);
            return () => {
                slider.removeEventListener("wheel", onWheel);
            };
        }
    }, [sliderRef, NUM_SLIDES])

    useEffect(() => {
        setTrackWidth(timelineData.find((_, i) => i === activeSlideIndex).position)
    }, [activeSlideIndex])
    const handleDotClick = (index) => {
        setActiveSlideIndex(index);
    };

    return (
        <div
            className='timeline'
        >
            <div className="timeline__wrapper">
                {timelineData.map((item, index) => (
                    <div
                        key={item.id}
                        style={{ left: item.position }}
                        className='timeline__dot'
                        onClick={() => handleDotClick(index)}
                    >
                        <div
                            className={`timeline__dot_circle ${index <= activeSlideIndex ? 'active' : ''} `}
                        >
                        </div>
                        <p
                            className='timeline__dot_title'
                            onClick={() => handleDotClick(index)}
                        >
                            {t(item.title)}
                        </p>
                    </div>
                ))}

                <div className='timeline__track' style={{ width: trackWidth }}></div>
            </div>
            <div className='slides' ref={sliderRef} >
                <div className='slides__wrapper' style={{
                    transform: `translateX(${activeSlideIndex * -88}%)`

                }}>
                    <TimelineOurServices services={SERVICES} setActiveServiceModal={setActiveServiceModal} />
                    <TimelineWhyChooseUs />
                    <TimelinePartners />
                </div>
            </div>
            {activeServiceData
                &&

                <Modal
                    heading={t(activeServiceData.headingTranslationName)}
                    cost={activeServiceData.cost}
                    text={t(activeServiceData.textTranslationName)}
                    close={() => setActiveServiceModal(0)}
                />}
        </div>
    );
};

export default Timeline;
