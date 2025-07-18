import { Page, Text, Divider, Card, Spacer } from "@geist-ui/core";
import Head from "next/head";

export default function Vori() {
  return (
    <div style={{ background: 'linear-gradient(300deg, #f8fafc 0%, #e0e7ef 100%)', minHeight: '100vh', padding: 0 }}>
      <Head>
        <title>Arthur Mois – Vori</title>
        <meta name="description" content="Arthur Mois for Vori Interview" />
      </Head>
      <Page width="100%" style={{ maxWidth: 800, margin: '0 auto', padding: '32px 0' }}>
        <Text h1 style={{ color: '#4D553A', marginBottom: 0 }}>Hi Vori</Text>
        <Text h4 style={{ color: '#586142', marginTop: 8, marginBottom: 32 }}>About Me</Text>
        <Card shadow style={{ marginBottom: 40, background: '#fff' }}>
          <Text h3 style={{ margin: 0 }}>Short Summary</Text>
          <Divider my={0.5} />
          <Text>
            I&apos;m a passionate engineer with a focus on UI/UX, Computer Graphics, and building sleek, scalable web applications. I love working on challenging problems, collaborating with talented teams, and delivering products that make a difference. I thrive in fast-paced environments and enjoy taking ownership of impactful projects.
          </Text>
        </Card>
        <Card shadow style={{ marginBottom: 40, background: '#fff' }}>
          <Text h2 style={{ color: '#4D553A', margin: 0 }}>Aurora Innovation</Text>
          <Divider my={0.5} />
          <div style={{ marginTop: 24 }}>
            <Text h3 style={{ marginBottom: 8 }}>Scout App</Text>
            <Card shadow style={{ marginBottom: 24, background: '#f8fafc' }}>
              <Text h4>Overview</Text>
              <Text>
                {/* Replace with your real content */}
                Scout is Aurora&apos;s internal tool for ... (describe what Scout App is and its purpose).
              </Text>
              <Spacer h={0.5} />
              <Text h4>Ownership</Text>
              <Text>
                {/* Replace with your real content */}
                I led the development of ... (describe your role, responsibilities, and impact).
              </Text>
              <Spacer h={0.5} />
              <Text h4>Tech Stack</Text>
              <Text>
                {/* Replace with your real content */}
                React, TypeScript, Node.js, GraphQL, AWS, ...
              </Text>
            </Card>
            <Text h3 style={{ marginBottom: 8 }}>Aurora App</Text>
            <Card shadow style={{ background: '#f8fafc' }}>
              <Text h4>Overview</Text>
              <Text>
                {/* Replace with your real content */}
                Aurora App is ... (describe what Aurora App is and its purpose).
              </Text>
              <Spacer h={0.5} />
              <Text h4>Ownership</Text>
              <Text>
                {/* Replace with your real content */}
                I was responsible for ... (describe your role, responsibilities, and impact).
              </Text>
              <Spacer h={0.5} />
              <Text h4>Tech Stack</Text>
              <Text>
                {/* Replace with your real content */}
                React, TypeScript, Node.js, GraphQL, AWS, ...
              </Text>
            </Card>
          </div>
        </Card>
      </Page>
    </div>
  );
} 