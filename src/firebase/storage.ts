import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { useEffect, useState } from 'react'
import { SupertagData, TagModifier, User } from 'r34-types'
import { sha256 } from '../data/encryption'
import useFirebaseAuthState from '../hooks/useFirebaseAuthState'
import { PreferencesState } from '../redux/reducers/preferences'
import { GenericConverter } from './genericConverter'

let initialized = false
let userConverter!: GenericConverter<User>

export function init() {
  userConverter = new GenericConverter<User>()
  initialized = true
}

async function getUserDoc() {
  if (!initialized) {
    console.warn('Cannot get userDoc. Not initialized yet')
    return undefined
  }
  try {
    const { currentUser } = firebase.auth()
    const email = currentUser?.email

    if (email) {
      const key = await sha256(email)
      const userDoc = firebase.firestore().collection('users').doc(key)
      return userDoc
    }

    return undefined
  } catch (err) {
    console.warn('Failed to get user document:', err)
    return undefined
  }
}

async function getUserData() {
  const userDoc = await getUserDoc()

  if (userDoc) {
    let userSnap = await userDoc.withConverter(userConverter).get()

    const userData = userSnap.data()
    return userData
  }

  return undefined
}

export async function getPreferences() {
  const userData = await getUserData()

  if (userData) return userData.preferences

  return undefined
}

export async function setPreferences(preferences: PreferencesState) {
  const userDoc = await getUserDoc()

  await userDoc?.set({ preferences: preferences })
}

export async function resetSeenPosts() {
  console.warn('no longer supported')
}

export async function getSupertags() {
  const userDoc = await getUserDoc()

  if (userDoc) {
    const snap = await userDoc.collection('supertags').get()
    const result: Record<string, SupertagData> = {}

    snap.forEach((doc) => {
      result[doc.id] = doc.data() as SupertagData
    })

    return result
  }

  return undefined
}

export async function addSupertag(name: string, description: string, tags: Record<string, TagModifier>) {
  const userDoc = await getUserDoc()

  userDoc?.collection('supertags').doc(name).set({ description, tags })
}

export async function removeSupertag(name: string) {
  const userDoc = await getUserDoc()

  userDoc?.collection('supertags').doc(name).delete()
}

export async function setTagsOfSupertag(name: string, tags: Record<string, TagModifier>) {
  const userDoc = await getUserDoc()

  userDoc?.collection('supertags').doc(name).update({ tags })
}

export function useSupertags() {
  const [supertags, setSupertags] = useState<Record<string, SupertagData>>({})
  const [collection, setCollection] = useState<firebase.firestore.CollectionReference>()

  const [, userInfo] = useFirebaseAuthState()

  useEffect(() => {
    if (userInfo?.email) {
      sha256(userInfo.email)
        .then((hash) => {
          const col = firebase.firestore().collection(`users/${hash}/supertags`)
          setCollection(col)
          return col.get()
        })
        .then((snapshot) => {
          const result = snapshot.docs.reduce((result, doc) => {
            result[doc.id] = doc.data() as SupertagData
            return result
          }, {} as Record<string, SupertagData>)

          setSupertags(result)
        })
        .catch((err) => {
          console.error('Error with useSupertags', err)
        })
    }
  }, [userInfo?.email])

  useEffect(() => {
    if (collection) {
      const unsubscribe = collection.onSnapshot((snapshot) => {
        const result = snapshot.docs.reduce((result, doc) => {
          const userSupertags = doc
          result[userSupertags.id] = doc.data() as SupertagData
          return result
        }, {} as Record<string, SupertagData>)

        setSupertags(result)
      })

      return () => {
        unsubscribe()
      }
    }
  }, [collection])

  return supertags
}
