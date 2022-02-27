import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogData

  return (
    <Link className="link-item" to={`blogs/${id}`}>
      <div className="item-container">
        <img className="item-image" src={imageUrl} alt={`item${id}`} />
        <div className="detail-container">
          <p className="item-topic">{topic}</p>
          <h1 className="item-title">{title}</h1>

          <div className="profile-container">
            <img className="profile-item" src={avatarUrl} alt={`avatar${id}`} />
            <p className="name">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
