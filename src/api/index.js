const token = import.meta.env.VITE_GITHUB;
const username = import.meta.env.VITE_GITHUB_USERNAME
const host = "https://api.github.com";
const config = {
  headers: new Headers({
    Authorization: `token ${token}`
  })
};

export default {
  getProjects() {
    return fetch(`${host}/user/repos?type=member*&sort=updated`, config).then(res =>
      res.json()
    );
  }
};
