import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { List } from "../../../../shared/components";
import { useAppContext } from "../../../../shared/hooks";
import { ApiException, RecipesService } from "../../../../shared/services/api";
import { convertTimestampToLocaleString } from "../../../../shared/utils";
import { LoadingViewRecipeContainer } from "./LoadingViewRecipeContainer/LoadingViewRecipeContainer";

import "./ViewRecipeContainer.css";

export const ViewRecipeContainer = ({ recipeId }) => {
  const { setFlagMessage } = useAppContext();
  const [recipe, setRecipe] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    RecipesService.getById(recipeId).then((response) => {
      if (response instanceof ApiException || response === undefined) {
        navigate("/");
        setFlagMessage({
          isVisible: true,
          message: "Erro ao buscar receita!",
          subMessage: "Não foi possível encontrá-la.",
        });
        return;
      } else {
        setRecipe(response);
      }
    });
  }, [recipeId, navigate, setFlagMessage]);

  if (Object.keys(recipe).length === 0) {
    return <LoadingViewRecipeContainer />;
  }

  const {
    name,
    img,
    description,
    ingredients,
    instructions,
    author,
    lastUpdate,
    createdAt,
  } = recipe;

  const newCreatedAt = convertTimestampToLocaleString(createdAt, "pt-br");
  const newLastUpdate = convertTimestampToLocaleString(lastUpdate, "pt-br");

  return (
    <div className="view-recipe">
      <div className="image-container">
        <img src={img} alt={name} />
      </div>
      <div className="view-recipe-description">
        <div>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
        <List title="Ingredientes" list={ingredients} type="disc" />
        <List title="Modo de preparo" list={instructions} type="number" />
        <div className="information">
          <h3>Informações da receita</h3>
          <span className="small">
            Por: <span className="bold-italic">{author.displayName}</span>
          </span>
          <span className="small">
            Data de criação: <span className="bold-italic">{newCreatedAt}</span>
          </span>
          <span className="small">
            Última edição: <span className="bold-italic">{newLastUpdate}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
