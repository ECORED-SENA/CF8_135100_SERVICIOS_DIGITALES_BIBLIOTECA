<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Registros de los recursos de Información


    .bg--grad_02
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-7.order-2.order-xl-1(data-aos="fade-left")
          .bg--brown02.p-4
            p El registro consiste en anotar secuencial y cronológicamente una serie de datos básicos del documento, una vez que este entra en la biblioteca, para que pueda ser identificado y construir así lo que será el verdadero inventario de la biblioteca, que permite un exhaustivo control de las colecciones.
            .row
              .col-auto.d-none.d-lg-flex
                figure
                  img(src="@/assets/curso/temas/t2/t2_02.svg", alt="alt").img190
              .col
                p El proceso de registro técnico o preparación de los materiales, se componen de actividades como:
                ul.fa-ul
                  li.mb-2
                    i.fa-li.fas.fa-chevron-right.txt--orange
                    | Revisión física y electrónica de los materiales
                  li.mb-2
                    i.fa-li.fas.fa-chevron-right.txt--orange
                    | Sellado
                  li.mb-2
                    i.fa-li.fas.fa-chevron-right.txt--orange
                    | Registro en kárdex          
        .col-xl-5.col-10.order-1.order-xl-2.mb-4.mb-xl-0(data-aos="flip-right")
          figure
            img(src="@/assets/curso/temas/t2/t2_01.png", alt="alt")


      .cstm_H3.mb-4(data-aos="fade-right")
        .row.align-items-end
          .col-auto             
            figure
              img(src="@/assets/curso/temas/recursos/halfCircle_05.svg", alt="alt").img85     
          .col
            h3.mb-2 Revisión física y electrónica de los materiales

      p(data-aos="fade-left") De los procesos técnicos menores, quizá, la revisión física es la etapa más minuciosa ya que se debe analizar exhaustivamente cada obra, principalmente las adquiridas por compra.

      .row.justify-content-center.mb-5
        .col-lg-7(data-aos="fade-left")
          p La revisión física o electrónica del material bibliográfico se lleva a cabo para verificar aspectos como:
          ul.fa-ul
            li.mb-2
              i.fa-li.fas.fa-chevron-right.txt--orange
              | Que la manufactura del documento sea de calidad (empastado, no hojas en blanco, páginas faltantes o repetidas, cuadernillos bien integrados…)
            li.mb-2
              i.fa-li.fas.fa-chevron-right.txt--orange
              | Que la impresión sea clara.
            li.mb-2
              i.fa-li.fas.fa-chevron-right.txt--orange
              | Que la calidad de las imágenes y láminas sea adecuada, principalmente si son a color.
            li.mb-2
              i.fa-li.fas.fa-chevron-right.txt--orange
              | Que la edición corresponda a la adquirida.
            li.mb-2
              i.fa-li.fas.fa-chevron-right.txt--orange
              | Que estén completos los ejemplares que se adquirieron.
              
        .col-lg-5(data-aos="flip-right")
          figure
            img(src="@/assets/curso/temas/t2/t2_03.svg", alt="alt")

      .cstm_H3.mb-4(data-aos="fade-right")
        .row.align-items-end
          .col-auto             
            figure
              img(src="@/assets/curso/temas/recursos/halfCircle_05.svg", alt="alt").img85     
          .col
            h3.mb-2 Sellado

      p(data-aos="fade-left").mb-4 El sellado permite asignar a los materiales, las marcas necesarias para indicar que son propiedad de una biblioteca o institución determinada. Para ello, cada biblioteca deberá contar con sellos apropiados para facilitar su colocación en los cantos de los materiales.

      .row.justify-content-center.align-items-center.mb-4
        .col-lg-7(data-aos="fade-left")
          .bg--darkGray.p-4
            p El texto del sello debe contener, en letra clara, el nombre de la biblioteca y el de la institución, ejemplo:

            .row.justify-content-center.align-items-center.mb-4
              .col-lg-6
                figure
                  img(src="@/assets/curso/temas/t2/t2_04.svg", alt="alt")
              .col-lg-6
                .pill.mb-4
                  h4.text-center.mb-0 UNAM - FFyL 
                .pill.mb-4
                  h4.text-center.mb-0 BIBLIOTECA PÚBLICA 

            p Las partes del material donde se recomienda sellar las obras impresas son:
            ul.fa-ul
              li.mb-2
                i.fa-li.fas.fa-chevron-right.txt--orange
                | La portada.
              li.mb-2
                i.fa-li.fas.fa-chevron-right.txt--orange
                | La tabla de contenido.
              li.mb-2
                i.fa-li.fas.fa-chevron-right.txt--orange
                | En el caso de las láminas de obras de arte, al reverso de las páginas de las páginas de las imágenes.
              li.mb-2
                i.fa-li.fas.fa-chevron-right.txt--orange
                | En páginas clave.

        .col-lg-5.d-none.d-lg-flex(data-aos="flip-right")
          figure
            img(src="@/assets/curso/temas/t2/t2_05.png", alt="alt")

      .bg--darkBlue.br_01.py-3.pe-4.mb-4(data-aos="zoom-in")
        .row.align-items-center  
          .col-auto
            figure
              img(src="@/assets/curso/temas/recursos/warning_02.svg", alt="alt").img120
          .col
            h5.txt--orange ¡Nota!
            p.text-white.mb-0 Para el sellado en las páginas se recomiendan las nones (1), escogiendo primero una página entre la 1 a la 9, y posteriormente cada 100 páginas. Ejemplo: si se selecciona la página 9, también se sellarán la 109, 209, etc. 

    .cstm_H3.mb-4(data-aos="fade-left")
      .row.align-items-end
        .col-auto             
          figure
            img(src="@/assets/curso/temas/recursos/halfCircle_05.svg", alt="alt").img85     
        .col
          h3.mb-2 Registro en kárdex de publicaciones periódicas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p(data-aos="fade-left") El kárdex permite un control eficiente de las revistas que ingresan a la biblioteca, para conocer no solo con qué títulos cuenta la biblioteca, sino cuáles volúmenes y números o fascículos de esos títulos se han recibido.
        .bg--darkOrange.py-3.pe-4.mb-4(data-aos="zoom-in")
          .row.align-items-center  
            .col-auto
              figure
                img(src="@/assets/curso/temas/recursos/halfCircle_04.svg", alt="alt").img75
            .col              
              p.mb-0 Según la periodicidad de la publicación, se seleccionará la tarjeta de kárdex que corresponda, ya que se registran de manera diferente si la publicación es diaria, semanal, mensual, bimestral, anual o irregular. Las tarjetas que se utilizan son de cartulina, de una medida aproximada de 12.5 x 20.5 cm.

        p(data-aos="fade-left").mb-0 Los datos con que se deben llenar las tarjetas son:

      .col-lg-5.d-none.d-lg-flex(data-aos="flip-right")
        figure
          img(src="@/assets/curso/temas/t2/t2_06.png", alt="alt")

      
    .bg_img_03.pb-5
      .row.justify-content-center.mb-5
        .col-lg-10(data-aos="zoom-in")
          SlyderF(columnas="col-xl-4 col-lg-6").mb-5
            .bg_crd_01.text-white.py-5.px-4.br_01
              figure.mb-4
                img(src='@/assets/curso/temas/t2/t2_07.svg' alt='').img85.m-auto              
              h5.text-center Título
              p.mb-0.text-center Título de la publicación.

            .bg_crd_01.text-white.py-5.px-4.br_01
              figure.mb-4
                img(src='@/assets/curso/temas/t2/t2_08.svg' alt='').img85.m-auto              
              h5.text-center Datos de editorial o distribuidores
              p.mb-0.text-center Nombre, dirección, teléfonos. Son de utilidad para más servicios o reclamaciones.

            .bg_crd_01.text-white.py-5.px-4.br_01
              figure.mb-4
                img(src='@/assets/curso/temas/t2/t2_09.svg' alt='').img85.m-auto              
              h5.text-center Canal de adquisición
              p.mb-0.text-center La forma de adquisición (compra, canje o donación, otro).

            .bg_crd_01.text-white.py-5.px-4.br_01
              figure.mb-4
                img(src='@/assets/curso/temas/t2/t2_10.svg' alt='').img85.m-auto              
              h5.text-center Periodicidad
              p.mb-0.text-center Periodicidad de la publicación (diaria, mensual, trimestral, etc.).

            .bg_crd_01.text-white.py-5.px-4.br_01
              figure.mb-4
                img(src='@/assets/curso/temas/t2/t2_11.svg' alt='').img85.m-auto              
              h5.text-center Detalle de material
              p.mb-0.text-center Año, serie o época, volumen, número, si incluye índice, observaciones.

      .row.justify-content-center
        .col-lg-6.mb-4.mb-lg-0(data-aos="flip-left")
          .bg--darkBlue.br_01.py-3.pe-4.mb-4.hg-100
            .row.align-items-center.vp_middle 
              .col-auto
                figure
                  img(src="@/assets/curso/temas/recursos/warning_02.svg", alt="alt").img120
              .col
                h5.txt--orange Colocación de tarjetas
                p.text-white.mb-0 Una vez solicitada la tarjeta de kárdex, esta se ordena alfabéticamente en un mueble de kárdex o en una gaveta especial para ello, que deberá estar al servicio de los usuarios.
        .col-lg-6(data-aos="flip-left")
          .bg--Orange.br_01.py-3.pe-4.mb-4.hg-100
            .row.align-items-center.vp_middle  
              .col-auto
                figure
                  img(src="@/assets/curso/temas/recursos/warning_02.svg", alt="alt").img120
              .col
                h5.txt--brown Rotulación o signado topográfico
                p.mb-0 Proceso final que se da al material, cuando este ha sido catalogado, clasificado y registrado en la base de datos. La etiqueta de signatura topográfica permitirá localizar en estantería las obras que reporta el catálogo de la biblioteca y, posteriormente, para acomodar los materiales de acuerdo a la clasificación temática que se utilice en la biblioteca.

    .bg--grad_brown
      .row.align-items-center(data-aos="fade-left")
        .col-auto.d-none.d-lg-flex
          figure
            img(src="@/assets/curso/temas/recursos/circle_01.svg", alt="alt").img85
        .col
          p #[span.txt--orange.bold Como complemento de la colocación de la signatura topográfica y como parte de la rotulación de los materiales, se deberá anotar el número de adquisición o inventario en el esquinero y en la tarjeta de préstamo, a fin de facilitar al bibliotecario la gestión de préstamo.]

      .row.justify-content-center(data-aos="fade-left")
        .col-lg-10
          p Las claves de las abreviaturas de la periodicidad son:

          .tabla-a.mb-5
            table             
              tbody
                tr.cell_Pale.borderTop.text-center
                  td.borderRigth Q - quincenal
                  td.borderRigth T - trimestral
                  td A - anual
                tr.cell_brown.text-center
                  td.borderRigth M - mensual
                  td.borderRigth QT cuatrimestral
                  td BA - bianual
                tr.cell_Pale.text-center
                  td.borderRigth B - bimensual
                  td.borderRigth ST - semestral
                  td I - irregular

    separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Normas técnicas para la presentación de informes

    p(data-aos="fade-left") La elaboración de informes está a cargo de funcionarios o empleados autorizados, mediante acto administrativo o en el cumplimiento de sus funciones. #[strong.txt--orange Los informes se elaboran a través de formatos diseñados en el sistema, de acuerdo con las normas internas de la organización.]

    p(data-aos="fade-left").mb-5 Para la elaboración de tales informes se debe tener en cuenta: 

    .bg_img_02.pb-5
      .row.justify-content-center
        .col-xl-3.col-md-6.mb-4(data-aos="flip-left")     
          .hoverdark.br_01.p-4.h-100  
            figure.mb-4     
              img(src="@/assets/curso/temas/t2/t2_12.svg").img85.m-auto           
            h4.text-white.text-center Estructurar
            p.text-white.mb-0 Estructurar el documento empresarial y el texto de acuerdo al asunto, la norma técnica, gramática, tipo de texto y la política organizacional.

        .col-xl-3.col-md-6.mb-4(data-aos="flip-left")     
          .hoverdark.br_01.p-4.h-100  
            figure.mb-4     
              img(src="@/assets/curso/temas/t2/t2_13.svg").img85.m-auto           
            h4.text-white.text-center Redactar y digitar
            p.text-white.mb-0 Redactar y digitar documentos empresariales y textos haciendo uso de la Norma técnica, las normas gramaticales, velocidad, precisión.

        .col-xl-3.col-md-6.mb-4     
          .hoverdark.br_01.p-4.h-100(data-aos="flip-left")  
            figure.mb-4     
              img(src="@/assets/curso/temas/t2/t2_14.svg").img85.m-auto           
            h4.text-white.text-center Aplicar tecnología
            p.text-white.mb-0 Utilizar la tecnología para la elaboración de documentos de acuerdo con los recursos de la organización.

        .col-xl-3.col-md-6.mb-4     
          .hoverdark.br_01.p-4.h-100(data-aos="flip-left")
            figure.mb-4     
              img(src="@/assets/curso/temas/t2/t2_15.svg").img85.m-auto           
            h4.text-white.text-center Aplicar procedimientos
            p.text-white.mb-0 Aplica los procedimientos técnicos, normativos y organizacionales en la redacción de documentos y textos.
                
    .bg--grad_brown
      separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Estadísticas de uso del material bibliográfico

    .row.align-items-center.mb-5(data-aos="fade-left")
      .col-auto.d-none.d-lg-flex
        figure
          img(src="@/assets/curso/temas/recursos/circle_01.svg", alt="alt").img85
      .col
        p La estadística de gestión de la biblioteca tiene como objetivo principal #[span.txt--orange.bold medir y evaluar la calidad y la eficiencia en la prestación de los servicios bibliotecarios] para así poder emprender acciones de mejora.
        p.mb-0 En los reportes de entrega se debe tener la siguiente estadística: 

    .row.justify-content-center.mb-5
      .col-lg-6.gx-0.mb-4.mb-lg-0(data-aos="flip-left")
        .bg--darkBlue.hg-100
          figure
            img(src="@/assets/curso/temas/t2/t2_16.jpg", alt="alt")
          .p-4.text-white
            h5 Préstamo bibliográfico
            p.mb-0 Organizado por tipo de usuario, por programa académico y por tipo de materia bibliográfica.
      .col-lg-6.gx-0(data-aos="flip-left")
        .hg-100
          figure
            img(src="@/assets/curso/temas/t2/t2_17.jpg", alt="alt")
          .bg--BoldOrange.p-4
            h5 Consulta de bases de datos
            p.mb-0 Organizada por tipo de usuario, por programa académico y por nombre de la base de datos.

    separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Inventarios del material bibliográfico

    p(data-aos="fade-left") Los inventarios bibliográficos #[span.txt--orange.bold son archivos que registran los documentos disponibles en la colección del centro de recursos]. Los inventarios se deben encontrar clasificados por fondo bibliográfico (inglés, francés, alemán, español) al abrir cada archivo se encuentra la serie de categorías que dan el acceso a la organización temática de cada fondo.

    .row.justify-content-center.align-items-center.mb-5
      .col-xl-7
        p(data-aos="fade-left") #[span.txt--brown.bold Estas categorías de clasificación de inventarios, se crean en una base de materias estudiadas en los programas que establece el centro de información.]

        .bg--darkBlue.br_01.py-3.pe-4.mb-4(data-aos="zoom-in")
          .row.align-items-center  
            .col-auto
              figure
                img(src="@/assets/curso/temas/recursos/warning_02.svg", alt="alt").img120
            .col
              h5.txt--orange ¡Atención!
              p.text-white.mb-0 Además de registrar la información bibliográfica de cada libro, la mayoría de los registros tienen habilitado un enlace que le permite acceder a la tabla de contenido. Esto favorece observar con detalle las características especializadas de cada libro disponible.

        p(data-aos="fade-left").mb-0 En lo relacionado con inventarios de material bibliográfico, tenga presentes algunos aspectos clave como los que se mencionan a continuación:

      .col-lg-5.d-none.d-xl-flex(data-aos="flip-left")
        figure
          img(src="@/assets/curso/temas/t2/t2_18.png", alt="alt")
    

    .row.justify-content-center
      .col-xl-3.col-md-5.col-10.mb-4.mb-xl-0(data-aos="flip-left")
        .crd_hover_txt.br_01
          .crd_hover_txt--img
            .imgTitle
              h5 Inventariado
            figure
              img(src="@/assets/curso/temas/t2/t2_19.png", alt="alt")
          .crd_hover_txt--body
            .vp_middle.text-center
              h5 Inventariado
              p.mb-0 La asignación de número de inventario o adquisición es la última etapa del proceso técnico menor de los materiales, y consiste en anotar en cada volumen físico el número de inventario.

      .col-xl-3.col-md-5.col-10.mb-4.mb-xl-0(data-aos="flip-left")
        .crd_hover_txt.br_01
          .crd_hover_txt--img            
            .imgTitle
              h5 Números de adquisición para<br>varios volúmenes
            figure
              img(src="@/assets/curso/temas/t2/t2_20.png", alt="alt")
          .crd_hover_txt--body
            .vp_middle.text-center
              h5 Números de adquisición para varios volúmenes
              p.mb-0 Si una obra se compone por diversos volúmenes, como es el caso de las enciclopedias, cada volumen tendrá su propio número de adquisición.      

      .col-xl-3.col-md-5.col-10.mb-4.mb-xl-0(data-aos="flip-left")
        .crd_hover_txt.br_01
          .crd_hover_txt--img            
            .imgTitle
              h5 Registro de números<br>de adquisición
            figure
              img(src="@/assets/curso/temas/t2/t2_21.png", alt="alt")
          .crd_hover_txt--body
            .vp_middle.text-center
              h5 Registro de números de adquisición
              p.mb-0 Los números de adquisición se deben registrar en una libreta o en un archivo de computadora, indicando de manera cronológica la numeración (1, 2, 3, etc.).

      .col-xl-3.col-md-5.col-10.mb-4.mb-xl-0(data-aos="flip-left")
        .crd_hover_txt.br_01
          .crd_hover_txt--img            
            .imgTitle
              h5 Orden lógico del registro
            figure
              img(src="@/assets/curso/temas/t2/t2_22.png", alt="alt")
          .crd_hover_txt--body
            .vp_middle.text-center
              h5 Orden lógico del registro
              p.mb-0 El registro debe ser cronológico indicando, además, fecha de adquisición, el autor, título y el tipo de adquisición (compra, canje o donación).
           

      

    


      

</template>

<script>
export default {
  name: 'Tema2',
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
