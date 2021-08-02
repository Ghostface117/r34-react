import React, { useCallback } from 'react'
import { PreferenceKey } from '../../data/types'
import usePreference from '../../hooks/usePreference'
import Setting from '../common/Setting'
import Toggle from '../common/Toggle'

export default function PrefLoadOriginals() {
  const [originals, setOriginals] = usePreference(PreferenceKey.ORIGINALS)
  const toggleOriginals = useCallback(() => setOriginals(!originals), [originals, setOriginals])
  return (
    <Setting
      title='Load original sizes'
      description='Display images and videos at their original resolution. This will consume more data but provides a nicer experience.'
    >
      <Toggle value={originals} onToggle={toggleOriginals} />
    </Setting>
  )
}
