import find from 'lodash/find';
import remove from 'lodash/remove';
import Dinero from 'dinero.js'

Dinero.defaultCurrency = 'BRL';
Dinero.defaultPrecision = 2;

export default class Cart {
   items = [];

   add(item) {
      this.items.forEach(foritem => {
         if (foritem.product === item.product) {  
            foritem.quantity += item.quantity;
         }
      });
      
      find(this.items, { product: item.product }) ? 0 : this.items.push(item);
   }

   getTotal() {
      return this.items.reduce((acc, item) => {
         return acc.add(Dinero({ amount: item.quantity * item.product.price }));
      }, Dinero({ amount: 0 }));
   }

   remove(product) {
      remove(this.items, { product });
   }

   summary() {
      return {
         total: this.getTotal().getAmount(),
         items: this.items,
      }
   }

   checkout() {
      this.items = []
      return this.summary
   }

}
