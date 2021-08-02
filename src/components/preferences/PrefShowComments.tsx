import React, { useCallback } from 'react'
import { PreferenceKey } from '../../data/types'
import usePreference from '../../hooks/usePreference'
import Setting from '../common/Setting'
import Toggle from '../common/Toggle'

export default function PrefShowComments() {
  const [showComments, setShowComments] = usePreference(PreferenceKey.SHOW_COMMENTS)
  const toggleShowComments = useCallback(() => setShowComments(!showComments), [showComments, setShowComments])

  return (
    <Setting
      title='Show comments'
      description="If there are comments on a post, they will appear in the details. They can be a bit weird though, that's why they are disabled by default."
    >
      <Toggle value={showComments} onToggle={toggleShowComments} />
    </Setting>
  )
}
