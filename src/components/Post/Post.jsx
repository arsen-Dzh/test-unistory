import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Post.module.scss';

const Post = ({title, content, id}) => {

  const history = useNavigate();

  return (
    <div className={styles.post}>
      <h4>{title}</h4>
      <div>
        <p>{content}</p>
      </div>
      <button onClick={() => history(`${id}/edit`)}>перейти</button>
    </div>
  );
};

export default Post;
