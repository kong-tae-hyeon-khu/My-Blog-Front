// PostList.jsx

import React from 'react';
import styles from '../styles/List.module.css'

const List = () => {
    // 가상의 게시글 데이터
    const posts = [
        { id: 1, title: '첫 번째 게시글', content: '이것은 첫 번째 게시글 내용입니다.' },
        { id: 2, title: '두 번째 게시글', content: '이것은 두 번째 게시글 내용입니다.' },
        { id: 3, title: '세 번째 게시글', content: '이것은 세 번째 게시글 내용입니다.' },
    ];

    return (
        <div>
            <h2>게시글 목록</h2>
            {posts.map((post) => (
                <div key={post.id} className={styles.post}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </div>
            ))}
        </div>
    );
};
export default List;

