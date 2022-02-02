import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deletePost, editPost } from '../../redux/actionCreators/postAC';
import styles from './EditCard.module.scss';

export const EditCard = () => {

  const dispatch = useDispatch()
  let history = useNavigate();
  const params = useParams();
  const { posts }  = useSelector(state => state.postReducer);

  const post = posts.find((el) => el.id === params.id)

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const deleteHandler = (event) => {
    event.preventDefault();
    dispatch(deletePost({id: params.id}));
    history('/cards')
  }

  const editHandler = (event) => {
    event.preventDefault();
    dispatch(editPost({id: params.id, title, content}));
    history('/cards')
  }

  return (
    <div className={styles.container}>
      <button onClick={() => history(-1)}>Назад</button>
      <span>Запись "{post.title}"</span>
      <form onSubmit={editHandler} className={styles.form}>
        <input onChange={(event) => setTitle(event.target.value)}
          type="text"
          name='title'
          defaultValue={title}
        />
        <textarea onChange={(event) => setContent(event.target.value)}
          name="content"
          value={content}
          ></textarea>
        <div className={styles.buttonGroup}>
          <button onClick={deleteHandler} style={{background: 'red'}}>Удалить</button>
          <button type='submit'>Сохранить</button>
        </div>
      </form>
    </div>
  );
};
