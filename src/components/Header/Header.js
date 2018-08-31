/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import styled from 'styled-components';
import cssVariables from '../styledVariables';
import Link from '../Link';
import Navigation from '../Navigation';
import logoUrl from './logo-small.png';
import logoUrl2x from './logo-small@2x.png';

const brandColor = '#61dafb';

const RootDiv = styled.div`
  background: #373277;
  color: #fff;
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 20px 0;
  max-width: ${cssVariables.maxContentWidth};
`;

const BrandLink = styled(Link)`
  color: color(${brandColor} lightness(+10%));
  text-decoration: none;
  font-size: 1.75em;
`;

const BrandTxt = styled.span`
  margin-left: 10px;
`;

const Banner = styled.div`
  text-align: center;
`;

const BannerTitle = styled.h1`
  margin: 0;
  padding: 10px;
  font-weight: normal;
  font-size: 4em;
  line-height: 1em;
`;

const BannerDesc = styled.p`
  padding: 0;
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.25em;
  margin: 0;
`;

const Header = () => (
  <RootDiv>
    <Container>
      <Navigation />
      <BrandLink to="/">
        <img
          src={logoUrl}
          srcSet={`${logoUrl2x} 2x`}
          width="38"
          height="38"
          alt="React"
        />
        <BrandTxt>Your Company</BrandTxt>
      </BrandLink>
      <Banner>
        <BannerTitle>React</BannerTitle>
        <BannerDesc>Complex web apps made easy</BannerDesc>
      </Banner>
    </Container>
  </RootDiv>
);

export default Header;
