
import { useNavigate } from "react-router-dom"

function NavBar() {
    const navigate = useNavigate()
    return (
        <>
            <div className="ml-10 mb-3 flex space-x-4 my-3">
                <button
                    onClick={() => navigate('/')}
                    className="rounded transition duration-300 hover:bg-sky-100 px-2 py-1">
                    <span 
                    className="text-4xl text-shadow-sm text-bold text-secondary text-mono text-center"
                    >Hoop Swish</span>
                </button>
                <button 
                onClick={() => navigate('/players')}
                className="text-2xl rounded transition duration-300 hover:bg-sky-50 px-2 py-1">
                    Players
                </button>
                <button 
                    onClick={() => navigate('/teams')} 
                    className="text-2xl rounded transition duration-300 hover:bg-sky-50 px-2 py-1">
                    Teams
                </button>
            </div>
        </>
    )
}

export default NavBar