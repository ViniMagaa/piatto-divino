import { useRef } from "react";
import { BiSolidCommentAdd } from "react-icons/bi";

import { Button } from "../../../../../shared/components";
import { useAppContext } from "../../../../../shared/hooks";
import { ApiException } from "../../../../../shared/services/api";
import { CommentsService } from "../../../../../shared/services/api/comments/Comments.service";

import "./CommentForm.css";

export const CommentForm = ({ recipeId, updateComments }) => {
  const { user, setFlagMessage } = useAppContext();

  const commentRef = useRef();

  const createComment = async () => {
    const comment = commentRef.current.value;
    if (!comment) {
      setFlagMessage({
        isVisible: true,
        message: "Não foi possível comentar!",
        subMessage: "Adicione um texto ao comentário.",
      });
      return;
    }

    const newComment = {
      author: {
        name: user.displayName,
        uid: user.uid,
      },
      createdAt: new Date(),
      likeUsers: [],
      dislikeUsers: [],
      recipeId: recipeId,
      text: commentRef.current.value,
    };

    const response = await CommentsService.create(newComment);
    if (response instanceof ApiException) {
      setFlagMessage({
        isVisible: true,
        message: "Erro ao publicar comentário!",
        subMessage: "Ocorreu um erro, tente novamente.",
      });
    } else {
      setFlagMessage({
        isVisible: true,
        message: "Comentário publicado!",
        subMessage: "Obrigado por compartilhar sua experiência.",
      });
      updateComments();
      commentRef.current.value = "";
    }
  };

  return (
    <div className="horizontal-form">
      <div className="form-container">
        <form onSubmit={(e) => e.preventDefault()}>
          <textarea
            ref={commentRef}
            rows={1}
            placeholder="Faça um comentário..."
          />
          <Button handleClick={createComment}>
            <BiSolidCommentAdd />
          </Button>
        </form>
      </div>
    </div>
  );
};
