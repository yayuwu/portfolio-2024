import { 
    Box,
    Typography
} from "@mui/material"
import './index.css'

export default function JourneyItem ({title, text}) {
    return (
       <Box sx={{padding: '2em'}}>
         <h3 className="journey-title">{title}</h3>
         <Typography variant="p" color="white" fontFamily= "Andika, sans-serif" fontSize="20px" 
         sx={{
          fontSize: {xs: "16px", md: "20px", }
         }}>{text}</Typography>
       </Box>
    )
}