import React, { useEffect } from 'react'
import {SplashContainer, Logo} from './styledSplash'
import LogoBranca from '../../assets/icones/logo-future-eats.svg'

function SplashScreen(props) {
    useEffect(() => {
        setTimeout(() => { 
          props.setLoading(false);
        }, 1500);
      }, []);

    return (
        <SplashContainer>
            <Logo src={LogoBranca} />
        </SplashContainer>
    )
}

export default SplashScreen;