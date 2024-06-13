import { 
    Box,
    Typography
} from "@mui/material"

export default function Section2 () {
    return (
        <Box sx={{marginTop: '4em'}} id= "portfolio">
            <Typography variant="h2" color="#97DFFC" fontFamily="Andika, sans-serif"  
            sx={{
                margin: {xs: "1em 0 1em 1.5em", sm: "2em 0 1em 2em"},
                fontSize: {xs: "32px", md: "64px"}
            }}>— Portfolio</Typography>
        </Box>
    )
}