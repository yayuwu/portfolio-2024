import { useState } from "react";
import { 
    Box,
    Typography
} from "@mui/material"
import Masonry from '@mui/lab/Masonry';
import ProjectItem from "./ProjectItem";
import useProjects from "../../../hooks/useProjects";
import PortfolioModal from "../../Modal";

export default function Section2 () {
    const { projects, error, loading } = useProjects()
    const [open, setOpen] = useState(false)
    const [currentProject, setCurrentProject] = useState(null)

    const handleClickOpen = (project) =>{
        setCurrentProject(project)
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
        setCurrentProject(null)
    }
    console.log(currentProject)
    return (
        <Box sx={{marginTop: '4em'}} id= "portfolio">
            <Typography variant="h2" color="#97DFFC" fontFamily="Andika, sans-serif"  
            sx={{
                margin: {xs: "1em 0 1em 1.5em", sm: "2em 0 1em 2em"},
                fontSize: {xs: "32px", md: "64px"}
            }}>— Portfolio</Typography>
            <Box display="flex" justifyContent="center">
                <Masonry columns={{xs: 1, sm: 2, md: 3}} spacing={2} sx={{width: "60%"}}>
                    {projects.map((project, index)=> (
                        <ProjectItem  key={index} title={project.title} img={project.images[0].link} onClick={() => handleClickOpen(project)}/>
                    ))}
                </Masonry>
            </Box>
            {currentProject && (
                <PortfolioModal
                isOpen={open}
                handleClose={handleClose}
                nameProject={currentProject.title}
                descriptionProject={currentProject.content}
                tecnologiesProject={currentProject.tecnologies || []}
                linksProject={currentProject.links || []}
                imagesProject={currentProject.images || []}
                />
            )}
        </Box>
    )
}