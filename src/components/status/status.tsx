interface statusProps {
  status: "loader" | "error";
  text?: string;
}

const Status: React.FC<statusProps> = ({ status, text }) => {
  return (
    <div className="status-wrapper">
      <div className={status}>{text ? text : null}</div>
    </div>
  );
};

export default Status;
