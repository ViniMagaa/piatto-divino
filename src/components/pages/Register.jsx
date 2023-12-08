import { useState } from "react";
import Form from "../layout/form/Form";

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
			<h1>Contribua com receitas!</h1>
			<p>
				Você é um chef experiente e está disposto a{" "}
				<strong>
					contribuir com suas incríveis receitas para enriquecer nosso banco de
					dados?
				</strong>{" "}
				Faça agora mesmo o seu cadastro e junte-se a nós nessa jornada
				culinária!
			</p>
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
			</div>
		</section>
	);
}

export default Register;
