const TheirMessage = ({ message, lastMessage }) => {
  const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}
      {message?.attachments?.length > 0 ? (
        <img
          src={message.attachments[0].file}
          alt="attachment"
          className="message-image"
          style={{ marginLeft: isFirstMessageByUser ? "4px" : "48px", marginBottom: "10px" }}
        />
      ) : (
        <div
          className="message"
          style={{
            float: "left",
            backgroundColor: "#DADDE1",
            marginLeft: isFirstMessageByUser ? "4px" : "48px",
            marginBottom: "10px",
            borderRadius: "0 16px 16px 16px"
          }}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default TheirMessage;
