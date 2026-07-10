import { getRepositories } from "./github.api";

export async function fetchProjects() {
 const repos = await getRepositories("ArthurVFelipe");
console.log(repos);
 return repos
     .filter(repo => !repo.fork)
     .map(repo => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      language: repo.language,
      url: repo.html_url,
      stars: repo.stargazers_count
     }));
}