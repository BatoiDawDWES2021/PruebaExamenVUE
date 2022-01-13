<template>
  <div class="empresas">
    <h1>Listado de Empresas</h1>
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
        <tr v-for="empresa in empresas" 
        :key=empresa.id>
        <td>{{empresa.id}}</td>
        <td>{{empresa.nombre}}</td>
        <td>{{empresa.domicilio}}</td>
        <td>{{empresa.localidad}}</td>
        <td>{{empresa.contacto}}</td>
        <td>{{empresa.email}}</td>
        <td>
            <button class="btn btn-secondary up" @click.prevent="verEmpresa(empresa.id)">
                <i class="bi bi-eye"></i>
            </button>
            <button class="btn btn-secondary up" @click.prevent="verOferta(empresa.id)">
                <i class="bi bi-archive"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    empresas(){
      return this.$store.state.empresas;
    }
  },
  methods: {
    verEmpresa(id){
      this.$router.push('/empresa/'+id)
    },
    verOferta(id){
      this.$router.push('/ofertas/'+id)
    }
  }
}
</script>