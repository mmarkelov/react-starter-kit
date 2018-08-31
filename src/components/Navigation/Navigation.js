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

const RootDiv = styled.div`
  float: right;
  margin: 6px 0 0;
`;

const NavLink = styled(Link)`
  display: inline-block;
  padding: 3px 8px;
  text-decoration: none;
  font-size: 1.125em;

  &,
  &:active,
  &:visited {
    color: rgba(255, 255, 255, 0.6);
  }

  &:hover {
    color: rgba(255, 255, 255, 1);
  }
`;

const Spacer = styled.span`
  color: rgba(255, 255, 255, 0.3);
`;

const HighlightNavLink = styled(NavLink)`
  margin-right: 8px;
  margin-left: 8px;
  border-radius: 3px;
  background: rgba(0, 0, 0, 0.15);
  color: #fff;

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`;

const Navigation = () => (
  <RootDiv role="navigation">
    <NavLink to="/about">About</NavLink>
    <NavLink to="/contact">Contact</NavLink>
    <Spacer> | </Spacer>
    <NavLink to="/login">Log in</NavLink>
    <Spacer>or</Spacer>
    <HighlightNavLink to="/register">Sign up</HighlightNavLink>
  </RootDiv>
);

export default Navigation;
