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
        { id: 1, title: "Patrick Saccoccio", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { id: 2, title: "Gabriel Saccoccio", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
        { id: 3, title: "Filipe Raposo", content: "Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Faucibus scelerisque eleifend donec pretium vulputate sapien. Adipiscing at in tellus integer feugiat scelerisque varius morbi enim. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Et ligula ullamcorper malesuada proin libero nunc. Elit eget gravida cum sociis natoque penatibus et. Aliquam purus sit amet luctus. At ultrices mi tempus imperdiet nulla. Sollicitudin ac orci phasellus egestas. Integer eget aliquet nibh praesent." },
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
