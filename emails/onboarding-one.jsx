import React from 'react'
import { Html } from '@react-email/html'
import { Section } from '@react-email/section'
import { Text } from '@react-email/text'
import { Link } from '@react-email/link'
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
}

const li = {
  margin: '0 0 8px 0',
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
        <title>Onboarding One</title>
      </head>

      <body style={base}>
        <Section style={container}>
          <Text style={text.heading}>Hello, Echo!</Text>

          <Text style={text.base}>Ready to get started?</Text>

          <Text style={text.base}>
            You can approach telling your story in exactly your own unique way, so your year&apos;s
            membership provides plenty of options to do just that.
          </Text>

          <Text style={text.base}>
            Your very first question will arrive in your inbox shortly but whilst you&apos;re
            waiting you might want to have a look around your personal membership platform, so here
            are some tips for finding your way around the Family Fortunate website.
          </Text>

          <ul style={text.base}>
            <li style={li}>
              Sign in{' '}
              <Link href="#" style={link}>
                here
              </Link>
            </li>

            <li style={li}>
              <Link href="#" style={link}>
                Help
              </Link>{' '}
              - You have access to an extensive online help centre if you need assistance finding
              your way around your personal membership center.
            </li>
          </ul>

          <Text style={text.base}>
            You have access to more than 500 unique questions during your membership, but you have
            even more options than that.
          </Text>

          <ul style={text.base}>
            <li style={li}>
              <Link href="#" style={link}>
                Select a different question
              </Link>
            </li>

            <li style={li}>
              <Link href="#" style={link}>
                Write your own question
              </Link>
            </li>

            <li style={li}>
              <Link href="#" style={link}>
                Change the wording of your question for the week
              </Link>
            </li>

            <li style={li}>
              <Link href="#" style={link}>
                Change the frequency of your emailed questions
              </Link>
            </li>

            <li style={li}>
              <Link href="#" style={link}>
                Edit your story
              </Link>{' '}
              - You can continue to make changes to your stories right throughout your membership
            </li>
          </ul>

          <Text style={text.base}>
            I hope you enjoy the exciting journey you&apos;re about to start as you recapture your
            memories with the help of Family Fortunate.
          </Text>

          <Text style={text.base}>
            Best wishes, <br />
            <span style={{ fontWeight: 700 }}>Rachel</span> <br />
            Founder of Family Fortunate
          </Text>

          <div
            style={{
              minHeight: '320px',
              marginBottom: '16px',
              borderRadius: '16px',
              backgroundColor: '#d0d5dd',
            }}
          />

          <Text style={text.base}>
            Stay updated by following us on our social media accounts to get more updates on our new
            releases and any ongoing promotions.
          </Text>

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
