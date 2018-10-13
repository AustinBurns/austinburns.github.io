import * as React from 'react';
import ListItem from './list-item';

import { Link } from '../../types/list';

function List(props: { links: Link[] } ) {
    const links: Link[] = props.links;
    const listItems = links.map((link, index) =>
        <ListItem key={index} {...link}  />
    );

    return (<ul>{listItems}</ul>);
}

export default List;