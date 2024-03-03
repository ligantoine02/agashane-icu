import { createAppAuth } from "@octokit/auth-app";
import { Octokit } from "octokit";

/**
/
/ Authenticate user using octokit/auth-app
/
*/
const octokit = new Octokit({
	authStrategy: createAppAuth,
	auth: {
		appId: import.meta.env.PUBLIC_APP_ID,
		privateKey: import.meta.env.PUBLIC_PRIVATE_KEY,
		installationId: import.meta.env.PUBLIC_INSTALLATION_ID,
	},
});

export default octokit;
