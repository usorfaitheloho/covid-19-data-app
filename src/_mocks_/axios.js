const todayDate = (new Date()).toISOString().split('T')[0];
export default {
    get: () => Promise.resolve({
        data : {
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
                                            today_confirmed: 247383,
                                        },
                                    },
                                },
            },
        },
    }),
};