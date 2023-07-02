import React from 'react';

export default function LoginForm () {
    return (
        <div className='login-form-container'>
            <form className='login-form'>
                <div className='login-form-content'>
                    <h3 className='login-form-title'>Sign In</h3>
                    <div className='form-group mt-3'>
                        <label>Username</label>
                        <input
                            type='username'
                            className='form-control mt-1'
                            placeholder='Enter Username'
                        />
                    </div>
                    <div className='form-group mt-3'>
                        <label>Password</label>
                        <input
                            type='password'
                            className='form-control mt-1'
                            placeholder='Enter Password'
                        />
                    </div>
                    <div className='d-grid gap-2 mt-3'>
                        <button type='submit' className='btn btn-primary'>
                            Submit
                        </button>
                    </div>
                    <p className='forgot-password text-right mt-2'>
                        Forgot <a href='#'>password?</a>
                    </p>
                </div>
            </form>
        </div>
    )
}