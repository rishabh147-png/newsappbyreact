import React, { Component } from "react";

export default class NewsItem extends Component {

  

  render() {
    let {title, description , imageUrl, newsUrl} = this.props;

    return (
      <div className="my-2">
        <div className="card" >
          <img src={!imageUrl?"https://cdn.cnn.com/cnnnext/dam/assets/210908224703-abortion-ban-protest-0905-houston-super-tease.jpg":imageUrl} height="200px" width="200px" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}....</h5>
            <p className="card-text">{description}....</p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
