import { getRepositories } from "./github.api";

export async function fetchProjects() {
    return await getRepositories("ArthurVFelipe");
}