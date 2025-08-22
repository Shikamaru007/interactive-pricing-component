import './App.css'
import HeaderPattern from './assets/pattern-circles.svg'

function IntroHeader(){
    return(
        <>
            <div className="intro-header">
                <div className="texts">
                    <h1>Simple, traffic-based pricing</h1>
                    <div className="sub-texts">
                        <p>Sign-up for our 30-day trial.</p>
                        <p>No credit card required.</p>
                    </div>
                </div>
                <img src={HeaderPattern} alt="round pattern" className='pattern'/>

            </div>
        </>
    )
}

export default IntroHeader;