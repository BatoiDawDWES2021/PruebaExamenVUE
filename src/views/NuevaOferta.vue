<template>
  <div class="new">
    <h1>{{this.estado()}}</h1>
    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="insertProduct, handleSubmit(sendForm)">
      <br>
      <div class="form-group">
        <ValidationProvider name="Nombre" rules="required" v-slot="{ errors }">
        <label for="Empresa">Empresa:</label>
          <select v-model="ofertas.empresa" name="Empresa" id="Empresa">
            <option v-for="empresa in nombre" :value="empresa.id" 
            :key=empresa.id>{{empresa.nombre}}</option>
          </select>
          <span class="errorRojo">{{errors[0]}}</span>
          </ValidationProvider>
      </div>
      <br>
      <div class="form-group">
        <ValidationProvider name="Nombre" rules="required|alpha|min:10|max:50" v-slot="{ errors }">
          <label for="Nombre">Nombre:</label>
          <input v-model="ofertas.nombre" type="text" class="form-control" id="Nombre" placeholder="Enter Nombre" name="Nombre">
          <span class="errorRojo">{{errors[0]}}</span>
        </ValidationProvider>
      </div>
      <br>
      <div class="form-group">
        <ValidationProvider name="Contrato" rules="required|alpha" v-slot="{ errors }">
          <label for="Contrato">Contrato:</label>
          <input type="text" class="form-control" id="Contrato" placeholder="Enter Contrato" name="Contrato" v-model="ofertas.contrato">
          <span class="errorRojo">{{errors[0]}}</span>
        </ValidationProvider>
      </div>
      <br>
      <div class="form-group">
        <ValidationProvider name="Contacto" rules="required|alpha" v-slot="{ errors }">
          <label for="Contrato">Contacto:</label>
          <input type="text" class="form-control" id="Contacto" placeholder="Enter Contacto" name="Contacto" v-model="ofertas.contacto">
          <span class="errorRojo">{{errors[0]}}</span>
        </ValidationProvider>
      </div>
      <br>
      <div class="form-group">
        <ValidationProvider name="Email" rules="required|email" v-slot="{ errors }">
          <label for="Email">Email:</label>
          <input v-model="ofertas.email" type="text" id="Email" class="form-control" placeholder="Enter Email">
          <span class="errorRojo">{{errors[0]}}</span>
        </ValidationProvider>
      </div>
      <br>
      <button type="submit" class="btn btn-primary">CREAR</button>
    </form>
</ValidationObserver>
<br>
  </div>
</template>


<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';

import { configure } from 'vee-validate';

configure({
  classes: {
    invalid: 'is-invalid'
  }
})

import { extend } from 'vee-validate';
import { required, email, min, max, alpha } from 'vee-validate/dist/rules';

import api from '../../api'

extend('required', {
  ...required,
  message: 'Este campo es obligatorio'
}),
extend('email', {
  ...email,
  message: 'Este campo es email ...@...'
}),
extend('alpha', {
  ...alpha,
  message: 'Este campo es alfanumérico'
}),
extend('min', {
  ...min,
  message: 'El dato tiene que ser mayor a 10 dígitos'
}),
extend('max', {
  ...max,
  message: 'El dato tiene que ser menor de 50 dígitos'
});

export default {
  props:['id'],
  data(){
        return{
          ofertas:{

          },
            nombre:[],
            edit: false,
            errors:[

            ]
        }
  },
  mounted(){
      api.empresas.getAll()
      .then((response) => this.nombre = response.data)
      .catch((error) => alert(error))
      if (this.id) {
          this.edit = true;
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
            return 'Crear Nueva Oferta'
        }
    },
},
components: {
      ValidationProvider,
      ValidationObserver
  }
}
</script>

<style>
.errorRojo{
  color: red;
}

</style>
