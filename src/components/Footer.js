import React, { useState } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"

import { motion } from "framer-motion"

import styled from "styled-components"

import devconLogo from "../images/devcon-logo.svg"
import blogLogo from "../images/ethereum-line-logo.svg"
import canary from "../images/canary.svg"
import star from "../images/star.png"

const StyledFooter = styled(motion.footer)`
  background-color: rgba(255, 255, 255, 0.15);
  bottom: 0;
  font-size: 0.875rem;
`

const FooterToggleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 8px 24px;
`

const FooterContentDiv = styled(motion.div)`
  padding: 32px;
  transform-origin: bottom center;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 24px;
  }
`

const FooterChildDiv = styled(motion.div)`
  @media (max-width: 768px) {
    padding: 16px;
  }
`
const FooterDivContact = styled(FooterChildDiv)`
  flex: 0 1 200px;
  @media (max-width: 768px) {
    flex: 0 1 150px;
    padding: 0;
  }
`
const FooterDivCanary = styled(FooterChildDiv)`
  flex: 0 1 600px;
  font-size: 0.625rem;
  @media (max-width: 768px) {
    flex: 0 1 600px;
    order: 3;
  }
`

const CanaryContainer = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const CanaryContent = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  @media (max-width: 768px) {
    padding-left: 0;
  }
`

const FooterDivLinks = styled(FooterChildDiv)`
  display: flex;
  justify-content: space-between;
  flex: 0 1 160px;
  @media (max-width: 768px) {
    flex: 0 1 140px;
    padding: 0;
  }
`

const IconContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;

  &:hover {
    cursor: pointer;
  }
`

const ImageAndTextLink = styled.a`
  display: flex;
  flex-direction: column;
`

const Star = styled(motion.img)`
  position: absolute;
`
const starHover = { scale: 1.8, transition: { duration: 1 } }

// TODO footer should "push up" the rest of the content (including constellation)
// How? Shrink height of top content?
const Footer = () => {
  const [isOpen, toggleOpen] = useState(false)

  const footerToggleIcon = isOpen ? faChevronDown : faChevronUp
  return null
  return (
    <>
      <FooterToggleContainer>
        <div style={{ fontSize: `0.75rem` }}>
          © Ethereum Foundation, {new Date().getFullYear()}
        </div>
        <IconContainer onClick={() => toggleOpen(!isOpen)}>
          <FontAwesomeIcon icon={footerToggleIcon} />
          <Star whileHover={starHover} src={star} />
        </IconContainer>
      </FooterToggleContainer>

      <StyledFooter
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { display: "block", height: "auto" },
          closed: { display: "none", height: 0 },
        }}
        transition={{ duration: 1.5, ease: [0.04, 0.62, 0.23, 0.98] }}
      >
        <FooterContentDiv
          variants={{ closed: { scale: 0.9 }, open: { scale: 1 } }}
          transition={{ duration: 0.8 }}
        >
          <FooterDivContact>
            <strong>General Contact:</strong>
            <div style={{ marginBottom: `16px` }}>
              <a href="mailto:info@ethereum.org">info@ethereum.org</a>
            </div>
            <strong>Press Contact:</strong>
            <div>
              <a href="mailto:press@ethereum.org">press@ethereum.org</a>
            </div>
          </FooterDivContact>
          <FooterDivCanary>
            <CanaryContainer>
              <img src={canary} alt="Ethereum Foundation Blog Logo" />
              <CanaryContent>
                <div style={{ marginBottom: `16px` }}>
                  The Ethereum Foundation (Stiftung Ethereum) has never been
                  contacted by any agency anywhere in the world in a way which
                  requires that contact not to be disclosed.
                </div>
                <div>
                  Stiftung Ethereum will publicly disclose any sort of inquiry
                  from government agencies that falls outside the scope of
                  regular business operations.
                </div>
              </CanaryContent>
            </CanaryContainer>
          </FooterDivCanary>
          <FooterDivLinks>
            {/* TODO style links */}
            <ImageAndTextLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://devcon.org"
            >
              <img src={devconLogo} alt="Devcon Logo" />
              Devcon.org
            </ImageAndTextLink>
            <ImageAndTextLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://blog.ethereum.org"
            >
              <img src={blogLogo} alt="Ethereum Foundation Blog Logo" />
              Blog
            </ImageAndTextLink>
          </FooterDivLinks>
        </FooterContentDiv>
      </StyledFooter>
    </>
  )
}

export default Footer
