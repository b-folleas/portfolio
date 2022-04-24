const username = 'b-folleas'
const host = "https://api.github.com";

export default {
  getProjects() {
    return fetch(`${host}/users/${username}/repos?per_page=5&sort=updated&page=2`).then(res =>
      res.json()
    );
  }
};
