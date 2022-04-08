const {sum} = require('./calculator');

it('a soma de dois mais dois deve ser quatro'
    , () => {
        expect(sum(2,2)).toBe(4);
});

it('a soma de dois mais dois como string deve ser quatro'
    , () => {
        expect(sum('2','2')).toBe(4);
});

it('os dados de entrada devem ser validos para soma'
    , () => {
        expect(() => {
            sum('', 2)
        }).toThrowError();

        expect(() => {
            sum([2,2])
        }).toThrowError();

        expect(() => {
            sum({})
        }).toThrowError();

        expect(() => {
            sum()
        }).toThrowError();
});