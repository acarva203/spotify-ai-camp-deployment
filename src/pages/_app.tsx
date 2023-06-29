// _app.js
import 'bootstrap/dist/css/bootstrap.css';
import 'tailwindcss/tailwind.css';
import '@css/globals.css';
import '@css/index.css';
import '@css/styles.css';
import Layout from '../layouts/layout'
import { NextPage } from 'next';

interface MyAppProps {
  Component: NextPage;
  pageProps: Record<string, any>;
}

const MyApp: NextPage<MyAppProps> = ({ Component, pageProps }) => {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
