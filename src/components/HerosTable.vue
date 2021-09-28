<template>
  <div class="search-container">
    <input type="text" v-model="searchInput" @change="searchHeros" placeholder="Search Hero" class="search-input">
  </div>
  <div class="table-container">
    <table>
      <thead>
        <tr class="hero-row">
          <td class="hero-col">Rank</td>
          <td class="hero-col">Hero Image</td>
          <td class="hero-col">Hero Name</td>
          <td class="hero-col">PRO Win Rate</td>
          <td class="hero-col">Pro Pick Count</td>
          <td class="hero-col">Pro Ban Count</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(hero, heroIndex) in searchHeros' :key="heroIndex" class="hero-row">
          <td v-bind:class="{topRank: heroIndex < 10}">{{heroIndex + 1}}</td>
          <td class="hero-col">
            <img v-bind:src="'http://cdn.dota2.com/'+hero.img" alt="Hero Image" class="hero-img">
          </td>
          <td class="hero-col hero-name">{{hero.localized_name}}</td>
          <td class="hero-col">{{hero.pro_win}}</td>
          <td class="hero-col">{{hero.pro_pick}}</td>
          <td class="hero-col">{{hero.pro_ban}}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'HerosTable',
  data(){
    return {
      searchInput: '',
    }
  },
  computed: {
    getHeros() {
      return this.$store.getters.getHeros
    },
    searchHeros: function (){
      const herosData = _.orderBy(this.$store.getters.getHeros, 'pro_win', 'desc');
      
      return herosData.filter((hero) => {
        let heroName = hero.localized_name.toLowerCase()
        let searchQuery = this.searchInput.toLowerCase()
        return heroName.match(searchQuery)
      });
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/scss/custom.scss";
</style>
