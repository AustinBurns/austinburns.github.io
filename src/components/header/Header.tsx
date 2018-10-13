import * as React from 'react';

import List from '../shared/list';
import { Link } from '../../types/list';

function Header() {
    const links: Link[] = [
        {class: 'test', link: '#home', linkText: 'Home'},
        {class: 'test1', link: '#about', linkText: 'About'},
        {class: 'test2', link: '#blog', linkText: 'Blog'}
    ]

    return (
        <div className="hero-head">
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-brand">
                        <span className="navbar-burger burger" data-target="navbarMenu">
                            <span />
                            <span />
                            <span />
                        </span>
                    </div>
                    <div id="navbarMenu" className="navbar-menu">
                        <div className="navbar-end">
                            <div className="tabs is-right">
                                <List links={...links} />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;