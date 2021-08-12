import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { NO_OP } from '../../../data/types'
import useIsOnScreen from '../../../hooks/useIsOnScreen'
import { selectPostByIndex } from '../../../redux/selectors'
import { Media } from '../../player/Media'
const Screen = styled.div`
  height: 100vh;
  width: 100vw;
  scroll-snap-align: start;
  scroll-snap-stop: always;

  display: grid;
`

interface StoryProps {
  index: number
  onInView?: (index: number) => void
  onFinished?: () => void
}

export default function Story(props: StoryProps) {
  const { index, onInView, onFinished } = props
  const [ref, setRef] = React.useState<HTMLElement | null>(null)
  const [isInView] = useIsOnScreen(ref)
  const { type, preview_url, sample_url, file_url, width, height } = useSelector(selectPostByIndex(index))

  React.useEffect(() => {
    if (onInView && isInView) {
      onInView(index)
    }
  }, [index, isInView, onInView])

  return (
    <Screen id={`story-${index}`} ref={setRef}>
      <Media
        type={type}
        index={index}
        thumbnailSrc={preview_url}
        sampleSrc={sample_url}
        fullSrc={file_url}
        onLoad={NO_OP}
        width={width}
        height={height}
        detailsVisible={false}
        isFullscreen={true}
        onFinished={onFinished}
        isActive={isInView}
      />
    </Screen>
  )
}
