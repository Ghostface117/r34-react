import React from 'react'
import styled from 'styled-components'
import { BrandIcon } from '../../icons/Icons'
import R34Icon from '../../icons/R34Icon'
import FlexColumn, { FlexColumnWithSpacing } from '../common/FlexColumn'
import { HorizontalLine } from '../common/Lines'
import Surface from '../common/Surface'
import { Faded, Title } from '../common/Text'
import Header from '../features/Header'
import KofiButton, { AButton } from '../widgets/KofiButton'

const AboutSurface = styled(Surface)`
  grid-template-rows: auto auto auto auto 1fr;
  grid-template-columns: auto auto 1fr;
  padding: 16px;
  align-items: center;
`

const ProfilePicture = styled.img`
  border-radius: 1000px;
  height: 100px;
  width: 100px;
  grid-area: 1/1/4/2;
`

const AppLogo = styled(R34Icon)`
  height: 100px;
  width: 100px;
  grid-area: 1/1/4/2;
`

const Name = styled(Title)`
  text-align: left;
  grid-area: 1/2/2/3;
`

const Username = styled(Faded)`
  text-align: left;
  grid-area: 1/3/2/4;
`

const ShortDesc = styled(Faded)`
  grid-area: 2/2/3/4;
`

const FlexRow = styled.div`
  grid-area: 3/2/4/4;
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 4px;
`

const Connection = styled(AButton)`
  display: inline-flex;
  gap: 5px;
  max-height: 40px;

  span {
    white-space: nowrap;
  }
`

const Divider = styled(HorizontalLine)`
  grid-area: 4/1/5/4;
`

const Body = styled.div`
  grid-area: 5/1/6/4;
  display: flex;
  flex-direction: column;
  gap: 4px;

  p {
    line-height: 20px;
  }
`

export default function About() {
  return (
    <FlexColumn>
      <Header />
      <FlexColumnWithSpacing>
        <Title>The App</Title>
        <AboutSurface>
          <AppLogo size={100} />
          <Name>R34 React</Name>
          <ShortDesc>Here are some links</ShortDesc>
          <FlexRow>
            <Connection href='https://github.com/kurozenzen/r34-react' target='_newtab'>
              <BrandIcon icon='fa-github' color='white' />
              <span>Frontend</span>
            </Connection>
            <Connection href='https://github.com/kurozenzen/r34-json-api'>
              <BrandIcon icon='fa-github' color='white' />
              <span>Backend</span>
            </Connection>
            <Connection href='https://github.com/kurozenzen/r34-react/issues/new?template=bug_report.md'>
              <BrandIcon icon='fa-github' color='white' />
              <span>Bug Report</span>
            </Connection>
            <Connection href='https://github.com/kurozenzen/r34-react/issues/new?template=feature_request.md'>
              <BrandIcon icon='fa-github' color='white' />
              <span>Feature Request</span>
            </Connection>
          </FlexRow>
          <Divider />
          <Body>
            <p>A simple yet powerful search tool for rule34.xxx.</p>
            <p>
              The aim of this web application is to provide a more enjoyable experience while browsing rule34 on mobile
              devices. The sites main feature is an easy-to-use, tag-based search.
            </p>
          </Body>
        </AboutSurface>
        <Title>Me</Title>
        <AboutSurface>
          <ProfilePicture
            src={`https://avatars.githubusercontent.com/u/44543171?s=400&u=fbda1f0794336c90624d2005d8fd24a5ecb1e5fd&v=4`}
          />
          <Name>Zen Kuro</Name>
          <Username>(kurozenzen)</Username>
          <ShortDesc>Here are some links</ShortDesc>
          <FlexRow>
            <Connection href='https://github.com/kurozenzen'>
              <BrandIcon icon='fa-github' color='white' />
              <span>GitHub</span>
            </Connection>
            <Connection href=' https://discord.gg/yyJFG5PVBZ'>
              <BrandIcon icon='fa-discord' color='white' />
              <span>Discord</span>
            </Connection>
            <KofiButton id='V7V73PWW9' label='Ko-fi' />
          </FlexRow>
          <Divider />
          <Body>
            <p>
              Feel free to ping me on discord or write me an email if you wanna get in touch. I am usually quite
              friendly.
            </p>
            <p>
              I can take quite a while to respond to emails though, so if you need anything or just wanna talk discord
              is the way to go.
            </p>
            <p>
              Also if you have already sent me an email and I am not responding contact me on discord. I am not ignoring
              you I have probably just missed the email.
            </p>
            <p>That's all. Have a nice day.</p>
          </Body>
        </AboutSurface>
      </FlexColumnWithSpacing>
    </FlexColumn>
  )
}
