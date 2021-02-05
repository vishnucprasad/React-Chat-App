const MyMessage = ({ message }) => {
  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="attachment"
        className="message-image"
        style={{ float: "right", marginBottom: "10px" }}
      />
    );
  }

  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        marginBottom: "10px",
        color: "#ffffff",
        backgroundColor: "rgb(0, 153, 255)",
        borderRadius: "16px 0 16px 16px"
      }}
    >
        {message.text}
    </div>
  );
};

export default MyMessage;
