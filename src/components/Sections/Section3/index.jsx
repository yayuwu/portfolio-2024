import { 
    Box,
    Typography
} from "@mui/material"
import React from "react";
import Slider from "react-slick";
import JourneyItem from "./JourneyItem";
import './index.css'

const journeycontent = [
    {
        date: "AGO / 2023",
        content: "Realicé el curso de FullStack Node.js de 4 meses"
    },
    {
        date: "DIC / 2023",
        content: "Realicé el Bootcamp de React de 2 meses"
    },
    {
        date: "FEB / 2024",
        content: "Empecé a trabajar en Semillero LATAM"
    },
    {
        date: "MAY / 2024",
        content: "Arranqué la capacitación de Fundación Pescar de Full Stack"
    },
    {
        date: "JUN / 2024",
        content: "Arranqué la Tecnicatura en Sistemas de Información"
    },
]

export default function Section3 () {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
      };
    
    return (
        <Box sx={{marginTop: '4em'}} id= "journey">
            <Typography variant="h2" color="#97DFFC" fontFamily="Andika, sans-serif" fontSize="64px" margin="2em 0 1em 2em">— My Journey</Typography>
            <Box sx={{marginTop: '2em', display: "flex", justifyContent: 'center'}}>
                <div className="slider-container">
                   <Slider {...settings}>
                        {journeycontent.map((journeyitem) => (
                            <JourneyItem title={journeyitem.date} text={journeyitem.content}/>
                        ))}
                    </Slider>
                </div>
            </Box>
        </Box>
    )
}