import { Button } from "../../../../../../shared/components";

import "./CommentActionButton.css";

const CommentActionButton = ({
  handleOnClick,
  action,
  whenChecked,
  whenNotChecked,
}) => {
  return (
    <>
      <Button
        customClassName="comment-action-button"
        handleClick={handleOnClick}
      >
        {action.isChecked ? whenChecked : whenNotChecked}
      </Button>
      <span className="comment-action-button-count">{action.users.length}</span>
    </>
  );
};

export default CommentActionButton;
