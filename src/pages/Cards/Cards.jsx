import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Card.module.scss';
import Modal from '../../components/Modal/Modal';
import Post from '../../components/Post/Post';

export const Cards = () => {

  const { posts }  = useSelector(state => state.postReducer);

  const [modal, setModal] = useState(false)

  return (
    <>
      <div className={styles.container}>
        <h1>Блог</h1>
        <div className={styles.content}>
          {
            posts.length > 0 
            ?posts.map(post => <Post key={post.id} title={post.title} content={post.content} id={post.id}/>) 
            : ''
          }
        </div>
        <button onClick={() => setModal(true)} className={styles.add}>Добавить</button>
      </div>
      {
        modal && <Modal closeModal={setModal}/>
      }
    </>
  )
};

