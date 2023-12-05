import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import TimelineOurServices from './TimelineOurServices';
import TimelineWhyChooseUs from './TimelineWhyUs';
import TimelinePartners from './TimelinePartners';
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
    const { t } = useTranslation();
    const [trackWidth, setTrackWidth] = useState(0);
    const [activeServiceModal, setActiveServiceModal] = useState(0);
    const activeServiceData = activeServiceModal ? SERVICES.find(service => service.id === activeServiceModal).modalData : null;

    const sliderRef = useRef();
    const rafRef = useRef(null);
    const lastScrollTimeRef = useRef(0); 

    const handleScroll = (e) => {
        e.preventDefault();

        if (!rafRef.current) {
            rafRef.current = requestAnimationFrame(() => {
                const delta = e.deltaY;
                const currentTime = new Date().getTime();

                if (currentTime - lastScrollTimeRef.current > 400) {
                    if (Math.abs(delta) > 50) {
                        setActiveSlideIndex((prevSlide) => (delta > 0 ? Math.min(prevSlide + 1, timelineData.length - 1) : Math.max(prevSlide - 1, 0)));
                        setTrackWidth(timelineData[activeSlideIndex].position);
                        lastScrollTimeRef.current = currentTime;
                    }
                }

                rafRef.current = null;
            });
        }
    };

    useEffect(() => {
        const slider = sliderRef.current;

        slider.addEventListener('wheel', handleScroll);

        return () => {
            slider.removeEventListener('wheel', handleScroll);
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
        // eslint-disable-next-line
    }, [sliderRef, activeSlideIndex]);

    useEffect(() => {
        setTrackWidth(timelineData[activeSlideIndex].position);
    }, [activeSlideIndex]);

    const handleDotClick = (index) => {
        setActiveSlideIndex(index);
    };

    return (
        <div className='timeline'>
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
                        ></div>
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
            <div className='slides' ref={sliderRef}>
                <div className='slides__wrapper' style={{
                    transform: `translateX(${activeSlideIndex * -88}%)`
                }}>
                    <TimelineOurServices services={SERVICES} setActiveServiceModal={setActiveServiceModal} />
                    <TimelineWhyChooseUs />
                    <TimelinePartners />
                </div>
            </div>
            {activeServiceData &&
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
