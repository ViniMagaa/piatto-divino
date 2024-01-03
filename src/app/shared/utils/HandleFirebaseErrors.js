export function handleFirebaseErrors(firebaseResponse) {
	const possibleMessages = {
		"auth/email-already-in-use": "O email já está em uso.",
		"auth/id-token-expired": "Token de ID expirado.",
		"auth/id-token-revoked": "Token de ID revogado.",
		"auth/insufficient-permission": "Permissão insuficiente.",
		"auth/internal-error": "Erro interno do servidor.",
		"auth/invalid-creation-time": "Horário de criação inválido.",
		"auth/invalid-credential": "Credencial inválida.",
		"auth/invalid-disabled-field": "Campo 'disabled' inválido.",
		"auth/invalid-display-name": "Nome de exibição inválido.",
		"auth/invalid-dynamic-link-domain": "Domínio de link dinâmico inválido.",
		"auth/invalid-email": "E-mail inválido.",
		"auth/invalid-last-sign-in-time": "Último horário de login inválido.",
		"auth/invalid-page-token": "Token de página inválido.",
		"auth/invalid-password": "Senha inválida.",
		"auth/invalid-session-cookie-duration": "Duração de sessão inválida.",
		"auth/operation-not-allowed": "Operação não permitida.",
		"auth/session-cookie-expired": "Cookie de sessão expirado.",
		"auth/session-cookie-revoked": "Cookie de sessão revogado.",
		"auth/too-many-requests": "Muitas tentativas, tente novamente mais tarde.",
		"auth/unauthorized-continue-uri": "URL de confirmação não autorizada.",
		"auth/user-not-found": "Usuário não encontrado.",
		"auth/weak-password": "Senha fraca.",
	};
	return (
		possibleMessages[firebaseResponse.message.code] ||
		"Ocorreu um erro desconhecido."
	);
}
