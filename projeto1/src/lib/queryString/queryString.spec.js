import { queryString, parse } from './queryString';

describe('objeto para string', () => {
   // ^-test suite
   it('query string simples, recebendo um objeto simples de quatro parametros', () => {
      const obj = {
         name: 'Danilo',
         profession: 'quality assurrance',
         age: '18',
         city: 'Anapolis',
      };

      expect(queryString(obj)).toBe(
         'name=Danilo&profession=quality-assurrance&age=18&city=Anapolis',
      );
   });

   it('query string com um array passado como valor', () => {
      const obj = {
         name: 'Danilo',
         profession: 'quality assurrance',
         age: '18',
         city: ['Anapolis', 'Unai'],
      };

      expect(queryString(obj)).toBe(
         'name=Danilo&profession=quality-assurrance&age=18&city=Anapolis,Unai',
      );
   });

   it('query string passando um objeto como parametro de outro', () => {
      const obj = {
         name: 'Danilo',
         profession: 'quality assurrance',
         age: '18',
         city: {
            first: 'Anapolis',
            second: 'Unai',
         },
      };

      // expect(() => queryString(obj)).toThrowError(); ------- Para retorno de erro

      expect(queryString(obj)).toBe(
         'name=Danilo&profession=quality-assurrance&age=18&city=[first=Anapolis&second=Unai]',
      );
   });
});

describe('string para objeto', () => {
   it('parse simples, de uma string simples para um objeto', () => {
      const string =
         'name=Danilo&profession=quality-assurrance&age=18&city=Anapolis';

      expect(parse(string)).toEqual({
         name: 'Danilo',
         profession: 'quality assurrance',
         age: '18',
         city: 'Anapolis',
      });
   });

   it('parse simples com um unico parametro', () => {
      const string = 'name=Danilo';

      expect(parse(string)).toEqual({ name: 'Danilo' });
   });

   it('parse com array como parametro', () => {
      const string = 'name=Danilo&city=Anapolis,Unai';

      expect(parse(string)).toEqual({
         name: 'Danilo',
         city: ['Anapolis', 'Unai'],
      });
   });
});
