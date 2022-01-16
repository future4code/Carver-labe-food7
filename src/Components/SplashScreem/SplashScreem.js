import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { goToLogin } from '../../routes/Coordinator'
import {SplashContainer, Logo} from './styledSplash'


function SplashScreen(props) {
    const history = useHistory()

    useEffect(() => {
        setTimeout(() => { 
          props.setLoading(false);
        }, 3000);
      }, []);

    return (
        <SplashContainer>
            <Logo src={"https://cdn.zeplin.io/5dd5ae92669af1bc817c8359/assets/E276DCA4-B1F0-4705-A0C2-54D89F95E4D6.svg"} />
        </SplashContainer>
    )
}

export default SplashScreen;