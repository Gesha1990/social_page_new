import React from 'react';
import style from './Messages.module.css'
import Message from "./Message/Message";
import DialogsItem from "./DialogsItem/DialogsItem";
import SendMessageReduxForm from "./SendMessageForm";

const Messages = (props) => {

  let messagesElements = props.messages.map(m => <Message message={m.message} key={m.id}/>);
  let dialogsElement = props.dialogs.map(d => <DialogsItem name={d.name} key={d.id} id={d.id}/>);

  let addMessage = (formData) => {
    props.sendMessageAC(formData.message);
  };

  return (
    <main className={style.main}>
      <div className={style.dialogsContainer}>
        <div className={style.dialogs}>
          {dialogsElement}
        </div>
        <div className={style.messages}>
          {messagesElements}
        </div>
        <SendMessageReduxForm onSubmit={addMessage}/>
      </div>
    </main>
  )
}
export default Messages;