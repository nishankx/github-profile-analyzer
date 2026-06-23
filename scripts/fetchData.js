
export async function fetchData(username) {
    const [profileResponse, repoResponse, eventResponse] = await Promise.all([
        fetch(`https://api.github.com/users/${username}`),
        fetch(`https://api.github.com/users/${username}/repos`),   
        fetch(`https://api.github.com/users/${username}/events`)
    ])
    
    const profile = await profileResponse.json()
    const repos = await repoResponse.json()
    const events = await eventResponse.json()

    return {
        profile,
        repos,
        events
    }
}