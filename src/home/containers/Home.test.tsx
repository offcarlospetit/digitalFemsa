import * as React from 'react';
import Home from './Home';
import {render, waitFor} from '../../../test/test-utils';
import {rest} from 'msw';
import {setupServer} from 'msw/node';

const createTestProps = (props: Object): any => ({
  navigation: {
    navigate: jest.fn(),
    dispatch: jest.fn(),
  },
  ...props,
});

export const handlers = [
  rest.get('products', (req, res, ctx) => {
    return res(ctx.json('John Smith'), ctx.delay(150));
  }),
];

const server = setupServer(...handlers);

describe('Home Component', () => {
  // Enable API mocking before tests.
  beforeAll(() => server.listen());

  // Reset any runtime request handlers we may add during the tests.
  afterEach(() => server.resetHandlers());

  // Disable API mocking after the tests are done.
  afterAll(() => server.close());

  test(`Should renders Home Component correctly `, async () => {
    const props = createTestProps({});
    const snap = await render(<Home {...props} />).toJSON();
    await waitFor(() => expect(snap).toMatchSnapshot());
  });
});
