<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Organización del recurso de información bibliográfica

    .bg--grad_01
      p(data-aos="fade-left").pt-4 Dentro de las actividades que se realizan en la biblioteca, para la satisfacción de necesidades informativas de los usuarios, se encuentran aquellas que #[span.txt--orange.bold están relacionadas con el procesamiento técnico del material bibliográfico que se encuentra en sus colecciones].

      .row.justify-content-center.mb-5
        .col-xl-7
          .row.mb-4(data-aos="fade-left")
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/temas/recursos/warning_05.svg", alt="alt").img85
            .col
              p.mb-0 Las actividades en una biblioteca tienen un conjunto de términos básicos que ayudan a los técnicos en bibliotecas a entender su labor y a facilitar el acceso a la información por parte de los usuarios, de sus colecciones.
          .bg--brown01.p-4.br_01(data-aos="zoom-in")
            .row
              .col-auto.d-none.d-md-flex
                figure
                  img(src="@/assets/curso/temas/t1/t1_01.svg", alt="alt").img190
              .col
                p #[span.txt--orange.bold Tales definiciones básicas se precisan:]
                ul.fa-ul
                  li.mb-2
                    i.fa-li.fas.fa-chevron-right.txt--orange
                    | #[span.txt--white En relación con las actividades técnicas para la organización de recursos]
                  li.mb-2
                    i.fa-li.fas.fa-chevron-right.txt--orange
                    | #[span.txt--white En relación con la aplicación de técnicas de identificación]
                  li.mb-2
                    i.fa-li.fas.fa-chevron-right.txt--orange
                    | #[span.txt--white En relación con el contenido]
                    
          
        .col-xl-5.d-none.d-xl-flex(data-aos="flip-right")
          figure
            img(src="@/assets/curso/temas/t1/t1_02.png", alt="alt")

      p(data-aos="fade-left").mb-5 En relación con las actividades técnicas para la organización de los recursos bibliográficos, aprópiese de las siguientes definiciones:

      .row.justify-content-center.mb-5
        .col-lg-6.gx-0.mb-4.mb-lg-0(data-aos="zoom-in")
          .bg--BoldOrange.hg-100
            figure
              img(src="@/assets/curso/temas/t1/t1_03.jpg", alt="alt")
            .p-4
              h5 Procesamiento
              p.mb-0 Son actividades encaminadas a analizar la información por medio de la clasificación, catalogación, asignación de temas o epígrafes para que sea accedida por los usuarios de las colecciones.
        .col-lg-6.gx-0(data-aos="zoom-in")
          .bg--darkBlue.hg-100
            figure
              img(src="@/assets/curso/temas/t1/t1_04.jpg", alt="alt")
            .p-4.text-white
              h5 Procesamiento físico
              p.mb-0 Actividades de tipo auxiliar que permiten la identificación externa de todos y cada uno de los materiales bibliográficos que conforman las colecciones de una biblioteca. Entre ellas: elaboración y pegado de rótulos, elaboración y pegado de bolsillos y fichas de préstamo, corte y forrado del material bibliográfico.

      p(data-aos="fade-left").mb-5 Las técnicas de identificación #[span.txt--orange.bold permiten la individualización del documento, su posterior recuperación y el control del mismo cuando esté en circulación]. El proceso técnico puede ser realizado de forma manual o automatizada con aplicaciones que brindan las tecnologías de la información.

      h4(data-aos="fade-left").mb-5.txt--brown Tales técnicas de identificación son:

      .row.justify-content-center.mb-5
        .col-lg-7
          TabsA.color-acento-contenido(data-aos="zoom-in")
            .bg--darkGray.p-5.br_01(titulo="Registro")
              h4 Registro
              p Número que le asigna a los documentos para distinguirlos, de cualquier otro dentro de la colección de la Biblioteca.   
            .bg--darkGray.p-5.br_01(titulo="Sellado")
              h4 Sellado
              p Es la identificación de los documentos como propiedad de la biblioteca: se estampa en la portada, en algunas páginas intermedias impresas y en la última página.   
            .bg--darkGray.p-5.br_01(titulo="Sellado")
              h4 Catalogación
              p Es la técnica mediante la cual se presentan de forma sintética los detalles técnicos, gráficos, tipográficos, y bibliográficos de un documento, para ubicarlo dentro de la colección.
        .col-lg-5(data-aos="flip-right")
          figure
            img(src="@/assets/curso/temas/t1/t1_05.png", alt="alt")

      p(data-aos="fade-left") La catalogación, en relación con el contenido, es un proceso que constituye la descripción física de los dispositivos que identifican al material bibliográfico de la biblioteca. La disposición y forma de usar esos elementos son reguladas por normativas internacionales conocidas como las Reglas Angloamericanas de Catalogación –RAAC.

      p(data-aos="fade-left").mb-5 #[span.txt--brown.bold Según los contenidos, las acciones que se desarrollan en la biblioteca, son:]

      TabsB.color-primario.mb-5(data-aos="zoom-in")
        .py-4.py-md-5(titulo="1. Clasificación" :icono="require('@/assets/curso/temas/t1/t1_06.svg')")
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h5 Clasificación
              p.mb-0 Es la representación del tema principal del documento mediante un código, numérico o alfanumérico, que corresponde a su materia dentro de un sistema de clasificación bibliográfica.          
            .col-lg-6.col-10
              figure
                img(src='@/assets/curso/temas/t1/t1_11.png' alt='')

        .py-4.py-md-5(titulo="Indexación" :icono="require('@/assets/curso/temas/t1/t1_07.svg')")
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h5 Indexación
              p.mb-0 Es el proceso por el que se describe el contenido de un documento mediante palabras del lenguaje natural (descriptores). Este campo es fundamental para recuperar los documentos solicitados por el usuario.        
            .col-lg-6.col-10
              figure
                img(src='@/assets/curso/temas/t1/t1_12.png' alt='')

        .py-4.py-md-5(titulo="Signatura" :icono="require('@/assets/curso/temas/t1/t1_08.svg')")
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h5 Signatura
              p.mb-0 Signar, en el ámbito bibliotecario, es aplicar un signo que identifique la localización del documento dentro de la biblioteca.        
            .col-lg-6.col-10
              figure
                img(src='@/assets/curso/temas/t1/t1_13.png' alt='')

        .py-4.py-md-5(titulo="Tejuelado" :icono="require('@/assets/curso/temas/t1/t1_07.svg')")
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h5 Tejuelado
              p.mb-0 Colocación de una etiqueta, en el lomo del ejemplar, con la información topográfica.         
            .col-lg-6.col-10
              figure
                img(src='@/assets/curso/temas/t1/t1_14.png' alt='')

        .py-4.py-md-5(titulo="Codificación " :icono="require('@/assets/curso/temas/t1/t1_08.svg')")
          .row.justify-content-center
            .col-lg-6.mb-4.mb-lg-0
              h5 Codificación 
              p.mb-0 Es la etiqueta colocada preferentemente en la cubierta, que contiene la información necesaria para identificar a un ejemplar dentro de la colección. Los elementos de esta etiqueta son: códigos de barras, asignatura y número del ejemplar.        
            .col-lg-6.col-10
              figure
                img(src='@/assets/curso/temas/t1/t1_15.png' alt='')

      .bg--darkBlue.br_01.py-3.pe-4.mb-4(data-aos="zoom-in")
        .row.align-items-center  
          .col-auto
            figure
              img(src="@/assets/curso/temas/recursos/warning_02.svg", alt="alt").img120
          .col
            h5.txt--orange ¡Importante!
            p.text-white.mb-0 Las colecciones de los documentos en las estanterías se organizan de izquierda a derecha y de abajo hacia arriba, en orden alfabético del autor, procurando dejar espacios en las baldas para intercalar fututos documentos. La colocación del material no librario se realiza por formato, debidamente señalizado.

    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Acciones correctivas del recurso bibliográfico

    p(data-aos="fade-left").mb-5 Las acciones correctivas de los recursos bibliográficos son todas aquellas decisiones, medidas, actividades y soluciones, orientadas a la eliminación de causas potenciales y reales de un problema generado por error humano o tecnológico, dentro de los centros de información.

    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-left")
        .bg--PaleYellow.py-3.pe-4.mb-4
          .row.align-items-center  
            .col-auto
              figure
                img(src="@/assets/curso/temas/recursos/halfCircle_02.svg", alt="alt").img75
            .col              
              p.mb-0 La acción correctiva no debe confundirse con la acción preventiva, que es aquella que se aplica antes de que tengan lugar los fallos. Tal como su nombre lo indica, la idea es corregir algo que ha fallado dentro del proceso de la calidad y que necesita una intervención urgente, además de soluciones efectivas.
        p.mb-0 #[span.txt--brown.bold En cualquier caso, a la hora de plantearse la ejecución de acciones correctivas en un proceso de calidad, se recomienda tener claros algunos aspectos, como:]

      .col-lg-5.d-none.d-lg-flex(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/t1/t1_16.png' alt='')

    
    .row.justify-content-center
      .col-lg-4.col-8.order-2.order-lg-1(data-aos="zoom-in")
        figure
          img(src='@/assets/curso/temas/t1/t1_17.svg' alt='')
      .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Apertura")
            .col-12
              p Tener en cuenta las características de la situación que demanda una solución. Por ejemplo, la naturaleza de la incidencia y sus eventuales efectos, los informes previos, los indicadores de medición y el trabajo desplegado por la dirección.

          .row(numero="2" titulo="Análisis")
            .col-12
              p Se identifica la causa de la situación. La idea es describirla con la mayor precisión posible para diseñar una solución eficaz que esté a su altura.

          .row(numero="3" titulo="Planificación")
            .col-12
              p Se establecen las acciones que permitirán eliminar el fallo que ha sido detectado. Esto suele hacerse a través de un cronograma con plazos, responsables y tiempos asignados.

          .row(numero="4" titulo="Verificación")
            .col-12
              p Registrar los resultados. El equipo evaluador entra en la etapa de evaluación, que consiste básicamente en verificar si los fallos han sido corregidos y si, sobre todo, las causas del mismo se han eliminado. De no ser así, habrá que implementar nuevas soluciones.

    separador

    .bg--grad_02

      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Normas técnicas para la organización del recurso bibliográfico

      p(data-aos="fade-left").mb-4 Son una serie de directrices emitidas por un organismo de reconocida autoridad en una materia específica, dentro del campo bibliotecario, para regular o imponer especificaciones especializadas en el desarrollo y aplicación de procesos de organización en los centros de información, encargados de organizar los recursos bibliográficos.

      .row.justify-content-center.mb-5
        .col-lg-7
          .bg--gray.py-3.pe-4.mb-4(data-aos="fade-left")
            .row.align-items-center  
              .col-auto
                figure
                  img(src="@/assets/curso/temas/recursos/halfCircle_02.svg", alt="alt").img75
              .col              
                p.mb-0 Por lo general, las normas pueden tener un ámbito de acción nacional o internacional, dependiendo del alcance del organismo que las promulga o del acuerdo en la materia que haya tenido ligar entre países. En este sentido son normas oficiales, es decir, emitidas por la autoridad.
          p(data-aos="fade-left").mb-0 Estas son algunas de las normas internacionales y nacionales más reconocidas y aplicadas en los procesos de las bibliotecas:
        .col-lg-5.d-none.d-lg-flex(data-aos="flip-right")
          figure
            img(src='@/assets/curso/temas/t1/t1_18.png' alt='')

      .tabla-a.mb-5(data-aos="zoom-in")
        table
          thead
            tr.celldarkGray
              th(style="width:35%;") Norma
              th(style="width:65%;") Generalidades
          tbody
            tr.cell_gray
              td(colspan='2').text-center.bold Internacionales
            tr.cell_Pale
              td ISBN (International Standard Book Number)
              td Abreviatura del ingl&eacute;s para N&uacute;mero Est&aacute;ndar Internacional del Libro, es un identificador &uacute;nico para libros editados en cualquier parte del mundo y previstos para uso comercial.
            tr.cell_brown
              td ISSN (International Standard Serial Number)
              td Se trata de un N&uacute;mero Estandarizado de Identificaci&oacute;n Internacional de publicaciones peri&oacute;dicas, como anuarios, revistas y diarios. Esta norma permite estandarizar las clasificaciones y evitar errores de transcripci&oacute;n de t&iacute;tulos o de traducci&oacute;n, lo cual es de suma ayuda para los cat&aacute;logos bibliogr&aacute;ficos y hemerogr&aacute;ficos.
            tr.cell_Pale
              td MPEG2 (Moving Picture Experts Group).              
              td Se denomina as&iacute; a un conjunto de normas y est&aacute;ndares para la codificaci&oacute;n de audio y v&iacute;deo promulgada por el Grupo de Expertos en Im&aacute;genes en Movimiento (MPEG), publicados en el est&aacute;ndar ISO 13818. Los planteamientos t&eacute;cnicos de esta normativa se emplean para televisi&oacute;n digital terrestre, por sat&eacute;lite o cable, as&iacute; como en discos SVCD y DVD.
            tr.cell_gray
              td(colspan='2').text-center.bold Normas Nacionales
            tr.cell_brown
              td Ley 1379 de 2010
              td Selecci&oacute;n de art&iacute;culos relacionados con el patrimonio bibliogr&aacute;fico y documental.

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8(data-aos="zoom-in")
          .bg--gray.p-4
            p En concordancia con la normativa técnica que rige la organización del recurso bibliográfico, están también las políticas de tal proceso. #[span.txt--orange.bold Estas políticas se dividen en:]
            .row.justify-content-center.align-items-center.mb-4
              .col-auto.d-none.d-md-flex
                figure
                  img(src='@/assets/curso/temas/t1/t1_20.svg' alt='')
              .col
                ul.fa-ul
                  li.mb-2
                    i.fa-li.fas.fa-chevron-right.txt--orange
                    | Políticas para la gestión del patrimonio bibliográfico y documental
                  li.mb-2
                    i.fa-li.fas.fa-chevron-right.txt--orange
                    | Políticas para la gestión, protección y salvaguarda del patrimonio cultural
                  li.mb-0
                    i.fa-li.fas.fa-chevron-right.txt--orange
                    | Políticas para el depósito de obras digitales

            .bg--gray2.py-3.pe-4.br_01
              .row.align-items-center  
                .col-auto
                  figure
                    img(src="@/assets/curso/temas/recursos/halfCircle_02.svg", alt="alt").img75
                .col              
                  p.mb-0 En consonancia con lo anterior y para asegurar la aplicación de las normas y políticas respectivas al proceso de organización del recurso bibliográfico, son los técnicos y auxiliares de bibliotecas quienes han de tomar protagonismo y responsabilidad, dentro de las bibliotecas.

        .col-lg-4.d-none.d-lg-flex(data-aos="flip-right")
          figure
            img(src='@/assets/curso/temas/t1/t1_19.png' alt='')

      .bg--darkBlue.br_01.py-3.pe-4.mb-4(data-aos="zoom-in")
        .row.align-items-center  
          .col-auto
            figure
              img(src="@/assets/curso/temas/recursos/warning_02.svg", alt="alt").img120
          .col
            h5.txt--orange ¡Atención!
            p.text-white.mb-0 El permanente y sistemático trabajo de formar acervos bibliográficos en las instituciones bibliotecarias se basa en el conocimiento que el personal bibliotecario logra alcanzar en cuanto a material, dominio de la bibliografía, organización, atención y preservación que se requiere.

      .cstm_H3.mb-4(data-aos="fade-left")
        .row.align-items-end
          .col-auto             
            figure
              img(src="@/assets/curso/temas/recursos/halfCircle_05.svg", alt="alt").img85     
          .col
            h3.mb-2 Organización bibliográfica

      .row.justify-content-center.mb-5
        .col-lg-8(data-aos="fade-left")
          .bg--darkGray.p-4.mb-4
            p.mb-0 Los materiales bibliográficos, en cualquier tipo de soporte, adquirido por compra, canje o donación, deben ser sometidos a tratamientos determinados: procesos técnicos que permiten identificar, seleccionar y distribuir los materiales según las necesidades de los usuarios e incorporarlos a la estantería física y virtual de manera integral eficiente y ordenada.

          p.mb-0 El proceso técnico incide en #[span.txt--brown.bold tomar decisiones pertinentes sobre el contenido temático de los materiales a procesar]. Este proceso se integra mediante tres actividades que son:

        .col-lg-4.d-none.d-lg-flex(data-aos="flip-right")
          figure
            img(src='@/assets/curso/temas/t1/t1_21.svg' alt='')

    .bg_img_01A.br_01.p-4.mb-5
      .row.justify-content-center
        .col-lg-4.d-none.d-lg-flex(data-aos="flip-left")
          figure
            img(src='@/assets/curso/temas/t1/t1_22.svg' alt='')
        .col-lg-8(data-aos="zoom-in")
          .bg--neutralYellow.p-4.br_01
            h3.text-center.txt--brown Actividades del proceso de organización bibliográfica

            p #[span.txt--orange.bold 1. Catalogación bibliográfica:] comienza con la descripción de cada documento y concluye con la confección de un catálogo, impreso o digital, y que constituye un índice ordenado de la información que contiene la biblioteca.
            p Una vez que los libros reciben el proceso técnico menor pasan al proceso mayor llamado catalogación descriptiva.

            figure
              img(src="@/assets/curso/temas/recursos/divider_01.svg", alt="alt")

            p #[span.txt--orange.bold 2. Catalogación descriptiva:] etapa mayor donde se extraen diversos datos de la obra que se está procesando, para constituir las fichas bibliográficas.

            p Para ello el bibliotecario catalogador describe ordenadamente los datos bibliográficos de una obra determinada, tales como:

            p El autor - Título  - Tipo de formato - Lugar de edición - Editorial - Año.

            p Se realiza en formato estandarizado denominado “ficha”. Con las fichas se construyen los catálogos de biblioteca, tanto para uso interno como para los usuarios (impresos o digitales).

            figure
              img(src="@/assets/curso/temas/recursos/divider_01.svg", alt="alt")

            p #[span.txt--orange.bold 3. Catalogación temática:] proceso mayor mediante el cual el catalogador asigna uno o varios encabezamientos de materia al documento en proceso, que represente los temas o asuntos de que trata el mismo.

    p(data-aos="fade-left").mb-5 El proceso de catalogación por tema, busca unos objetivos que usted debe conocer y tener presentes: 

    .row.justify-content-center
      .col-lg-4.col-10.mb-4(data-aos="flip-right")
        .bg_crd_01.text-white.py-5.px-4.br_01
          figure.mb-4
            img(src='@/assets/curso/temas/t1/t1_23.svg' alt='').img90.m-auto              
          h5.text-center Identificar
          p.mb-0.text-center Identificar, en el catálogo, las obras que traten sobre la misma temática, es decir, reunir bajo un mismo encabezamiento todos los materiales sobre una materia.
      .col-lg-4.col-10.mb-4(data-aos="flip-right")
        .bg_crd_01.text-white.py-5.px-4.br_01
          figure.mb-4
            img(src='@/assets/curso/temas/t1/t1_24.svg' alt='').img90.m-auto              
          h5.text-center Acomodar
          p.mb-0.text-center Acomodar en la estantería el material de acuerdo al tema principal de que traten.
      .col-lg-4.col-10.mb-4(data-aos="flip-right")
        .bg_crd_01.text-white.py-5.px-4.br_01
          figure.mb-4
            img(src='@/assets/curso/temas/t1/t1_25.svg' alt='').img90.m-auto              
          h5.text-center Constituir
          p.mb-0.text-center Constituir elementos comunes de búsqueda de la información.

    p(data-aos="fade-left").mb-5 La organización o clasificación bibliográfica está configurada mediante los pasos o temas que se muestran a continuación. Recuerde llevar registro de lo más destacado en su libreta personal de apuntes:

    .row.justify-content-center(data-aos="zoom-in")
      .col-lg-10
        LineaTiempoD.color-primario
          .row.justify-content-center(numero="1" titulo="Introducción y principios")
            .col-xl-7.mb-4.mb-xl-0
              p La introducción favorece localizar fácilmente los materiales bibliográficos y devolverlos a lugar dentro del recinto bibliotecario.

              p Para comenzar el proceso se deberán tener en cuenta principios como:

              ul.fa-ul
                  li.mb-2
                    i.fa-li.fas.fa-chevron-right.txt--orange
                    | #[strong Clasificar el material] de acuerdo con el tema de que trata la obra.
                  li.mb-2
                    i.fa-li.fas.fa-chevron-right.txt--orange
                    | #[strong Asignar el número de clasificación] lo más específico posible.
                  li.mb-2
                    i.fa-li.fas.fa-chevron-right.txt--orange
                    | #[strong Clasificar por tema] que por la forma o el lugar.
                  li.mb-2
                    i.fa-li.fas.fa-chevron-right.txt--orange
                    | #[strong Elegir tema dominante], cuando el material se trata de dos o más temas.

            .col-xl-5.col-8
              figure
                img(src="@/assets/curso/temas/t1/t1_26.png", alt="alt")

          .row.justify-content-center(numero="2" titulo="Signatura topográfica")
            .col-xl-7.mb-4.mb-xl-0
              p Los elementos que conforman la signatura topográfica son:              

              figure
                img(src="@/assets/curso/temas/t1/t1_27.svg", alt="alt").img450.m-auto

            .col-xl-5.col-8
              figure
                img(src="@/assets/curso/temas/t1/t1_28.svg", alt="alt")

          .row.justify-content-center(numero="3" titulo="Clave de ubicación y número de clasificación")
            .col-xl-7.mb-4.mb-xl-0
              p Se asignan al acervo de consulta (C o REF). Cada biblioteca puede establecer sus propias claves.
              p.mb-0 El número de clasificación es una notación constituida por caracteres numéricos o alfanuméricos, que se asigna de acuerdo al tema de que trata la obra, utilizando algún sistema de clasificación como, por ejemplo, el sistema decimal Dewey.             

            .col-xl-5.col-8
              figure
                img(src="@/assets/curso/temas/t1/t1_29.svg", alt="alt")

          .row.justify-content-center(numero="4" titulo="Número o código de autor")
            .col-xl-7.mb-4.mb-xl-0
              p El número de autor es el símbolo que permite diferenciar varias obras del mismo tema, pero escritas por diferentes autores, o del mismo autor, pero con títulos diferentes.

              p.mb-0 La clasificación separa las obras por materias afines, pero para que los materiales puedan almacenarse y encontrarse con facilidad no es suficiente que se les asigne sólo la clasificación, sino que es necesario añadir otro código que represente a los autores de las obras y el cual complete la notación respectiva.             

            .col-xl-5.col-8
              figure
                img(src="@/assets/curso/temas/t1/t1_30.png", alt="alt")

          .row.justify-content-center(numero="5" titulo="Año de edición")
            .col
              p.mb-5 El año de edición se utiliza para diferenciar entre sí las distintas ediciones de una misma obra y sólo se agregará cuando se trate de una edición diferente de la primera.

              .tabla-a.custom_01.mb-0
                table
                  thead
                    tr
                      th(rowspan='2') AUTOR
                      th(rowspan='2') T&Iacute;TULO
                      th(colspan='2') SIGNATURA TOPOGR&Aacute;FICA 
                    tr
                      th DEWEY
                      th LC
                  tbody
                    tr
                      td Lozano S, Oscar
                      td Fundamentos de &aacute;lgebra, 1&ordf; ed., 2000
                      td 512.9F724f
                      td QA184.2 F724f
                    tr
                      td Lozano S, Oscar
                      td Fundamentos de &aacute;lgebra, 4&ordf; ed., 2006
                      td 512.9 F724f 2006
                      td QA184.2 F724f 2006

          .row.justify-content-center(numero="6" titulo="Volumen")
            .col-12
              p Se utiliza, generalmente, para un acervo cuya edición se divide en varias partes. Así se facilita su consulta. Consiste en agregar la letra mayúscula 'V', seguida del número que físicamente le corresponda a la parte física.   

              p.mb-5 La clave se asigna en la signatura, desde el primero al último de los volúmenes de que conste la obra.                                                                   

              .tabla-a.custom_01.mb-0
                table
                  thead
                    tr
                      th(rowspan='2') Autor
                      th(rowspan='2') Presentaci&oacute;n f&iacute;sica 
                      th(colspan='2') signatura topogr&aacute;fica
                    tr
                      th Vol. 1
                      th Vol. 2
                  tbody
                    tr
                      td
                        | Diccionario de computaci&oacute;n e internet, con glosario de t&eacute;rminos de internet ingl&eacute;s-espa&ntilde;ol
                      td
                        | Obra en 2 
                        br
                        | Vol&uacute;menes
                      td
                        | C 
                        br
                        | 004.678 
                        br
                        | D382 
                        br
                        | V. 1
                      td
                        | C 
                        br
                        | QA 76.15 
                        br
                        | D382
                        br
                        | V. 2
                    tr
                      td Historia universal
                      td
                        | Obra en 10
                        br
                        | vol&uacute;menes
                      td
                        | C 
                        br
                        | 004.678 
                        br
                        | D382 
                        br
                        | V. 1
                      td
                        | C 
                        br
                        | QA 76.15 
                        br
                        | D382
                        br
                        | V. 2
                    tr
                      td
                      td
                      td
                        | C 
                        br
                        | 940.2 
                        br
                        | P565h 
                        br
                        | V. 1
                      td
                        | C 
                        br
                        | 940.2 
                        br
                        | P565h 
                        br
                        | V. 2
                    tr
                      td
                      td
                      td Para el Vol. 3
                      td Para el Vol. 4
                    tr
                      td
                      td
                      td C 940.2 P565h V. 3
                      td
                        | C 
                        br
                        | 940.2 
                        br
                        | P565h 
                        br
                        | V. 4 - etc.

          .row.justify-content-center(numero="7" titulo="Año de edición")
            .col-12
              p Para facilitar el préstamo a domicilio y en sala, en las bibliotecas se cuenta con varios ejemplares del mismo material bibliográfico, por lo cual en las asignaturas topográficas debe agregarse una clave más que es el ejemplar.

              p.mb-5 El primer ejemplar de la misma edición puede no incluirse, pero a partir del segundo ejemplar, se asigna la abreviatura 'Ej.' seguida del número de que se trate.

              .tabla-a.custom_01.mb-0
                table
                  thead
                    tr
                      th Autor 
                      th T&iacute;tulo 
                      th(colspan='2') signatura topogr&aacute;fica
                  tbody
                    tr
                      td &Aacute;ngel, Allen R.
                      td
                        | &Aacute;lgebra intermedia (se cuenta con 3 ejemplares de la misma edici&oacute;n). El primer ejemplar quedar&iacute;a as&iacute;:
                        br
                        | 512 
                        br
                        | A732a 
                        br
                        | 2005
                      td
                        | 512 
                        br
                        | A732a 
                        br
                        | 2005 
                        br
                        | Ej. 2
                      td
                        | 512 
                        br
                        | A732a 
                        br
                        | 2005 
                        br
                        | Ej. 3
                    tr
                      td Coello Coello, Carlos A.
                      td
                        | Breve historia de la computaci&oacute;n y sus pioneros (se cuenta con 5 ejemplares de la misma edici&oacute;n
                      td
                        | 004 
                        br
                        | C228b 
                        br
                        | 2000 
                        br
                        | Ej. 2
                      td
                        | 004 
                        br
                        | C228b 
                        br
                        | 2000 
                        br
                        | Ej. 3
                    tr
                      td
                      td
                      td
                        | 004 
                        br
                        | C228b 
                        br
                        | 2000 
                        br
                        | Ej. 4
                      td
                        | 004 
                        br
                        | C228b 
                        br
                        | 2000 
                        br
                        | Ej. 5

          
          .row.justify-content-center(numero="8" titulo="Número o código de autor")
            .col-xl-7.mb-4.mb-xl-0
              p Una vez concluida la signatura topográfica, deberá capturarse en las tarjetas calcográficas y colocarse a cada material de la biblioteca en: 

              ul.fa-ul
                li.mb-2
                  i.fa-li.fas.fa-chevron-right.txt--orange
                  | El lomo, ya sea del libro o del estuche
                li.mb-2
                  i.fa-li.fas.fa-chevron-right.txt--orange
                  | En el esquinero
                li.mb-2
                  i.fa-li.fas.fa-chevron-right.txt--orange
                  | En las tarjetas de préstamo        

            .col-xl-5.col-8
              figure
                img(src="@/assets/curso/temas/t1/t1_31.png", alt="alt")

              









      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
