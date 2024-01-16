export const LoadingComments = ({ amount }) => {
  let placeholders = [];

  for (let i = 0; i < amount; i++) {
    placeholders.push(
      <div key={i} className="comment">
        <span className="h3 loading-content"></span>
        <span className="small loading-content"></span>
        <span className="small loading-content"></span>
        <span className="small loading-content"></span>
      </div>
    );
  }

  return (
    <div className="loading-mock">
      <div className="comments-section">
        <h2>Comentários</h2>
        <div className="comments-container">{placeholders}</div>
      </div>
    </div>
  );
};
