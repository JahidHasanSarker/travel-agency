import Banner from '../Banner/Banner';
import TravelService from '../TravelService/TravelService';
import Team from '../Team/Team';
import About from '../About/About';
import Contact from '../Contact/Contact';
import { useEffect, useState } from 'react';
import BounceLoader from "react-spinners/BounceLoader";
import './Home.css';



const Home = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    const mystyle = {
        display: "flex",
        justifyContent: "center",
        textAlign: "center"
        
      };
    
    return (
        <div>
            {
                loading ? 
                <div className="spin-space"><BounceLoader  color={"#f37a24"} css={mystyle} loading={loading} size={50} /></div>
                :

            <div>
               
                <Banner></Banner>
                <TravelService />
                <About></About>
                <Team></Team>
                <Contact></Contact>  
              
            </div>      
            }
        </div>
    );
};

export default Home;

