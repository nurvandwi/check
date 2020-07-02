<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-12 mt-2">
        <img src="../assets/SIGNATURE2.png" class="imgmgc" alt />
      </div>
      <div
        id="success"
        class="boxtitle3 col-md-12 mt-4"
        style="background-color:#FDC807  !important"
      >
        <h2 style="color:black !important">Registrasi Berhasil</h2>
        <h5>
          <span style="color:black !important"
            ><b>{{ date | moment }}</b></span
          >
        </h5>
      </div>
      <div
        id="success"
        class="boxtitle3 col-md-12 font-link"
        style="background-color:#FDC807  !important; "
      >
        <p class="mb-0 font-link" style="color:black !important">
          Kami akan mengirimkan via WA username & password untuk melihat
          Pencapaian Penjualan lewat link ini

          <a
            href="https://www.inosis.co.id/mgc202020/"
            class="font-link"
            style="color:black !important"
            ><b>MGC 2020</b></a
          >
        </p>
      </div>

      <button
        @click="closeWindow()"
        class="btn btn-lg col-md-12 btn-primary font-button"
      >
        Keluar
      </button>
    </div>
  </div>
</template>
<script>
import moment from "moment";
export default {
  name: "Success",
  filters: {
    moment: function(date) {
      return moment(date).format("DD-MMMM-YYYY");
    },
  },
  methods: {
    closeWindow: function() {
      window.location.href =
        "http://www.inosis.co.id/mgc2020/mgc2020_ms/#/loginmgc";
    },
  },
};
</script>
