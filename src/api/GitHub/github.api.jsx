const GITHUB_API = "https://api.github.com";

export async function getRepositories(username) {
    const response = await fetch(
        `${GITHUB_API}/users/${username}/repos?sort=updated`,
        {
            headers: {
                Accept: "application/vnd.github.mercy-preview+json",
            },
        }
    );

    if (!response.ok) {
        throw new Error("Erro ao buscar repositórios");
    }

    return response.json();
}