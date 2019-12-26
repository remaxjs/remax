import React, { useEffect } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import GitHubButton from 'react-github-btn';
import { Input } from 'antd';
import Link from './link';
import './styles.css';

import Sidebar from './sidebar';

const Header = ({ location }) => {
  useEffect(() => {
    if (window.docsearch) {
      window.docsearch({
        apiKey: 'f86a1d257e40b994bc656299b53fecf6',
        indexName: 'remaxjs',
        inputSelector: '#docsearch',
        transformData(hits) {
          hits.forEach(hit => {
            hit.url = hit.url.replace('remaxjs.org', window.location.host);
            hit.url = hit.url.replace('https:', window.location.protocol);
          });
          return hits;
        },
        debug: false, // Set debug to true if you want to inspect the dropdown
      });
    }
  }, []);

  return (
    <StaticQuery
      query={graphql`
        query headerTitleQuery {
          site {
            siteMetadata {
              headerTitle
              githubUrl
              helpUrl
              tweetText
              logo {
                link
                image
              }
              headerLinks {
                link
                text
              }
            }
          }
        }
      `}
      render={data => {
        const logoImg = require('./images/logo.svg');
        const twitter = require('./images/twitter.svg');
        const {
          site: {
            siteMetadata: {
              headerTitle,
              githubUrl,
              helpUrl,
              tweetText,
              logo,
              headerLinks,
            },
          },
        } = data;
        const finalLogoLink = logo.link !== '' ? logo.link : '/';
        return (
          <div className={'navBarWrapper'}>
            <nav className={'navbar navbar-default navBarDefault'}>
              <div className={'navbar-header'}>
                <button
                  type="button"
                  className={'navbar-toggle collapsed navBarToggle'}
                  data-toggle="collapse"
                  data-target="#navbar"
                  aria-expanded="false"
                  aria-controls="navbar"
                >
                  <span className={'sr-only'}>Toggle navigation</span>
                  <span className={'icon-bar'} />
                  <span className={'icon-bar'} />
                  <span className={'icon-bar'} />
                </button>
                <Link to={finalLogoLink} className={'navbar-brand navBarBrand'}>
                  {logo.image !== '' ? (
                    <img
                      className={'img-responsive'}
                      src={logo.image}
                      alt={'logo'}
                    />
                  ) : (
                    <img
                      className={'img-responsive'}
                      src={logoImg}
                      alt={'logo'}
                    />
                  )}
                  <div
                    className={'headerTitle'}
                    dangerouslySetInnerHTML={{ __html: headerTitle }}
                  />
                </Link>
              </div>
              <div
                id="navbar"
                className={'navbar-collapse collapse navBarCollapse'}
              >
                <div className={'visible-xs'}>
                  <Sidebar location={location} />
                  <hr />
                </div>
                <ul className={'nav navbar-nav navBarUL'}>
                  {githubUrl !== '' ? (
                    <li className={'githubBtn'}>
                      <GitHubButton
                        href={githubUrl}
                        data-show-count="true"
                        aria-label="Star on GitHub"
                      >
                        Star
                      </GitHubButton>
                    </li>
                  ) : null}
                  {helpUrl !== '' ? (
                    <li>
                      <a href={helpUrl}>Need Help?</a>
                    </li>
                  ) : null}
                </ul>
                <ul className={'nav navbar-nav navBarUL navbar-right'}>
                  {tweetText !== '' ? (
                    <li>
                      <a
                        href={
                          'https://twitter.com/intent/tweet?&text=' + tweetText
                        }
                        target="_blank"
                      >
                        <img
                          className={'twitterIcon'}
                          src={twitter}
                          alt={'Twitter'}
                        />
                      </a>
                    </li>
                  ) : null}
                  <li>
                    <Input.Search id="docsearch" placeholder="搜索" />
                  </li>
                  {headerLinks.map((link, key) => {
                    if (link.link !== '' && link.text !== '') {
                      return (
                        <li key={key}>
                          <a href={link.link} target="_blank">
                            {link.text}
                          </a>
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            </nav>
          </div>
        );
      }}
    />
  );
};

export default Header;
