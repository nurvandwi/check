<template>
  <div class="container">
    <div class="row boxform justify-content-center" style="padding:0px !important">
      <div class="col-md-8 text-left d-flex flex-row">
        <img class="mr-3" src="https://img.icons8.com/offices/80/000000/gender-neutral-user.png" />
        <div>
          <h2 class="formh2">Data Registrasi</h2>
          <p class="formp">Mohon Lengkapi Data dibawah ini</p>
        </div>
      </div>

      <hr style="width:2000px;margin-top:0px !important" />
      <div class="col-md-12 px-0">
         <Header :outlet_id='data_outlet.data.outlet_id' :outlet_name='data_outlet.data.outlet_name' />

        <form @submit="formSubmit">

            <p v-if="errors.length" style="color:black!important; align=left!important;">
              <b>Tolong Isi Kolom berikut ini :</b>
              <ul>
                <li v-for= "error in errors" v-bind:key="error"> {{ error }}</li>
              </ul>
            </p> 

          <input type="hidden" v-model="data_outlet.data.outlet_id" />  
          <input type="hidden" v-model="data_outlet.data.outlet_name" />
          <div class="form-row">
            <div class="form-group col-md-12 text-left">
              <input
                v-model="data_outlet.data.nama_konsumen"
                type="text"
                class="form-control sizeform"
                placeholder="Nama Pemilik"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6 col-sm-6 col-6 text-left">
              <input
                v-model="data_outlet.data.no_ektp"
                type="text"
                class="form-control sizeform"
                placeholder="EKTP"
              />
            </div>
            <div class="form-group col-md-6 col-sm-6 col-6 text-left">
              <input
                v-model="data_outlet.data.telepon2"
                name="telepon1"
                class="form-control sizeform"
                placeholder="No.HP"
              />
            </div>
          </div>

          <div class="form-row">
            <div class="form-group col-md-12 text-left">
              <input
                v-model="data_outlet.data.alamat2"
                type="text"
                class="form-control sizeform"
                placeholder="Alamat"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-6 col-sm-6 col-6  text-left">
              <input
                v-model="data_outlet.data.rtrw"
                type="text"
                class="form-control sizeform"
                placeholder="RT/RW"
              />
            </div>
            <div class="form-group col-md-6 col-sm-6 col-6  text-left">
              <input
                v-model="data_outlet.data.kodepos"
                type="text"
                class="form-control sizeform"
                placeholder="KodePos"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-12 col-12 text-left">
              <select
                @change="getKabupaten()"
                v-model="state.provinsi"
                name="dataProvinsi"
                class="form-control"
              >
                <option disabled selected value="0">Pilih Provinsi</option>
                <option
                  v-for="(row, i) in dataProvinsis.data"
                  :value="row.id"
                  :key="i"
                >{{ row.name }}</option>
              </select>
            </div>
            <div class="form-group col-md-12 col-12 text-left">
              <select
                @change="getKecamatan()"
                v-model="state.kabupaten"
                name="dataKabupaten"
                class="form-control"
              >
                <option disabled selected value="0">Pilih Kabupaten</option>
                <option
                  v-for="(row, i) in dataKabupatens.data"
                  :value="row.id"
                  :key="i"
                >{{ row.name }}</option>
              </select>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-md-12 col-12 text-left">
              <select
                @change="getKelurahan()"
                v-model="state.kecamatan"
                name="dataKecamatan"
                class="form-control"
              >
                <option disabled selected value="0">Pilih Kecamatan</option>
                <option
                  v-for="(row, i) in dataKecamatans.data"
                  :value="row.id"
                  :key="i"
                >{{ row.name }}</option>
              </select>
            </div>
            <div class="form-group col-md-12 col-12 text-left">
              <select v-model="state.kelurahan" class="form-control">
                <option disabled selected value="0">Pilih Kelurahan</option>
                <option
                  v-for="(row, i) in dataKelurahans.data"
                  :value="row.id"
                  :key="i"
                >{{ row.name }}</option>
              </select>
            </div>
             <div class="form-group col-md-12 col-12 text-left">
              <input
               v-model="data_outlet.data.nama_rekening"
                type="text"
                class="form-control sizeform"
                placeholder="Nama Nasabah"
              />
            </div>
              <div class="form-group col-md-6 col-6 text-left">
              <input
               v-model="data_outlet.data.nomor_rekening"
                type="number"
                class="form-control sizeform"
                placeholder="No Rekening"
              />
            </div>
              <div class="form-group col-md-6 col-6 text-left">
              <input
               v-model="data_outlet.data.nama_bank"
                type="text"
                class="form-control sizeform"
                placeholder="Nama Bank"
              />
            </div>
             <div class="form-group col-md-6 col-6 text-left">
              <input
               v-model="data_outlet.data.cabang_bank"
                type="text"
                class="form-control sizeform"
                placeholder="Cabang Bank"
              />
            </div>
             <div class="form-group col-md-6 col-6 text-left">
              <input
               v-model="data_outlet.data.kota_bank"
                type="text"
                class="form-control sizeform"
                placeholder="Kota Tujuan"
              />
            </div>
          </div>
          <button type="submit" class="btn btn-lg col-md-12 btn-primary font-button">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from "@/components/Header.vue";
export default {
  name: "Registrasi",
   components: {
    Header
  },
  data() {
    return {
      state: {
        provinsi: 0,
        kabupaten: 0,
        kecamatan: 0,
        kelurahan: 0
      },
      dataProvinsis: [],
      dataKabupatens: [],
      dataKecamatans: [],
      dataKelurahans: [],
      dataTelephones1: [],
      dataNama_Konsumen: [],
      data_outlet: [],
      errors: []
    };
  },
  methods: {
    getTelephone() {
      axios
        .get(
          `https://www.inosis.co.id/mvsignature2020_api/api_reg.php/detail-outlet`,
          {
            params: {
              txtKodeOutlet: this.$route.params.outlet_id
            }
          }
        )
        .then(res => {
          this.data_outlet = res.data;
          this.state.provinsi = this.data_outlet.data.id_propinsi;
          if (this.state.provinsi == null) {
            this.state.provinsi = 0;
          } else {
            this.getKabupaten();
          }
          this.state.kabupaten = this.data_outlet.data.id_kota;
          if (this.state.kabupaten == null) {
            this.state.kabupaten = 0;
          } else {
            this.getKecamatan();
          }
          this.state.kecamatan = this.data_outlet.data.id_kecamatan;
          if (this.state.kecamatan == null) {
            this.state.kecamatan = 0;
          } else {
            this.getKelurahan();
          }
          this.state.kelurahan = this.data_outlet.data.id_kelurahan;
          if (this.state.kelurahan == null) {
            this.state.kelurahan = 0;
          }
        })
        .catch(err => console.log(err));
    },
    getProvinsi() {
      axios
        .get(
          "https://www.inosis.co.id/mvsignature2020_api/api_reg.php/list-province"
        )
        .then(res => (this.dataProvinsis = res.data))
        .catch(err => console.log(err));
    },
    getKabupaten() {
      axios
        .get(
          `https://www.inosis.co.id/mvsignature2020_api/api_reg.php/list-cities?id_provinsi=${this.state.provinsi}`
        )
        .then(res => {
          this.dataKabupatens = res.data;
        })
        .catch(err => console.log(err));
    },
    getKecamatan() {
      axios
        .get(
          `https://www.inosis.co.id/mvsignature2020_api/api_reg.php/list-district?id_city=${this.state.kabupaten}`
        )
        .then(res => (this.dataKecamatans = res.data))
        .catch(err => console.log(err));
    },
    getKelurahan() {
      axios
        .get(
          `https://www.inosis.co.id/mvsignature2020_api/api_reg.php/list-subdistricts?id_district=${this.state.kecamatan}`
        )
        .then(res => (this.dataKelurahans = res.data))
        .catch(err => console.log(err));
    },
    formSubmit(e) {

      this.errors = [];

      if (!this.data_outlet.data.no_ektp) {
        this.errors.push('no eKTP');
      }
      if (!this.data_outlet.data.nama_konsumen) {
        this.errors.push('Nama Pemilik');
      }
      if (!this.data_outlet.data.telepon2) {
        this.errors.push('No Hp');
      }
      if (!this.data_outlet.data.alamat2) {
        this.errors.push('Alamat');
      }
       if (!this.data_outlet.data.rtrw) {
        this.errors.push('RT/RW');
      }
       if (!this.state.kelurahan) {
        this.errors.push('Kelurahan');
      }
       if (!this.state.kecamatan) {
        this.errors.push('Kecamatan');
      }
       if (!this.state.kabupaten) {
        this.errors.push('Kabupaten');
      }
      if (!this.state.provinsi) {
        this.errors.push('Propinsi');
      }
      if (!this.data_outlet.data.kodepos) {
        this.errors.push('Kodepos');
      }
      if (!this.data_outlet.data.nama_rekening) {
        this.errors.push('Nama Nasabah');
      }
       if (!this.data_outlet.data.nomor_rekening) {
        this.errors.push('No Rekening');
      }
       if (!this.data_outlet.data.nama_bank) {
        this.errors.push('Nama Bank');
      }
       if (!this.data_outlet.data.cabang_bank) {
        this.errors.push('Cabang Bank');
      }
       if (!this.data_outlet.data.kota_bank) {
        this.errors.push('Kota Tujuan');
      }
      e.preventDefault();
      if (this.data_outlet.data.outlet_id &&
          this.data_outlet.data.no_ektp &&
          this.data_outlet.data.nama_konsumen &&
          this.data_outlet.data.telepon2 &&
          this.data_outlet.data.alamat2 &&
          this.data_outlet.data.rtrw &&
          this.state.kelurahan &&
          this.state.kecamatan &&
          this.state.kabupaten &&
          this.state.provinsi &&
          this.data_outlet.data.kodepos &&
          this.data_outlet.data.nama_rekening &&
          this.data_outlet.data.nomor_rekening &&
          this.data_outlet.data.nama_bank &&
          this.data_outlet.data.cabang_bank &&
          this.data_outlet.data.kota_bank) {

      axios
        .post(
          `https://www.inosis.co.id/mvsignature2020_api/api_reg.php/update-outlet-ms`,
          {
            outlet_id: this.data_outlet.data.outlet_id,
            no_ektp: this.data_outlet.data.no_ektp,
            nama_konsumen: this.data_outlet.data.nama_konsumen,
            telepon2: this.data_outlet.data.telepon2,
            alamat2: this.data_outlet.data.alamat2,
            rtrw: this.data_outlet.data.rtrw,
            kelurahan: this.state.kelurahan,
            kecamatan: this.state.kecamatan,
            kabupaten: this.state.kabupaten,
            propinsi: this.state.provinsi,
            kodepos: this.data_outlet.data.kodepos,
            nama_rekening: this.data_outlet.data.nama_rekening,
            nomor_rekening: this.data_outlet.data.nomor_rekening,
            nama_bank: this.data_outlet.data.nama_bank,
            cabang_bank: this.data_outlet.data.cabang_bank,
            kota_bank: this.data_outlet.data.kota_bank,
          }
        )
        .then(res => {
          console.log(res.data);
          this.$router.push("/success/");
        })
        .catch(err => console.log(err));
      }
    }
  },
  mounted() {
    this.getKecamatan();
    this.getKabupaten();
    this.getProvinsi();
    this.getTelephone();
    this.getKelurahan();
  }
};
</script>
