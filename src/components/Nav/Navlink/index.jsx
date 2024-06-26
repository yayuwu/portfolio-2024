import './index.css'

export default function Navlink ({children, link}){
    return (
        <a 
        href={link}
        className="navlink"
        style={{
           position: 'relative',
           textDecoration: 'none',
           margin: '6px 20px',
           paddingBottom: '1px',
           fontSize: '18px',
        }}>{children}</a>
    )
}