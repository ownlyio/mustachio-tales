import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import './App.css'
 
function App() {
    return (
        <div className="app">
            <div className="app-back-arrow">
                <a href="https://mustachioverse.com" className="text-decoration-none" title="Go back to Mustachio Website">
                    <FontAwesomeIcon color="white" size="2x" icon={faArrowLeft} />
                    <span className="app-back-arrow-text text-white font-andes">Back to Website</span>
                </a>
            </div>
        </div>
    )
}

export default App
