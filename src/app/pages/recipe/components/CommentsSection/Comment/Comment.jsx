import { useEffect, useState } from "react";
import { BiDislike, BiLike, BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";

import { Button } from "../../../../../shared/components";
import { useAppContext } from "../../../../../shared/hooks";
import { ApiException } from "../../../../../shared/services/api";
import { CommentsService } from "../../../../../shared/services/api/comments/Comments.service";
import { convertTimestampToLocaleString } from "../../../../../shared/utils";
import CommentActionButton from "./CommentActionButton/CommentActionButton";

import "./Comment.css";

export const Comment = ({
  comment: { id, author, createdAt, text, likeUsers, dislikeUsers },
  updateComments,
}) => {
  const { user, ADMIN_UID, isConnected, flagMessage, setFlagMessage } =
    useAppContext();

  const isUserInList = (list) => {
    return list.some((uid) => uid === user.uid);
  };

  const [likes, setLikes] = useState({
    isChecked: isUserInList(likeUsers),
    users: likeUsers,
  });
  const [dislikes, setDislikes] = useState({
    isChecked: isUserInList(dislikeUsers),
    users: dislikeUsers,
  });

  useEffect(() => {
    const updateCommentReactions = async () => {
      const newReactions = {
        likeUsers: likes.users,
        dislikeUsers: dislikes.users,
      };

      const response = await CommentsService.updateById(id, newReactions);
      if (response instanceof ApiException) {
        setFlagMessage({
          isVisible: true,
          message: "Erro ao atualizar reações!",
          subMessage: "Ocorreu algo inesperado ao tentar reagir.",
        });
      }
    };
    updateCommentReactions();
  }, [id, likes, dislikes, setFlagMessage]);

  const toggleReactions = (isLike) => {
    const setReaction = isLike ? setLikes : setDislikes;
    const setOppositeReaction = isLike ? setDislikes : setLikes;

    const filterUser = (list) => {
      return list.filter((uid) => uid !== user.uid);
    };

    setOppositeReaction((prevOppReaction) => {
      if (prevOppReaction.isChecked) {
        return {
          isChecked: false,
          users: filterUser(prevOppReaction.users),
        };
      } else return prevOppReaction;
    });

    setReaction((prevReaction) => {
      return {
        isChecked: !prevReaction.isChecked,
        users: prevReaction.isChecked
          ? filterUser(prevReaction.users)
          : [...prevReaction.users, user.uid],
      };
    });
  };

  const deleteComment = async () => {
    if (flagMessage.isVisible) return;

    if (
      !window.confirm(
        `Você tem certeza que deseja excluir o comentário: "${text}"?`
      )
    )
      return;

    const response = await CommentsService.deleteById(id);
    if (response instanceof ApiException) {
      setFlagMessage({
        isVisible: true,
        message: "Erro ao excluir comentário!",
        subMessage: "Ocorreu algo inesperado ao tentar apagá-lo.",
      });
    } else {
      setFlagMessage({
        isVisible: true,
        message: "Comentário excluído!",
        subMessage: "O comentário não existe mais.",
      });
      updateComments();
    }
  };

  const newCreatedAt = convertTimestampToLocaleString(createdAt, "pt-br");

  return (
    <div className="comment">
      <div className="comment-header">
        <div className="comment-header-info-name">{author.name}</div>
        <span className="comment-header-info-date">{newCreatedAt}</span>
      </div>
      <div className="comment-body">
        <p className="comment-body-text">{text}</p>
      </div>
      {isConnected && (
        <div className="comment-actions">
          <div className="comment-actions-default">
            <CommentActionButton
              handleOnClick={() => toggleReactions(true)}
              action={likes}
              whenChecked={<BiSolidLike />}
              whenNotChecked={<BiLike />}
            />
            <CommentActionButton
              handleOnClick={() => toggleReactions(false)}
              action={dislikes}
              whenChecked={<BiSolidDislike />}
              whenNotChecked={<BiDislike />}
            />
          </div>
          {(user.uid === author.uid || user.uid === ADMIN_UID) && (
            <div className="comment-actions-user">
              <Button
                customClassName="comment-action-button"
                handleClick={deleteComment}
              >
                <FaTrashAlt />
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
