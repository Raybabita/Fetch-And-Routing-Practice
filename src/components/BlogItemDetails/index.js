// Write your JS code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {blogsData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    console.log(this.props)
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)

    const formattedData = {
      title: data.title,
      topic: data.topic,
      id: data.id,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }

    console.log(formattedData)
    this.setState({blogsData: formattedData, isLoading: false})
  }

  render() {
    const {blogsData, isLoading} = this.state
    const {title, content, imageUrl, avatarUrl, author} = blogsData

    return (
      <div className="blog-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Triangle" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="blog-info">
            <h2 className="blog-details-title">{title}</h2>
            <div className="author-details">
              <img className="author-pic" alt={author} src={avatarUrl} />
              <p className="blog-author-name">{author}</p>
            </div>
            <img className="blog-image" src={imageUrl} alt={title} />
            <p className="blog-content">{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
