import React from "react";
import { Anchor, Box, Text, ResponsiveContext } from "grommet";
import { Logo } from "./Logo";
import { SocialMedia } from "./SocialMedia";

const NavHeader = () => (
  <ResponsiveContext.Consumer>
    {size => (
      <Box
        direction="row"
        justify="between"
        alignSelf="center"
        gap="medium"
        pad={{ top: "large", horizontal: "xlarge" }}
      >
        <Anchor
          href="/"
          icon={<Logo />}
          color="black"
          label={
            size !== "xsmall" &&
            <div><Text size="large" >Pro</Text><Text size="large">Farer</Text></div>
          }
        />
        {/* <SocialMedia /> */}
      </Box>
    )}
  </ResponsiveContext.Consumer>
);

export { NavHeader };