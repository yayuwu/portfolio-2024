import './index.css'

export default function StyledButton({children}){
    return(
        <button style={{
            color: 'black',
            border: '1px solid #97DFFC',
            backgroundColor: '#97DFFC',
            fontSize: '18px',
            padding: '5px 30px',
            borderRadius: '20px',
            cursor: 'pointer',
        }}
        className='styledbtn'
        >
            {children}
        </button>
    )
}