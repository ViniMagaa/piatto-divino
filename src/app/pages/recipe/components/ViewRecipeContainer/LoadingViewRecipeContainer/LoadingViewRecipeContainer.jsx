import "./LoadingViewRecipeContainer.css";

export const LoadingViewRecipeContainer = () => {
  return (
    <div className="loading-mock">
      <div className="view-recipe">
        <div className="image-container">
          <div className="loading-content"></div>
        </div>
        <div className="view-recipe-description">
          <div>
            <div className="h1 loading-content"></div>
            <div className="p loading-content"></div>
            <div className="p loading-content"></div>
            <div className="p loading-content"></div>
            <div className="p loading-content"></div>
          </div>
          <div>
            <div className="h2 loading-content"></div>
            <div className="p loading-content"></div>
            <div className="p loading-content"></div>
            <div className="p loading-content"></div>
          </div>
          <div>
            <div className="h2 loading-content"></div>
            <div className="p loading-content"></div>
            <div className="p loading-content"></div>
          </div>
          <div className="information">
            <div className="h3 loading-content"></div>
            <span className="small loading-content"></span>
            <span className="small loading-content"></span>
            <span className="small loading-content"></span>
          </div>
        </div>
      </div>
    </div>
  );
};
