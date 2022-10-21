export default {
  global: {
    componenteFormativo:
      'Verificación y registro de la información según políticas de la biblioteca',
    descripcionCurso:
      'Este componente formativo aborda aspectos clave de la verificación y registro de información en las bibliotecas digitales, que afianzarán en el aprendiz conocimientos y habilidades para la mejora de los procesos de gestión del patrimonio bibliográfico y documental, las bases para el desarrollo de acciones coordinadas y la realización de acciones correctivas del recurso bibliográfico.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Organización del recurso de información bibliográfica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Acciones correctivas del recurso bibliográfico',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Normas técnicas para la organización del recurso bibliográfico.',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Registros de los recursos de Información',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Normas técnicas para la presentación de informes',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Estadísticas de uso del material bibliográfico',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Inventarios del material bibliográfico',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Organización del recurso de información bibliográfica',
      referencia:
        'Biblioteca DGIRE (s.f.).  Procesos técnicos de los materiales. Dgire.',
      tipo: 'Página web',
      link:
        'https://www.dgire.unam.mx/webdgire/bibliotecas/cat-proceso.html#inventariar',
    },
    {
      tema: 'Organización del recurso de información bibliográfica',
      referencia: 'Biblioteca DGIRE (s.f.). Organización bibliográfica. Dgire.',
      tipo: 'Página web',
      link:
        'https://www.dgire.unam.mx/webdgire/bibliotecas/organizacion-bibliografica.html',
    },
    {
      tema:
        'Pontificia Universidad Javeriana (2012). Manual práctico y competencias para la organización de los recursos bibliográficos : de la biblioteca comunitaria La Fuerza de las Palabras. Repository.javeriana.',
      referencia:
        'Biblioteca DGIRE (s.f.).  Procesos técnicos de los materiales. Dgire.',
      tipo: 'Página web',
      link: 'https://repository.javeriana.edu.co/handle/10554/5688',
    },
    {
      tema:
        'Pontificia Universidad Javeriana (2012). Manual práctico y competencias para la organización de los recursos bibliográficos : de la biblioteca comunitaria La Fuerza de las Palabras. Repository.javeriana.',
      referencia:
        'Universidad Libre (2022). Estadística. Gestión de Bibliotecas. Unilibre',
      tipo: 'Página web',
      link:
        'https://www.unilibre.edu.co/socorro/index.php/event-program/nuestra-universidad/noticias-home/266-estadisticas-gestion-de-biblioteca#',
    },
  ],
  glosario: [
    {
      termino: 'Acceso al patrimonio bibliográfico y documental',
      significado:
        'Derecho u oportunidad de usar de forma libre y gratuita el patrimonio bibliográfico y documental sin discriminación de sexo, raza, religión, idioma, condición económica o geográfica o situación ideológica, cognitiva, étnica y física',
    },
    {
      termino: 'Accesibilidad',
      significado:
        'Acceso a la información, que es la capacidad de identificar, recuperar y utilizar la información de forma eficaz',
    },
    {
      termino: 'Acervo bibliográfico y documental patrimonial',
      significado:
        'Conjunto de documentos con valor patrimonial que se encuentran en cualquier formato o soporte y hacen parte de una unidad de información',
    },
    {
      termino: 'Asistencia técnica',
      significado:
        'Apoyo prestado por especialistas que se puede desarrollar a través de la transmisión de información y conocimientos teóricos y prácticos, instrucción, formación de habilidades y servicios de consultoría, y Aplicar la transferencia de datos técnicos',
    },
    {
      termino: 'Biblioteca',
      significado:
        'Estructura organizativa que, mediante los procesos y servicios técnicamente apropiados, tiene como misión facilitar el acceso de una comunidad o grupo particular de usuarios a documentos publicados o difundidos en cualquier soporte',
    },
    {
      termino: 'Biblioteca digital patrimonial',
      significado:
        'Colecciones organizadas de contenidos digitales con valor patrimonial que se ponen a disposición del público',
    },
    {
      termino: 'Biblioteca pública',
      significado:
        'Aquella que presta servicios al público en general, por lo que está a disposición de todos los miembros de la comunidad por igual, sin distinción de raza, nacionalidad, edad, sexo, religión, idioma, discapacidad, condición económica y laboral. ',
    },
    {
      termino: 'Bienes de Interés Cultural',
      significado:
        'Bienes materiales que las autoridades competentes han declarado como monumentos, áreas de conservación histórica, arqueológica, o arquitectónica, conjuntos históricos',
    },
    {
      termino: 'Catalogación',
      significado:
        'Proceso que describe las características físicas de los documentos, de acuerdo con métodos y técnicas bibliotecológicas, normas y estándares nacionales e internacionales, con el fin de crear referentes de acceso, catálogos e índices calcográficos, para la recuperación fácil y oportuna de la información (Patrimonio bibliográfico y documental en bibliotecas',
    },
    {
      termino: 'Conservación',
      significado:
        'Patrimonio bibliográfico y documental tiene que ver con las acciones y métodos de conservación preventiva y restauración, de acuerdo con los procedimientos establecidos por las instituciones que están a cargo de las colecciones,',
    },
    {
      termino: 'Contenidos estáticos',
      significado:
        'Obras digitales publicadas como obras finalizadas, pensadas para no tener variaciones en su contenido, que no tienen posibilidades de interacción social o que no utilizan tecnologías de lenguaje, contenido y diseño dinámicos',
    },
  ],
  referencias: [
    {
      referencia:
        'Fundalectura (2009). Plan nacional de lectura y bibliotecas fase VII. Manual de procesamiento técnico y físico de material bibliográfico.',
      link:
        'https://bibliotecanacional.gov.co/es-co/formacion/caja-de-herramientas/Documents/Manual%20de%20procesamiento%20tecnico.pdf',
    },
    {
      referencia:
        'Pontificia Universidad Javeriana (2012). Manual práctico y competencias para la organización de los recursos bibliográficos : de la biblioteca comunitaria La Fuerza de las Palabras. Repository.javeriana. ',
      link: 'https://repository.javeriana.edu.co/handle/10554/5688',
    },
    {
      referencia:
        'Rodriguez, G. (2013). Bibliotecas vivas 2: pautas para el descarte de materiales bibliográficos. Manual de integración de materiales bibliográficos. Guía para organizar los espacios y recursos. Panamericana',
      link: '',
    },
    {
      referencia:
        'Universidad Libre (2022). Estadística. Gestión de Bibliotecas. Unilibre',
      link:
        'https://www.unilibre.edu.co/socorro/index.php/event-program/nuestra-universidad/noticias-home/266-estadisticas-gestion-de-biblioteca#',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'María Camila Garcia Santamaría',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Justino Rojas Cabrera',
        cargo: 'Experto temático',
        centro:
          'Sede Comercio Centro de la Industria, la Empresa y los Servicios Ciudad - Regional Neiva',
      },
      {
        nombre: 'Fabián Leonardo Correa Díaz',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios - Regional Norte de Santander',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Corrección de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Fabian Zarate',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Magdi Khalifah',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
