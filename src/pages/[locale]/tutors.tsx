import React from 'react';

import { GetStaticProps, GetStaticPaths } from 'next';

import Intercom from '@tutorbook/react-intercom';
import Header from '@tutorbook/covid-header';
import Footer from '@tutorbook/covid-footer';
import TutorForm from '@tutorbook/tutor-form';

import { getIntlProps, getIntlPaths, withIntl } from '@tutorbook/intl';

class TutorsPage extends React.Component {
  public render(): JSX.Element {
    return (
      <>
        <Header />
        <TutorForm />
        <Footer />
        <Intercom />
      </>
    );
  }
}

export const getStaticProps: GetStaticProps = async (context) => ({
  props: await getIntlProps(context),
});

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: getIntlPaths(),
  fallback: false,
});

export default withIntl(TutorsPage);
