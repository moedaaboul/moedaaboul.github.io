import React, { useState, useEffect } from 'react';
import { useGlobalContext } from './context';
// import { parseDate } from './utils/parseDate';
// import { parseTitle } from './utils/parseTitle';
import { getRepoData } from './utils/getRepoData';

const Modal = () => {
  const { isModalOpen, closeModal, repoData, repoImages } = useGlobalContext();
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);

  const increaseIndex = () =>
    index === repoImages.length - 1 ? setIndex(0) : setIndex(index + 1);

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
    const interval = setInterval(() => {
      increaseIndex();
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // const tours = await fetch(url).then((response) => response.json());
    try {
      console.log(repoData);
      const response = await getRepoData(repoData);
      console.log(response);
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className={`modal repo-modal ${isModalOpen && 'is-active'}`}>
        <div className="modal-background" onClick={() => closeModal()}></div>
        <div className="card modal-content has-background-white py-5 px-5">
          <header className="card-header hero has-background-dark">
            <h2 className="card-header-title has-text-success">{data.title}</h2>
          </header>
          <div className="creation-date-container is-flex is-align-items-center mb-2 pt-3">
            <img className="mr-1" src="./images/calendar.svg" alt="git-tag" />
            <p className="ml-2">Creation date: {data.date}</p>
          </div>
          <p className="repo-description">{data.description}</p>
          <div className="card-content p-2">
            {repoImages.map((e, i) => {
              return (
                <div className="mySlides fade" style={findStyle(i)}>
                  <figure className="image is-3by2">
                    <img src={e} alt="" />
                  </figure>
                </div>
              );
            })}
            <footer className="card-footer">
              <p className="card-footer-item is-flex is-align-items-center">
                <img className="mr-1" src="./images/eye.svg" alt="git-tag" />
                <span>
                  <a href="www.https://github.com/moedaaboul/">Preview</a>
                </span>
              </p>
              <p className="card-footer-item">
                <span>
                  <a href={`https://github.com/moedaaboul/${data.title}`}>
                    <img src="./images/github.svg" alt="git-tag" />
                    Github
                  </a>
                </span>
              </p>
            </footer>
            <div className="license-container is-flex is-align-items-center mb-2 mt-2">
              <img src="./images/tag.svg" alt="git-tag" />
              <p className="ml-2"></p>
            </div>
            <div className="license-container is-flex is-align-items-center mb-2">
              <img
                src="./images/git-commit.svg"
                className="commit-svg"
                alt="git-commit"
              />
              <p className="ml-2" id="value" data-value={data.commits}>
                {data.commits} commits
              </p>
            </div>
            <div className="license-container is-flex is-align-items-center mb-2">
              <img src="./images/award.svg" alt="git-commit" />
              <p className="ml-2">{data.license}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
