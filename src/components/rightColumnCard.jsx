import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
const RightColumnCard = ({ post }) => {
    if (!post || !post.coverImage) {
        console.warn("Invalid post passed to <Cards />:", post)
        return null;
    }
    return (


        <div className="col-md-6">
            <Link to={`/post/${post._id}`} className="text-decoration-none text-dark">
                <div className="card h-100 border-0">
                    <img
                        src={post.coverImage}
                        className="card-img-top rounded-4"
                        alt={post.title || "Card image"}
                    />
                    <div className="card-body">

                        <h5 className="card-title fw-bold">{post.title}</h5>

                        <p className="text-secondary">
                            {post.metaDescription.length > 100
                                ? post.metaDescription.slice(0, 100) + '...'
                                : post.metaDescription}
                        </p>
                    </div>
                </div>
            </Link>
        </div>


    )
}

export default RightColumnCard