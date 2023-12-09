import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import RecipesContext from "../../context/RecipesContext";
import SeePanel from "../SeePanel";
import Form from "../layout/form/Form";

function Register() {
	const { isConnected } = useContext(RecipesContext);

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
			value: name,
			handleChange: setName,
		},
		{
			id: "email",
			title: "Email",
			type: "email",
			autoComplete: "email",
			placeholder: "Ex: user@exemplo.com",
			value: email,
			handleChange: setEmail,
		},
		{
			id: "password",
			title: "Senha",
			type: "password",
			autoComplete: "off",
			placeholder: "Sua senha",
			value: password,
			handleChange: setPassword,
		},
		{
			id: "confirm-password",
			title: "Confirmar senha",
			type: "password",
			autoComplete: "off",
			placeholder: "Repita a senha",
			value: confirmPassword,
			handleChange: setConfirmPassword,
		},
	];
	return (
		<section>
			{!isConnected ? (
				<>
					<h1>Seja bem-vindo!</h1>
					<p>
						Sua expertise é fundamental para tornar a experiência gastronômica
						em nosso site ainda mais especial. <span className="bold-italic">Registre-se e compartilhe sua paixão pela culinária conosco</span>. Estamos ansiosos para receber suas deliciosas contribuições!
					</p>
					<div className="form-container">
						<h2>Cadastre-se</h2>
						<Form
							formQuestions={registerForm}
							handleClick={() => {}}
							submitText="Cadastrar"
						/>
						<Link to="/chef/entrar">
							Já possui cadastro? Então entre em sua conta.
						</Link>
					</div>
				</>
			) : (
				<SeePanel />
			)}
		</section>
	);
}

export default Register;
