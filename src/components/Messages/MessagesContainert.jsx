import {sendMessageAC} from "../../redux/messagesReducer";
import Messages from "./Messages";
import {connect} from 'react-redux'
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
  return {
    messages: state.messagesPage.messages,
    dialogs: state.messagesPage.dialogs,
    newMessageText: state.messagesPage.newMessageText,
  }
}

export default compose(
  connect(mapStateToProps, {sendMessageAC}),
  withAuthRedirect
)(Messages);