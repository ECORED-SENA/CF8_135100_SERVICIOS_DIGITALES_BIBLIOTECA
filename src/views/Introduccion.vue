<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bg_intro.p-4.br_01.mb-5(data-aos="zoom-in")
      .row.align-items-center  
        .col-auto.ms-4.d-none.d-lg-flex
          figure
            img(src="@/assets/curso/temas/intro/intro.svg", alt="alt").img190
        .col          
          p Se da la bienvenida al componente formativo #[span.txt--orange.bold “Verificación y registro de la información según políticas de la biblioteca”]; tenga usted una experiencia satisfactoria. Comience visualizando el vídeo que se muestra enseguida.
          p #[span.txt--orange.bold ¡Adelante! ]        

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/pZJiYlkOBjg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
