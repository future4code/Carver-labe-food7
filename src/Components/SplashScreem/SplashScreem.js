import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { goToLogin } from '../../Routes/Coordinator'
import {SplashContainer, Logo} from './styledSplash'


function SplashScreen(props) {
    const history = useHistory()

    useEffect(() => {
        setTimeout(() => {
          props.setLoading(false);
        }, 1000);
      }, []);

    return (
        <SplashContainer>
            <Logo src={"https://cdn.zeplin.io/5dd5ae92669af1bc817c8359/assets/2996043A-2111-4F86-AB91-37474F98621C.svg"} />
        </SplashContainer>
    )
}

export default SplashScreen;