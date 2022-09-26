import find from 'lodash/find';
import remove from 'lodash/remove';

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
         return acc + item.quantity * item.product.price;
      }, 0);
   }

   remove(product) {
      remove(this.items, { product });
   }

   summary() {
      return {
         total: this.getTotal(),
         items: this.items,
      }
   }

   checkout() {
      this.items = []
      return this.summary
   }

}
