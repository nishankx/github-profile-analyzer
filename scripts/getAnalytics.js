export function getAnalytics(UserData) {

    const profile = UserData.profile
    const repos = UserData.repos
    const events = UserData.events

    let totalStars = 0
    let totalForks = 0
    let totalSize = 0
    let archivedRepos = 0

    let largestRepo = repos.length ? repos[0] : null
    let mostStarredRepo = repos.length ? repos[0] : null
    let recentlyUpdatedRepo = repos.length ? repos[0] : null

    const languages = {}

    for (const repo of repos) {

        totalStars += repo.stargazers_count

        totalForks += repo.forks_count

        totalSize += repo.size

        if (repo.archived) {
            archivedRepos++
        }

        if (largestRepo && repo.size > largestRepo.size) {
            largestRepo = repo
        }

        if (mostStarredRepo && repo.stargazers_count > mostStarredRepo.stargazers_count) {
            mostStarredRepo = repo
        }

        if (recentlyUpdatedRepo &&
            new Date(repo.updated_at) > new Date(recentlyUpdatedRepo.updated_at)) {

            recentlyUpdatedRepo = repo

        }

        if (repo.language) {

            languages[repo.language] =
                (languages[repo.language] || 0) + 1

        }

    }

    let primaryStack = ""
    let maxLanguageCount = 0

    for (const language in languages) {

        if (languages[language] > maxLanguageCount) {

            maxLanguageCount = languages[language]

            primaryStack = language

        }

    }

    const averageStars =
        repos.length ? (totalStars / repos.length).toFixed(1) : 0

    const averageSize =
        repos.length ? Math.round(totalSize / repos.length) : 0

    const accountAge = Math.floor(

        (Date.now() - new Date(profile.created_at)) /

        (1000 * 60 * 60 * 24 * 365)

    )

    const activityScore =
        Math.min(100, repos.length * 5 + events.length)

    const popularityScore =
        Math.min(100, profile.followers / 10)

    const qualityScore =
        Math.min(100, totalStars + totalForks)

    const diversityScore =
        Object.keys(languages).length * 10

    const consistencyScore =
        repos.length ? 80 : 0

    const developerScore = Math.round(

        activityScore * 0.30 +

        qualityScore * 0.25 +

        popularityScore * 0.20 +

        diversityScore * 0.15 +

        consistencyScore * 0.10

    )

    return {

        avatar: profile.avatar_url,

        name: profile.name,

        username: profile.login,

        bio: profile.bio,

        company: profile.company,

        location: profile.location,

        accountAge,

        publicRepos: profile.public_repos,

        followers: profile.followers,

        following: profile.following,

        recentActivity:
            events.length ? events[0].type : "No Recent Activity",

        repoTrend:
            repos.length,

        totalStars,

        totalForks,

        mostStarred:
            mostStarredRepo ? mostStarredRepo.name : "N/A",

        largestRepo:
            largestRepo ? largestRepo.name : "N/A",

        averageStars,

        topLanguages:
            Object.keys(languages),

        languageDistribution:
            languages,

        primaryStack,

        mostActive:
            events.length ? events[0].repo.name : "N/A",

        recentlyUpdated:
            recentlyUpdatedRepo ? recentlyUpdatedRepo.name : "N/A",

        activityScore,

        ossScore:
            totalStars + totalForks,

        totalSize,

        averageSize,

        visibility:
            repos.length ? repos[0].visibility : "N/A",

        archivedRepos,

        developerScore,

        scoreActivity:
            activityScore,

        scoreQuality:
            qualityScore,

        scorePopularity:
            popularityScore,

        scoreDiversity:
            diversityScore,

        scoreConsistency:
            consistencyScore

    }

}