import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions'

class Posts extends Component {

    render() {

        const { posts } = this.state

        return (
            <div>
                <h1>Posts</h1>
                {
                    posts.map(({ id, title, body }) => {
                        return (
                            <div key={id}>
                                <h3>{title}</h3>
                                <p>{body}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default connect(null, { fetchPosts })(Posts)