import * as React from 'react';
import Home from './Home';
import {render, screen} from '../../../test/test-utils';
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
    return res(
      ctx.json([
        {
          createdAt: '2022-12-09T06:34:25.607Z',
          product: 'Handmade Metal Shoes',
          points: 16434,
          image: 'https://loremflickr.com/640/480/transport',
          is_redemption: false,
          id: '1',
        },
        {
          createdAt: '2022-12-09T17:02:51.904Z',
          product: 'Recycled Plastic Tuna',
          points: 92984,
          image: 'https://loremflickr.com/640/480/technics',
          is_redemption: false,
          id: '2',
        },
        {
          createdAt: '2022-12-09T10:20:00.909Z',
          product: 'Fantastic Granite Bacon',
          points: 42416,
          image: 'https://loremflickr.com/640/480/technics',
          is_redemption: false,
          id: '3',
        },
        {
          createdAt: '2022-12-09T00:30:23.966Z',
          product: 'Fantastic Fresh Gloves',
          points: 23913,
          image: 'https://loremflickr.com/640/480/city',
          is_redemption: true,
          id: '4',
        },
        {
          createdAt: '2022-12-08T18:54:56.243Z',
          product: 'Rustic Rubber Bacon',
          points: 69814,
          image: 'https://loremflickr.com/640/480/people',
          is_redemption: true,
          id: '5',
        },
        {
          createdAt: '2022-12-09T14:12:11.097Z',
          product: 'Tasty Concrete Cheese',
          points: 81585,
          image: 'https://loremflickr.com/640/480/business',
          is_redemption: false,
          id: '6',
        },
        {
          createdAt: '2022-12-09T12:50:53.209Z',
          product: 'Oriental Cotton Keyboard',
          points: 88323,
          image: 'https://loremflickr.com/640/480/nightlife',
          is_redemption: false,
          id: '7',
        },
        {
          createdAt: '2022-12-08T20:32:14.169Z',
          product: 'Oriental Soft Pants',
          points: 87794,
          image: 'https://loremflickr.com/640/480/animals',
          is_redemption: true,
          id: '8',
        },
        {
          createdAt: '2022-12-09T05:46:47.645Z',
          product: 'Luxurious Rubber Bacon',
          points: 13063,
          image: 'https://loremflickr.com/640/480/food',
          is_redemption: true,
          id: '9',
        },
        {
          createdAt: '2022-12-09T10:56:34.206Z',
          product: 'Elegant Rubber Fish',
          points: 91311,
          image: 'https://loremflickr.com/640/480/transport',
          is_redemption: false,
          id: '10',
        },
        {
          createdAt: '2022-12-09T12:36:43.169Z',
          product: 'Recycled Wooden Salad',
          points: 44871,
          image: 'https://loremflickr.com/640/480/city',
          is_redemption: false,
          id: '11',
        },
      ]),
      ctx.delay(150),
    );
  }),
];

describe('Home Component', () => {
  const server = setupServer(...handlers);
  // Enable API mocking before tests.
  beforeAll(() => server.listen());

  // Reset any runtime request handlers we may add during the tests.
  afterEach(() => server.resetHandlers());

  // Disable API mocking after the tests are done.
  afterAll(() => server.close());

  test(`Should renders Home Component correctly `, async () => {
    const props = createTestProps({});
    const snap = await render(<Home {...props} />);
    const loading = snap.getByTestId('loading')?.children[0];
    expect(loading).toBe('Cargando...');
    const products = await screen.getByTestId('item');
    expect(products).toBeDefined();
  });
});
