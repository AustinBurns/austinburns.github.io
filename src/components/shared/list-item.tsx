import * as React from 'react';

import { Link } from '../../types/list';

function ListItem(props: Link) {
    return (<li className={props.class}><a href={props.link}>{props.linkText}</a></li>);
}

export default ListItem;