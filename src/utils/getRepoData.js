import { fetchGithubRepo } from './fetchGithubRepo.js';
import { fetchCommit } from './fetchCommit.js';

const url = 'https://api.github.com/users/moedaaboul/repos';

export async function getRepoData(name) {
  try {
    const data = await fetchGithubRepo(url);
    const contributors = await fetchCommit(name);
    const contributions = contributors
      .filter((e) => e.login === 'moedaaboul')
      .map((e) => e.contributions)[0];
    const repoRaw = data.filter((obj) => obj.name === name)[0];
    const repo = {
      title: repoRaw.name,
      url: repoRaw.html_url,
      license: repoRaw.license.name,
      tags: repoRaw.topics,
      language: repoRaw.language,
      description: repoRaw.description,
      date: repoRaw.created_at,
      commits: contributions,
    };
    return repo;
  } catch (error) {
    console.error(error);
  }
}
