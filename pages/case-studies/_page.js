import styled from 'styled-components'

import Link from 'components/Link'
import Page, { page } from 'components/Page'
import { MediaItem, ImageCell as RawImageCell, TextCell } from 'components/MediaItem'

import caseStudies from './_data'

const CaseStudyWords = TextCell.extend`
  color: ${({ theme }) => theme.colors.text.subdued};

  > p {
    margin: ${({ theme }) => theme.textSpacing.s1} 0;
  }
`

const ImageCell = RawImageCell.extend`
  flex-grow: 0;
`

const ResultsCell = ImageCell.extend`
  display: flex;
  flex-direction: column;
  text-align: initial;
  padding: ${({ theme }) => theme.innerSpacing.s1} 0;
  margin: -${({ theme }) => theme.innerSpacing.s1};
`

const ResultItem = styled.div`
  background-color: ${({ theme }) => theme.colors.backgrounds.grey};
  padding: ${({ theme }) => theme.innerSpacing.s1};
  margin: ${({ theme }) => theme.innerSpacing.s1};
`

const ResultNumber = styled.span`
  font-size: 48px;
  font-weight: 800;
`

const TeamLink = styled.a`
  ${({ theme }) => theme.textStyles.navigationHyperlink}
`

const Logo = styled.img`
  width: 300px;
  max-width: 100%;
`

const Testimonial = styled.figure`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.backgrounds.grey};
  padding: ${({ theme }) => theme.innerSpacing.s2};
  overflow: hidden;
  position: relative;
  min-height: 16rem;

  &:before {
    content: '“';
    color: white;
    font-size: 288px;
    line-height: 1;
    position: absolute;
    top: -.2em;
    left: .1em;
    pointer-events: none;
  }
`

const Quotation = styled.blockquote`
  ${({ theme }) => theme.textStyles.secondLevelHeading}
  font-weight: normal;
  flex: 1 0 280px;
  margin-top: ${({ theme }) => theme.innerSpacing.s2};
  margin-bottom: ${({ theme }) => theme.textSpacing.s2};

  @media (min-width: 620px) {
    margin-top: 0;
    margin-bottom: 60px;
  }
`

const Attribution = styled.figcaption`
  flex: 1 0 220px;

  @media (min-width: 620px) {
    flex-grow: 0;
    align-self: flex-end;
    margin-top: 60px;
  }
`

const Headshot = styled.img`
  width: 90px;
  max-width: 100%;
`

const ImageGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-height: 400px;

  @media (min-width: 540px) {
    position: relative;
    margin-top: -10px;
  }

  @media (min-width: 620px) {
    margin-top: -50px;
  }
`

const ImageItem = styled.div`
  flex: 1 1 250px;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`

export default function caseStudyPage(pathname) {
  const caseStudy = caseStudies.find((caseStudy) => caseStudy.pathname == pathname);

  return page(({ loggedIn }) => (
    <Page
      title="Case Studies"
      headTitle={caseStudy.headTitle}
      loggedIn={loggedIn}
    >
      <p>Case Study</p>

      <MediaItem>
        <TextCell>
          <h1>
            <Link href={caseStudy.link.url} passHref>
              <TeamLink>{caseStudy.team}</TeamLink>
            </Link>
          </h1>
          <p>{caseStudy.industry} - {caseStudy.teamSize}</p>
        </TextCell>

        <ImageCell>
          <Logo
            src={caseStudy.logoImage}
            alt={`${caseStudy.team} logo`}
          />
        </ImageCell>
      </MediaItem>

      <MediaItem>
        <CaseStudyWords>
          {caseStudy.words}
        </CaseStudyWords>

        <ResultsCell>
          {caseStudy.results.map((result, index) => (
            <ResultItem key={index}>
              <ResultNumber>
                {result.number}{result.unit}
              </ResultNumber><br/>
              {result.label}
            </ResultItem>
          ))}
        </ResultsCell>
      </MediaItem>

      <Testimonial>
        <Quotation>
          {caseStudy.testimonial.testimonial}
        </Quotation>
        <Attribution>
          <Headshot
            src={caseStudy.testimonial.headshotImage}
            alt={caseStudy.testimonial.name}
          />
          <p>
            {caseStudy.testimonial.name}
            <br/>
            {caseStudy.testimonial.title}
          </p>
        </Attribution>
      </Testimonial>

      <ImageGrid>
        <ImageItem>
          <Image
            src={caseStudy.photoOne.image}
            alt={caseStudy.photoOne.alt}
          />
        </ImageItem>
        <ImageItem>
          <Image
            src={caseStudy.photoTwo.image}
            alt={caseStudy.photoTwo.alt}
          />
        </ImageItem>
      </ImageGrid>
    </Page>
  ))
}