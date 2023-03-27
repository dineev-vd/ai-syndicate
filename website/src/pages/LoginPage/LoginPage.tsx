import React from 'react'
import Filler from '../../components/FillerSignup/FillerSignup';
import SignIn from '../../components/SignIn/SignIn';

type Props = {}

const LoginPage: React.FC = (props: Props) => {
  return (
    <div>
        <Filler />
        <SignIn />
    </div>
  )
}

export default LoginPage;