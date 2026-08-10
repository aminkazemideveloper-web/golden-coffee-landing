

import type { ComponentProps, MouseEvent, ReactNode, RefObject } from 'react'

import { IoMdClose } from "react-icons/io";

import styles from './Modal.module.css'


type Props = ComponentProps<'dialog'> & {
  ref : RefObject<HTMLDialogElement | null>;
  heading : string ;
  
}

function Modal({
  heading,
  ref,
  children,
  ...otherProps} : Props) : ReactNode {

    const handleClickTarget = (e : MouseEvent<HTMLDialogElement>)=>{
      if(e.target === e.currentTarget) {
        ref.current?.close()
      }
    }


  const handleCloseButtonClick = ()=>{
    ref.current?.close();
    console.log("amin");
  }

  return (
    <dialog ref={ref} className={styles.modal} onClick={handleClickTarget} {...otherProps}>
      <header>
        <div className={styles.heading}>{heading}</div>
        <button style={{backgroundColor:"red"}} onClick={handleCloseButtonClick}> <IoMdClose/> </button>
      </header>
    <main>
      {children}
    </main>
          
    </dialog>
  )
}

export default Modal