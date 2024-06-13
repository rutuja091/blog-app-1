
import "./BlogCard.css";
import { Link } from "react-router-dom";
function BlogCard({id,title,content,author,date,categories}) {
  return (

    <Link className="blog-card" to={`/blog/${id}`}>
        <h1  className="blog-title">{title}</h1>
        <p  className="blog-content">{content.substring(0,100)}...</p>
        <div className="author-card">
            <img src={author.avatar}  alt="author"className="author-avtar"/>
            <span className="author-name"> {author.name}</span>
            <span className="blog-date"> {date}</span>
        </div>
     {categories.map((categories,i)=>{
return<span key={i} className="category-batch">{categories}</span>
     })}
    </Link>
  )
}
export default BlogCard
