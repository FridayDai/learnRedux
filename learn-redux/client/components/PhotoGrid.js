import React from 'react';
import { Link } from 'react-router'

import Photo from './photo'

const PhotoGrid =  React.createClass({
    render() {
        return (
            <div className="photo-grid">
                {this.props.posts.map((post, i) => <Photo {...this.props} key={i} post={post} i={i} />)}
            </div>
        );
    }
});

export default PhotoGrid;