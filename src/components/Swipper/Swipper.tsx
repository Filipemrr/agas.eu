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
    location: string;
    content: string;
}

const FeedbackCardSwiper = () => {
    const CardData: FeedbackCardProps[] = [
        { id: 1, title: "Patrick Saccoccio", location: "Vicenza", content: " Oltre ad avere eliminato il problema del rifornimento dell’acqua, ora ho una qualità dell’acqua ottima e con la massima comodità. Il distributore Ecologiko è l’unico che ti permette di avere acqua naturale, frizzante, temperatura ambiente, fredda ed anche calda. Inoltre la gentilezza, disponibilità e professionalità delle persone è fantastica. Lo consiglio a tutti!" },
        { id: 2, title: "Gabriel Saccoccio", location: "Padova", content: " Si, direi proprio che lo consiglio. Ho acquistato il depuratore e in famiglia ne siamo tutti molto soddisfatti. Ho avuto un piccolo problema inizialmente con l'acqua gassata ma risolto velocemente dal tecnico, persona seria e disponibile." },
        { id: 3, title: "Filipe Raposo", location: "Venezia", content: " Ottimo prodotto e facile da usare. Non tornerei alle bottiglie neanche per sogno! Tra l'altro, mi sono accorta di bere anche più di prima, visto che è lì comoda sulla cucina. Bravi! e Grazie!" },
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
                    <FeedbackCard title={card.title} location={card.location} content={card.content} />
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    );
};

export default FeedbackCardSwiper;
