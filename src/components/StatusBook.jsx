import './StatusBook.scss';

const StatusBook = () => {
  const random = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  return (
    <div className="book-status-current">
      <div className="pie" />
      <div>
        <h2 id="status-pre">
          {random}
          %
        </h2>
        <h3 id="completed">Completed</h3>
      </div>
    </div>
  );
};

export default StatusBook;
