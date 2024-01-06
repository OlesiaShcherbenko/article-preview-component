import React, { useState } from 'react';

const previewArticles = [
    {
        image: '/img/drawers.jpg',
        headline: 'Shift the overall look and feel by adding these wonderful touches to furniture in your home',
        description: 'Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. Ive got some simple tips to help you make any room feel complete.',
        authorAvatar: '/img/avatar-michelle.jpg',
        authorName: 'Michelle Appleton',
        data: '28 Jun 2020',
        id: 1,
    },
]

export function ArticlePreview() {
    const [isShown, setIsShown] = useState(false);

    return (
        <>
            {
                previewArticles.map((article) => {

                    return (
                        <>
                            <div className="article" key={article.id}>
                                <img className="article__image" src={article.image} alt="article preview image" />
                                <div className="article__content">
                                    <h3 className="article__headline">{article.headline}</h3>
                                    <p className="article__desctiption">{article.description}</p>
                                    <div className="article__author">
                                        <img className="article__avatar" src={article.authorAvatar} alt="author avatar" />
                                        <p className="article__name">{article.authorName}</p>
                                        <p className="article__data">{article.data}</p>
                                        <button
                                            className="article__button"
                                            onMouseEnter={() => setIsShown(true)}
                                            onMouseLeave={() => setIsShown(false)}
                                            >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg" width="15" height="13"><path fill="#6E8098" d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/>
                                            </svg>
                                        </button>
                                        {isShown && (
                                            <>
                                                <div className="article__overlay">
                                                    <p className="article__label">share</p>
                                                    <div className="article__icons">
                                                        <img src="/img/icon-facebook.svg" alt="icon facebook" />
                                                        <img src="/img/icon-twitter.svg" alt="icon twitter"/>
                                                        <img src="/img/icon-pinterest.svg" alt="icon pinterest"/>
                                                    </div>
                                                </div>
                                                <img src="" alt="" />
                                            </>
                                            
                                        )}
                                    </div>
                                </div>
                            </div>
                        </>
                    );
                })
            }
        </>
    );
}