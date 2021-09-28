<template>
  <div class="about">
    <h2>Website created by <a href="https://www.linkedin.com/in/aamirdammad/">@AamirDammad</a></h2>

    <p>This website is based on Dota 2 game</p>

    <p>In this website data is fetched directly from <a href="https://api.opendota.com/api/heroStats">OpenDota</a> Public API server</p>

    <p>On this website stats of each hero is displayed in tabular format</p>

    <p>Based on Player's Pro win, Pro pick and Pro ban rates</p>

    <p>You can use search box to filter through heros and find your favorite one</p>
  </div>
</template>
<style lang="scss" scoped>
.about{
  height: 100vh;
  color: #fff;
  font-weight: bold;

  h2{
    margin: 18px;

    a{
      color: inherit;
    }
  }

  p{
    margin: 8px 0;

    a{
      color: inherit;
    }
  }
}
</style>
