import React from 'react'
import { Html } from '@react-email/html'
import { Section } from '@react-email/section'
import { Text } from '@react-email/text'
import { Button } from '@react-email/button'
import defaultTheme from 'tailwindcss/defaultTheme'

const base = {
  margin: 0,
  color: '#000',
  fontFamily: [...defaultTheme.fontFamily.sans],
  backgroundColor: '#fff',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
}

const container = {
  width: '100%',
  maxWidth: '640px',
  marginRight: 'auto',
  marginLeft: 'auto',
  padding: '32px',
}

const text = {
  base: {
    margin: '0 0 16px 0',
    color: '#667085',
    fontSize: '16px',
    lineHeight: '24px',
  },
  heading: {
    margin: '0 0 16px 0',
    color: '#101828',
    fontWeight: '700',
    fontSize: '30px',
    lineHeight: '38px',
    letterSpacing: '-0.025em',
  },
  headingcolorbase: {
    margin: '0 0 16px 0',
    color: '#1FA494',
    fontWeight: '700',
    fontSize: '30px',
    lineHeight: '38px',
    letterSpacing: '-0.025em',
  },
  bold: {
    fontWeight: 'bold',
  },
  base_f18: {
    margin: '0 0 16px 0',
    color: '#667085',
    fontSize: '18px',
    lineHeight: '24px',
  },
}

const button = {
  padding: '21px 0 ',
  paddingLeft: '32px',
  paddingRight: '32px',
  backgroundColor: '#21C0AD',
  color: '#F9F8F8',
  fontWeight: 'bold',
  cursor: 'pointer',
  gap: '92px',
  borderRadius: '5px',
}

const Logo = {
  logo: {
    display: 'inline-block',
    marginRight: '20px',
    verticalAlign: 'middle',
  },
}

const link = {
  color: '#21c0ad',
  textDecoration: 'underline',
}

export default function Email() {
  return (
    <Html lang="en">
      <head>
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Premium</title>
      </head>

      <body style={base}>
        <Section style={container}>
          <img src="/static/FF Logo 1.svg" alt="FF Logo" style={{ Logo }} />

          <Text style={text.heading}>[name,] [question]</Text>

          <Text style={text.base}>
            Hi [name], have you been wondering what this week&apos;s question will be?
          </Text>

          <Text style={text.base}>Your question of the week is</Text>

          <Text style={text.headingcolorbase}>[randomised question from the question bank] </Text>

          <Text style={text.base}>
            Log into your Family Fortunate &nbsp;
            <a href="#" style={{ base, color: '#0037FC' }}>
              [link]
            </a>{' '}
            &nbsp;account to browse your questions & edit your stories.
          </Text>

          <div
            style={{
              display: 'flex',
              gap: '8px',
              marginTop: '8%',
              marginBottom: '8%',
            }}
          >
            <Button href="#" style={button}>
              Tell your story
            </Button>
          </div>

          <Text style={text.base}>
            Enjoy your look back in time this week. We hope you get a kick out of where your
            memories take you.
          </Text>

          <Text style={text.base}>The team at Family Fortunate</Text>

          <img
            src="/static/Email bottom banner Tip 1.svg"
            alt="Email bottom banner"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />

          <div
            style={{
              display: 'flex',
              gap: '8px',
              marginTop: '8%',
              marginBottom: '24px',
            }}
          >
            <Text style={text.base}>
              📍 Stay Updated!
              <br />
              Follow us on our social media accounts to get more updates on our new releases and any
              ongoing promotions.
            </Text>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '8px',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '8px',
              marginBottom: '24px',
            }}
          >
            <a
              href="#"
              target="_blank"
              style={{
                width: '30px',
                height: '30px',
              }}
            >
              <img
                src="/static/Facebook.png"
                alt="Facebook"
                style={{ height: '100%', width: '100%' }}
              />
            </a>

            <a
              href="#"
              target="_blank"
              style={{
                width: '30px',
                height: '30px',
              }}
            >
              <img
                src="/static/Instagram.png"
                alt="Instagram"
                style={{ height: '100%', width: '100%' }}
              />
            </a>

            <a
              href="#"
              target="_blank"
              style={{
                width: '30px',
                height: '30px',
              }}
            >
              <img
                src="/static/Twitter.png"
                alt="Twitter"
                style={{ height: '100%', width: '100%' }}
              />
            </a>

            <a
              href="#"
              target="_blank"
              style={{
                width: '30px',
                height: '30px',
              }}
            >
              <img
                src="/static/LinkedIn.png"
                alt="LinkedIn"
                style={{ height: '100%', width: '100%' }}
              />
            </a>

            <a
              href="#"
              target="_blank"
              style={{
                width: '30px',
                height: '30px',
              }}
            >
              <img
                src="/static/Pinterest.png"
                alt="Pinterest"
                style={{ height: '100%', width: '100%' }}
              />
            </a>
          </div>

          <Text style={{ textAlign: 'center', ...text.base }}>
            <a href="#" style={link}>
              Unsubscribe
            </a>{' '}
            | Privacy Policy <br />
            144 Parry St, Newcastle West NSW 2302, Australia <br />
            &copy; 2022. Family Fortunate
          </Text>
        </Section>
      </body>
    </Html>
  )
}
