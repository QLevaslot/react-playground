import React from 'react';
import Item from './Item';

const ItemList = ({data = []}) => (<div className="ItemList-main">
  {data.map(i => <Item key={i.id} title={i.text} />)}
</div>);

export default ItemList;


