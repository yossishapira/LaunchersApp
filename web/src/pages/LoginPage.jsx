import React, { useState } from 'react'
import { login } from '../api/auth'
import { useAuthStore } from '../store/useStore'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const setLogin = useAuthStore((state) => state.setLogin)
    const navigate = useNavigate()
    const handLogin = async (e) => {
        e.preventDefault()
        try {
            const data = await login(username, password)
            setLogin(data.user, data.token)
            navigate('/launchers')
        } catch (err) {

        }
    }


    return (
        <div className='flex flex-col items-center justify-center bg-amber-100 h-150'>
            <form className="bg-amber-50 p-8" onSubmit={handLogin}>
                <div className=''>
                    <p>ligin</p>

                </div>
                <div>
                    <label>username</label>
                    <input className='border-1' type="text" placeholder='username' onChange={e => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>password</label>
                    <input className='border-1' type="text" placeholder='password' onChange={e => setPassword(e.target.value)} />
                </div>

                <button className='border-2' type='submit'>Create</button>
            </form>
        </div>
    )
}
