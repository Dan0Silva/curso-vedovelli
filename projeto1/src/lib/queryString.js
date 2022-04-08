const keyValueToString = ([key, val]) => {
   if (typeof val === 'object' && !Array.isArray(val)) {
      // throw new Error('Please check your params');

      var result = Object.entries(val)
         .map(keyValueToString)
         .join('&')
         .replace(/ /g, '-');

      result = `${key}=[${result}]`;

      return result;
   }
   return `${key}=${val}`;
};

module.exports.queryString = obj =>
   Object.entries(obj).map(keyValueToString).join('&').replace(/ /g, '-');

module.exports.parse = string =>
   Object.fromEntries(
      string.split('&').map(item => {
         let [key, value] = item.replace(/-/g, ' ').split('=');

         if (value.indexOf(',') > -1) {
            value = value.split(',');
         }

         return [key, value];
      }),
   );
