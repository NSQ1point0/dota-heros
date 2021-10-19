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
          <td class="hero-col">PRO Stats</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for='(hero, heroIndex) in searchHeros' :key="heroIndex" class="hero-row">
          <td v-bind:class="{topRank: heroIndex < 10}">{{heroIndex + 1}}</td>
          <td class="hero-col">
            <img v-bind:src="'http://cdn.dota2.com/'+hero.img" alt="Hero Image" class="hero-img">
          </td>
          <td class="hero-col hero-name">{{hero.localized_name}}</td>
          <td class="hero-col chart-col">
            Pro win<div :data-value="hero.pro_win" class="chart-bar" style="background-color:#4E9F3D;"></div>
            <br>
            Pro pick<div :data-value="hero.pro_pick" class="chart-bar" style="background-color:#FFA400;"></div>
            <br>
            Pro ban<div :data-value="hero.pro_ban" class="chart-bar" style="background-color:#DA0037;"></div>
            <!-- {{{drawBar([hero.pro_pick, hero.pro_win, hero.pro_ban])}}} -->
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import _ from 'lodash';
import * as d3 from 'd3'

export default {
  name: 'HerosTable',
  data(){
    return {
      searchInput: '',
      chartWidth: 400,
      chartHeight: 200,
    }
  },
  methods: {
    barWidth(value) {
      return this.chartWidth / this.getMaxVal * value
    }
  },
  updated(){
    d3.selectAll(".chart-bar")
        .datum(function() { return this.getAttribute("data-value")})
        .style("width", d => `${this.barWidth(d)}px`)
        .text(d => d);
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
        return heroName.match(searchQuery) && ("pro_win" in hero) && ("pro_ban" in hero) && ("pro_pick" in hero) && ("img" in hero)
      });
    },
    getMaxVal() {
      const temp = []

      temp.push(_.max(this.getHeros.map(i => i.pro_win)))
      temp.push(_.max(this.getHeros.map(i => i.pro_pick)))
      temp.push(_.max(this.getHeros.map(i => i.pro_ban)))

      console.log(_.max(temp))

      return _.max(temp)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/scss/custom.scss";
</style>
