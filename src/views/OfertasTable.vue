<template>
  <div class="new">
    <h1>Listado Ofertas de la Empresa {{ empresa }}</h1>
<table class="table table-stripped">
      <thead>
        <th>id</th>
        <th>nombre</th>
        <th>domicilio</th>
        <th>localidad</th>
        <th>contacto</th>
        <th>email</th>
        <th>ACCIONES</th>
      </thead>
      <tbody>
        <tr v-for="oferta in ofertas" 
        :key=oferta.id>
        <td>{{oferta.id}}</td>
        <td>{{nombre.nombre}}</td>
        <td>{{oferta.nombre}}</td>
        <td>{{oferta.contrato}}</td>
        <td>{{oferta.contacto}}</td>
        <td>{{oferta.email}}</td>
        <td>
            <button class="btn btn-secondary up" @click.prevent="verOferta(oferta.id)">
                <i class="bi bi-eye"></i>
            </button>
             <button class="btn btn-secondary up" @click.prevent="editarOferta(oferta.id)">
                <i class="bi bi-pencil"></i>
            </button>
             <button class="btn btn-secondary up" @click.prevent="eliminarOferta(oferta.id)">
                <i class="bi bi-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <button class="btn btn-secondary up" @click.prevent="nuevaOferta()">
                <i class="bi bi-new">Nueva Oferta</i>
            </button>
  </div>
</template>


<script>
import api from '../../api'
export default {
  props:['empresa'],
  data(){
        return{
            ofertas:[],
            nombre:[]
        }
  },
  mounted(){
      api.ofertas.getOfertaEmpresa(this.empresa)
      .then((response) => this.ofertas = response.data)
      .catch((error) => alert(error)),
      api.empresas.getOne(this.empresa)
      .then((response) => this.nombre = response.data)
      .catch((error) => alert(error))
      
  },
  methods: {
    verOferta(id){
      this.$router.push('/ofertas/'+id)
    },
    editarOferta(id){
      this.$router.push('/newEdit/'+id)
    },
    nuevaOferta(){
      this.$router.push('/new/')
    },
    eliminarOferta(id){
      api.ofertas.delete(id)
      .then((response) => id = response.data)
      .catch((error) => alert(error))
    }
  }
  
}
</script>
