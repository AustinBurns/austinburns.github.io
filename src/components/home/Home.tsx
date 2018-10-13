import * as React from 'react';

import './Home.css';
import img from '../../assets/img/under-construction.png';

function Home() {
  return (
    <div className="hero-body">
        <div className="container has-text-centered">
            <div className="columns is-vcentered">
                <div className="column is-5">
                    <figure>
                        <img className="no-border" src={img} alt="Under Construction" />
                    </figure>
                </div>
                <div className="column is-6 is-offset-1">
                    <h1 className="title is-2">
                        Under Construction
                    </h1>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;