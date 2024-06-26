import { Box } from "@mui/material"
import Masonry from '@mui/lab/Masonry';

export default function Portfolio(){
    return (
        <Box sx={{backgroundColor: '#161618'}}>
            <Masonry columns={4} spacing={2}>
                <p>A</p>
            </Masonry>
        </Box>
    )
}