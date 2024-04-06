import React from "react";
import { Box, Text, Stack, Link } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" borderTopWidth="1px" paddingTop="20px" marginTop="40px">
      <Stack direction="row" spacing={4} align="center" justify="center">
        <Link href="https://twitter.com/claudeparticles" isExternal>
          <FaTwitter />
        </Link>
        <Link href="https://facebook.com/claudeparticles" isExternal>
          <FaFacebook />
        </Link>
        <Link href="https://instagram.com/claudeparticles" isExternal>
          <FaInstagram />
        </Link>
      </Stack>
      <Text textAlign="center" marginTop="10px">
        © 2024 Claude Particles. All rights reserved.
      </Text>
      <Text textAlign="center">123 Main St, Anytown, USA</Text>
    </Box>
  );
};

export default Footer;
