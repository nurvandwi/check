<template>
  <div class="container">
    <div class="row justify-content-center">
      <div
        class="boxtitle col-md-12"
        style="background-color:#FDC807 !important"
      >
        <div class="d-flex flex-row m-auto justify-content-center">
          <img src="../assets/SIGNATURE2.png" class="mr-3" alt />
          <h2 class="mt-auto mb-auto" style="color:black !important;">
            Formulir Registrasi
          </h2>
        </div>
      </div>
      <Header
        :outlet_id="outlets.outlet_id"
        :outlet_name="outlets.outlet_name"
      />

      <!-- Tabel -->
      <div class="col-md-12" style="  margin-bottom: 20px;">
        <div class="row boxtitlepoint3" style="background-color:#FDC807;">
          <div class="col-md-12 col-12 margincustom">
            <h5 style="color:black !important" class="mb-0">
              Target Penjualan
            </h5>
          </div>
          <div
            class="col-md-11 col-11 mx-auto"
            style=" height: 0px; border: 0.5px #e3e3e3 dashed;border-style: solid;"
          ></div>
          <div
            class="col-12 d-flex mx-auto px-0 py-0 mb-1 mt-2"
            style="justify-content: space-between;"
          >
            <div
              class="col-md-6 col-6"
              style="border-right:  1px white solid; "
            >
              <h5 class="mb-0 mt-0 caption3" style="color:black !important">
                Bulan
              </h5>
            </div>
            <div class="col-md-6 col-6">
              <h5 class="mb-0 mt-0 caption3" style="color:black !important">
                Target
              </h5>
            </div>
          </div>
        </div>
        <div
          class="row"
          style="border:1px #dedede solid;border-radius: 0 0 10px 10px ;"
        >
          <table class="table mt-0 mb-0">
            <tbody>
              <tr v-for="(row, i) in outlets.data" :key="i">
                <td class="text-left">{{ row.bulan }}</td>
                <td class="text-right">{{ row.target_monthly }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th class="text-left">
                  Total Quarter {{ $route.params.version }}
                </th>
                <th class="text-right">
                  {{ outlets.target_monthly | currency }}
                </th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <!-- End Tabel -->
      <Terms />
      <div class="col-md-12 col-12 px-0">
        <router-link :to="{ path: '/registrasi/' + outlets.outlet_id }">
          <button class="btn btn-lg col-md-12 btn-primary font-button">
            Selanjutnya
          </button>
        </router-link>
      </div>
      <!-- <Success /> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
// import Success from "@/components/Success.vue";
import Header from "@/components/Header.vue";
import Terms from "../components/Terms";
export default {
  name: "Home",
  components: {
    Header,
    Terms
  },
  data() {
    return {
      outlets: [],
      registrasi: {
        registrasi: "Submit"
      }
    };
  },
  methods: {},
  mounted() {
    axios
      .get(
        "https://www.inosis.co.id/mvsignature2020_api/api_reg.php/dashboard-outlet",
        {
          headers: { version: this.$route.params.version },
          params: {
            outlet_id: this.$route.params.outlet_id,
            txtKodeOutlet: this.$route.params.txtKodeOutlet
          }
        }
      )
      .then(res => (this.outlets = res.data))
      .catch(err => console.log(err));
  }
};
</script>
