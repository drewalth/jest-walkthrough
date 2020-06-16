<template>
  <div class="home">
    <div class="card">
      <h1>Jest Walkthrough</h1>
      <hr />
      <a
        href="https://github.com/drewalth/jest-walkthrough/blob/master/README.md"
        >Documentation</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>
<style lang="css">

h1 {
  line-height: 1.25;
  margin: 0;
  padding: 0;
}

.home {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

}
.card {
  max-width: 400px;
  background-color: #F8F9F9;
  -webkit-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.5);
-moz-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.5);
box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.5);
padding: 2rem;
}

.card a {
  line-height: 50px;
  display: block;
  background-color: #5DADE2;
  color: #fff;
  font-size: 1rem;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-decoration: none;
}
</style>
