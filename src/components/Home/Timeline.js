import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import TimelineOurServices from './TimelineOurServices';
import TimelineWhyChooseUs from './TimelineWhyUs';
import TimelinePartners from './TimelinePartners';
import TimelineContacts from './TimelineContacts';
import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

const timelineData = [
    {
        id: 1,
        position: '0%',
        title: 'timeline_os', // Set the position of the dot on the timeline (customize as needed)
        content: <TimelineOurServices />, // Create your custom components and import them here
    },
    {
        id: 2,
        position: '50%',
        title: 'timeline_wcs',
        content: <div>cc2</div>,
    },
    {
        id: 3,
        position: '100%',
        title: 'timeline_partners',
        content: <div>cc3</div>,
    },
    // {
    //     id: 4,
    //     position: '100%',
    //     title: 'timeline_contacts',
    //     content: <div>cc4</div>,
    // },
];

const Timeline = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const { t } = useTranslation()
    const [trackWidth, setTrackWidth] = useState(0)
    const matches = useMediaQuery({
        query: '(max-width: 1280px) and (min-width: 993px)'
    })

    const slidesGap = matches ? 24 : 40
    useEffect(() => {
        setTrackWidth(timelineData.find((el, i) => i === activeSlideIndex).position)
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
            <div className='slides' >
                <div className='slides__wrapper' style={{
                // transform: `translateX(${activeSlideIndex <= 2 ? `calc(${activeSlideIndex} * (-90% - ${slidesGap}px))` : `calc(-180% - ${2 * slidesGap}px - (400px - (10% - ${slidesGap}px)`})`
                transform: `translateX(${activeSlideIndex * -88}%)`
            
            }}>
                    <TimelineOurServices />
                    <TimelineWhyChooseUs />
                    <TimelinePartners />
                </div>
            </div>
        </div>
    );
};

export default Timeline;
