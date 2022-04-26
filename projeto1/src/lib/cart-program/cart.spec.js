import Cart from './cart';

describe('Cart', () => {
   let cart;
   let product = {
      tittle: 'Adidas running shoes - men',
      price: 35388, // 353.88 | R$ 353,88
   };

   beforeEach(() => (cart = new Cart()));

   it('espera-se retornar zero de um getTotal() de uma nova instancia de Cart', () => {
      expect(cart.getTotal()).toEqual(0);
   });

   it('espera-se receber o total do carrinho de compras [add]', () => {
      const item = {
         product,
         quantity: 2, // 70776
      };

      cart.add(item);

      expect(cart.getTotal()).toEqual(70776);
   });

   it('espera-se que somente um produto exista por vez', () => {
      cart.add({
         product,
         quantity: 2,
      });

      cart.add({
         product,
         quantity: 1,
      });

      expect(cart.getTotal()).toEqual(35388);
   });
});
