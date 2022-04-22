import apiStoreService from './apiServices';

const todayDate = (new Date()).toISOString().split('T')[0];
const expected = {
  dates: {
    [todayDate]:
                {
                  countries: {
                    Zimbabwe:
                    {
                      date: [todayDate],
                      id: 'zimbabwe',
                      links: [{}],
                      name: 'Zimbabwe',
                      regions: [],
                      source: 'John Hopkins University',
                      today_confirmed:  247383,
                    },
                  },
                },
  },
};

describe('fetch api', () => {
  it('expects ', async () => {
    const result = await apiStoreService.apiGetAll(todayDate);
    expect(result.data).toEqual(expected);
  });
});
