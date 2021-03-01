import { Link } from 'react-router-dom';

import React from 'react'

export default function Home() {
    return (
        <div>
            <Link to="/planets">Planets</Link>
            <Link to="planets/random">Random Planets</Link>
        </div>
    )
}
