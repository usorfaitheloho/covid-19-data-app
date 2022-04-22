const SET_REGIONS = 'covid-19-data-app/regionReducer/SET_REGIONS';

export const regionsState = [];

export const setRegions = (regions) => {
  console.log('from region reducer', regions);
  const data = (regions.length === 0) ? [] : regions;
  return { type: SET_REGIONS, data };
};

export function regionsReducer(state = regionsState, action) {
  switch (action.type) {
    case SET_REGIONS:
      return action.data;
    default:
      return state;
  }
};
