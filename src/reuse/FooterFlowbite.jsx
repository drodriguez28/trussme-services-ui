import React from "react";
import {
  Footer,
  FooterCopyright,
  FooterLink,
  FooterLinkGroup,
} from "flowbite-react";

const FooterFlowbite = () => {
  return (
    <Footer container className="mt-5 !bg-amber-300">
      <FooterCopyright
        by="Deivid R. Business Web™"
        year={2025}
        className="!text-black"
      />
      {/* <FooterLinkGroup>
        <FooterLink
          href="https://www.linkedin.com/in/deivid-rodriguez-635875186/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </FooterLink>
      </FooterLinkGroup> */}
    </Footer>
  );
};

export default FooterFlowbite;
