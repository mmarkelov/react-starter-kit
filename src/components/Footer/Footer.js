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
import Link from '../Link';

const LINKS = [
  { title: 'Home', value: '/' },
  { title: 'Admin', value: '/admin' },
  { title: 'Privacy', value: '/privacy' },
  { title: 'Not Found', value: '/not-found' },
];

const RootDiv = styled.div`
  background: #333;
  color: #fff;
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 20px 15px;
  max-width: ${props => props.theme.maxContentWidth};
  text-align: center;
`;

const FooterLink = styled(Link)`
  padding: 2px 5px;
  font-size: 1em;

  &:active,
  &:visited {
    color: rgba(255, 255, 255, 0.6);
    text-decoration: none;
  }
`;

const Text = styled.span`
  color: rgba(255, 255, 255, 0.5);
`;

const Spacer = styled.span`
  color: rgba(255, 255, 255, 0.3);
`;

const Footer = () => (
  <RootDiv>
    <Container>
      <Text>© Your Company</Text>
      {LINKS.map(link => (
        <React.Fragment key={link.title}>
          <Spacer>·</Spacer>
          <FooterLink to={link.value}>{link.title}</FooterLink>
        </React.Fragment>
      ))}
    </Container>
  </RootDiv>
);

export default Footer;
