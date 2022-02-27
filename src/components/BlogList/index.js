import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {blogData: [], isLoading: true}

  componentDidMount() {
    this.getBlogsData()
  }

  getBlogsData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const statusCode = response.status
    console.log(statusCode)
    console.log(data)

    const formattedData = data.map(eachItem => ({
      author: eachItem.author,
      imageUrl: eachItem.image_url,
      title: eachItem.title,
      topic: eachItem.topic,
      id: eachItem.id,
      avatarUrl: eachItem.avatar_url,
    }))

    console.log(formattedData)
    this.setState({blogData: formattedData, isLoading: false})
  }

  render() {
    const {blogData, isLoading} = this.state

    return (
      <div className="blog-list-container">
        {isLoading ? (
          <div testid="loader">
            <Loader type="Triangle" color="#0BFF" height={80} width={80} />
          </div>
        ) : (
          blogData.map(item => <BlogItem blogData={item} key={item.id} />)
        )}
      </div>
    )
  }
}

export default BlogList
