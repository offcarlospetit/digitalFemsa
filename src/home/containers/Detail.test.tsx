import * as React from 'react';
import Detail from './Detail';
import {fireEvent, render, waitFor} from '../../../test/test-utils';

const createTestProps = (props: {image?: string | undefined}): any => ({
  navigation: {
    navigate: jest.fn(),
    dispatch: jest.fn(),
  },
  route: {
    params: {
      title: 'title',
      createdAt: 'createdAt',
      points: 'points',
      image: props.image,
    },
  },
  ...props,
});

describe('Detail Component', () => {
  test(`Should renders Detail Component correctly `, async () => {
    const props = createTestProps({image: 'image'});
    const snap = await render(<Detail {...props} />).toJSON();
    await waitFor(() => expect(snap).toMatchSnapshot());
  });
  test(`Should renders Detail Component correctly and press button to go back`, async () => {
    const props = createTestProps({});
    const snap = await render(<Detail {...props} />);
    fireEvent.press(snap.getByText('Aceptar'));
  });
});
