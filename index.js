const readline = require('readline');
const cmd = readline.createInterface(process.stdin, process.stdout);

var price = 8000;
const oprational = 0.045 * price;
var reply = true;

// while(reply){
    cmd.question(' Berapa Jarak yang ditempuh? ', (ans) => {
    if (ans <= 2) {

      console.log('Total Ongkos Kirim  :' + new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price))
      console.log('Biaya Layanan Sebesar : ' + new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(oprational))

      cmd.close()
    }

    else if (ans >= 3) {
      price
      discount = 5000;
      final_price = price + (discount * (ans - 2))
      console.log('Total Ongkos Kirim  :' + new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(final_price))

      oprationals = 0.045 * final_price;
      console.log('Total Biaya Layanan : ' + new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(oprationals))

      cmd.close();
    }

});
// }
// cmd.question('apakah anda ingin  mengulang?', (reply))

//code di line 33 ga ke eskusi
