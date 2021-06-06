import React from 'react'
import firebase from 'src/firebase'
import { Image, InputField, Button } from 'bumbag'
import { Layout } from 'components/Layout'
import DefaultProfileImage from 'assets/default-avatar-profile.png'

const Profile = () => {
  const profileImage = firebase.auth().currentUser?.photoURL
    ? firebase.auth().currentUser?.photoURL
    : DefaultProfileImage

  return (
    <Layout>
      <h1>Profile Page</h1>
      <Image
        src={profileImage}
        borderRadius='50%'
        border='1px solid #cecece'
        width='150px'
      />
      <InputField type='file' accept='image/png, image/jpeg' />
      <InputField
        label='Display Name'
        name='displayName'
        value={firebase.auth().currentUser?.displayName}
      />
      <Button>Save</Button>
    </Layout>
  )
}
export { Profile }
