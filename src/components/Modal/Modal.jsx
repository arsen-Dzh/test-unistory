import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addPost } from '../../redux/actionCreators/postAC';
import styles from './Modal.module.scss';

const Modal = ({ closeModal }) => {

  const dispatch = useDispatch();

  const cancelHandler = (event) => {
    event.preventDefault();
    closeModal(false);
  }

  const addTitle = (event) => {
    event.preventDefault()
    const { title, content} = event.target;
    dispatch(addPost({id: uuidv4(), title: title.value, content: content.value}))
    closeModal(false)
  }

  return (
    <form onSubmit={addTitle} className={styles.modal}>
      <input type="text" name='title'/>
      <textarea name="content"></textarea>
      <div>
        <button onClick={cancelHandler}>Отмена</button>
        <button>Сохранить</button>
      </div>
    </form>
  );
};

export default Modal;
