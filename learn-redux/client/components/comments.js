/**
 * Created by xplusz on 9/5/16.
 */
import React from 'react';

export default class Comments extends React.Component {
    renderComment(comment, i) {
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button onClick={this.props.removeComment.bind(null, this.props.params.postId, i)} className="remove-comment">&times;</button>
                </p>
            </div>
        );
    }

    handleSubmit(e) {
        e.preventDefault();
        var postId = this.props.params.postId;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;

        this.props.addComment(postId, author, comment);
        this.refs.commentForm.reset();

    }

    render() {
        return (
            <div className="comments">
                {this.props.postComments.map(this.renderComment.bind(this))}
                <form onSubmit={this.handleSubmit.bind(this)} ref="commentForm" className="comment-form">
                    <input type="text" ref="author" placeholder="author"/>
                    <input type="text" ref="comment" placeholder="comment"/>
                    <input type="submit" hidden/>
                </form>
            </div>
        );
    }
}