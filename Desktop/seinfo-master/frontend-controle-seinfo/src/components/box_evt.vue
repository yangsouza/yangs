<template>
  <div id="work" class="row justify-content-center">
    <div v-for="res in res" :key="res.idEvento">
      <div class="box-1">
        <img class="box-2" src="../assets/banner.png" />
        <div class="card-body">
          <h5 class="card-title">{{res.nome}}</h5>
          <p class="card-text">{{res.descricao}}</p>
          <a-divider />
          <a-button :href="'/evento/'+ res.idEvento" class="bt">
            <a-icon type="plus" />SAIBA MAIS
          </a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../config/axiosConfig';
export default {
  mounted() {
    this.pegar_tabela();
  },
  methods: {
    async pegar_tabela() {
      try {
        const response = await axios.get("/public/getAllAvailableEvents");
        this.res = response.data;
      } catch (error) {
        console.log(error); 
      }
    }
  },
  data() {
    return {
      res: [],
      nome: "",
      descricao: ""
    };
  }
};
</script>

<style scoped>
#work {
  display: flex;
  padding: 20px 0px;
  gap: 30px;
  flex-wrap: wrap;
  justify-content: center;
  background: #092756;
  background: -moz-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -moz-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4)
          100%),
    -moz-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -webkit-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -webkit-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(
            42,
            60,
            87,
            0.4
          )
          100%),
    -webkit-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -o-radial-gradient(
      0% 100%,
      ellipse cover,
      rgb(9, 21, 26) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -o-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4)
          100%),
    -o-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -ms-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(6, 26, 34, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -ms-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4)
          100%),
    -ms-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -webkit-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(11, 28, 36, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    linear-gradient(
      to bottom,
      rgba(57, 173, 219, 0.25) 0%,
      rgba(42, 60, 87, 0.4) 100%
    ),
    linear-gradient(135deg, #670d10 0%, #092756 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3E1D6D', endColorstr='#092756',GradientType=1 );
}

.ant-divider-horizontal {
  margin: 7px 0;
}

.card-title {
  display: inline-block;
  width: 410px;
  height: 30px;
  /* overflow: hidden; */
}

.card-text {
  max-height: 150px;
  min-height: 150px;
  max-width: 410px;
  min-width: 410px;
  overflow: hidden;
}

.card-body {
  border-radius: 0px 0px 10px 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  height: 280px;
}

.box-1 {
  height: 100%;
  width: 450px;
  background: transparent;
  border: transparent;
}

.bt {
  border-color: rgb(39, 10, 204);
  color: rgb(26, 12, 110);
}

.box-2 {
  border-radius: 10px 10px 0px 0px;
  object-fit: cover;
  width: 100%;
  min-height: 260px;
  max-height: 260px;
}
</style>
