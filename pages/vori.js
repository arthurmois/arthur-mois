import { Page, Text, Divider, Card, Spacer, Input, Button } from "@geist-ui/core";
import Head from "next/head";
import { useState } from "react";

const PASSCODE = "robertp";

export default function Vori() {
  const [passcode, setPasscode] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  return (
    <div style={{ background: 'linear-gradient(300deg, #f8fafc 0%, #e0e7ef 100%)', minHeight: '100vh', padding: 0 }}>
      <Head>
        <title>Arthur Mois – Vori</title>
        <meta name="description" content="Arthur Mois for Vori Interview" />
      </Head>
      {unlocked ? <Page width="100%" style={{ maxWidth: 800, margin: '0 auto', padding: '32px 0' }}>
        <Text h1 style={{ color: '#4D553A', marginBottom: 0 }}>
          Hi <span style={{ color: '#4f46e5', display: 'inline-flex', alignItems: 'center' }}>
            <span style={{ display: 'inline-block', height: 40, marginLeft: 8, verticalAlign: 'middle' }}>
              <svg width="113" height="40" viewBox="0 0 90 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0)">
                  <path d="M49.4775 24.75H54.72L59.985 8.66251H55.665L52.38 19.9575L49.1175 8.66251H44.145L49.4775 24.75ZM65.6826 22.0275C64.1301 22.0275 63.3426 20.925 63.3426 18.9V18.72C63.3426 16.74 64.1751 15.6825 65.6826 15.6825C67.2126 15.6825 68.0001 16.785 68.0001 18.765V18.945C68.0001 20.9025 67.1901 22.0275 65.6826 22.0275ZM65.6601 25.02C69.2826 25.02 72.0951 22.725 72.0951 18.9V18.72C72.0951 14.985 69.3051 12.6675 65.6826 12.6675C62.0376 12.6675 59.2251 15.0525 59.2251 18.8325V19.0125C59.2251 22.815 62.0376 25.02 65.6601 25.02ZM73.8516 24.75H77.8792V19.17C77.8792 17.28 79.2292 16.515 81.6817 16.5825V12.825C79.8592 12.8025 78.6217 13.5675 77.8792 15.3225V12.9825H73.8516V24.75ZM83.5882 24.75H87.6157V12.9825H83.5882V24.75ZM85.5907 11.8575C86.8507 11.8575 87.8182 10.98 87.8182 9.78751C87.8182 8.59501 86.8507 7.69501 85.5907 7.69501C84.3307 7.69501 83.3857 8.59501 83.3857 9.78751C83.3857 10.98 84.3307 11.8575 85.5907 11.8575Z" fill="#4f46e5" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M0 11.25C0 5.03679 5.03679 0 11.25 0H20.25C26.4633 0 31.5 5.03679 31.5 11.25V20.25C31.5 26.4633 26.4633 31.5 20.25 31.5H11.25C5.03679 31.5 0 26.4633 0 20.25V11.25ZM8.81998 10.5517C8.60281 10.5517 8.46958 10.7909 8.58314 10.977L16.1624 23.3954C16.2754 23.5806 16.5462 23.5709 16.6458 23.3781L18.0118 20.7342C18.0558 20.6489 18.0532 20.547 18.0047 20.4641L12.2958 10.6896C12.2458 10.6042 12.1547 10.5517 12.0562 10.5517H8.81998ZM20.2742 10.8671C20.1927 10.7274 20.293 10.5517 20.454 10.5517H23.0277C23.2378 10.5517 23.3719 10.7768 23.2726 10.9628L22.043 13.269C21.9662 13.4131 21.762 13.4171 21.6796 13.276L20.2742 10.8671Z" fill="#4f46e5" />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="90" height="31.5" fill="#4f46e5" />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </span>
        </Text>
        <Text h4 style={{ color: '#586142', marginTop: 8, marginBottom: 32 }}>About Me</Text>
        <Card shadow style={{ marginBottom: 40, background: '#fff' }}>
          <Text h3 style={{ margin: 0 }}>Short Summary</Text>
          <Divider my={0.5} />
          <ul style={{ margin: 0, paddingLeft: 24 }}>
            <li>Engineer passionate about <b>UI/UX</b> and <b>Computer Graphics</b></li>
            <li>Love building sleek, scalable web applications</li>
            <li>Thrive in fast-paced, collaborative environments</li>
            <li>Enjoy taking ownership of impactful projects</li>
            <li>Excited to solve challenging problems and deliver real value</li>
          </ul>
        </Card>
        <Card shadow style={{ marginBottom: 40, background: '#fff' }}>
          <Text h2 style={{ color: '#4D553A', margin: 0 }}>Aurora Innovation</Text>
          <Divider my={0.5} />
          <div style={{ marginTop: 24 }}>
            <Text h3 style={{ marginBottom: 8 }}>Scout App</Text>
            <Card shadow style={{ marginBottom: 24, background: '#f8fafc' }}>
              <Text h4>Overview</Text>
              <ul style={{ margin: 0, paddingLeft: 24 }}>
                <li>Internal tool for <b>...</b> (describe purpose)</li>
                <li>Used by teams to <b>...</b></li>
              </ul>
              <Spacer h={0.5} />
              <Text h4>Ownership</Text>
              <ul style={{ margin: 0, paddingLeft: 24 }}>
                <li>Led development of <b>...</b></li>
                <li>Owned features: <b>...</b></li>
                <li>Worked closely with <b>...</b> to deliver results</li>
              </ul>
              <Spacer h={0.5} />
              <Text h4>Tech Stack</Text>
              <ul style={{ margin: 0, paddingLeft: 24 }}>
                <li>React</li>
                <li>TypeScript</li>
                <li>Node.js</li>
                <li>GraphQL</li>
                <li>AWS</li>
                <li>...</li>
              </ul>
            </Card>
            <Text h3 style={{ marginBottom: 8 }}>Aurora App</Text>
            <Card shadow style={{ background: '#f8fafc' }}>
              <Text h4>Overview</Text>
              <ul style={{ margin: 0, paddingLeft: 24 }}>
                <li>App for <b>...</b> (describe purpose)</li>
                <li>Supports <b>...</b> workflows</li>
                <li>Critical for <b>...</b> at Aurora</li>
              </ul>
              <Spacer h={0.5} />
              <Text h4>Ownership</Text>
              <ul style={{ margin: 0, paddingLeft: 24 }}>
                <li>Responsible for <b>...</b></li>
                <li>Implemented <b>...</b> features</li>
                <li>Collaborated with <b>...</b> teams</li>
              </ul>
              <Spacer h={0.5} />
              <Text h4>Tech Stack</Text>
              <ul style={{ margin: 0, paddingLeft: 24 }}>
                <li>React</li>
                <li>TypeScript</li>
                <li>Node.js</li>
                <li>GraphQL</li>
                <li>AWS</li>
                <li>...</li>
              </ul>
            </Card>
          </div>
        </Card>
      </Page> :
        <Page width="100%" style={{ maxWidth: 800, margin: '0 auto', padding: '32px 0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 16 }}>
            <Text h1 style={{ color: '#4D553A', marginBottom: 0 }}>
              Hi <span style={{ color: '#4f46e5', display: 'inline-flex', alignItems: 'center' }}>
                <span style={{ display: 'inline-block', height: 40, marginLeft: 8, verticalAlign: 'middle' }}>
                  <svg width="113" height="40" viewBox="0 0 90 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                      <path d="M49.4775 24.75H54.72L59.985 8.66251H55.665L52.38 19.9575L49.1175 8.66251H44.145L49.4775 24.75ZM65.6826 22.0275C64.1301 22.0275 63.3426 20.925 63.3426 18.9V18.72C63.3426 16.74 64.1751 15.6825 65.6826 15.6825C67.2126 15.6825 68.0001 16.785 68.0001 18.765V18.945C68.0001 20.9025 67.1901 22.0275 65.6826 22.0275ZM65.6601 25.02C69.2826 25.02 72.0951 22.725 72.0951 18.9V18.72C72.0951 14.985 69.3051 12.6675 65.6826 12.6675C62.0376 12.6675 59.2251 15.0525 59.2251 18.8325V19.0125C59.2251 22.815 62.0376 25.02 65.6601 25.02ZM73.8516 24.75H77.8792V19.17C77.8792 17.28 79.2292 16.515 81.6817 16.5825V12.825C79.8592 12.8025 78.6217 13.5675 77.8792 15.3225V12.9825H73.8516V24.75ZM83.5882 24.75H87.6157V12.9825H83.5882V24.75ZM85.5907 11.8575C86.8507 11.8575 87.8182 10.98 87.8182 9.78751C87.8182 8.59501 86.8507 7.69501 85.5907 7.69501C84.3307 7.69501 83.3857 8.59501 83.3857 9.78751C83.3857 10.98 84.3307 11.8575 85.5907 11.8575Z" fill="#4f46e5" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M0 11.25C0 5.03679 5.03679 0 11.25 0H20.25C26.4633 0 31.5 5.03679 31.5 11.25V20.25C31.5 26.4633 26.4633 31.5 20.25 31.5H11.25C5.03679 31.5 0 26.4633 0 20.25V11.25ZM8.81998 10.5517C8.60281 10.5517 8.46958 10.7909 8.58314 10.977L16.1624 23.3954C16.2754 23.5806 16.5462 23.5709 16.6458 23.3781L18.0118 20.7342C18.0558 20.6489 18.0532 20.547 18.0047 20.4641L12.2958 10.6896C12.2458 10.6042 12.1547 10.5517 12.0562 10.5517H8.81998ZM20.2742 10.8671C20.1927 10.7274 20.293 10.5517 20.454 10.5517H23.0277C23.2378 10.5517 23.3719 10.7768 23.2726 10.9628L22.043 13.269C21.9662 13.4131 21.762 13.4171 21.6796 13.276L20.2742 10.8671Z" fill="#4f46e5" />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="90" height="31.5" fill="#4f46e5" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </span>
            </Text>
            <Input type='secondary' placeholder="Passcode" value={passcode} onChange={e => setPasscode(e.target.value)} />
            <Button type="secondary" style={{ width: '12px' }} onClick={() => {
              if (passcode === PASSCODE) {
                setUnlocked(true);
              }
            }}>Unlock</Button>
          </div>
        </Page>

      }
    </div >
  );
} 