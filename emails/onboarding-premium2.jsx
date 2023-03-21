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

          <Text style={text.heading}>[name], here&apos;s your first question!</Text>

          <Text style={text.base}>Hi [name], welcome</Text>

          <Text style={text.base}>
            Thanks for joining the Family Fortunate community as a premium member. There&apos;s so
            much value in what you&apos;re about to embark on, and I&apos;m sure you&apos;ll really
            enjoy the process of recalling & writing your stories.
          </Text>

          <Text style={text.base}>
            Each week throughout your year&apos;s membership you&apos;ll receive a weekly email.
            You&apos;ll also receive pro tips to help you recall your memories & how to get them
            down on paper in an engaging way. Here&apos;s the first tip, which I&apos;ve
            incorporated into your first question so you can start out strong!
          </Text>

          <Text style={text.bold}>PRO TRIP</Text>

          <Text style={{ base, fontStyle: 'italic', fontSize: '12px' }}>
            To make the most out of your membership it&apos;s always helpful for you to delve more
            deeply into the prompt you&apos;re sent each week.
          </Text>

          <Text style={{ base, fontStyle: 'italic', fontSize: '12px' }}>
            As you can see from your very first prompt, there are many elements to one question
            which will help you to create or capture your thoughts, memories & experiences.
          </Text>

          <Section style={{ container, backgroundColor: '#f2f2f2' }}>
            <Text style={{ fontWeight: '600', fontSize: '12px', textAlign: 'center' }}>
              Your very first question is:
            </Text>

            <Text style={{ fontWeight: '600', fontSize: '20px', textAlign: 'center' }}>
              Where are you right now?
            </Text>
          </Section>

          <Text style={{ base, fontSize: '14px' }}>
            As the opening page of your book, perhaps you could share with your readers things like:
          </Text>

          <Section style={container}>
            <Text style={{ base, fontSize: '14px' }}>
              • How did you get your membership? Did you purchase it, or was it a gift from someone?
            </Text>

            <Text style={{ base, fontSize: '14px' }}>
              • What was your first reaction when you received your gift or found the Family
              Fortunate website? What prompted you to join?
            </Text>
            <Text style={{ base, fontSize: '14px' }}>
              • Set the scence - where are yoy physically sitting right now as you begin this
              journey? What&apos;s around you?
            </Text>

            <Text style={{ base, fontSize: '14px' }}>• Is the sun shining or is it snowing?</Text>

            <Text style={{ base, fontSize: '14px' }}>• IHave you got a drink with you?</Text>

            <Text style={{ base, fontSize: '14px' }}>
              • Are there any other people around right now?
            </Text>

            <Text style={{ base, fontSize: '14px' }}>• How old are you? What&apos;s the date?</Text>

            <Text style={{ base, fontSize: '14px' }}>
              • What are you looking forward to as you move through your year of questions?
            </Text>
          </Section>

          <div
            style={{
              display: 'flex',
              gap: '8px',
              marginTop: '8px',
              marginBottom: '24px',
            }}
          >
            <Button href="#" style={button}>
              MY FIRST QUESTION
            </Button>
          </div>

          <Text style={text.base}>
            Once again, welcome, and I truly hope you enjoy creating an heirloom for your Fortunate
            Family!
          </Text>

          <Text style={text.base}>
            <span style={{ fontWeight: 700 }}>Rachel</span> <br />
            Founder of Family Fortunate
          </Text>

          <img
            src="/static/Email bottom banner gift 2.svg"
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
