export const fetchUserData = async (userName) => {
  const response = await fetch(`https://api.github.com/users/${userName}`);
  if (response.ok) {
    const userData = await response.json();
    return userData;
  }
  throw new Error("Failed to load data");
};

export const fetchUserRepos = async (url) => {
  const response = await fetch(url);
  if (response.ok) {
    const userReposList = await response.json();
    return userReposList;
  }
  throw new Error("Failed to load data");
};
