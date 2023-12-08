import { useState } from "react";
import Form from "../layout/form/Form";
import { Link } from "react-router-dom";

function Register() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");

	const registerForm = [
		{
			id: "name",
			title: "Nome",
			type: "text",
			autoComplete: "name",
			placeholder: "Seu nome",
			handleChange: setName,
		},
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
		{
			id: "confirm-password",
			title: "Confirmar senha",
			type: "password",
			autoComplete: "new-password",
			placeholder: "Sua senha",
			handleChange: setConfirmPassword,
		},
	];
	return (
		<section>
			<h1>Seja bem-vindo!</h1>
			<p>
				Sua expertise é fundamental para tornar a experiência gastronômica em
				nosso site ainda mais especial.{" "}
				<strong>
					Registre-se e compartilhe sua paixão pela culinária conosco
				</strong>
				. Estamos ansiosos para receber suas deliciosas contribuições!
			</p>
			<div className="form-container">
				<h2>Cadastre-se</h2>
				<Form formQuestions={registerForm} handleClick={() => {}} />
				<Link to="/chef/entrar">
					Já possui cadastro? Então entre em sua conta.
				</Link>
			</div>
		</section>
	);
}

export default Register;
