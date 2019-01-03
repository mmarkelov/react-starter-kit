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

const RootDiv = styled.div`
  background: #f5f5f5;
  color: #333;
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 20px 8px;
  max-width: ${props => props.theme.maxContentWidth};
  text-align: center;
  font-size: 1.5em;
`;

const Link = styled.a`
  &:active,
  &:hover,
  &:visited {
    color: #333;
    text-decoration: none;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const Spacer = styled.span`
  padding-right: 15px;
  padding-left: 15px;
`;

const renderLink = (link, title) => <Link href={link}>{title}</Link>;

const Feedback = () => (
  <RootDiv>
    <Container>
      {renderLink(
        'https://gitter.im/kriasoft/react-starter-kit',
        'Ask a question',
      )}
      <Spacer>|</Spacer>
      {renderLink(
        'https://github.com/kriasoft/react-starter-kit/issues/new',
        'Report an issue',
      )}
    </Container>
  </RootDiv>
);

export default Feedback;
