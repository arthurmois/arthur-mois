import { Page, Text, Display, useMediaQuery } from "@geist-ui/core";
import { useRouter } from "next/router";
import { useState } from "react";
import Head from "next/head";
import {
  Image,
  Tabs,
  Divider,
  Grid,
  Card,
  Link,
  Spacer,
  Code,
  Drawer,
  Button,
  Collapse,
} from "@geist-ui/core";
import MapChart from "../projects/mapchart";
import { Linkedin, Mail, Phone, Menu } from "@geist-ui/icons";

export default function Home() {
  const isMobile = useMediaQuery("sm");
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <div
      style={
        isMobile
          ? { marginLeft: "0px", marginRight: "10px" }
          : { marginLeft: "0px", marginRight: "0px" }
      }
    >
      <Head>
        <title>Arthur Mois</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Page width={isMobile ? "100%" : undefined}>
        <Page.Header>
          <nav style={{
            position: 'sticky',
            top: 0,
            zIndex: 100,
            background: 'rgba(248,250,252,0.95)',
            boxShadow: '0 2px 8px rgba(60,60,100,0.04)',
            borderRadius: '0 0 16px 16px',
            padding: isMobile ? '12px 16px' : '16px 48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}>
            <span style={{ fontWeight: 700, fontSize: isMobile ? '1.1rem' : '1.3rem', letterSpacing: '0.02em', color: '#4D553A' }}>
              Arthur Mois
            </span>
            {isMobile ? (
              <Menu size={32} onClick={() => setOpen(true)} style={{ cursor: 'pointer' }} />
            ) : (
              <div style={{ display: 'flex', gap: '32px', fontWeight: 500 }}>
                <a href="#about" style={{ textDecoration: 'none', color: '#586142', transition: 'color 0.2s' }}>About</a>
                <a href="#projects" style={{ textDecoration: 'none', color: '#586142', transition: 'color 0.2s' }}>Projects</a>
                <a href="#contact" style={{ textDecoration: 'none', color: '#586142', transition: 'color 0.2s' }}>Contact</a>
              </div>
            )}
            <Drawer
              visible={open}
              onClose={() => setOpen(false)}
              placement="right"
            >
              <Drawer.Title>Menu</Drawer.Title>
              <Drawer.Content>
                <Button
                  onClick={() => {
                    setOpen(false);
                    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{ width: '100%', marginBottom: 16 }}
                >
                  About
                </Button>
                <Button
                  onClick={() => {
                    setOpen(false);
                    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{ width: '100%', marginBottom: 16 }}
                >
                  Projects
                </Button>
                <Button
                  onClick={() => {
                    setOpen(false);
                    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{ width: '100%' }}
                >
                  Contact
                </Button>
              </Drawer.Content>
            </Drawer>
          </nav>
        </Page.Header>
        <Page.Content>
          <section id="about" style={{
            maxWidth: '1000px',
            margin: 'auto',
            background: 'linear-gradient(300deg, #f8fafc 0%, #e0e7ef 100%)',
            borderRadius: '32px',
            boxShadow: '0 4px 32px rgba(60,60,100,0.07)',
            padding: isMobile ? '48px 12px 32px 12px' : '64px 48px',
            minHeight: isMobile ? 'auto' : '340px',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'center' : 'flex-start',
            gap: isMobile ? '32px' : '48px',
          }}>
            {/* Profile Image - top right in card on desktop, centered on mobile */}
            <div
              style={
                isMobile
                  ? { display: 'flex', justifyContent: 'center', width: '100%' }
                  : { display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }
              }
            >

            </div>
            {/* Main Content */}
            <div style={{
              flex: 3,
              textAlign: 'left',
              marginTop: isMobile ? 0 : '8px',
            }}>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                  <Text h4 style={{ color: '#586142', marginBottom: 0 }}>Hi, my name is</Text>
                  <Text h1 style={{ fontSize: isMobile ? '2.2rem' : '3rem', margin: '8px 0' }}>Arthur Mois</Text>
                  <Text h6 style={{ color: '#586142', marginBottom: 0 }}>And this is my wife Ksenia in the photo</Text>
                  <Text h3 style={{ color: '#4D553A', fontWeight: 600, margin: '8px 0' }}>
                    Software Engineer / Startup Dreamer
                  </Text>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end' }}></div>
                <Image
                  src="/profile.jpg"
                  width={10}
                  height={10}
                  style={{
                    borderRadius: '50%',
                    border: '2px solid #e0e7ef',
                    boxShadow: '0 2px 8px rgba(60,60,100,0.10)',
                    objectFit: 'cover',
                    marginLeft: 'auto'
                  }}
                  alt="Arthur Mois profile"
                />
              </div>
              <Text>
                Hello! My name is Arthur, I am an engineer and innovator with a focus on <Text b>UI/UX</Text> and <Text b>Computer Graphics</Text>. I&apos;m focused on building <Text b>Sleek Web Applications</Text> as well as <Text b>Computer Graphics, Self-Driving,</Text> and <Text b>Computer Vision</Text>. I also have an immense fascination with Aerospace and Astronomy as well as Mathematics research and Applied Physics, which I hope to someday work with.
                <br /><br />
                I&apos;ve had over <Text b>5 years</Text> of experience working with modern technologies such as:
              </Text>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', margin: '18px 0 0 0', justifyContent: 'flex-start' }}>
                <span style={{ background: '#e0e7ef', color: '#424932', borderRadius: '12px', padding: '6px 16px', fontWeight: 600 }}>React</span>
                <span style={{ background: '#e0e7ef', color: '#424932', borderRadius: '12px', padding: '6px 16px', fontWeight: 600 }}>Node.js</span>
                <span style={{ background: '#e0e7ef', color: '#424932', borderRadius: '12px', padding: '6px 16px', fontWeight: 600 }}>GraphQL</span>
                <span style={{ background: '#e0e7ef', color: '#424932', borderRadius: '12px', padding: '6px 16px', fontWeight: 600 }}>Go</span>
                <span style={{ background: '#e0e7ef', color: '#424932', borderRadius: '12px', padding: '6px 16px', fontWeight: 600 }}>Postgres</span>
                <span style={{ background: '#e0e7ef', color: '#424932', borderRadius: '12px', padding: '6px 16px', fontWeight: 600 }}>Next.js</span>
                <span style={{ background: '#e0e7ef', color: '#424932', borderRadius: '12px', padding: '6px 16px', fontWeight: 600 }}>Three.js</span>
                <span style={{ background: '#e0e7ef', color: '#424932', borderRadius: '12px', padding: '6px 16px', fontWeight: 600 }}>Spline</span>
                <span style={{ background: '#e0e7ef', color: '#424932', borderRadius: '12px', padding: '6px 16px', fontWeight: 600 }}>and more...</span>
              </div>
            </div>
          </section>
          <section id="projects" style={{
            maxWidth: '1100px',
            margin: '0 auto',
            padding: isMobile ? '32px 8px' : '48px 0',
          }}>
            <Text h2 align="center" style={{ color: '#4D553A', marginBottom: 32 }}>Projects (Outdated: 2019)</Text>
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
              gap: '32px',
            }}>
              {/* ISS On Earth Project Card */}
              <div style={{
                background: '#fff',
                borderRadius: '20px',
                boxShadow: '0 2px 16px rgba(60,60,100,0.07)',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}>
                <Text h3 style={{ margin: 0 }}>ISS On Earth</Text>
                <div style={{ minHeight: 180, borderRadius: 16, overflow: 'hidden', border: '1px solid #e0e7ef', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MapChart />
                </div>
                <Text>
                  Ever wondered where the ISS is above Earth right now? This app fetches the ISS position every 3 seconds and displays it on a live map. Built with <b>React</b> and a public API.
                </Text>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <span style={{ background: '#e0e7ef', borderRadius: '8px', padding: '4px 12px', fontWeight: 600 }}>React</span>
                  <span style={{ background: '#e0e7ef', borderRadius: '8px', padding: '4px 12px', fontWeight: 600 }}>API</span>
                </div>
              </div>
              {/* Facebook Marketplace Replica Card */}
              <div style={{
                background: '#fff',
                borderRadius: '20px',
                boxShadow: '0 2px 16px rgba(60,60,100,0.07)',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}>
                <Text h3 style={{ margin: 0 }}>Facebook Marketplace Replica</Text>
                <Display shadow>
                  <Image height="120px" src="/fbreplica.png" style={{ borderRadius: '12px', objectFit: 'cover' }} alt="Facebook Marketplace Replica" />
                </Display>
                <Text>
                  A full stack web app modeled after Facebook&apos;s Marketplace. Features account creation, listing, search, and more. Built with <b>React</b>, <b>Node</b>, <b>Express</b>, and <b>PostgreSQL</b>.
                </Text>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <span style={{ background: '#e0e7ef', borderRadius: '8px', padding: '4px 12px', fontWeight: 600 }}>React</span>
                  <span style={{ background: '#e0e7ef', borderRadius: '8px', padding: '4px 12px', fontWeight: 600 }}>Node.js</span>
                  <span style={{ background: '#e0e7ef', borderRadius: '8px', padding: '4px 12px', fontWeight: 600 }}>Express</span>
                  <span style={{ background: '#e0e7ef', borderRadius: '8px', padding: '4px 12px', fontWeight: 600 }}>PostgreSQL</span>
                </div>
                <Link href="https://www.youtube.com/watch?v=yLhv-AQdZHA" target="_blank" color>Demo Video</Link>
              </div>
              {/* Model Solar System Card */}
              <div style={{
                background: '#fff',
                borderRadius: '20px',
                boxShadow: '0 2px 16px rgba(60,60,100,0.07)',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}>
                <Text h3 style={{ margin: 0 }}>Model Solar System</Text>
                <iframe
                  src="https://arthurmois.github.io/our-cosmos/"
                  style={{ minWidth: '100%', minHeight: '180px', borderRadius: '12px', border: '1px solid #e0e7ef' }}
                ></iframe>
                <Text>
                  A geo-centric, interactive model of our solar system using <b>Three.js</b> and real NASA data. Explore planets and navigate the cosmos!
                </Text>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <span style={{ background: '#e0e7ef', borderRadius: '8px', padding: '4px 12px', fontWeight: 600 }}>Three.js</span>
                  <span style={{ background: '#e0e7ef', borderRadius: '8px', padding: '4px 12px', fontWeight: 600 }}>NASA Data</span>
                </div>
                <Link href="https://arthurmois.github.io/our-cosmos/" target="_blank" color>Live Demo</Link>
              </div>
              {/* Target Practice Card */}
              <div style={{
                background: '#fff',
                borderRadius: '20px',
                boxShadow: '0 2px 16px rgba(60,60,100,0.07)',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}>
                <Text h3 style={{ margin: 0 }}>Target Practice (1st Place Award Winner)</Text>
                <iframe
                  src="https://arthurmois.github.io/target-practice/"
                  style={{ minWidth: '100%', minHeight: '180px', borderRadius: '12px', border: '1px solid #e0e7ef' }}
                ></iframe>
                <Text>
                  FPS aim training game built in 24 hours for a graphics competition. Features a custom physics engine and 3D scene using <b>WebGL</b> and <b>Linear Algebra</b>.
                </Text>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <span style={{ background: '#e0e7ef', borderRadius: '8px', padding: '4px 12px', fontWeight: 600 }}>WebGL</span>
                  <span style={{ background: '#e0e7ef', borderRadius: '8px', padding: '4px 12px', fontWeight: 600 }}>Physics</span>
                  <span style={{ background: '#e0e7ef', borderRadius: '8px', padding: '4px 12px', fontWeight: 600 }}>3D</span>
                </div>
                <Link href="https://arthurmois.github.io/target-practice/" target="_blank" color>Try It</Link>
              </div>
            </div>
          </section>
          <section id="contact" style={{
            maxWidth: '600px',
            margin: '0 auto',
            background: '#fff',
            borderRadius: '20px',
            boxShadow: '0 2px 16px rgba(60,60,100,0.07)',
            padding: isMobile ? '32px 12px' : '40px 40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
          }}>
            <Text h2 style={{ color: '#4D553A', marginBottom: 8 }}>Contact</Text>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <Mail size={32} color="#4D553A" />
                <Link href="mailto:arthurmois@gmail.com" color style={{ fontSize: '1.1rem', fontWeight: 600 }}>
                  arthurmois@gmail.com
                </Link>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <Phone size={32} color="#4D553A" />
                <Link href="tel:19164778861" color style={{ fontSize: '1.1rem', fontWeight: 600 }}>
                  (916) 477-8861
                </Link>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <Linkedin size={32} color="#4D553A" />
                <Link href="https://www.linkedin.com/in/arthurmois/" target="_blank" color style={{ fontSize: '1.1rem', fontWeight: 600 }}>
                  Arthur Mois
                </Link>
              </div>
            </div>
          </section>
        </Page.Content>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Page.Footer align="center">Created by Arthur Mois</Page.Footer>
      </Page>
      <br></br>
    </div>
  );
}
