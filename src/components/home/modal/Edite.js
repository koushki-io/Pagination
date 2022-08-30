import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { EditChangeAction } from '../../redux/action';
import styles from './modal.module.css';

function Example({show, setShow}) {
 const dispatch= useDispatch()

   const selectEdite = useSelector(state=>state.getEdite)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [change, setchange] = useState({
    title:"",
    body:"",
  })

  const saveHandler = () =>{
    dispatch(EditChangeAction(change))
    setShow(false)
  }
  

  useEffect(() => {
    setchange({
      title:selectEdite.title ,
      body:selectEdite.body ,
      id:selectEdite.id ,
      
    })
   
  }, [selectEdite])

  const changeHandler=(e)=>{
    setchange({...change,[e.target.name]:e.target.value})
    
  }
  



  


  return (
    <>
     
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edite</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className={styles.form}>
            <div className={styles.Title}>
              <label>Title</label>
              <textarea type="text" name="title" onChange={changeHandler} value={change.title} />
            </div>
            <div className={styles.Body} >
            <label>Body</label>
              <textarea type="text" name="body" onChange={changeHandler} value={change.body} />
            </div>
          </form>
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example