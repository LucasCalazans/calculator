import React from 'react';
import { render } from 'react-dom';
import App from '@/components/App';
import GlobalStyle from '@/components/GlobalStyle';

render(
    <>
        <App/>
        <GlobalStyle/>
    </>,
    document.getElementById("main")
);
