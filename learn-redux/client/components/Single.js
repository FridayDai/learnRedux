import React from 'react';
import { Link } from 'react-router';
import Photo from './photo';
import Comments from './comments';

const Single =  React.createClass({
    render() {
        const i = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
        const post = this.props.posts[i];
        const postComments = this.props.comments[this.props.params.postId];

        return (
            <div className="single-photo">
                <Photo {...this.props} key={i} post={post} i={i}/>
                <Comments {...this.props} postComments={postComments}/>
            </div>
        );
    }
});

export default Single;