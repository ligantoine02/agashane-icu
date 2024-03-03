import { Repository } from "@octokit/graphql-schema";

export type RepositoryResponse = {
	repository: Repository;
};
