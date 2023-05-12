import React from "react";

const NewsItem =(props)=> {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        
        <div className="card">
        <div style={{display:"flex",justifyContent:"flex-end",position:"absolute",right:0}}>
            <span className=" badge rounded-pill bg-danger" >
            {source}  
            </span>  
            </div>
          <img
            src={
              !imageUrl
                ? "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202304/untitled_design_-_2023-04-27t174358.178-sixteen_nine.png?VersionId=XRLJA2HY20IHfksW3vGc5t0pLIgnvaUF"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">         
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                by {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More!
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;




