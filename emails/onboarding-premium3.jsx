import React from 'react'
import { Html } from '@react-email/html'
import { Section } from '@react-email/section'
import { Text } from '@react-email/text'
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
  bold: {
    fontWeight: 'bold',
  },
  base_f18: {
    margin: '0 0 16px 0',
    color: '#667085',
    fontSize: '18px',
    lineHeight: '24px',
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black',
    marginRight: 10,
    alignSelf: 'center',
  },
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
        <title>Onboarding One</title>
      </head>

      <body style={base}>
        <Section style={container}>
          <img src="/static/FF Logo 1.svg" alt="FF Logo" style={{ Logo }} />

          <Text style={text.heading}>[name], heve you answered your first question?</Text>

          <Text style={text.base}>Hi [name], </Text>
          <br />
          <Text style={text.base}>Welcome to the story of your life!</Text>
          <br />
          <Text style={text.base}>
            Have you started working on your very first question or are you thinking about it &
            getting ready to put your thoughts into words.
          </Text>

          <Text style={text.base}>
            Here&apos;s another tip which comes directly from our storytellers. To make the most out
            of their memberships, our members tell us they&apos;re most successful when they get
            into a routine for their weekly entries.
          </Text>

          <Text style={text.base}>
            Some look forward to receiving their weekly email & set time aside to write straight
            away.
          </Text>

          <Text style={text.base}>
            Others find writing at night a nice way to end the day, so they take a few hours to
            think about how they&apos;ll approach their question & sit down after dinner when
            it&apos;s nice & quiet.
          </Text>

          <Text style={text.base}>
            Plenty of our community of storytellers told us they like to write early, have a cup of
            tea nearby & spend some time in the morning before their day gets busy.
          </Text>

          <Text style={text.base}>
            It doesn&apos;t matter what works for you, what matters is, try not to get too far
            behind in your weekly sessions, otherwise it might be tricky to catch up. Remember,
            after a year of questions you&apos;ll have the opportunity to order a printed book to
            share with your Fortunate Family so keep those memories coming each week!
          </Text>

          <Text style={{ base, fontStyle: 'italic', color: '#59626B' }}>
            Welcome to Family Fortunate, and enjoy!
          </Text>

          <Text style={text.base}>
            <span style={{ fontWeight: 700 }}>Rachel</span> <br />
            Founder of Family Fortunate
          </Text>

          <img
            src="/static/Email bottom banner gift 3.svg"
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
