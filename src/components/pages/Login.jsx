import { useContext, useRef } from "react";
import { Link } from "react-router-dom";

import RecipesContext from "../../context/RecipesContext";
import Form from "../layout/form/Form";
import SeePanel from "../SeePanel";

function Login() {
	const { isConnected, users, login, flagMessage, setFlagMessage } =
		useContext(RecipesContext);
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

		if (email === "" && password === "") {
			setFlagMessage({
				isVisible: true,
				message: "Preencha todos os dados!",
				subMessage: "Ainda existem informações faltando.",
			});
			return;
		}

		const userIndex = users.findIndex((user) => user.email === email);
		
		if (userIndex === -1) {
			setFlagMessage({
				isVisible: true,
				message: "Conta não encontrada!",
				subMessage: "Você digitou os dados corretos? Deseja fazer o cadastro?",
			});
			return;
		}

		if (users[userIndex].password !== password) {
			setFlagMessage({
				isVisible: true,
				message: "Senha inválida!",
				subMessage: "Tente novamente, coloque a senha correta.",
			});
			return;
		} 

		login(users[userIndex]);
	};

	return (
		<section>
			{!isConnected ? (
				<>
					<h1>Bem-vindo de volta!</h1>
					<p>
						Agradecemos por voltar para nos auxiliar na construção de um refúgio
						culinário que reúne a autenticidade da cozinha italiana em um só
						lugar.{" "}
						<span className="bold-italic">
							Entre em sua conta para prosseguir!
						</span>
					</p>
					<div className="form-container">
						<h2>Entrar</h2>
						<Form
							formQuestions={loginForm}
							handleClick={submitLogin}
							submitText="Entrar"
						/>
						<Link to="/chef/cadastrar">
							Ainda não possui uma conta? Então cadastre-se.
						</Link>
					</div>
				</>
			) : (
				<SeePanel />
			)}
		</section>
	);
}

export default Login;
