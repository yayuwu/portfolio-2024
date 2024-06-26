import { 
    Box,
    Typography
 } from "@mui/material";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function ProjectItem ({img, title, onClick}) {
    return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '5px',
        '&:hover .hover-content-top': {
          display: 'block',
        },
        '&:hover .hover-content-bottom': {
          display: 'block',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0)',
          transition: 'background-color 0.3s ease',
          zIndex: 1,
        },
        '&:hover::after': {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        '& img': {
          borderBottomLeftRadius: 4,
          borderBottomRightRadius: 4,
          display: 'block',
          width: '100%',
          transition: 'transform 0.3s ease',
          zIndex: 0,
          position: 'relative',
        },
        '&:hover img': {
          transform: 'scale(1.05)',
        },
        '&:hover': {
          cursor: 'pointer'
        }
      }}
      onClick={onClick}
    >
      <Box
        className="hover-content-top"
        sx={{
          position: "absolute",
          top: "0",
          right: "0",
          zIndex: 2,
          display: "none",
          padding: "1em",
          color: "white",
        }}
      >
        <ArrowOutwardIcon />
      </Box>
      <Box
        className="hover-content-bottom"
        sx={{
          position: "absolute",
          bottom: "0",
          left: "0",
          zIndex: 2,
          display: "none",
          padding: "1em",
          color: "white",
        }}
      >
        <Typography variant="h6">
          {title}
        </Typography>
      </Box>
      <img
        src={img}
        alt={title}
        loading="lazy"
      />
    </Box>
    )
}