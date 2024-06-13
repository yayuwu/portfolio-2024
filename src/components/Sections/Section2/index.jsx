import { 
    Box,
    Typography
} from "@mui/material"
import Masonry from '@mui/lab/Masonry';
import ProjectItem from "./ProjectItem";

export default function Section2 () {
    return (
        <Box sx={{marginTop: '4em'}} id= "portfolio">
            <Typography variant="h2" color="#97DFFC" fontFamily="Andika, sans-serif"  
            sx={{
                margin: {xs: "1em 0 1em 1.5em", sm: "2em 0 1em 2em"},
                fontSize: {xs: "32px", md: "64px"}
            }}>— Portfolio</Typography>
            <Box display="flex" justifyContent="center">
                <Masonry columns={{xs: 1, sm: 2, md: 3}} spacing={2} sx={{width: "60%"}}>
                    <ProjectItem img="https://res.cloudinary.com/dkfa8olux/image/upload/v1718302284/yael_portfolio_2024/projects/portfolio-2024/Captura_de_pantalla_995_uj8xwf.png" title="Portfolio 2024" />
                    <ProjectItem img="https://res.cloudinary.com/dkfa8olux/image/upload/v1714686914/yael_portfolio_2024/projects/funkoshop/uwvnvpo5vwd9iev1pbpe.png" title="Funkoshop"/>
                    <ProjectItem img="https://res.cloudinary.com/dkfa8olux/image/upload/v1718302212/yael_portfolio_2024/projects/Summer%20Exploring/screencapture-127-0-0-1-5500-index-html-2024-06-06-15_34_00_ybsljl.png" title="Summer Exploring" />
                    <ProjectItem img="https://res.cloudinary.com/dkfa8olux/image/upload/v1718302658/yael_portfolio_2024/projects/wwwapas/Captura_de_pantalla_996_vgg0ai.png" title="wwwapas"/>
                    <ProjectItem img="https://res.cloudinary.com/dkfa8olux/image/upload/v1718301427/yael_portfolio_2024/projects/ECOSistema/Captura_de_pantalla_956_lfeemz.png" title="ECOSistema"/>
                    <ProjectItem img="https://res.cloudinary.com/dkfa8olux/image/upload/v1718303064/yael_portfolio_2024/projects/calculadora-web/Desktop_-_3_wa1o2r.png" title="Calculadora web"/>
                    <ProjectItem img="https://res.cloudinary.com/dkfa8olux/image/upload/v1718303289/yael_portfolio_2024/projects/portfolio-2023/imagen-webflow_cq4my4.png" title="Portfolio 2023"/>
                </Masonry>
            </Box>
        </Box>
    )
}