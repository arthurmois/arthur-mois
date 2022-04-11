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
  Button
} from "@geist-ui/core";
import MapChart from "../projects/mapchart";
import { Linkedin, Mail, Phone } from "@geist-ui/icons";

export default function Home() {
  const isMobile = useMediaQuery("xs");
  const router = useRouter();
  const [open, setOpen] = useState(false);
  return (
    <div style={isMobile ? { marginLeft: "0px", marginRight: "10px" } : { marginLeft: "10%", marginRight: "10%" }}>
      <Head>
        <title>Arthur Mois</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Page>
        <Page.Header>
          <br></br>
          {isMobile ? (
            <>
              <Button auto onClick={() => setOpen(true)} scale={1 / 2}>
                Show Drawer
              </Button>
              <Drawer
                visible={open}
                onClose={() => setOpen(false)}
                placement="right"
              >
                <Drawer.Title>Drawer</Drawer.Title>
                <Drawer.Subtitle>This is a drawer</Drawer.Subtitle>
                <Drawer.Content>
                  <p>Some content contained within the drawer.</p>
                </Drawer.Content>
              </Drawer>
            </>
          ) : (
            <Tabs
              onChange={(val) => {
                switch (val) {
                  case "1":
                    router.push("#about");
                    break;
                  case "2":
                    router.push("#projects");
                    break;
                  case "4":
                    router.push("#contact");
                    break;
                  default:
                    console.log(val);
                }
              }}
              align="right"
              hideBorder
              hideDivider
              initialValue="1"
              activeStyles={{ color: "yellow" }}
            >
              <Tabs.Item label="About" value="1"></Tabs.Item>
              <Tabs.Item label="Projects" value="2"></Tabs.Item>
              <Tabs.Item label="Experience" value="3"></Tabs.Item>
              <Tabs.Item label="Contact" value="4"></Tabs.Item>
            </Tabs>
          )}
        </Page.Header>
        <Page.Content>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Text h4 center>
            Hi, my name is
          </Text>
          <Text h1 center>
            Arthur Mois
          </Text>
          <Text h3 center>
            I&apos;m a Software Engineer seeking opportunities.
            <br></br>
            Eager to get my hands dirty...
          </Text>
          <Text h6 center>
            you know, &apos;cuz germs on keyboards and all.
          </Text>
          {/* <Display shadow>
            <Image height="200px" src="/profile.jpg" />
          </Display> 

          style={{ backgroundColor: "#bdc8db" }}
          
          style={{color:"#424932"}}
          style={{color:"#4D553A"}}
          style={{color:"#586142"}}
          */}
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br id="about"></br>
          <br></br>
          <br></br>
          <br></br>

          <Divider align="start" style={{ maxWidth: "75%" }}>
            <Text h3>About</Text>
          </Divider>

          <Grid.Container justify="left">
            <Grid xs={12}>
              <Text>
                <br></br>
                Hello! My name is Arthur, I am an aspiring engineer and
                innovator. I&apos;m interested in
                <Text b> Web Applications</Text> development as well as{" "}
                <Text b> Computer Graphics</Text> and Computer Vision. I also
                have an immense fascination with Aerospace and Astronomy as well
                as Mathematics research and Applied Physics, which I hope to
                someday work with.
                <br></br>
                <br></br>
                I&apos;ve had the pleasure of working with modern technologies
                such as
                <Text b>
                  {" "}
                  React, Node, PostgreSQL, Next.JS, Three.JS, Spline,
                </Text>{" "}
                and many more.
              </Text>
            </Grid>
            <Grid xs={12}>
              <Display shadow>
                <Image height="200px" src="/profile.jpg" />
              </Display>
            </Grid>
          </Grid.Container>

          <br></br>
          <br></br>
          <br></br>
          <br id="projects"></br>
          <br></br>
          <br></br>

          <Text h3 align="center">
            Projects
          </Text>
          <Tabs initialValue="1" align="center">
            <Tabs.Item label="ISS on Earth" value="1">
              <Text h3>Where is the International Space Station?</Text>
              <br></br>
              <Grid.Container gap={6} justify="left">
                <Grid xs={8}>
                  <Text>
                    Ever wondered:
                    <Text b>
                      {" "}
                      &quot;Since the ISS orbits Earth, what is its terrestrial
                      position?&quot;
                    </Text>
                    . Well, probably not, but here it is anyway!
                    <br></br>
                    <br></br>
                    I created this app with <Text b>React</Text> and an API
                    call to get a JSON object containing the lattitude and
                    longitude of the ISS. The blue dot is being updated using a
                    useState hook that gets the position every 3 seconds.
                    <br></br>
                    <br></br>
                    Feel free to zoom in/out and move the map around (the ISS
                    might be at the edge of the map)
                  </Text>
                </Grid>
                <Grid xs={16}>
                  <div
                    style={{
                      minWidth: "100%",
                      borderStyle: "solid",
                      borderRadius: "25px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <MapChart />
                  </div>
                </Grid>
              </Grid.Container>
            </Tabs.Item>
            <Tabs.Item label="Facebook Marketplace Replica" value="2">
              <Text h3>Facebook Marketplace Replica</Text>
              <br></br>
              <Grid.Container justify="left">
                <Grid xs={8}>
                  <Text>
                    In a team of 3, we created a
                    <Text b> Full Stack Web Application </Text>
                    modeled after Facebook&apos;s Marketplace. I&apos;ve
                    included a link to a youtube demonstration as opposed to a
                    working demo since the proprietary web app is owned by the
                    University of California.
                    <br></br>
                    <Link
                      href="https://www.youtube.com/watch?v=yLhv-AQdZHA"
                      icon
                      color
                    >
                      Facebook Marketplace Replica Demo
                    </Link>
                    <br></br>
                    <br></br>
                    This app was created with{" "}
                    <Text b>React, Node, Express, and PostgreSQL.</Text>
                    It employs the use of REST APIs, JWT for authentication, and
                    provides full usability throughout the stack including:
                    <ul>
                      <li>Create Account</li>
                      <li>Create Listing</li>
                      <li>View and Search Listings</li>
                      <li>Reply to Listing</li>
                      <li>Sort/Filter Functionality</li>
                    </ul>
                  </Text>
                </Grid>
                <Grid xs={16}>
                  <Display shadow>
                    <Image height="200px" src="/fbreplica.png" />
                  </Display>
                </Grid>
              </Grid.Container>
            </Tabs.Item>
            <Tabs.Item label="Model Solar System" value="3">
              <Text h3>Model Solar System</Text>

              <Text>
                Give it a sec to load, its a hefty program.
                <br></br>
                Use your scroll wheel :)
              </Text>
              <iframe
                src="https://arthurmois.github.io/our-cosmos/"
                style={{ minWidth: "100%", minHeight: "400px" }}
              ></iframe>
              <Text style={{ maxWidth: "50%" }}>
                I created this geo-centric model of our solar system using
                <Text b> Three.JS</Text>, a powerful graphics library. All
                objects in the scenes are rendered with actual data from NASA.
                The model is scaled at 1:10^-4.2.
                <br></br>
                <br></br>
                Using the mouse buttons you may translate and rotate the camera
                as if you were an astronaut in space with a video camera. Feel
                free to hop around from planet to planet with the navigation
                buttons.
              </Text>
            </Tabs.Item>
            <Tabs.Item
              label="Target Practice (1st Place Award Winner)"
              value="4"
            >
              <Grid.Container gap={4}>
                <Grid xs={8}>
                  <Text>
                    My professor in my Computer Graphics class, hosted a
                    competition halfway through the semester. Using the
                    technologies we&apos;ve already learned, all contestants
                    were to create some 3D scene within the span of 24 hours.
                    <br></br>
                    <br></br>
                    In order to blow my competitors out of the water, I knew I
                    had to be different, so in the time frame, I also built a
                    physics engine on top of my 3D scene and built this FPS aim
                    training game. Using Linear Algebra and some Physics, I was
                    able to build a fairly accurate game using WebGL and some
                    keyboard/mouse input libraries. I won 1st place in all
                    cateogries, gathering over 70% of all votes.
                    <br></br>
                    <br></br>
                    To enter the environment just click on the scene, and to
                    exit hit <Code>ESC</Code>. You may use WASD and the mouse to
                    walk around and shoot the training targets.
                  </Text>
                </Grid>
                <Grid xs={16}>
                  <iframe
                    src="https://arthurmois.github.io/target-practice/"
                    style={{ minWidth: "100%", minHeight: "600px" }}
                  ></iframe>
                </Grid>
              </Grid.Container>
            </Tabs.Item>
          </Tabs>
          <br></br>
          <br id="contact"></br>
          <br></br>
          <br></br>
          <br></br>

          <Divider>
            <Text h3>Contact</Text>
          </Divider>
          <Text>
            <Mail></Mail>{" "}
            <Link href="mailto:arthurmois@gmail.com" color>
              arthurmois@gmail.com
            </Link>
            <br></br>
            <Phone></Phone> +19164778861
            <br></br>
            <Linkedin></Linkedin>{" "}
            <Link href="https://www.linkedin.com/in/arthurmois/" color>
              Arthur Mois
            </Link>
            <br></br>
          </Text>
        </Page.Content>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Page.Footer align="center">
          Arthur Mois
        </Page.Footer>
      </Page>
    </div>
  );
}
