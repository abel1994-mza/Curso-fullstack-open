const Notification = ({ message }) => {
  if (!message) {
    return null;
  }

  const text = typeof message === "string" ? message : message.text;
  const type = typeof message === "string" ? "success" : message.type;
  return (
    <>
      <h1 className={type === "error" ? "error" : "success"}>{text}</h1>
    </>
  );
};

export default Notification;
