interface Speaker {
  name: string;
  photo: string;
  profile?: string[];
  position: string;
}

/*
    {
        name: "Ricardo Haneine",
        photo: "https://via.placeholder.com/150",
        profile: "Es Ingeniero en Sistemas Computacionales por la Universidad de las Américas Puebla, Maestro en Ciencias en Ingeniería de Software por el Instituto Tecnológico de Estudios Superiores de Monterrey y Doctor en Ciencias de la Computación por la Universidad de las Américas Puebla. Actualmente es Director de la Facultad de Ingeniería de la Universidad de las Américas Puebla y profesor de tiempo completo en el Departamento de Ciencias de la Computación. Sus áreas de interés son la ingeniería de software, la calidad de software, la educación en ingeniería de software y la educación en línea.",
        position: "Director de la Facultad de Ingeniería",
    }
*/

const speaker: Speaker[] = [
  {
    name: "Ramón Alfaro",
    photo: "/speakers/ramon_alfaro_seg.webp",
    profile: [
      "Es Licenciado en Relaciones Internacionales por la Universidad Nacional Autónoma de México (UNAM). Su trayectoria incluye cargos municipales en la ciudad de León y otros puestos dentro del sector público estatal.",
      "Como algunas de sus actividades sobresalientes destaca el haber sido responsable de crear la Subsecretaría de Apoyo a las Micro, Pequeñas y Medianas Empresas, líder de programas como Mi Plaza y En Marcha; entre otras. Antes de su nuevo nombramiento se desempeñó como subsecretario de empleo y formación laboral.",
    ],
    position: "Secretario de Desarrollo Económico Sustentable de Guanajuato",
  },
  {
    name: "Odracir Barquera",
    photo: "/speakers/odracir_barquera.webp",
    profile: [
      "Es Director General de la Asociación Mexicana de la industria Automotriz (AMIA). Previamente, fue Director General de Estrategia en la Presidencia del Consejo Coordinador Empresarial, a cargo del área internacional, el US Mexico CEO Dialogue, la oficina de Washington, Dimensión Social y la Agenda 2030. Antes fue Consultor Independiente de empresas privadas y organismos multilaterales sobre políticas públicas, estrategias sociales, asuntos políticos e internacionales; Asesor Especial del Presidente de la Cámara de Diputados para la institucionalización, diseño e implementación del Sistema de Evaluación Legislativa; Coordinador de Asesores de la Senadora Cristina Díaz(Pdta.de la Comisión de Gobernación); Director de Enlace Institucional y CoPresidente del Comité de Asuntos Fiscales de ConMéxico(Consejo Mexicano de la Industria de Productos de Consumo); y en la Oficina del Banco Mundial para México y Colombia coordinó Vinculación Interinstitucional y Análisis Político, participando en diversos estudios y proyectos especiales sobre Pobreza, Gobernabilidad y Política Económica; entre otros cargos.",
    ],
    position:
      "Director General de la Asociación Mexicana de la industria Automotriz (AMIA).",
  },
  {
    name: "Ignacio López Valdovinos",
    photo: "/speakers/ingnacio_lopez.webp",
    profile: [
      "Profesor de tiempo completo en el Tecnológico Nacional de México desde 1982, con habilidades en formación de jóvenes, toma de decisiones, resolución de problemas, gestión de recursos y talento para la integración de equipos de trabajo. Ingeniero Industrial en Producción por el Instituto Tecnológico de Morelia, y Maestro en Educación por la Universidad Nacional de Educación a Distancia – UNED, España. Actualmente es Rector de la Universidad Politécnica de Guanajuato – UPG y miembro activo y colaborador de diversas instituciones de enseñanza superior. ",
    ],
    position: "Rector de la Universidad Politécnica de Guanajuato - UPG",
  },
  {
    name: "Carolin Antoni",
    photo: "/speakers/carolin_antoni.webp",
    profile: [
      "Es especialista en Educación para el Desarrollo Sostenible y cuenta con una sólida trayectoria de más de 20 años en temas ambientales, con un enfoque en sostenibilidad desde 2008. Ha colaborado con diversas instituciones académicas, como el Instituto Fraunhofer de Sistemas de Energía Solar ISE, así como en el sector privado. Además, ha participado activamente en grupos interdisciplinarios, enfocándose en métodos participativos que involucran a diferentes actores para promover el desarrollo sostenible. Académicamente, es doctora en Ciencias Ambientales y tiene una maestría en la misma disciplina. Es diplomada en Ingeniería (FH) en Protección Ambiental (Umweltsicherung) y especialista en Educación para el Desarrollo Sostenible, Ciencias Ambientales, Sistemas Socioecológicos y Resiliencia. También posee certificados en Educación para el Desarrollo Sostenible y Coaching Empresarial.",
    ],
    position: "Especialista en Educación para el Desarrollo Sostenible, Ciencias ambientales, Sistemas Socioecológicos, y Resiliencia",
  },
  {
    name: "Elisa Crespo",
    photo: "/speakers/elisa_crespo.webp",
    profile: ["Ejecutiva del Clúster Automotriz Metropolitano A.C., con 24 años de experiencia en la industria automotriz y como asesora de estrategias de negocio para diversos estados y asociaciones del sector. Es Licenciada en Mercadotecnia por la UNAM y Maestra en Alta Dirección por el IPADE. Ha recibido múltiples reconocimientos, incluyendo el Assembly Siemens en dos ocasiones consecutivas por su contribución a la Transformación Digital en México y el Premio Nacional a la Calidad Automotriz. Es una destacada promotora y desarrolladora del Business Automotive Meeting (BAM), un evento clave para el desarrollo de la cadena de proveeduría del sector automotriz, que ha celebrado más de 10 ediciones. Actualmente, continúa impulsando proyectos enfocados en la Electromovilidad."],
    position: "Presidenta Ejecutiva en Cluster Automotriz Regional Estado de México y CDMX Consejera de la Red de Clusters Automotriz de México.",
  },
  {
      name: "Vidaur Mora",
      photo: "/speakers/vidaur_mora.webp",
      profile: [
          "Socio patrimonial de la firma Rivadeneyra Treviño, se especializa en Cross Border Investment y  Comercio Exterior; enfocado principalmente en atraer y asesorar inversión extranjera en México en sus procesos legales de establecimiento,  instalación y operación; para ello ha colaborado exitosamente en un importante número de proyectos de inversión para la instalación de plantas productivas en el sector automotriz, manufactura industrial, textil, agroalimentos, entre otros,  en diferentes estados de la República Mexicana. Es miembro activo del Clúster Automotriz Zona Centro.  Miembro de la IPBA (Inter-Pacific Bar Association) perteneciendo a su comité Cross Border Investment & International Trade."],
      position: "Especialista en Cross Border Investment y Comercio Exterior",
  },
  {
      name: "Asael Colunga",
      photo: "/speakers/asaelc_colunga.webp",
      profile: [
          "Es Licenciado en Comercio Exterior y Aduanas, con una Maestría en Mercadotecnia. Con dos décadas de trayectoria en comercio internacional, ha adquirido experiencia en diversos sectores como calzado, automotriz, autopartes, metalmecánica y su proveeduría. Ha liderado equipos de trabajo en la promoción de la oferta exportable de los sectores productivos de Guanajuato, organizando ferias, misiones y eventos internacionales de renombre. Actualmente, dirige el área de Internacionalización en la COFOCE, organismo estatal encargado de la promoción de las exportaciones."
      ],
      position: "Director de Internacionalización de COFOCE"
  },
  {
      name: "Fermín Fernando",
      photo: "/speakers/fermin_fernando.webp",
      profile: [
          "Líder consultor en proyectos con empresas multinacionales en temas como aseguramiento de calidad, optimización de procesos productivos y logística, administración de proyectos en empresas de servicios entre otros. Más de 10 años de experiencia en implementación de metodologías de Administración de proyectos. Ha trabajado en la Dirección de Planeación y Evaluación de la Secretaría de Desarrollo Urbano y Medio Ambiente del Gobierno del estado de Tamaulipas. Es instructor y consultor líder para programas y diplomados de Educación Continua en México, Ecuador, Colombia y Chile entre otros. Actualmente es Director Institucional de TEC Mobility Solutions siendo esta, la iniciativa automotriz y de la movilidad de la Vicerrectoría de Educación Continua del TEC de Monterrey. "],
      position: "Director Tec Mobility Solutions Vicerrectoría de Educación Continua"
  }
  // {
  //     name: "",
  //     photo: "/speakers/elisa_crespo.webp",
  //     profile: [
  //         ""
  //     ],
  //     position: ""
  // }
];

export default speaker;
