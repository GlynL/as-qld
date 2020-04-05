import React, { useState, useEffect } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Title from '../components/h1'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

// Configure Firebase.
const config = {
  apiKey: 'AIzaSyD3ASg9XiZYNXFGEk_F_HXYS3M-tA7Sn0E ',
  authDomain: 'localhost',
  // ...
}
firebase.initializeApp(config)

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/membership',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
}

const Membership = () => {
  const [state, setState] = useState('loading')
  const [user, setUser] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user)
        setState('authed')
      } else {
        setUser(null)
        setState('no-auth')
      }
    })
  }, [])

  return (
    <Layout>
      <SEO title="Membership" />
      {state === 'loading' && <div>loading..</div>}
      {state === 'no-auth' && <Auth />}
      {state === 'authed' && <Account user={user} />}
    </Layout>
  )
}

export default Membership

const Auth = () => {
  return (
    <>
      <Title>Become a Member</Title>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </>
  )
}

const Account = ({ user }) => {
  return (
    <>
      <Title>Membership Status</Title>
    </>
  )
}
