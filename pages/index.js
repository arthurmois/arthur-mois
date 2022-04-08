import { Page, Text, Display } from "@geist-ui/core";
import { Image, Tabs, Divider, Grid, Card } from "@geist-ui/core";
import MapChart from "./mapchart";

export default function Home() {
  return (
    <div style={{marginLeft: "10%", marginRight: "10%"}}>
      <Page>
        <Page.Header>
          <br></br>
          <Tabs
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
          <br></br>
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
                I&apos;ve had the pleasure of working with modern technologies such
                as
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
          <br></br>
          <br></br>
          <br></br>

          <Text h3 align='center'>Projects</Text>
          <Tabs initialValue="1" align="center">
            <Tabs.Item label="ISS on Earth" value="1">
              <Text h3>
                Where is the International Space Station?
              </Text>
              <br></br>
              <Grid.Container gap={6} justify="left">
                <Grid xs={8}>
                  <Text>
                    Ever wondered:
                    <Text b> &quot;Since the ISS orbits Earth, what is its terrestrial
                      position?&quot;
                    </Text>
                    . Well, probably not, but here it is anyway!
                    <br></br>
                    <br></br>
                    This app was created with <Text b>React</Text> and an API call to get a
                    JSON object containing the lattitude and longitude of the
                    ISS. The blue dot is being updated using a useState hook that
                    gets the position every 3 seconds.
                    <br></br>
                    <br></br>
                    Feel free to zoom in/out and move the map around :)
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
            <Tabs.Item label="FaceBook Marketplace Replica" value="2">
              Between the Web browser and the server, numerous computers and
              machines relay the HTTP messages.
            </Tabs.Item>
            <Tabs.Item label="Model Solar System" value="3">
              Between the Web browser and the server, numerous computers and
              machines relay the HTTP messages.
            </Tabs.Item>
            <Tabs.Item label="Target Practice" value="4">
              Between the Web browser and the server, numerous computers and
              machines relay the HTTP messages.
            </Tabs.Item>
          </Tabs>
        </Page.Content>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Page.Footer>Arthur Mois</Page.Footer>
      </Page>
    </div>
  );
}
