


const Nama_Panggilan='aji'
const N = 59
const dataAwal=[
  {id : 1 , nama :'nasi ayam geprek',harga:10000 + N *100,kategori : 'Makanan'},
  {id : 2 , nama :'es teh lemon',harga:10000,kategori : 'Makanan'},
  {id : 3 , nama :'nasi ayam geprek',harga:10000 ,kategori : 'Makanan'},
  {id : 4 , nama :'nasi ayam geprek',harga:10000 ,kategori : 'Makanan'},
  {id : 5 , nama :'nasi ayam geprek',harga:10000 ,kategori : 'Makanan'},
]

const gayaJudul= {
  color : '#1f3a5f', fontsize : '28px', fontwide: 700, letterspacing : '0,5'
}

const jam = 9

function App() {
    const jam = 9
  return(
    <>
    <h1 classname="Judul" style={gayaJudul}>kantin {Nama_Panggilan}</h1>
    <p>Selamat pagi</p>
    <p>Saldo awal kartu kantin : RP{(N*1000).toLocaleString('id-ID')}</p>
    <p>{jam <12 ? "selamat pagi" : "Selamat Siang"} </p>
    <button disabled>Bayar</button>
    </>
  )
}

export default App
