<template>
  <div class="boxtitle col-md-12" style="background-color:#FDC807 !important">
    <h5 style="color:black!important;" class="text-center">{{ outlet_id }}</h5>
    <h3 class="leftcontent" style="color:black!important">
      {{ outlet_name }}
    </h3>
  </div>
</template>
<script>
export default {
  name: "Header",
  props: ["outlet_id", "outlet_name"],
};
</script>
