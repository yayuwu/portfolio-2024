import { 
    Box,
    Typography
} from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'; 
import skillsData from '../../../utils/skillsData.json'

export default function Section4 () {
    return (
        <Box sx={{margin: '4em 0'}} id= "skills">
            <Typography variant="h2" color="#97DFFC" fontFamily="Andika, sans-serif"
            sx={{
                margin: {xs: "1em 0 1em 1.5em",sm: "2em 0 1em 2em"},
                fontSize: {xs: "32px", md: "64px"}
            }}>
                — Skills
            </Typography>
            <Box display="flex" justifyContent="center">
                <Grid container spacing={4} margin="2em 0" sx={{ width: {xs: "60%", sm: "70%", md: "80%"}}}>
                    {
                        skillsData.map((skill, index) => (
                            <Grid md={4} sm={6} xs={12} key={index}>
                                <Grid container display="flex" alignItems="center">
                                    <Grid sx={{width: { xs: "40px", md: "50px", lg: "60px" }}}>
                                        <img src={skill.img} alt={skill.id} style={{width: "100%"}}/>
                                    </Grid>
                                    <Grid>
                                        <Typography color="#97DFFC" fontFamily="Andika, sans-serif" fontWeight="600" paddingLeft="1em" sx={{fontSize: { xs: "18px", md: "22px"  }}}>{skill.skill}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Box>
    )
}