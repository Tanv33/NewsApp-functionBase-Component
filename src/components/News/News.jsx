import React, { useState, useEffect } from "react";
import NewItems from "../NewItems/NewItems";
import Spinner from "../Spinner/Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  document.title = `${capitalizeFirstLetter(props.category)} - News Zila`;

  const updateNews = async () => {
    props.progress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    props.progress(30);
    setLoading(true);
    let data = await fetch(url);
    props.progress(70);
    let dataParser = await data.json();
    props.progress(90);
    setArticle(dataParser.articles);
    setTotalResults(dataParser.totalResults);
    setLoading(false);
    props.progress(100);
  };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let dataParser = await data.json();
    setArticle(article.concat(dataParser.articles));
    setTotalResults(dataParser.totalResults);
  };

  return (
    <>
      <h1
        className="text-center"
        style={{ margin: "30px 0px", marginTop: "90px" }}
      >
        {" "}
        News Zila - Top {capitalizeFirstLetter(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={article.length}
        next={fetchMoreData}
        hasMore={article.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {article.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewItems
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

export default News;

News.defaultProps = {
  country: "in",
  pageSize: 5,
  category: "business",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  catrgory: PropTypes.string,
};
