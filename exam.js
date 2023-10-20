const express = require("express") // memanggil library express js
const bodyParser = require("body-parser") // memanggil library body-parser
const cors = require("cors") // memanggil library cors
const app = express() //implementasi express

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())


// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())
// app.get("/hitung", (req,res) => {

//     // menampung data yang dikirimkan
//     const satuan = req.params.style // mengambil nilai pada parameter name
//     const data = req.params.data // mengambil nilai pada parameter age

//     let result;
//         const results = {};
//         const sp = {
//           km: 1,
//           hm: 10,
//           dam: 100,
//           m: 1000,
//           dm: 10000,
//           cm: 100000,
//           mm: 1000000
//         };
      
//         if (satuan == "mm") {
//           result = data / 1000000;
//         }
//         else if (satuan == "cm") {
//           result = data / 100000;
//         }
//         else if (satuan == "dm") {
//           result = data / 10000;
//         }
//         else if (satuan == "m") {
//           result = data / 1000;
//         }
//         else if (satuan == "dam") {
//           result = data / 100;
//         }
//         else if (satuan == "hm") {
//           result = data / 10;
//         }
//         else{
//           result = data
//         }
      
//         for (const p in sp) {
//           results[p] = result * sp[p];
//         }

//     let response = {
//         satuan: style,
//         data: data
//     }


//     res.json(response)
// })
app.post("/dicari", (req,res) => {
  let cari= req.params.type
  let soal1= Number(req.params.var1)
  let soal2= Number(req.params.var2)
  let hasil=0

    let response = 
        
   
        
     if (cari === "k") 
    {
        hasil = soal1/soal2
        response = {
            Soal: "Mencari kecepatan(Velocity) per detik",
            Jarak: soal1 + ' meter',
            Waktu: soal2 + ' detik',
            Hasil: hasil + ' m/detik',
        }
    }        
    else if(cari === "v")
    {
        hasil = soal1*soal2
        response = {
            Soal: "kecepatan",
            Kecepatan: soal1 + ' m/detik',
            Waktu: soal2 + ' detik',
            Hasil: hasil + ' meter',
        }
    }
    else if(cari === "s")
    {
        hasil = soal11*soal2
        response = {
            Soal: "Mencari Jarak(Space)",
            Kecepatan: soal1 + ' m/detik',
            Waktu: soal2 + ' detik',
            Hasil: hasil + ' meter',
        }
    }
    else if(cari === "t")
    {
        hasil = soal1/soal2
        response = {
            Soal: "Mencari Waktu(Time)",
            Jarak: soal1 +' Meter',
            Kecepatan: soal2 + ' m/detik',
            Hasil: hasil.toFixed(2) + ' detik',
        }
    }
    else
    {
        response = "Tipe tidak ada!\n<br>Coba salah satu dari berikut Tipe:[v,s,t]"
    }
    }
    res.json(response)
})

// menjalankan server pada port 8000
app.listen(1200, () => {
    console.log("Server run on port 1200");
})
