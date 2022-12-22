import * as React from 'react';
import Item from './Item';
import {render} from '../../../test/test-utils';

describe('Item Component', () => {
  it(`Should renders an item component with title product "Example", date "26 de enero 2019", and points "13,213.00"`, async () => {
    const {queryByTestId} = render(
      <Item
        date="26 de enero 2019"
        isRedemption={true}
        points="13,213.00"
        title="Example"
      />,
    );
    const title = queryByTestId('title')?.children[0];
    const dateText = queryByTestId('date')?.children[0];
    const pointsText = queryByTestId('points')?.children[0];

    expect(title).toEqual('Example');
    expect(dateText).toEqual('26 de enero 2019');
    expect(pointsText).toEqual('13,213.00');
  });
});
