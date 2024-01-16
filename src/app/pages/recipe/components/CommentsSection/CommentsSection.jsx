import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../../../shared/components";
import { useAppContext } from "../../../../shared/hooks";
import { ApiException } from "../../../../shared/services/api";
import { CommentsService } from "../../../../shared/services/api/comments/Comments.service";
import { Comment } from "./Comment/Comment";
import { CommentForm } from "./CommentForm/CommentForm";
import { LoadingComments } from "./LoadingComments/LoadingComments";

import "./CommentsSection.css";

export const CommentsSection = ({ recipeId }) => {
  const { isConnected, setFlagMessage } = useAppContext();

  const [comments, setComments] = useState(null);

  const navigate = useNavigate();

  const loadComments = useCallback(async () => {
    const response = await CommentsService.getAllByRecipeId(recipeId);
    if (response instanceof ApiException) {
      setFlagMessage({
        isVisible: true,
        message: "Erro ao carregar comentários!",
        subMessage:
          "Ocorreu algo inesperado ao tentar carregar os comentários.",
      });
    } else {
      setComments(response);
    }
  }, [recipeId, setFlagMessage]);

  useEffect(() => {
    loadComments();
  }, [loadComments, recipeId, setFlagMessage]);

  if (comments === null) {
    return <LoadingComments amount={2} />;
  }

  return (
    <div className="comments-section">
      <h2>
        Comentários <span className="comments-count">{comments?.length}</span>
      </h2>
      <div className="comments-container">
        {comments === null ? (
          <LoadingComments amount={2} />
        ) : comments.length > 0 ? (
          comments
            .sort((a, b) => b.likeUsers.length - a.likeUsers.length)
            .map((comment) => {
              return (
                <Comment
                  key={comment.id}
                  comment={comment}
                  updateComments={loadComments}
                />
              );
            })
        ) : (
          <p>Não há comentários para esta receita.</p>
        )}
      </div>
      {isConnected ? (
        <CommentForm recipeId={recipeId} updateComments={loadComments} />
      ) : (
        <div className="not-connected">
          <h3>Conecte-se para comentar!</h3>
          <div className="buttons-container">
            <Button
              handleClick={() => navigate("/entrar")}
              customClassName="raw-umber"
            >
              Entrar
            </Button>
            <Button
              handleClick={() => navigate("/cadastrar")}
              customClassName="jungle-green"
            >
              Cadastrar
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
