import "./BlogView.css"
import blogs from "./../../data"
import { useParams } from "react-router-dom"
function BlogView() {
    const{id}=useParams()
    const selectedBlog=blogs.find((blogObject)=>blogObject.id==id )

    console.log(selectedBlog)  
  return (
    <div className="card">
      <h1 className="title">{selectedBlog.title}</h1>
      <p className="author-card">
        <img src={selectedBlog.author.avatar}alt="author"height={"40px"}className="author-avtar"/>
        <span>
        {selectedBlog.author.name}&nbsp;|&nbsp;{selectedBlog.date}
        </span>

    
      </p>
      <div className="blog-content">
      {selectedBlog.content}
      </div>
    </div>
  )
}

export default BlogView
