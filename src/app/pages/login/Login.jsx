import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { SeePanel } from "../../shared/components";
import { Form } from "../../shared/components/layout";
import RecipesContext from "../../shared/contexts/RecipesContext";
import { ApiException, AuthServices } from "../../shared/services/api";
import { handleFirebaseErrors, validateEmail } from "../../shared/utils/";

export const Login = () => {
	const { isConnected, setIsConnected, setUser, flagMessage, setFlagMessage } =
		useContext(RecipesContext);

	const navigate = useNavigate();

	const emailRef = useRef();
	const passwordRef = useRef();

	const loginForm = [
		{
			id: "email",
			title: "Email",
			type: "email",
			autoComplete: "email",
			placeholder: "Ex: user@exemplo.com",
			ref: emailRef,
		},
		{
			id: "password",
			title: "Senha",
			type: "password",
			autoComplete: "off",
			placeholder: "Sua senha",
			ref: passwordRef,
		},
	];

	const submitLogin = () => {
		if (flagMessage.isVisible) return;

		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		if (!email || !password) {
			setFlagMessage({
				isVisible: true,
				message: "Preencha todos os dados!",
				subMessage: "Ainda existem informações faltando.",
			});
			return;
		}

		if (!validateEmail(email)) {
			setFlagMessage({
				isVisible: true,
				message: "Erro no campo Email!",
				subMessage: "Digite um email válido.",
			});
			return;
		}

		AuthServices.login(email, password).then((response) => {
			if (response instanceof ApiException) {
				const subMessage = handleFirebaseErrors(response);
				setFlagMessage({
					isVisible: true,
					message: "Erro ao fazer login!",
					subMessage,
				});
			} else {
				setUser(response.user);
				setIsConnected(true);
				navigate("/chef");
				setFlagMessage({
					isVisible: true,
					message: "Você se conectou!",
					subMessage: "Bem-vindo de volta. 🤝",
				});
			}
		});
	};

	return !isConnected ? (
		<section>
			<h1>Bem-vindo de volta!</h1>
			<p>
				Agradecemos por voltar para nos auxiliar na construção de um refúgio
				culinário que reúne a autenticidade da cozinha italiana em um só lugar.{" "}
				<span className="bold-italic">Entre em sua conta para prosseguir!</span>
			</p>
			<div className="form-container">
				<h2>Entrar</h2>
				<Form
					formQuestions={loginForm}
					handleClick={submitLogin}
					submitText="Entrar"
				/>
				<Link to="/cadastrar">
					Ainda não possui uma conta? Então cadastre-se.
				</Link>
			</div>
		</section>
	) : (
		<SeePanel />
	);
};
