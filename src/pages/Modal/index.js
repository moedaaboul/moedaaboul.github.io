import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../../providers/GlobalStateProvider';
import { parseTitle, parseDate } from '../../utils/Formatters';
import { getRepoData } from '../../utils/getRepoData';
import CountUp from 'react-countup';
import AwardSvg from '../../images/award.svg';
import GithubSvg from '../../images/github.svg';
import EyeSvg from '../../images/eye.svg';
import CalendarSvg from '../../images/calendar.svg';
import GitCommitSvg from '../../images/git-commit.svg';
import TagSvg from '../../images/tag.svg';
import './index.css';

const Modal = () => {
  const {
    isModalOpen,
    closeModal,
    repoData,
    repoImages,
    projectUrl,
    githubUrl,
  } = useGlobalContext();
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const styles = {
    hidden: {
      display: 'none',
    },
    show: {
      display: 'block',
    },
  };

  const findStyle = (i) => {
    if (index === i) {
      return styles.show;
    } else {
      return styles.hidden;
    }
  };

  useEffect(() => {
    const interval = setInterval(
      () =>
        index === repoImages.length - 1 ? setIndex(0) : setIndex(index + 1),
      3000
    );

    return () => clearInterval(interval);
  }, [index, repoImages.length]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getRepoData(repoData);
        setData(response);
        setTags(response.tags);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    const timeout = setTimeout(() => getData(), 1000);
    return () => clearTimeout(timeout);
  }, [repoData]);

  return (
    <>
      <div className={`modal repo-modal ${isModalOpen && 'is-active'}`}>
        <div className="modal-background" onClick={() => closeModal()}></div>
        <div className="card modal-content has-background-white py-5 px-5">
          <header className="card-header hero has-background-dark">
            <h2 className={'card-header-title has-text-success'}>
              {loading ? (
                <div className="skeleton skeleton-header"></div>
              ) : (
                parseTitle(data?.title || '')
              )}
            </h2>
          </header>
          <div className="creation-date-container is-flex is-align-items-center mb-2 pt-3">
            <img className="mr-1" src={CalendarSvg} alt="git-tag" />
            {loading ? (
              <div className="ml-2 skeleton skeleton-text-short"></div>
            ) : (
              <p className="ml-2">
                Creation date: {parseDate(data?.date || '')}
              </p>
            )}
          </div>

          {loading ? (
            <>
              <div className="skeleton skeleton-text"></div>
              <div className="skeleton skeleton-text"></div>
            </>
          ) : (
            <p className="repo-description"> {data?.description || ''}</p>
          )}

          <div className="card-content p-2">
            {repoImages.map((e, i) => {
              return (
                <div key={i} className="mySlides fade" style={findStyle(i)}>
                  <figure className="image is-3by2">
                    <img src={e} alt="" />
                  </figure>
                </div>
              );
            })}
            <footer className="card-footer">
              <p className="card-footer-item is-flex is-align-items-center">
                <img className="mr-1" src={EyeSvg} alt="git-tag" />
                <span>
                  <a href={projectUrl} target="_blank" rel="noreferrer">
                    Preview
                  </a>
                </span>
              </p>
              <p className="card-footer-item">
                <span>
                  <a href={githubUrl} target="_blank" rel="noreferrer">
                    <img src={GithubSvg} alt="git-tag" />
                    Github
                  </a>
                </span>
              </p>
            </footer>
            <div className="license-container is-flex is-align-items-center mb-2">
              <img src={TagSvg} alt="git-tag" />
              {loading ? (
                <>
                  <div className="ml-2 skeleton skeleton-header"></div>
                  <div className="ml-2 skeleton skeleton-header"></div>
                  <div className="ml-2 skeleton skeleton-header"></div>
                </>
              ) : (
                <p className="ml-2">
                  {tags.map((element, index) => (
                    <span key={index} className="tag is-success m-1">
                      {element}
                    </span>
                  ))}
                </p>
              )}
            </div>
            <div className="license-container is-flex is-align-items-center mb-2">
              <img
                src={GitCommitSvg}
                className={`commit-svg ${isSpinning && `icn-spinner`}`}
                alt="git-commit"
              />
              {loading ? (
                <div className="ml-2 skeleton skeleton-text-short"></div>
              ) : (
                <>
                  <p className="ml-2">
                    <CountUp
                      start={data?.commits / 4 || ''}
                      end={data?.commits || ''}
                      duration={2}
                      onStart={() => setIsSpinning(true)}
                      onEnd={() => setIsSpinning(false)}
                      className="mr-1"
                    />
                    commits
                  </p>
                </>
              )}
            </div>
            <div className="license-container is-flex is-align-items-center mb-2">
              <img src={AwardSvg} alt="git-commit" />
              {loading ? (
                <div className="ml-2 skeleton skeleton-text-short"></div>
              ) : (
                <p className="ml-2">{data?.license || ''}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
