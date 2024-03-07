import React from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';
import FeedbackCard from '../FeedbackCard/FeedbackCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.css'
import {useMediaQuery} from "@mui/material";

interface FeedbackCardProps {
    id: number;
    title: string;
    content: string;
}

const FeedbackCardSwiper = () => {
    const CardData: FeedbackCardProps[] = [
        { id: 1, title: "Tittle 1", content: "Content 1" },
        { id: 2, title: "Tittle 2", content: "Content 2" },
        { id: 3, title: "Tittle 3", content: "Content 3" },
        { id: 4, title: "Tittle 4", content: "Content 3" },
        { id: 5, title: "Tittle 5", content: "Content 3" },
        { id: 6, title: "Tittle 6", content: "Content 3" }
    ];
    const isSmallScreen = useMediaQuery('(max-width:600px)');
    return (
        <div>
            <Swiper
                slidesPerView={1}
                navigation
            >
            {CardData.map((card) => (
                <SwiperSlide key={card.id} style={{ width: '100%', height: '300px' }}>
                    <FeedbackCard title={card.title} content={card.content} />
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    );
};

export default FeedbackCardSwiper;
