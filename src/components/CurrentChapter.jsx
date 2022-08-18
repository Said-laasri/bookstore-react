import './CurrentChapter.scss';

const CurrentChapter = () => {
  const random = Math.floor(Math.random() * (30 - 1 + 1)) + 1;
  return (
    <div className="chapter">
      <h3 id="current-chaper">CURRENT CHAPTER</h3>
      <h3 id="chapter-number">
        Chapter
        {' '}
        {random}
      </h3>
      <button className="btn-status" type="button">UPDATE PROGRESS</button>
    </div>
  );
};

export default CurrentChapter;
