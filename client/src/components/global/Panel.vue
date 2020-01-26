<template>
  <div>
    <v-container>
      <v-row class="d-flex flex-column mt-10">
        <v-col class="align-self-center light-green" md="6" sm="6">
            <span class="white--text font-weight-bold">{{title}}</span>
        </v-col>
        <v-col class="align-self-center" md="6" sm="6">
            <slot></slot>
        </v-col>
     </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
      title: String
  }
}
</script>