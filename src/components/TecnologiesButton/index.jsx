import { 
    Box
} from "@mui/material";

export default function TecnologiesButton ({children}) {
    return (
        <Box sx={{
            backgroundColor: '#97DFFC',
            borderRadius: '20px',
            textAlign: 'center',
            padding: '.2em 1em 0.3em 1em',
            color: '#161618',
        }}>
            {children}
        </Box>
    )
}