import Cart from './cart';

describe('Cart', () => {
   let cart;
   beforeEach(() => (cart = new Cart()));

   it('espera-se retornar zero de um getTotal() de uma nova instancia de Cart', () => {
      expect(cart.getTotal()).toEqual(0);
   });

   it('espera-se receber o total do carrinho de compras', () => {
      const item = {
         product: {
            tittle: 'Adidas running shoes - men',
            price: 35388, // 353.88 | R$ 353,88
         },
         quantity: 2, // 70776
      };

      cart.add(item);

      expect(cart.getTotal()).toEqual(70776);
   });
});
