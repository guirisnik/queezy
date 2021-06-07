import React, { useRef, useState, useEffect } from 'react'
import firebase from 'src/firebase'
import { useFormik } from 'formik'
import { Heading, Image, InputField, Button, DropdownMenu, Group } from 'bumbag'
import { Layout } from 'components/Layout'
import DefaultProfileImage from 'assets/default-avatar-profile.png'
import { Form } from './profile.style'

const Profile = () => {
  const [profileImage, setProfileImage] = useState(null)
  const [imageFile, setImageFile] = useState(null)
  const uploadInput = useRef(null)

  const {
    values,
    resetForm,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      displayName: firebase.auth().currentUser?.displayName,
      photoURL: '',
    },
    onSubmit: ({ displayName, photoURL }) => {
      if (photoURL) {
        const uid = firebase.auth().currentUser.uid
        const [_, imageType] = imageFile.type.split('/')
        uploadToStorage({ filename: `${uid}.${imageType}`, file: imageFile })
      }
      return updateUserDisplayName({ displayName })
    },
  })

  const setDefaultImage = () => setProfileImage(DefaultProfileImage)

  const handleUpload = () => uploadInput.current.click()

  const handleRemove = () =>
    firebase
      .storage()
      .refFromURL(firebase.auth().currentUser?.photoURL)
      .delete()
      .then(setDefaultImage)
      .then(removeUserPhoto)
      .catch(reason => console.error(reason?.message))

  const removeUserPhoto = () =>
    firebase.auth().currentUser.updateProfile({ photoURL: null })

  const updateUserDisplayName = ({ displayName }) =>
    firebase.auth().currentUser.updateProfile({ displayName })

  const updateUserPhoto = ({
    ref: {
      _delegate: {
        _location: { bucket, path_ },
      },
    },
  }) =>
    firebase
      .auth()
      .currentUser.updateProfile({ photoURL: `gs://${bucket}/${path_}` })

  const uploadToStorage = ({ filename, file }) =>
    firebase
      .storage()
      .ref()
      .child(filename)
      .put(file)
      .then(updateUserPhoto)
      .catch(reason => console.error(reason?.message))

  const setPreviewImage = event => {
    event.preventDefault()

    if (event.target.files[0]) {
      setImageFile(event.target.files[0])
      const reader = new FileReader()
      reader.addEventListener('load', () => setProfileImage(reader.result))
      reader.readAsDataURL(event.target.files[0])
    }

    handleChange(event)
  }

  const handleReset = () => {
    resetForm()
    setUserImage()
  }

  const setUserImage = () =>
    firebase.auth().currentUser?.photoURL
      ? firebase
          .storage()
          .refFromURL(firebase.auth().currentUser?.photoURL)
          .getDownloadURL()
          .then(setProfileImage)
      : setDefaultImage()

  useEffect(setUserImage, [])

  return (
    <Layout>
      <Heading use='h2'>Profile Page</Heading>
      <DropdownMenu
        width='min-content'
        margin='0 auto 20px'
        menu={
          <React.Fragment>
            <DropdownMenu.Item onClick={handleUpload} iconBefore='solid-pen'>
              Upload photo...
            </DropdownMenu.Item>
            {firebase.auth().currentUser.photoURL && (
              <DropdownMenu.Item
                onClick={handleRemove}
                iconBefore='solid-trash-alt'
                color='danger'
              >
                Remove photo
              </DropdownMenu.Item>
            )}
          </React.Fragment>
        }
      >
        <Button padding='0px' borderRadius='50%'>
          {profileImage && (
            <Image
              src={profileImage}
              borderRadius='50%'
              height='150px'
              width='150px'
            />
          )}
        </Button>
      </DropdownMenu>
      <Form onSubmit={handleSubmit}>
        <input
          id='photoURL'
          name='photoURL'
          ref={uploadInput}
          style={{ display: 'none' }}
          type='file'
          accept='image/png, image/jpeg'
          onBlur={handleBlur}
          onChange={setPreviewImage}
          value={values.photoURL}
        />
        <InputField
          label='Display Name'
          name='displayName'
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.displayName}
        />
        <Group>
          <Button width='100%' onClick={handleReset}>
            Cancel
          </Button>
          <Button isLoading={isSubmitting} type='submit'>
            Save
          </Button>
        </Group>
      </Form>
    </Layout>
  )
}
export { Profile }
