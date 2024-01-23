import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { LoadingPan, SeePanel } from "../../shared/components";
import { Form } from "../../shared/components/layout";
import { ApiException, AuthServices } from "../../shared/services/api";
import { handleFirebaseErrors, validateEmail } from "../../shared/utils";
import { useAppContext } from "../../shared/hooks";

export const Register = () => {
	const { isConnected, flagMessage, setFlagMessage, setIsConnected, setUser } =
		useAppContext();

	const [isLoading, setIsLoading] = useState(false);

	const navigate = useNavigate();

	const nameRef = useRef();
	const emailRef = useRef();
	const passwordRef = useRef();
	const confirmPasswordRef = useRef();

	const registerForm = [
		{
			label: "Nome",
			input: {
				id: "name",
				type: "text",
				autoComplete: "name",
				placeholder: "Seu nome",
				ref: nameRef,
			},
		},
		{
			label: "Email",
			input: {
				id: "email",
				type: "email",
				autoComplete: "email",
				placeholder: "Ex: exemplo@email.com",
				ref: emailRef,
			},
		},
		{
			label: "Senha",
			input: {
				id: "password",
				type: "password",
				autoComplete: "off",
				placeholder: "No mínimo 6 caracteres",
				ref: passwordRef,
			},
		},
		{
			label: "Confirmar senha",
			input: {
				id: "confirm-password",
				type: "password",
				autoComplete: "off",
				placeholder: "Repita a senha",
				ref: confirmPasswordRef,
			},
		},
	];

	const submitForm = () => {
		if (flagMessage.isVisible) return;

		const name = nameRef.current.value;
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		const confirmPassword = confirmPasswordRef.current.value;

		if (!name || !email || !password || !confirmPassword) {
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

		if (password !== confirmPassword) {
			setFlagMessage({
				isVisible: true,
				message: "As senhas não coincidem!",
				subMessage: "Digite a mesma senha para efetuar seu cadastro.",
			});
			return;
		}

		if (password.length < 6) {
			setFlagMessage({
				isVisible: true,
				message: "Senha fraca!",
				subMessage: "Deve ter no mínimo 6 caracteres.",
			});
			return;
		}

		setIsLoading(true);
		AuthServices.register(email, password).then((response) => {
			setIsLoading(false);
			if (response instanceof ApiException) {
				const subMessage = handleFirebaseErrors(response);
				setFlagMessage({
					isVisible: true,
					message: "Erro ao tentar se cadastrar!",
					subMessage,
				});
			} else {
				AuthServices.updateProfile({ displayName: name });
				setUser({ ...response.user, displayName: name });
				setIsConnected(true);
				navigate("/chef");
				setFlagMessage({
					isVisible: true,
					message: "Você se registrou!",
					subMessage: "Seja bem-vindo chef. 👨‍🍳",
				});
			}
		});
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
			{!isLoading ? (
				<div className="form-container">
					<h2>Cadastre-se</h2>
					<Form
						formQuestions={registerForm}
						handleClick={submitForm}
						submitText="Cadastrar"
					/>
					<Link to="/entrar">
						Já possui cadastro? Então entre em sua conta.
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
