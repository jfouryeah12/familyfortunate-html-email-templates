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

const button = {
  padding: '20px 30px',
  backgroundColor: '#21C0AD',
  color: '#F9F8F8',
  fontWeight: 'bold',
  cursor: 'pointer',
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
        <title>Onboarding One</title>
      </head>

      <body style={base}>
        <Section style={container}>
          <img src="/static/FF Logo 1.svg" alt="FF Logo" style={{ Logo }} />

          <Text style={text.heading}>How was your first week [name]?</Text>

          <Text style={text.base}>Hi [name], </Text>
          <br />

          <Text style={text.base}>
            Thanks for joining the Family Fortunate community. I&apos;m sure you&apos;ll really
            enjoy the process of recalling & writing your stories.
          </Text>

          <Text style={text.base}>As a reminder, this is what will happen:</Text>

          <Text style={text.base}>
            Each week we&apos;ll email a starting point to you for inspiration. Most are questions,
            but some might be ‘Tell me about…&apos; Either way, I hope they provide the
            encouragement & motivation to start writing your stories.
          </Text>

          <Text style={text.base}>
            As you write, remember there are many elements to one question & thinking about those
            will help you to create or capture your thoughts, memories & experiences.
          </Text>

          <Section style={{ container, backgroundColor: '#f2f2f2', textAlign: 'center' }}>
            <div style={{ textAlign: 'justify', padding: '8%' }}>
              <Text style={text.bold}>
                When you start to think about your weekly question, also think “Why...?”
              </Text>
              <Text style={text.base}>• Why did this memory pop into your head?</Text>
              <Text style={text.base}>• Why has this memory stayed with you?</Text>
              <Text style={text.base}>
                • If you&apos;d forgotten about this over the years, why do you think it popped up
                again?
              </Text>
              <Text style={text.base}>• Why is this memory important to you?</Text>
              <Text style={text.base}>• Has it shaped you as a person as you&apos;ve grown?</Text>
            </div>
          </Section>

          <div
            style={{
              display: 'flex',
              gap: '8px',
              marginTop: '8%',
              marginBottom: '8%',
            }}
          >
            <Button href="#" style={button}>
              MY FIRST QUESTION
            </Button>
          </div>

          <Text style={text.base}>
            Are you excited? I hope so because your week 2 question will be in your inbox soon!
          </Text>

          <Text style={text.base}>Good luck and enjoy!</Text>

          <Text style={text.base}>
            <span style={{ fontWeight: 700 }}>Rachel</span> <br />
            Founder of Family Fortunate
          </Text>

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
