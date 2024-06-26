import React from 'react';
import { Metadata } from 'next';
import { GlobalStyle } from '@/assets/styles/global.styles';
import Site from '@/shared/layouts/Site';
import { Props } from './types';

export const metadata: Metadata = {
  title: 'Airport Transfer',
  description: 'Airport transfer app (development with Next.js)'
};

const AppLayout: React.FC<Props> = (props) => (
  <html lang="zh-Hant-TW">
    <body>
      <div id="airport-transfer-app">
        <GlobalStyle />
        <Site>
          {props.children}
        </Site>
      </div>
    </body>
  </html>
);

export default AppLayout;
