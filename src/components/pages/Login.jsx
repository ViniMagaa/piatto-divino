import { useState } from "react";
import { Link } from "react-router-dom";

import Form from "../layout/form/Form";

function Login() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const loginForm = [
		{
			id: "email",
			title: "Email",
			type: "email",
			autoComplete: "email",
			placeholder: "Ex: user@exemplo.com",
			handleChange: setEmail,
		},
		{
			id: "password",
			title: "Senha",
			type: "password",
			autoComplete: "new-password",
			placeholder: "Sua senha",
			handleChange: setPassword,
		},
	];
	return (
		<section>
			<h1>Bem-vindo de volta!</h1>
			<p>
				Agradecemos por voltar para nos auxiliar na construção de um refúgio
				culinário que reúne a autenticidade da cozinha italiana em um só lugar. <strong>Entre em sua conta para prosseguir!</strong>
			</p>
			<div className="form-container">
				<h2>Entrar</h2>
				<Form formQuestions={loginForm} handleClick={() => {}} />
				<Link to="/chef/cadastrar">
					Ainda não possui uma conta? Então cadastre-se.
				</Link>
			</div>
		</section>
	);
}

export default Login;
