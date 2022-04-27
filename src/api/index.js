const username = 'b-folleas'
const host = "https://api.github.com";

export default {
  async getAllProjects() {
    const res = await fetch(`${host}/users/${username}/repos?sort=updated`);
    return res.json();
  },

  async getProjectsByPage(page, perPage) {
    const res = await fetch(`${host}/users/${username}/repos?sort=updated&page=${page}&per_page=${perPage}`);
    return res.json();
  },
};