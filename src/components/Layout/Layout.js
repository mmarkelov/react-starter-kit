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
import { createGlobalStyle } from 'styled-components';
// external-global styles must be imported in your JS.
import normalizeCss from 'normalize.css';
import cssVariables from '../styledVariables';
import layout from './Layout.css';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';

// eslint-disable-next-line no-unused-expressions
const GlobalStyle = createGlobalStyle`
html {
  color: #222;
  font-weight: 100;
  font-size: 1em;
  font-family: ${cssVariables.fontFamilyBase};
  line-height: 1.375;
}
${normalizeCss.toString()}
${layout.toString()}
`;

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        {this.props.children}
        <Feedback />
        <Footer />
      </div>
    );
  }
}

export default Layout;
