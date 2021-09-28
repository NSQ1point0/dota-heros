<template>
  <div class="dashboard">
    <HerosTable />
  </div>
</template>

<script>
// @ is an alias to /src
import HerosTable from '@/components/HerosTable.vue'

export default {
  name: 'Dashboard',
  components: {
    HerosTable
  }
}
</script>
