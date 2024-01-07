import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Button, LoadingPan, SeePanel } from "../../shared/components";
import { Form } from "../../shared/components/layout";
import { ApiException, AuthServices } from "../../shared/services/api";
import { handleFirebaseErrors, validateEmail } from "../../shared/utils/";
import { useAppContext } from "../../shared/hooks";

export const Login = () => {
	const { isConnected, setIsConnected, setUser, flagMessage, setFlagMessage } =
		useAppContext();

	const navigate = useNavigate();

	const [isLoading, setIsLoading] = useState(false);

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

	const isEmailValid = (email) => {
		return email && validateEmail(email);
	};

	const recoverPassword = () => {
		if (flagMessage.isVisible) return;

		const email = emailRef.current.value;

		if (!isEmailValid(email)) {
			setFlagMessage({
				isVisible: true,
				message: "Insira um email válido!",
				subMessage: "Impossível enviar um email de recuperação.",
			});
			return;
		}

		setIsLoading(true);
		AuthServices.recoverPassword(email).then((response) => {
			setIsLoading(false);
			if (response instanceof ApiException) {
				const subMessage = handleFirebaseErrors(response);
				setFlagMessage({
					isVisible: true,
					message: "Erro ao enviar email de recuperação!",
					subMessage,
				});
			} else {
				setFlagMessage({
					isVisible: true,
					message: "Email de recuperação enviado!",
					subMessage: "Verifique sua caixa de entrada.",
				});
			}
		});
	};

	const submitLogin = () => {
		if (flagMessage.isVisible) return;

		const email = emailRef.current.value;
		const password = passwordRef.current.value;

		if (!isEmailValid(email)) {
			setFlagMessage({
				isVisible: true,
				message: "Erro no campo de Email!",
				subMessage: "Insira um valor válido.",
			});
			return;
		}

		if (!password) {
			setFlagMessage({
				isVisible: true,
				message: "Erro no campo de Senha",
				subMessage: "Insira um valor válido.",
			});
			return;
		}

		setIsLoading(true);
		AuthServices.login(email, password).then((response) => {
			if (response instanceof ApiException) {
				setIsLoading(false);
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
			{!isLoading ? (
				<div className="form-container">
					<h2>Entrar</h2>
					<Form
						formQuestions={loginForm}
						handleClick={submitLogin}
						submitText="Entrar"
					/>
					<div className="buttons-container">
						<Button
							handleClick={recoverPassword}
							customClassName="jungle-green"
						>
							Recuperar senha
						</Button>
					</div>
					<Link to="/cadastrar">
						Ainda não possui uma conta? Então cadastre-se.
					</Link>
				</div>
			) : (
				<LoadingPan />
			)}
		</section>
	) : (
		<SeePanel />
	);
};
