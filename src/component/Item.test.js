import React from 'react';
import Item from './Item';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer
    .create(<Item title={'foo'} />)
  expect(tree).toMatchSnapshot();
});

