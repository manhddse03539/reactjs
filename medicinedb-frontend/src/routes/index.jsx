import { mount, route, withView } from 'navi';
import React from 'react';
import { View } from 'react-navi';

import CommonLayout from '~/layouts/CommonLayout';
import HomePage from '~/pages/HomePage';
import SignInPage from '~/pages/SignInPage';
import LongTerm from '~/containers/longTermManagement';
import withAuth from './withAuth';

import withoutAuth from './withoutAuth';

const routes = mount({
  '/sign-in': withoutAuth(
    route({
      view: (
        <CommonLayout>
          <SignInPage />
        </CommonLayout>
      ),
    })
  ),
  '/long-term': withoutAuth(
    mount({
      '/': withoutAuth(
        route({
          view: (
            <CommonLayout>
              <LongTerm />
            </CommonLayout>
          ),
        })
      ),
    })
  ),
  '*': withView(
    <CommonLayout>
      <View />
    </CommonLayout>,
    mount({
      '/': withAuth(
        route({
          view: <HomePage />,
        })
      ),
    })
  ),
});

export default routes;
