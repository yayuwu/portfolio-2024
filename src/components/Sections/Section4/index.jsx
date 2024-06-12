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
                margin: {xs: "1em 0 1em 1em",sm: "2em 0 1em 2em"},
                fontSize: {xs: "44px", sm: "64px"}
            }}>
                — Skills
            </Typography>
            <Box display="flex" justifyContent="center">
                <Grid container spacing={4} margin="2em 0" sx={{ width: {xs: "300px", sm: "60%"}}}>
                    {
                        skillsData.map((skill) => (
                            <Grid md={4} sm={6} xs={12}>
                                <Grid container display="flex" alignItems="center">
                                    <Grid>
                                        <img src={skill.img} alt={skill.id} />
                                    </Grid>
                                    <Grid>
                                        <Typography color="#97DFFC" fontFamily="Andika, sans-serif" fontSize="22px" fontWeight="600" paddingLeft="1em">{skill.skill}</Typography>
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