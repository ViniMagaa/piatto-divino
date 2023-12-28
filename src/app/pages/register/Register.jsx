import { useContext, useRef } from "react";
import { Link } from "react-router-dom";

import { v4 as uuid } from "uuid";

import { SeePanel } from "../../shared/components";
import { Form } from "../../shared/components/layout";
import RecipesContext from "../../shared/contexts/RecipesContext";

export const Register = () => {
	const { users, isConnected, flagMessage, setFlagMessage, register, login } =
		useContext(RecipesContext);

	const nameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const confirmPasswordRef = useRef();

	const registerForm = [
		{
			id: "name",
			title: "Nome",
			type: "text",
			autoComplete: "name",
			placeholder: "Seu nome",
			ref: nameRef,
		},
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
		{
			id: "confirm-password",
			title: "Confirmar senha",
			type: "password",
			autoComplete: "off",
			placeholder: "Repita a senha",
			ref: confirmPasswordRef,
		},
	];

	const submitForm = () => {
		if (flagMessage.isVisible) return;

		const name = nameRef.current.value;
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		const confirmPassword = confirmPasswordRef.current.value;

		if (
			name === "" ||
			email === "" ||
			password === "" ||
			confirmPassword === ""
		) {
			setFlagMessage({
				isVisible: true,
				message: "Preencha todos os dados!",
				subMessage: "Ainda existem informações faltando.",
			});
			return;
		}

		if (users.some((user) => user.email === email)) {
			setFlagMessage({
				isVisible: true,
				message: "Esse email já está cadastrado!",
				subMessage: "Você está tentando fazer o login?",
			});
			return;
		}

		if (password !== confirmPassword) {
			setFlagMessage({
				isVisible: true,
				message: "As senhas não coincidem!",
				subMessage: "Digite a mesma senha para efetuar seu cadastro.",
			});
			return;
		}

		const newUser = {
			id: uuid(),
			name: name,
			email: email,
			password: password,
		};

		register(newUser);
		login(newUser);
	};

	return !isConnected ? (
		<section>
			<h1>Seja bem-vindo!</h1>
			<p>
				Sua expertise é fundamental para tornar a experiência gastronômica em
				nosso site ainda mais especial.{" "}
				<span className="bold-italic">
					Registre-se e compartilhe sua paixão pela culinária conosco
				</span>
				. Estamos ansiosos para receber suas deliciosas contribuições!
			</p>
			<div className="form-container">
				<h2>Cadastre-se</h2>
				<Form
					formQuestions={registerForm}
					handleClick={submitForm}
					submitText="Cadastrar"
				/>
				<Link to="/entrar">Já possui cadastro? Então entre em sua conta.</Link>
			</div>
		</section>
	) : (
		<SeePanel />
	);
};
