import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import SendUs from 'sections/sendUs';
import PrivacyText from 'components/PrivacyText';

export default function PrivacyPolicy() {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <SEO title="Derzam" />
                <PrivacyText />
            </Layout>
        </ThemeProvider>
    );
}
