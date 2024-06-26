import { Box, Typography } from "@mui/material";
import { 
    githubIcon, 
    wppIcon, 
    linkedinIcon,
    flechaIcon 
} from "../../hooks/getCloudinaryImages";

export default function Header(){
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: '4em',
            flexWrap: 'wrap',
            // border: '1px solid #fff'
        }}>
            <Box>
               <Typography variant="h1" color='#97DFFC' fontFamily='Andika, sans-serif'
               sx={{
                fontWeight: 600,
                fontSize: '128px'
               }}>Yael</Typography>
               <Typography variant="h1" color='#97DFFC' fontFamily='Andika, sans-serif'
               sx={{
                fontWeight: 600,
                fontSize: '128px'
               }}>Correa</Typography>
               <Box sx={{marginLeft: '10px'}}>
                <img src={githubIcon} alt="" style={{width: '35px', margin: '2em 2em 0 0'}}/>
                <img src={wppIcon} alt="" style={{width: '35px', margin: '2em 2em 0 0'}}/>
                <img src={linkedinIcon} alt="" style={{width: '35px', margin: '2em 2em 0 0'}}/>
               </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', paddingLeft: '9em', width: '600px'}}>
                    <Typography variant="h4" color='#97DFFC' fontFamily='Andika, sans-serif'>Introduction</  Typography>
                    <Typography variant="h3" color='#fff' fontFamily='Andika, sans-serif'
                    sx={{paddingTop:' 10px'}}
                    >Front End Developer based in Buenos Aires</Typography>
                    <Typography  variant="p" color='#fff' fontFamily='Andika, sans-serif'
                    sx={{paddingTop:' 1em'}}
                    >I focus on web design and development, guaranteeing responsive web and good styles.</Typography>
                    <Box sx={{paddingTop: '1.4em'}}>
                       <a href="https://drive.google.com/file/d/1FXcbNkKaCGH964wE5hYxJwht6s29p0ms/view?usp=drive_link" style={{color: '#97DFFC', fontSize: '20px', display: "flex", textDecoration: 'none'}} target="_blank">
                          <p style={{color: '#97DFFC'}}>My CV</p>
                          <img src={flechaIcon} alt="" style={{margin: '0 0 6px 5px', width: '8px'}}/>
                        </a>
                    </Box>

            </Box>
        </Box>
    )
}