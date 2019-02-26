import { connect } from 'react-redux'
import classnames from 'classnames'

const SocketInfo = ({messages}) => (
  <div className='status-panel'>
    <div className='socket-info'>
    Recieved data:
      <div className='readData'>
        {messages.data.map(message => <div>[ {message.time} ] [ {message.cmd} ] [ {message.params.type} ] {JSON.stringify(message.params.data)}</div>)}
      </div>
    Sent data:
      <div className='writeData'>
        {messages.commands.map(message => {
          return <div key={message.localId + '-' + message.boardcasted} className={classnames({
            'messageItem': !message.boardcasted,
            'messageItem-boardcasted': message.boardcasted})}>
                [ {message.time} ] [ {message.cmd} ] {JSON.stringify(message.params)} </div>
        })}
      </div>
    </div>
  </div>
)

export default connect(
  ({messages}) => ({messages}),
  (dispatch) => ({}))(SocketInfo)
