import React from 'react'
import GoogleLogin from 'react-google-login'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import bgVideo from '../assets/shareX.mp4'

import { client } from '../client'

const Login = () => {
    const navigate = useNavigate()

    const responseGoogle = (res) => {
        //console.log(res)
        localStorage.setItem('user', JSON.stringify(res.profileObj))
        const { name, googleId, imageUrl } = res.profileObj
        const document = {
            _id: googleId,
            _type: 'user',
            username: name,
            image: imageUrl
        }

        client.createIfNotExists(document)
            .then(() => {
                navigate('/', { replace: true })
            })
    }
    return (
        <div className='flex justify-start items-center flex-col h-screen '>
            <div className='relative w-full h-full'>
                <video
                    src={bgVideo}
                    loop
                    type='video/mp4'
                    autoPlay
                    controls={false}
                    className='w-full h-full object-cover'
                />
            </div>
            <div className='absolute flex flex-col justify-center items-center left-0 top-0 right-0 bottom-0 bg-blackOverlay'>
                <div className='text-primary font-bold h-10 items-center flex'>Share X</div>
                <div className='text-primary h-40 items-center flex '>A social media like application for sudents<br /> to share notes and images of various subjects<br /> and like others notes or comment on them.</div>
                <div className='shadow-2xl'>
                    <GoogleLogin
                        clientId={process.env.REACT_APP_GOOGLE_API_CLIENT_ID}
                        render={(renderprops) => (
                            <button
                                type='button'
                                className='bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none'
                                onClick={renderprops.onClick}
                                disabled={renderprops.disabled}
                            >
                                <FcGoogle className='mr-4' /> Sign In With Google
                            </button>
                        )}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy='single_host_origin'
                    />
                </div>
            </div>

        </div>
    )
}

export default Login
