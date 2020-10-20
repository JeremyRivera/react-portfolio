import React from 'react';
import Proptypes from 'prop-types';

const Image = props => {
    return (
        <div className="Image">
            <img src={props.src} alt="image"></img>
        </div>
    );
};

Image.propTypes = {
    src: Proptypes.string.isRequired,
};

export default Image;