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
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import styledNormalize from 'styled-normalize';
import theme from '../theme';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';

// eslint-disable-next-line no-unused-expressions
const GlobalStyle = createGlobalStyle`
${styledNormalize}
html {
  color: #222;
  font-weight: 100;
  font-size: 1em;
  font-family: ${theme.fontFamilyBase};
  line-height: 1.375;
}

body {
  margin: 0;
}

a {
  color: #0074c2;
}

::selection {
  background: #b3d4fc;
  text-shadow: none;
}

hr {
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  margin: 1em 0;
  padding: 0;
}

/*
 * Remove the gap between audio, canvas, iframes,
 * images, videos and the bottom of their containers:
 * https://github.com/h5bp/html5-boilerplate/issues/440
 */

audio,
canvas,
iframe,
img,
svg,
video {
  vertical-align: middle;
}

/*
 * Remove default fieldset styles.
 */

fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

/*
 * Allow only vertical resizing of textareas.
 */

textarea {
  resize: vertical;
}

/*
 * Browser upgrade prompt
 * ========================================================================== */

.browserupgrade {
  margin: 0.2em 0;
  background: #ccc;
  color: #000;
  padding: 0.2em 0;
}

/*
 * Print styles
 * Inlined to avoid the additional HTTP request:
 * http://www.phpied.com/delay-loading-your-print-css/
 * ========================================================================== */

@media print {
  *,
  *::before,
  *::after {
    background: transparent !important;
    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */
    box-shadow: none !important;
    text-shadow: none !important;
  }

  a,
  a:visited {
    text-decoration: underline;
  }

  a[href]::after {
    content: ' (' attr(href) ')';
  }

  abbr[title]::after {
    content: ' (' attr(title) ')';
  }

  /*
   * Don't show links that are fragment identifiers,
   * or use the \`javascript:\` pseudo protocol
   */

  a[href^='#']::after,
  a[href^='javascript:']::after {
    content: '';
  }

  pre,
  blockquote {
    border: 1px solid #999;
    page-break-inside: avoid;
  }

  /*
   * Printing Tables:
   * http://css-discuss.incutio.com/wiki/Printing_Tables
   */

  thead {
    display: table-header-group;
  }

  tr,
  img {
    page-break-inside: avoid;
  }

  img {
    max-width: 100% !important;
  }

  p,
  h2,
  h3 {
    orphans: 3;
    widows: 3;
  }

  h2,
  h3 {
    page-break-after: avoid;
  }
}
`;

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <GlobalStyle />
          <Header />
          {this.props.children}
          <Feedback />
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default Layout;
