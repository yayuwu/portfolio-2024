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
        content: "I completed the 4-month FullStack Node.js course"
    },
    {
        date: "DIC / 2023",
        content: "I completed the 2-month React Bootcamp"
    },
    {
        date: "FEB / 2024",
        content: "I started working at Semillero LATAM"
    },
    {
        date: "MAY / 2024",
        content: "I started the Full Stack training at Fundación Pescar."
    },
    {
        date: "JUN / 2024",
        content: "I started the Technical Degree in Information Systems"
    },
    {
        date: "NOV / 2024",
        content: "I completed my development training with the support of JP Morgan, Pampa Energía, and Fundación Pescar."
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
        responsive: [
            {
                breakpoint: 1024, // Define el ancho del punto de ruptura para tabletas grandes y laptops
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600, // Define el ancho del punto de ruptura para teléfonos móviles
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
      };
    
    return (
        <Box sx={{marginTop: '4em'}} id= "journey">
            <Typography variant="h2" color="#97DFFC" fontFamily="Andika, sans-serif"
            sx={{
                margin: {xs: "1em 0 1em 1.5em",sm: "2em 0 1em 2em"},
                fontSize: {xs: "32px", md: "64px"}
            }}>
                — Experience
            </Typography>
            <Box sx={{marginTop: '2em', display: "flex", justifyContent: 'center'}}>
                <div className="slider-container">
                   <Slider {...settings}>
                        {journeycontent.map((journeyitem, index) => (
                            <JourneyItem title={journeyitem.date} text={journeyitem.content} key={index}/>
                        ))}
                    </Slider>
                </div>
            </Box>
        </Box>
    )
}