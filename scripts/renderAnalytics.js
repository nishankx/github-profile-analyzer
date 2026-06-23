
export function renderAnalytics(resultArr) {

    return `
        <section class='results'>
            <div class="card">
                <div class="profile-banner">
                    <img id="avatar" src="${resultArr.avatar}">
                    <h1 class="section-title">PROFILE</h1>
                </div>

                <div class="profile-details">

                    <div class="detail">
                        <p class="label">Name</p>
                        <p id="name">${resultArr.name}</p>
                    </div>

                    <div class="detail">
                        <p class="label">Bio</p>
                        <p id="bio">${resultArr.bio}</p>
                    </div>

                    <div class="detail">
                        <p class="label">Location</p>
                        <p id="location">${resultArr.location}</p>
                    </div>

                    <div class="detail">
                        <p class="label">Account Age</p>
                        <p id="account-age">${resultArr.accountAge} Years</p>
                    </div>

                </div>
            </div>

            <div class="card">

                <h2 class="card-title">Activity</h2>

                <div class="detail">
                    <p class="label">Public Repositories</p>
                    <p id="public-repos">${resultArr.publicRepos}</p>
                </div>

                <div class="detail">
                    <p class="label">Followers</p>
                    <p id="followers">${resultArr.followers}</p>
                </div>

                <div class="detail">
                    <p class="label">Following</p>
                    <p id="following">${resultArr.following}</p>
                </div>

                <div class="detail">
                    <p class="label">Recent Activity</p>
                    <p id="recent-activity">${resultArr.recentActivity}</p>
                </div>

                <div class="detail">
                    <p class="label">Repository Creation Trend</p>
                    <p id="repo-trend">${resultArr.repoTrend}</p>
                </div>

            </div>

            <div class="card">

                <h2 class="card-title">Repository Quality</h2>

                <div class="detail">
                    <p class="label">Total Stars ⭐</p>
                    <p id="total-stars">${resultArr.totalStars}</p>
                </div>

                <div class="detail">
                    <p class="label">Total Forks 🍴</p>
                    <p id="total-forks">${resultArr.totalForks}</p>
                </div>

                <div class="detail">
                    <p class="label">Most Starred Repository</p>
                    <p id="most-starred">${resultArr.mostStarred}</p>
                </div>

                <div class="detail">
                    <p class="label">Largest Repository</p>
                    <p id="largest-repo">${resultArr.largestRepo}</p>
                </div>

                <div class="detail">
                    <p class="label">Average Stars / Repository</p>
                    <p id="average-stars">${resultArr.averageStars}</p>
                </div>

            </div>

            <div class="card">

                <h2 class="card-title">Technology Stack</h2>

                <div class="detail">
                    <p class="label">Top Languages</p>
                    <p id="top-languages">${resultArr.topLanguages.join(", ")}</p>
                </div>

                <div class="detail">
                    <p class="label">Language Distribution</p>
                    <p id="language-distribution">${JSON.stringify(resultArr.languageDistribution)}</p>
                </div>

                <div class="detail">
                    <p class="label">Primary Stack</p>
                    <p id="primary-stack">${resultArr.primaryStack}</p>
                </div>

            </div>

            <div class="card">

                <h2 class="card-title">Coding Insights</h2>

                <div class="detail">
                    <p class="label">Most Active Repository</p>
                    <p id="most-active">${resultArr.mostActive}</p>
                </div>

                <div class="detail">
                    <p class="label">Recently Updated Repository</p>
                    <p id="recently-updated">${resultArr.recentlyUpdated}</p>
                </div>

                <div class="detail">
                    <p class="label">Repository Activity Score</p>
                    <p id="activity-score">${resultArr.activityScore}</p>
                </div>

                <div class="detail">
                    <p class="label">Open Source Contribution Score</p>
                    <p id="oss-score">${resultArr.ossScore}</p>
                </div>

            </div>

            <div class="card">

                <h2 class="card-title">Project Statistics</h2>

                <div class="detail">
                    <p class="label">Total Repository Size</p>
                    <p id="total-size">${resultArr.totalSize} KB</p>
                </div>

                <div class="detail">
                    <p class="label">Average Repository Size</p>
                    <p id="average-size">${resultArr.averageSize} KB</p>
                </div>

                <div class="detail">
                    <p class="label">Repository Visibility</p>
                    <p id="visibility">${resultArr.visibility}</p>
                </div>

                <div class="detail">
                    <p class="label">Archived Repositories</p>
                    <p id="archived-repos">${resultArr.archivedRepos}</p>
                </div>

            </div>

            <div class="card">

                <h2 class="card-title">Developer Score</h2>

                <h1 id="developer-score">${resultArr.developerScore}/100</h1>

                <div class="detail">
                    <p class="label">Activity</p>
                    <p id="score-activity">${resultArr.scoreActivity}</p>
                </div>

                <div class="detail">
                    <p class="label">Repository Quality</p>
                    <p id="score-quality">${resultArr.scoreQuality}</p>
                </div>

                <div class="detail">
                    <p class="label">Popularity</p>
                    <p id="score-popularity">${resultArr.scorePopularity}</p>
                </div>

                <div class="detail">
                    <p class="label">Language Diversity</p>
                    <p id="score-diversity">${resultArr.scoreDiversity}</p>
                </div>

                <div class="detail">
                    <p class="label">Project Consistency</p>
                    <p id="score-consistency">${resultArr.scoreConsistency}</p>
                </div>

            </div>

        </section>
    `
}