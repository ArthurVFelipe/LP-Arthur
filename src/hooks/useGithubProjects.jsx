import { useEffect, useState } from "react";
import { fetchProjects } from "../api/GitHub/GitHub";

function useGithubProjects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProjects()
            .then(setProjects)
            .finally(() => setLoading(false));
    }, []);

    return {
        projects,
        loading
    };
}

export default useGithubProjects;