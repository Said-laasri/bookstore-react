import './CurrentChapter.scss';

const CurrentChapter = () => {
  const random = Math.floor(Math.random() * (30 - 1 + 1)) + 1;
  return (
    <div className="chapter">
      <h3 className="current-chaper font-Roboto">CURRENT CHAPTER</h3>
      <h3 className="chapter-number font-Roboto">
        Chapter
        {' '}
        {random}
      </h3>
      <button className="btn-status font-Roboto" type="button">UPDATE PROGRESS</button>
    </div>
  );
};

export default CurrentChapter;
