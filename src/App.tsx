import './App.css'
import { useState } from 'react'
import GitHubForkButton from './ForkMeOnGitHub'

function App() {
  const [userData, setUserData] = useState({
    name: '',
    designation: '',
    companyName: '',
    phoneNumber: '',
    email: '',
    address: '',
    submit: false
  })

  return (
    <>
      <h1 className='heading'>Visiting Card Generator</h1>

      <div className='input-container'>
        <input onChange={(e) => { setUserData({ ...userData, name: e.target.value }) }} type="text" placeholder='Enter your name' /> <br/>
        <input onChange={(e) => { setUserData({ ...userData, designation: e.target.value }) }} type="text" placeholder='Enter your designation' /><br/>
        <input onChange={(e) => { setUserData({ ...userData, companyName: e.target.value }) }} type="text" placeholder='Enter your company name' /><br/>
        <input onChange={(e) => { setUserData({ ...userData, phoneNumber: e.target.value }) }} type="number" placeholder='Enter your phone number' /><br/>
        <input onChange={(e) => { setUserData({ ...userData, email: e.target.value }) }} type="email" placeholder='Enter your email' /><br/>
        <input onChange={(e) => { setUserData({ ...userData, address: e.target.value }) }} type="text" placeholder='Enter your address' /><br/>
      </div>
      <div className='button-container'>
        <button className='generate-button' onClick={() => { setUserData({...userData, submit: true}) }}>Generate</button>
      </div>

      <div>
        {
          userData.designation &&
          userData.companyName &&
          userData.phoneNumber &&
          userData.email &&
          userData.address &&
          userData.name &&
          userData.submit && (
            <>
              <div className='card-container'>
                <p>
                  <b>Name:</b> {userData.name}
                </p>
                <p>
                  <b>Designation:</b> {userData.designation}
                </p>
                <p>
                  <b>Company Name:</b> {userData.companyName}
                </p>
                <p>
                  <b>Phone Number:</b> {userData.phoneNumber}
                </p>
                <p>
                  <b>Email:</b> {userData.email}
                </p>
                <p>
                  <b>Address:</b> {userData.address}
                </p>
              </div>
              <div className="clear-container">
                <button className='clear-button' onClick={() => { setUserData({ ...userData, submit: false }) }} type='button'>Clear</button>
              </div>
              <GitHubForkButton />
            </>
          )
        }
        {userData.submit && !userData.designation && <p className="error-message">Please fill in the designation field.</p>}
        {userData.submit && !userData.companyName && <p className="error-message">Please fill in the company name field.</p>}
        {userData.submit && !userData.phoneNumber && <p className="error-message">Please fill in the phone number field.</p>}
        {userData.submit && !userData.email && <p className="error-message">Please fill in the email field.</p>}
        {userData.submit && !userData.address && <p className="error-message">Please fill in the address field.</p>}
        {userData.submit && !userData.name && <p className="error-message">Please fill in the name field.</p>}
      </div>
      <GitHubForkButton />
    </>
  )
}

export default App
