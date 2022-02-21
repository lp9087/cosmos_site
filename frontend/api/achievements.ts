import api from 'api';

const achievementsApi = {
  getAchievements() {
    return api('/api/achievements/');
  },
};

export default achievementsApi;
