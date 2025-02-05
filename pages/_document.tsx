// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Load Google Fonts globally */}
                <link 
                    href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600;700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" 
                    rel="stylesheet"
                />
                {/* Favicon link */}
                <link rel="icon" href="/favicon.ico" />
                {/* You can add any additional metadata or links here */}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
