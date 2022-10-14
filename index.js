const readline = require('readline');
const {reject} = require('assert');
const {resolve} = require('path');
const cmd = readline.createInterface(process.stdin, process.stdout);

var price = 8000;
const oprational = 0.045 * price;
var reply =  true;
var discount = 5000;
const error = () => {
    cmd.close()
  }

const count = () => {
    return new Promise ((resolve, reject) => {
        cmd.question(' Berapa Jarak yang ditempuh? ', (ans) => {
        if (ans <= 2) {

          console.log('Total Ongkos Kirim  :' + new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price))
          console.log('Biaya Layanan Sebesar : ' + new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(oprational))

        }

        else if (ans >= 3) {
          final_price = price + (discount * (ans - 2))
          console.log('Total Ongkos Kirim  :' + new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(final_price))

          oprationals = 0.045 * final_price;
          console.log('Total Biaya Layanan : ' + new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(oprationals))

        }
        resolve(true)

    });

})
}
const startApp = async() => {
    let reply = true;

    while(reply) {
      try {
        const data = await count();
        reply = data;
        } catch(error) {
          console.log("Terimakasih sudah menggunakan aplikasi ini");
          reply = false;
      }
    }
  }

  startApp();

