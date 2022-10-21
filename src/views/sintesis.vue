<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5    

    .bg--darkBlue.br_01.py-3.pe-4.mb-4
      .row.align-items-center  
        .col-auto
          figure
            img(src="@/assets/curso/temas/recursos/warning_03.svg", alt="alt").img120
        .col          
          p.text-white.mb-0 Se ha finalizado el estudio de los contenidos de este componente formativo. En este punto, haga un análisis de la estructura que se muestra a continuación. Registre esta síntesis en su libreta personal de apuntes. Además, haga un repaso de los temas que considere necesario. #[span.txt--orange ¡Adelante!]. 

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
