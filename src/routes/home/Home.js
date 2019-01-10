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
import CountUp from 'react-countup';

const RootDiv = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  text-align: center;
`;

const Home = () => (
  <RootDiv>
    <CountUp end={100} />
  </RootDiv>
);

export default Home;
