import styled from 'styled-components'

import { ActionGrid, ActionGridItem } from 'components/ActionGrid'
import Callout from 'components/Callout'
import Page, { page } from 'components/Page'

const questionsImage = require('../assets/images/contact/questions.jpg')
const feedbackImage = require('../assets/images/contact/feedback.jpg')
const vulnerabilityImage = require('../assets/images/security/vulnerability.jpg')
const sayhelloImage = require('../assets/images/contact/sayhello.jpg')

const facebookLogoImage = require('../assets/images/contact/facebook-logo.svg')
const githubLogoImage = require('../assets/images/contact/github-logo.svg')
const keybaseLogoImage = require('../assets/images/contact/keybase-logo.svg')
const twitterLogoImage = require('../assets/images/contact/twitter-logo.svg')

const Section = styled.section`
  margin-top: ${({ theme }) => theme.outerSpacing.s2};
  margin-bottom: ${({ theme }) => theme.outerSpacing.s2};
  padding-top: ${({ theme }) => theme.outerSpacing.s1};
  padding-bottom: ${({ theme }) => theme.outerSpacing.s1};
  text-align: center;
`

const Header = styled.h1`
  ${({ theme }) => theme.textStyles.secondLevelHeading}
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.textSpacing.s1};
`

const SocialAnchor = styled.a`
  margin: ${({ theme }) => theme.textSpacing.s1};
`

const SocialImage = styled.img`
  width: 75px;
  vertical-align: middle;
`

const SocialLink = ({ href, src, alt }) => (
  <SocialAnchor href={href}>
    <SocialImage src={src} alt={alt} />
  </SocialAnchor>
)

export default page(({ loggedIn }) => (
  <Page
    headTitle="Contact Buildkite"
    title="Contact Us"
    description="We’d love to hear from you."
    loggedIn={loggedIn}
  >
    <ActionGrid>
      <ActionGridItem
        heading="Questions & Support"
        image={questionsImage}
        imageWidth={433}
        imageAlt=""
        description="Things not going smoothly? Our team is here to help."
        url="/support"
        buttonTitle="See Support"
      />
      <ActionGridItem
        heading="Feedback & Suggestions"
        image={feedbackImage}
        imageWidth={466}
        imageAlt=""
        description="Have a request or idea? Let us know what you'd like to see."
        url="https://github.com/buildkite/feedback/issues"
        buttonTitle="Open a GitHub Issue"
      />
      <ActionGridItem
        heading="Report a Vulnerability"
        image={vulnerabilityImage}
        imageAlt=""
        description="Found a security issue? Request an invite to our bug bounty."
        url="/security"
        buttonTitle="See Security Docs"
      />
      <ActionGridItem
        heading="Say Hello!"
        image={sayhelloImage}
        imageAlt=""
        description="For press enquries and anything else, drop us a line."
        url="mailto:hello@buildkite.com"
        buttonTitle="hello@buildkite.com"
      />
    </ActionGrid>

    <Section>
      <Header>Find us on…</Header>
      <SocialLink
        href="https://www.facebook.com/buildkite/"
        src={facebookLogoImage}
        alt="Facebook"
      />
      <SocialLink
        href="https://github.com/buildkite"
        src={githubLogoImage}
        alt="GitHub"
      />
      <SocialLink
        href="https://keybase.io/buildkite"
        src={keybaseLogoImage}
        alt="Keybase"
      />
      <SocialLink
        href="https://twitter.com/buildkite"
        src={twitterLogoImage}
        alt="Twitter"
      />
    </Section>

    <Callout
      heading="Anyting else?"
      description="Our friendly support team can help."
      url="mailto:support@buildkite.com"
      buttonTitle="support@buildkite.com"
    />
  </Page>
))