import * as React from 'react';
import Detail from './Detail';
import {render, waitFor} from '../../../test/test-utils';
import {rest} from 'msw';
import {setupServer} from 'msw/node';

const createTestProps = (props: Object): any => ({
  navigation: {
    navigate: jest.fn(),
    dispatch: jest.fn(),
  },
  route: {
    params: {
      title: 'title',
      createdAt: 'createdAt',
      points: 'points',
      image: 'image',
    },
  },
  ...props,
});

describe('Detail Component', () => {
  test(`Should renders Detail Component correctly `, async () => {
    const props = createTestProps({});
    const snap = await render(<Detail {...props} />).toJSON();
    await waitFor(() => expect(snap).toMatchSnapshot());
  });
});
