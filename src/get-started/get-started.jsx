import './getStarted.css'
import { useNavigate } from 'react-router-dom'

const GetStarted = () => {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 30, overflow: 'hidden'}}>
        <div style={{ color: 'white', fontWeight: 700, fontSize: '7vw', textAlign: 'center',}} className='h1'>
            Gemma open models
        </div>
        <h2 style={{ color: '#B7BECA', fontWeight: 400, fontSize: '1.3vw', textAlign: 'center', lineHeight: 1.5, }}>
            A family of lightweight, state-of-the art open models built from the same <br /> research and technology used to create the Gemini models
        </h2>
        <button onClick={() => navigate('/login')} style={{ backgroundColor: '#3A82FF', outline: 'none', border: 'none', padding: 12, paddingRight: 30, paddingLeft: 30, borderRadius: 30, fontSize: '1.3vw', color: 'white', fontWeight: 600, cursor: 'pointer'}}>Get started</button>
        <img src='/dots.jpg' alt='background-dots' style={{ position: 'absolute', width: '100vw', maxWidth: '100%', zIndex: '-1', objectFit: 'cover', height: '100%' }}/>
    </div>
  )
}

export default GetStarted