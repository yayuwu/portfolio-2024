import { 
    Box,
    Typography 
} from "@mui/material"

export default function Footer () {
    return (
        <Box sx={{margin: '4em 8em'}}>
            <hr/>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                <Box sx={{marginTop: '1em'}}>
                    <Typography variant="p" color="#97DFFC">© 2024 <span style={{color: '#858AE3'}}>Yael Correa</span>. All rights reserved.</Typography>
                </Box>
                <Box sx={{ marginTop: '1em'}}>
                        <a href="" target="_blank"><img src="https://res.cloudinary.com/dkfa8olux/image/upload/v1714664132/yael_portfolio_2024/svg/jdeblz9ocg3x32yfvt7p.svg" alt="github"  style={{width: '20px'}}/></a>
                        <a href="" target="_blank"><img src="https://res.cloudinary.com/dkfa8olux/image/upload/v1714664134/yael_portfolio_2024/svg/javxkmp6vjvavzv4igtx.svg" alt="whatsapp"  style={{width: '20px', margin: '0 .5em 0 1em'}}/></a>
                        <a href="" target="_blank"><img src="https://res.cloudinary.com/dkfa8olux/image/upload/v1714664136/yael_portfolio_2024/svg/duvdoysl2juuxiubhquu.svg" alt="linkedin"  style={{width: '20px', margin: '0 .5em'}}/></a>
                </Box>
            </Box>
        </Box>
    )
}