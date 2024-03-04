import { createAppAuth } from "@octokit/auth-app";
import { Octokit } from "octokit";

class Github {
	private client: Octokit;
	private repo: string = import.meta.env.PUBLIC_REPO;
	private owner: string = import.meta.env.PUBLIC_OWNER;

	private params = {
		owner: this.owner,
		repo: this.repo,
	};

	constructor() {
		this.client = new Octokit({
			authStrategy: createAppAuth,
			auth: {
				appId: import.meta.env.PUBLIC_APP_ID,
				privateKey: import.meta.env.PUBLIC_PRIVATE_KEY,
				installationId: import.meta.env.PUBLIC_INSTALLATION_ID,
			},
		});
	}

	/**
	 * Get issues
	 */
	public async getIssues({ limit = 3 }: { limit?: number }) {
		const issues = await this.client.graphql(
			`
        query lastIssues ($owner: String!, $repo: String!, $num: Int = 3)
        {
          repository(owner: $owner, name: $repo) {
          	issues (
          		last: $num, 
          		orderBy: { field: CREATED_AT, direction: DESC }
          	) {
      				totalCount
      					edges {
					        node {
					          id
					          title
					          number
					          body
					          bodyHTML
					          createdAt
					          labels (first: 3) { 
					  					edges {
					              node {
					                id
					                name
					              }
					            }
					          }
					        }
					      }
					    }
          }
        }
      `,
			{
				...this.params,
				...{ num: limit },
			},
		);

		return issues;
	}

	/**
	 * Get labels
	 */
	public async getLabels({ limit = 3 }: { limit: number }) {
		const labels = await this.client.graphql(
			`
				query getLabels ($repo: String!, $owner: String!, $num: Int = 3) {
					repository (owner: $owner, name: $repo) {
				    labels (
				    	first: $num, 
				    	orderBy: { field: CREATED_AT, direction:DESC }
				    ) {
				      nodes {
				        id
				        name
				        description
				      }
				    }
				  }
				}
			`,
			{
				...this.params,
				...{ num: limit },
			},
		);

		return labels;
	}

	/**
	 * Get label
	 */
	public async findLabelByName(name: string) {
		const label = await this.client.graphql(
			`
				query findLabel ($repo: String!, $owner: String!, $name: String!) {
					 repository (owner: $owner, name: $repo) {
				    label(name: $name) {
				      name
				      description
				      createdAt
				      issues (first: 5) {
				        nodes {
				          id
				          number
				          title
				          body
				          bodyHTML
				          createdAt
				          labels (first: 3) {
				          	edges {
					          	node {
					          		id
					          		name
					          	}
					          }
				          }
				        }
				      }
				    }
				  }
				}
			`,
			{
				...this.params,
				...{ name },
			},
		);

		return label;
	}

	/**
	 * Find issue by number
	 */
	public async findIssue(id: number) {
		const issue = await this.client.graphql(
			`
				query findIssue ($repo: String!, $owner: String!, $id: Int!) {
					repository (owner: $owner, name: $repo) {
				    issue(number: $id) {
				      id
				      number
				      title
				      body
				      bodyHTML
				      createdAt
				      labels (first: 5) {
				        nodes {
				          id
				          name
				        }
				      }
				    }
				  }
				}
			`,
			{
				...this.params,
				...{ id },
			},
		);

		return issue;
	}
}

export const gh = new Github();
