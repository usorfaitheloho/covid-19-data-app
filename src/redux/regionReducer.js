const SET_REGIONS = 'covid-19-data-app/regionReducer/SET_REGIONS';

export const regionsState =[];

const getRegion = () => ({
    type: SET_REGIONS,
});

export function regionsReducer (state= regionsState, action) {
  switch(action.type) {
      case SET_REGIONS:
          return {...state, action:action.regions };
     default:
         return state;
  }

};


export const setRegions = (regions) => {
console.log('from region reducer', regions)
return { type: SET_REGIONS, regions };
};