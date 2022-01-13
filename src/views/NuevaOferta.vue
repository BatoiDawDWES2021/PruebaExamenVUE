<template>
  <div class="new">
    <h1>{{this.estado()}}</h1>

     <form @submit.prevent="insertProduct">
     <br>
    <div class="form-group">
      <label for="Empresa">Empresa:</label>
        <select v-model="ofertas.empresa" name="Empresa" id="Empresa">
          <option v-for="empresa in nombre" :value="empresa.id" 
          :key=empresa>{{empresa.nombre}}</option>
        </select>
    </div>
    <br>
    <div class="form-group">
      <label for="Nombre">Nombre:</label>
      <input type="text" class="form-control" id="Nombre" placeholder="Enter Nombre" required name="Nombre" v-model="ofertas.nombre">
    </div>
    <br>
    <div class="form-group">
      <label for="Contrato">Contrato:</label>
      <input type="text" class="form-control" id="Contrato" placeholder="Enter Contrato" name="Contrato" v-model="ofertas.contrato">
    </div>
    <br>
    <div class="form-group">
      <label for="Contacto">Contacto:</label>
      <input type="text" class="form-control" id="Contacto" placeholder="Enter Contacto" name="Contacto" v-model="ofertas.contacto">
    </div>
    <br>
    <div class="form-group">
      <label for="Email">Email:</label>
      <input type="email" class="form-control" id="Email" placeholder="Enter Email" name="Email" v-model="ofertas.email">
    </div>
    <br>
    <button type="submit" class="btn btn-primary">CREAR</button>
  </form>
<br>
  </div>
</template>


<script>
import api from '../../api'
export default {
  props:['id'],
  data(){
        return{
          ofertas:{

          },
            nombre:[],
            edit: false
        }
  },
  mounted(){
      api.empresas.getAll()
      .then((response) => this.nombre = response.data)
      .catch((error) => alert(error))
      if (this.id) {
          api.ofertas.getOne(this.id)   
          .then((response) => this.ofertas = response.data)
          .catch((error) => alert(error))
      } 
  },
  methods:{
    insertProduct(){
        if (this.edit) {
            api.ofertas.modify(this.ofertas)   
            .then((response) => this.nombre = response.data)
            .catch((error) => alert(error))
        } else {
            api.ofertas.create(this.ofertas)
            .then((response) => this.nombre = response.data)
            .catch((error) => alert(error))
        } 
        this.$router.push('/ofertas/'+this.ofertas.empresa)
    },
    estado(){
        if(this.edit){
            return 'Editar Oferta'
        }else{
            return 'Crear Nueva Ofertas'
        }
    },
}
}
</script>
