import './Stars.css';

import Star from './Star/Star';

function Stars({ count }) {
    if(count < 1 || count > 5 || isNaN(count)) return;

    return (
        <ul className="card-body-stars u-clearfix">
            <Star />
        </ul>
    )
}

Stars.defaultProps = {
    count: 0
}

export default Stars;