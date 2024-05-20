import GoogleAuth from "../components/google-auth"

const LoginPage = () => {
  return (
    <div className='wrapper' style={{ backgroundColor: '#10151D', minHeight: '100vh', padding: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
        <GoogleAuth />
    </div>
  )
}

export default LoginPage