const readline = require('readline');
const {reject} = require('assert');
const {resolve} = require('path');
const cmd = readline.createInterface(process.stdin, process.stdout);

var price = 8000;
const oprational = 0.045 * price;
let reply =  true;
const error = () => {
    cmd.close()
  }
const start = async() => {
  let reply = true;

  while(reply){
    try{
        cmd.question(' Berapa Jarak yang ditempuh? ', (ans) => {
        if (ans <= 2) {

          console.log('Biaya Ongkos Kirim :' + new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price))
          console.log('Biaya Layanan Sebesar : ' + new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(oprational))

        //   cmd.close()
        }

        else if (ans >= 3) {
          price
          discount = 5000;
          final_price = price + (discount * (ans - 2))
          console.log('Total Ongkos Kirim  :' + new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(final_price))

          oprationals = 0.045 * final_price;
          console.log('Total Biaya Layanan : ' + new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(oprationals))

        //   cmd.close();
        }

    })

    }
    catch(error){
        console.log("DONE!!!");
    }
  }
}
start();
cmd.question('apakah anda ingin  mengulang?', (reply))

//code di line 32 ga ke eskusi
