/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import cssVariables from '../../components/styledVariables';

const RootDiv = styled.div`
  padding-left: 20px;
  padding-right: 20px;
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 0 0 40px;
  max-width: ${cssVariables.maxContentWidth};
`;

export default class Register extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <RootDiv>
        <Container>
          <h1>{this.props.title}</h1>
          <p>...</p>
        </Container>
      </RootDiv>
    );
  }
}
