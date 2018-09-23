import React from 'react';
import ItemList from "./ItemList";
import Item from "./Item";
import { shallow } from 'enzyme'; // .find / .toEqual / .text()

const data = [
  {id: 1, text: "aaa"},
  {id: 2, text: "bbb"},
  {id: 3, text: "ccc"},
];

describe('<ItemList /> unit test', () => {

  it('Should have 3 children', () => {
    const render = shallow(<ItemList data={data}/>);
    expect(render.find(Item).length).toEqual(3);
  });
});
