<template>
  <div>
    <div
            class="boxtitle col-md-12 caption"
            style="background-color:#FDC807 !important"
    >
      <p class="mb-0 font-link">
        Mohon dibaca syarat dan ketentuannya
        <br />
        <span>
          <a
                  class="font-link"
                  style="color: black !important;"
                  @click.prevent="show"
          >Syarat dan Ketentuan</a
          >
          <br />
        </span>
        Jika anda setuju, silahkan lanjutkan menekan TOMBOL SELANJUTNYA untuk
        registrasi dalam program loyalti mondelez.
      </p>
    </div>

    <modal id="text" name="modal-info" height="auto" :scrollable="true">
      <div id="TC" class="p-4">
        <h2 class="text-dark text-center">Syarat dan Ketentuan</h2>
        <p class="text-black-50 text-justify">
          Anda disarankan untuk membaca dan memahami syarat dan ketentuan
          berikut sebelum mengakses Situs ini lebih lanjut. Syarat dan ketentuan
          berikut menyangkut ketentuan penggunaan Situs, isi, konten dan
          keikutsertaan program loyalty Mondelēz Indonesia. Dengan menekan
          tombol Submit pada halaman registrasi, berarti anda telah menyetujui
          serta terikat dan tunduk dengan segala syarat dan ketentuan yang
          berlaku pada Situs ini.
        </p>

        <ol>
          <li class="font-weight-bold">DEFINISI</li>

          <p class="text-black-50 text-justify">
            Setiap kata atau istilah berikut yang digunakan di dalam Syarat dan
            Ketentuan ini memiliki arti seperti berikut di bawah, kecuali jika
            kata atau istilah yang bersangkutan di dalam pemakaiannya dengan
            tegas menentukan lain
          </p>
          <ul class="text-black-50">
            <li>
              “Kami” adalah PT Inosis Loyalti Indonesia selaku pengelola program
              loyalti yang didalamnya terdapat fitur Situs serta Whatsapp Call
              Centermewakili PT Mondelēz Indonesia Trading dan PT Kraft
              Ultrajaya Indonesia.
            </li>
            <li>
              “Anda” adalah pemilik toko grosir makanan ringan maupun bahan
              makanan sebagai mitra maupun calon mitra loyalty Mondelēz
              Indonesia.
            </li>
            <li>
              “Loyalti” adalah seluruh jenis program kerja sama antara pihak
              pertama dan pihak kedua yang bertujuan untuk menumbuhkan bisnis
              bersama antar kedua belah pihak dengan kompensasi, manfaat yang
              diterima masing-masing pihak
            </li>
            <li>
              “Informasi Pribadi” adalah seluruh data pribadi yang diberikan
              oleh Pengguna di Situs kami, termasuk nama lengkap, tempat dan
              tanggal lahir, jenis kelamin, alamat, nomor identitas, KTP, NPWP,
              serta dokumen dan data pendukung lain yang dibutuhkan sebagai
              persyaratan registrasi program loyalty Mondelēz Indonesia.
            </li>
            <li>
              “Konten” adalah teks, data, informasi, angka, gambar, grafik,
              foto, audio, video, nama pengguna, informasi, aplikasi, tautan,
              komentar, peringkat, desain, atau materi lainnya yang ditampilkan
              pada Situs.
            </li>
            <li>
              “Situs”, adalah tautan yang diberikan oleh pihak ketiga kepada
              pihak kedua untuk mengkomunikasikan segala jenis informasi terkait
              program loyalti
            </li>
          </ul>
          <br />
          <li class="font-weight-bold">LAYANAN</li>
          <p class="text-black-50 text-justify">
            Kami memberikan layanan berupa Call Center resmi mewakili PT
            Mondelēz Indonesia Trading dan PT Kraft Ultrajaya Indonesia yang
            berfungsi sebagai berikut:
          </p>
          <ul class="text-black-50">
            <li>
              Menyediakan registrasi tanpa kertas (paperless) untuk program
              loyalty Mondelēz bagi para pelanggan maupun calon pelanggan.
            </li>
            <li>
              Mengkomunikasikan target bulanan serta pencapaian masing-masing
              pelanggan peserta program loyalty Mondelēz.
            </li>
            <li>
              Memberikan berbagai jenis informasi terkait program loyalti
              Mondelēz Indonesia bagi para pelanggan
            </li>
            <li>
              Memberikan fitur-fitur tambahan yang dapat memberikan manfaat
              tambahan maupun ketentuan-ketentuan khusus yang berkaitan dengan
              program loyalti
            </li>
            <li>
              Layanan-layanan tidak termasuk kepada penerimaan pesanan terkait
              produk Mondelēz apapun, segala bentuk pesanan dapat disampaikan
              langsung kepada salesman terkait.
            </li>
          </ul>
          <br />
          <li class="font-weight-bold">PROGRAM LOYALTI</li>
          <p class="text-black-50 text-justify">
            Program loyalti PT Mondelēz Indonesia Trading terdiri dari:
          </p>
          <ul class="text-black-50">
            <li>Mondelēz Grosir Club (MGC)</li>
            <li>Mondelēz Vaganza (MVG)</li>
            <li>Signature</li>
            <p class="text-black-50 text-justify">
              Penjelasan lebih lengkap mengenai program-program tersebut
              dijelaskan pada poin 3.1, 3.2, dan 3.3.
            </p>
          </ul>
          <li class="font-weight-bold">MONDELEZ SIGNATURE</li>
          <p class="text-black-50 text-justify">
            Peserta yang berhak mengikuti program Mondelēz Signature adalah
            badan usaha dagang berbentuk Grosir atau Semi Grosir yang menjual
            snack dan keju dalam bentuk kulakan dan terdaftar sebagai pelanggan
            PT. Mondelēz Indonesia Trading
          </p>
          <ul class="text-black-50">
            <li>
              Peserta yang berpartisipasi adalah peserta yang rutin membeli
              produk Mondelēz Indonesia dengan minimum rata-rata Rp70.000.000,00
              (tujuh puluh juta Rupiah) per bulan serta memiliki tempat untuk
              memajang produk Mondelēz Indonesia
            </li>
            <li>
              Point reward akan dihitung jika transaksi tercatat secara resmi
              dalam sistem distributor dengan skema perhitungan sebagai berikut:
            </li>
              <img id="mvg" src="https://i.imgur.com/bCteatH.png" />
            <ul >
              <li>
                Point reward dihitung berdasarkan setiap transaksi Rp100.000,00
                (seratus ribu Rupiah) = 4 poin dan berlaku untuk kelipatannya.
              </li>
              <li>
                Syarat redeem point adalah jika pihak kedua mencapai minimum
                100% vs target per periode
              </li>
              <li>
                Point reward dilaksanakan dalam 4 quarter selama 1 tahun
              </li>
              <li>
                Point reward yang terkumpul dalam satu quarter dapat di carry
                over ke dalam quarter berikutnya tetapi tidak dapat di carry
                over ke periode tahun berikutnya
              </li>
              <li>
                Point reward yang terkumpul dari hasil carry over hanya bisa
                ditukarkan dengan hadiah yang ada di katalog terbaru dan hadiah
                di katalog sebelumnya dinyatakan tidak berlaku
              </li>
              <li>
                Pertanyaan dankeluhan mengenai perhitungan poin dapat
                disampaikan melalui WA Call Center 081-1800-8920
              </li>
              <li>
                Masa periode “Mondelēz Signature”:
              </li>
              <li>
                Periode Registrasi untuk Q1 dan Q2: Mulai Tanggal 2 Januari 2020
                s.d 31 Maret 2020
              </li>
              <li>
                Periode Registrasi untuk Q3 dan Q4: Mulai Tanggal 01 Juli 2020
                sd 31 Juli 2020
              </li>
              <li>
                Periode pengumpulan poin: 2 Januari 2020 s.d 31 Desember 2020
              </li>
              <li>
                Periode redeem poin: 15 Januari 2021 s.d 31 Maret 2021
              </li>
              <li>
                Periode pengiriman hadiah: 1 Februari 2021 s.d 30 April 2021
              </li>
            </ul>
          </ul>
          <br />
          <li class="font-weight-bolder">KETENTUAN UMUM PENUKARAN POIN</li>
          <ul class="text-black-50">
            <li>
              Point reward dapat ditukarkan dengan hadiah-hadiah yang terdapat
              di dalam brosur, tidak dapat ditukarkan dengan uang dan tidak bisa
              dipindah tangankan dengan alasan apapun kepada pihak manapun
            </li>
            <li>Katalog hadiah dapat diperbaharui dari waktu ke waktu</li>
            <li>
              Nilai poin hadiah yang berlaku adalah yang tercantum dalam Brosur
              Hadiah terbaru dan Nilai Point Hadiah dari Katalog Hadiah
              sebelumnya menjadi tidak berlaku
            </li>
            <li>
              Penukaran point reward dilakukan dengan cara mengisi formulir
              redemption yang terdapat dalam Point Statement dan diserahkan
              kepada salesman
            </li>
            <li>Hadiah yang sudah diambil tidak dapat ditukarkan kembali</li>
            <li>
              Khusus hadiah pulsa hanya untuk nomor telfon prepaid/prabayar dan
              pengiriman pulsa diproses setiap hari Senin
            </li>
            <li>
              Pengaduan atas kerusakan dan kelengkapan hadiah hanya dapat
              dilakukan pada saat penerimaan hadiah
            </li>
            <li>
              Pihak pertama melalui pihak ketiga akan memberikan informasi dan
              konfirmasi apabila terjadi perubahan hadiah di dalam katalog,
              mekanisme penukaran poin maupun ketentuan-ketentuan yang bersifat
              force majeure kepada pihak kedua dengan nilai yang sama
            </li>
          </ul>
          <br />
          <li class="font-weight-bolder">KETENTUAN UMUM PROGRAM LOYALTI MONDELEZ</li>
          <ul class="text-black-50">
            <li>
              Produk-produk Mondelēz yang dibeli pada saat program berlangsung
              tidak boleh diretur oleh pihak kedua
            </li>
            <li>
              Apabila peserta program MGC, Mondelēz Vaganza, atapun Mondelēz
              Signature terbukti menyimpang dari ketentuan yang berlaku maka
              pihak kedua akan kehilangan haknya sebagai peserta program loyalti
              Mondelēz baik poin maupun hadiah yang sudah ditukarkan
            </li>
            <li>
              Keputusan Mondelēz dalam pelaksanaan poin reward ini adalah mutlak
              dan tidak dapat diganggu gugat
            </li>
            <li>
              Syarat dan ketentuan dapat berubah sewaktu-waktu sesuai dengan
              kebijakan Mondelēz Indonesia Trading
            </li>
          </ul>
          <br />
          <li class="font-weight-bolder">PERSETUJUAN</li>
          <p class="text-black-50 text-justify">
            Dengan menekan tombol Submit pada halaman registrasi, anda mengakui
            bahwa anda telah membaca dan memahami informasi-informasi di atas
            dan dengan ini memberikan persetujuan kepada kami dalam pengelolaan
            secara bebas, tegas dan tanpa keraguan terhadap:
          </p>
          <ul class="text-black-50">
            <li>Proses Data Pribadi Anda; dan</li>
            <li>
              Pengalihan Data Pribadi Anda, termasuk pada yurisdiksi-yurisdiksi
              di mana hukum perlindungan data mungkin berbeda dari yang berlaku
              di yurisdiksi anda.
            </li>
          </ul>
        </ol>
        <p class="text-dark text-justify">
          Kami (PT Mondelēz Indonesia Trading dan PT Kraft Ultrajaya Indonesia)
          memiliki kewajiban untuk melindungi data-data anda dan memberikan
          keuntungan atau benefit sesuai dengan yang dijanjikan.
        </p>
        <div class="popupcontrols text-center">
          <button class="btn btn-primary btn-lg" @click="close()">Agree</button>
        </div>
      </div>
    </modal>
  </div>
</template>
<script>
  export default {
    name: "Terms",
    methods: {
      show() {
        this.$modal.show("modal-info");
      },
      hide() {
        this.$modal.hide("modal-info");
      },
      close(){
        this.$modal.hide("modal-info");
      },
    }
  };
</script>
<style>
  modal-active {
    display: block;
    text-align: justify;
  }

  #mvg {
    width: 29vw;
    height: auto;
    margin-left: -4vw;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  /*#mvg:hover{*/
  /*  -ms-transform: scale(1.5); !* IE 9 *!*/
  /*  -webkit-transform: scale(1.5); !* Safari 3-8 *!*/
  /*  transform: scale(1.5);*/
  /*  width: 380px;*/
  /*  height: 200px;*/
  /*  margin-left: 1vw;*/
  /*}*/

  #TC {
    font-size: 13px;
  }
  #text {
    text-align: justify;
    padding: 20px auto;
  }
  button {
    padding: 10px;
    cursor: pointer;
  }

  @media screen and (max-width: 600px) {
    #TC {
      margin-left: 65vw;
      font-size: 13px;
    }
    #mvg {
      width: 29vw;
      height: auto;
      margin-left: -4vw;
      margin-top: 5px;
      margin-bottom: 5px;
    }

    #text ul li{
      font-size: 17px;
    }
    p{
      font-size: 17px ;
    }

    #mvg:hover{
      -ms-transform: scale(1.5);
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
      width: 67vw;
      height: 22vh;
      margin-left: -10vw;
    }
  }
</style>
