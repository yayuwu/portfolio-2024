import { useState, forwardRef, Fragment } from "react";
import { 
    Dialog,
    AppBar,
    Toolbar,
    Button,
    Slide,
    IconButton,
    Typography,
    Box
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"
import TecnologiesButton from "../TecnologiesButton";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

export default function PortfolioModal ({ nameProject, descriptionProject, tecnologiesProject, linksProject, imagesProject ,isOpen, handleClose }) {

    return (
        <Fragment>
            <Dialog
            fullScreen
            open={isOpen}
            onClose={handleClose}
            TransitionComponent={Transition}
            sx={{
                "& .MuiDialog-paper" : {
                    backgroundColor: '#161618'
                }
            }}
            >
                <AppBar sx={{position: 'relative', backgroundColor: '#161618', boxShadow: 'none'}}>
                    <Toolbar >
                        <IconButton
                        edge= "start"
                        color= "inherit"
                        onClick={handleClose}
                        >
                            <CloseIcon/>
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <Box sx={{ display: 'flex', flexDirection: 'column', margin: {xs: '2em', sm: '4em', md: '6em', lg: '8em'}, alignItems: 'center' }}>
                   <Box sx={{display: 'flex', flexDirection: 'column'}}>
                       <Typography variant="p" color="#97DFFC" fontFamily="Andika, sans-serif" sx={{ fontWeight: '700' }}>Nombre del proyecto</Typography>
                       <Typography variant="p" fontFamily="Andika, sans-serif" sx={{ fontWeight: '300' }}>{nameProject}</Typography>
                       <Typography variant="p" color="#97DFFC" fontFamily="Andika, sans-serif" sx={{ fontWeight: '700' }}>Descripción</Typography>
                       <Typography variant="p" fontFamily="Andika, sans-serif" sx={{ fontWeight: '300' }}>{descriptionProject}</Typography>
                       <Typography variant="p" color="#97DFFC" fontFamily="Andika, sans-serif" sx={{ fontWeight: '700' }}>Tecnologías usadas</Typography>
                       <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, my: 1 }}>
                          { tecnologiesProject &&  tecnologiesProject.map((tecnologyProject, index) => (
                            <TecnologiesButton key={index}>{tecnologyProject.name}</TecnologiesButton>
                          ))}
                       </Box>
                       <Typography variant="p" color="#97DFFC" fontFamily="Andika, sans-serif" sx={{ fontWeight: '700' }}>Links</Typography>
                          {linksProject && linksProject.map((linkProject, index) => (
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, my: 1}} key={index}>
                                {linkProject.web && 
                                <a href={linkProject.web} target= "_blank"><img src="https://res.cloudinary.com/dkfa8olux/image/upload/v1719323972/yael_portfolio_2024/svg/public_24dp_FILL0_wght400_GRAD0_opsz24_afti08.svg" alt="icon-web" /></a>
                                }
                                {linkProject.github && 
                                <a href={linkProject.github} target= "_blank"><img src="https://res.cloudinary.com/dkfa8olux/image/upload/v1719324081/yael_portfolio_2024/svg/github-white-xs_upcf78.svg" alt="icon-github"/></a>
                                }
                            </Box>
                        ))}
                   </Box>
                </Box>
            </Dialog>
        </Fragment>
    )
}
