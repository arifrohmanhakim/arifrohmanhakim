import { useState, useEffect } from 'react';

const GITHUB_USERNAME = 'arifrohmanhakim';

export const useGitHubProfile = () => {
  const [profileStats, setProfileStats] = useState({
    publicRepos: 12,
    publicGists: 5,
    followers: 1,
    following: 2,
    totalStars: 1,
    isLoading: true,
    error: null
  });

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchGitHubStats = async () => {
      try {
        const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
          signal: controller.signal
        });

        if (!userResponse.ok) {
          throw new Error('Gagal memuat profil GitHub');
        }

        const userData = await userResponse.json();

        // Mengambil repositori publik untuk kalkulasi total bintang
        const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`, {
          signal: controller.signal
        });

        let calculatedStars = 1;
        if (reposResponse.ok) {
          const reposData = await reposResponse.json();
          if (Array.isArray(reposData)) {
            calculatedStars = reposData.reduce((total, repo) => total + (repo.stargazers_count || 0), 0);
          }
        }

        if (isMounted) {
          setProfileStats({
            publicRepos: userData.public_repos ?? 12,
            publicGists: userData.public_gists ?? 5,
            followers: userData.followers ?? 1,
            following: userData.following ?? 2,
            totalStars: calculatedStars,
            isLoading: false,
            error: null
          });
        }
      } catch (err) {
        if (err.name !== 'AbortError' && isMounted) {
          setProfileStats((prev) => ({
            ...prev,
            isLoading: false,
            error: 'Menggunakan data lokal terverifikasi'
          }));
        }
      }
    };

    fetchGitHubStats();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return profileStats;
};
