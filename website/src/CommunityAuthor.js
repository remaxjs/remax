import React from 'react';
import './components/styles.css';

const CommunityAuthor = ({
  name,
  imageUrl,
  twitterUrl,
  githubUrl,
  description,
}) => {
  return (
    <React.Fragment>
      <h2 className="communitySection">About the community author</h2>
      <hr className="separator" />
      <div className="authorSection">
        <div className="authorImg">
          <img src={imageUrl} />
        </div>
        <div className="authorDetails">
          <div className="authorName">
            <strong>{name}</strong>
            {twitterUrl ? (
              <a href={twitterUrl} target="_blank">
                <img src="https://storage.googleapis.com/graphql-engine-cdn.hasura.io/learn-hasura/assets/social-media/twitter-icon.svg" />
              </a>
            ) : null}
            {githubUrl ? (
              <a href={githubUrl} target="_blank">
                <img src="https://storage.googleapis.com/graphql-engine-cdn.hasura.io/learn-hasura/assets/social-media/github-icon.svg" />
              </a>
            ) : null}
          </div>
          <div className="authorDesc">{description}</div>
        </div>
      </div>
      <hr className="separator" />
    </React.Fragment>
  );
};

export default CommunityAuthor;
