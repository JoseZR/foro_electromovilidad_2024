interface Speaker {
    name: string;
    photo: string;
    profile?: string;
    position: string;
}

interface Program {
    name: string;
    description?: string;
    hours: string;
    speakers?: Speaker[];
}

/*
    {
        name: "Inaguración",
        description: "Palabras de bienvenida y presentación del foro",
        hours: "09:55 hrs",
        speakers: [
            {
                name: "Ricardo Haneine",
                photo: "https://via.placeholder.com/150",
                profile: "Es Ingeniero en Sistemas Computacionales por la Universidad de las Américas Puebla, Maestro en Ciencias en Ingeniería de Software por el Instituto Tecnológico de Estudios Superiores de Monterrey y Doctor en Ciencias de la Computación por la Universidad de las Américas Puebla. Actualmente es Director de la Facultad de Ingeniería de la Universidad de las Américas Puebla y profesor de tiempo completo en el Departamento de Ciencias de la Computación. Sus áreas de interés son la ingeniería de software, la calidad de software, la educación en ingeniería de software y la educación en línea.",
                position: "Director de la Facultad de Ingeniería",
            }
        ]
        
    }
*/

const program : Program[] = [
    {
        name: "Inauguración y Bienvenida al Foro Electromovilidad y Semiconductores 2024",
        hours: "10:00 - 10:30 Hrs",
        speakers: [
            // {
            //     name: "Ramón Alfaro",
            //     photo: "/speakers/ramon_alfaro_seg.webp",
            //     position: "Secretario de Desarrollo Económico y Sustentable de Guanajuato"
            // }, 
            {
                name: "Odracir Barquera",
                photo: "/speakers/odracir_barquera.webp",
                position: "Director General de la Asociación Mexicana de la industria Automotriz (AMIA)."
            },           
            {
                name: "Azul Ogazón",
                photo: "/speakers/azul_ogazon.webp",
                position: "Subdirectora General Italian German Exhibition Company Mexico"
            },  
            {
                name: "Carlos Talamantes",
                photo: "/speakers/carlos_talamantes.webp",
                position: "Presidente del Cluster Automotriz de Guanajuato - CLAUGTO"
            },  
            {
                name: "Luis Andrés Álvarez Aranda",
                photo: "/speakers/luis_aranda.webp",
                position: "Subsecretario de Empleo y Formación Laboral Gobierno del Estado de Guanajuato"
            },                                          
        ]
    },
    {
        name: "Marco regulatorio de la Electromovilidad",
        hours: "10:30 - 11:30 Hrs",
        description : "Descubre cómo los países pueden fomentar la electromovilidad con un marco legal y normativo innovador. Abordaremos temas clave como incentivos fiscales, estándares de seguridad, infraestructura de carga, reciclaje de baterías y la colaboración entre el sector público y privado. ",
        speakers: [
            // {
            //     name: "Ramón Alfaro",
            //     photo: "/speakers/ramon_alfaro_seg.webp",
            //     position: "Secretario de Desarrollo Económico y Sustentable de Guanajuato"
            // }, 
            {
                name: "Ignacio López Valdovinos",
                photo: "/speakers/ingnacio_lopez.webp",
                position: "Rector de la Universidad Politécnica de Guanajuato - UPG"
            },
            {
                name: "Diana Avalos",
                photo: "/speakers/diana_avalos.webp",
                position: "Directora Ejecutiva de la Asociación Mexicana de Impulso al Vehículo Eléctrico - AMIVE"
            },
            {
                name: "Alfredo Porras Orozco",
                photo: "/speakers/alfredo_porras.webp",
                position: "Director General de Atracción de Inversiones Gobierno del Estado de Guanajuato"
            },                                                           
        ]
    },
    {
        name: "Break",
        hours: "11:30 - 11:40 Hrs",
    },
    {
        name: "Tendencias globales en la Electromovilidad",
        hours: "11:40 - 12:40 Hrs",
        description : "Sumérgete en las tendencias globales de la electromovilidad y descubre cómo está evolucionando la industria automotriz. Analizaremos los últimos avances en baterías y motores eléctricos, así como la expansión de la infraestructura de carga, y exploraremos cómo estos cambios están impulsando una movilidad más limpia y sostenible.",
        speakers: [
            {
                name: "Asael Colunga",
                photo: "/speakers/asaelc_colunga.webp",
                position: "Director de Internacionalización de COFOCE"
            },
            // {
            //     name: "Carlos Gutiérrez",
            //     photo: "/speakers/carlos_gutierrez.webp",
            //     position: "Director de Asuntos Gubernamentales y Externos de BMW Group México"
            // },
            {
                name: "Carlos Talamantes",
                photo: "/speakers/carlos_talamantes.webp",
                position: "Presidente del Cluster Automotriz de Guanajuato - CLAUGTO"
            },                                            
        ]
    },
    {
        name: "Break",
        hours: "12:40 - 12:50 Hrs",
    },
    {
        name: "Logística y producción en la Electromovilidad",
        hours: "12:50 - 13:50 Hrs",
        description : "Explora cómo la electromovilidad está revolucionando la logística y la producción de vehículos en el mundo. Desde la cadena de suministro de baterías hasta la entrega de última milla, descubre cómo las empresas están adaptándose para satisfacer la creciente demanda de vehículos eléctricos.",
        speakers: [
            {
                name: "Carolin Antoni",
                photo: "/speakers/carolin_antoni.webp",
                position: "Gerente de Comercio & Inversión y Sostenibilidad - AHK México"
            }, 
            {
                name: "Elisa Crespo",
                photo: "/speakers/elisa_crespo.webp",
                position: "Presidenta Ejecutiva en Cluster Automotriz Regional de Hidalgo, Ciudad de México y Estado de México"
            },
            {
                name: "Vidaur Mora",
                photo: "/speakers/vidaur_mora.webp",
                position: "Especialista en Cross Border Investment y Comercio Exterior"
            }                                             
        ]
    },
    {
        "name": "Electromovilidad: Tecnología e Innovación hacia un Futuro Sostenible",
        "hours": "13:50 - 14:50 Hrs",
        description : "Analizaremos las oportunidades y desafíos de la electromovilidad en el contexto global, así como los avances tecnológicos que están transformando la movilidad. Estas innovaciones están impulsando un futuro en el que los vehículos sean más eficientes y respetuosos con el medio ambiente.",
        speakers: [
            {
                name: "Odracir Barquera",
                photo: "/speakers/odracir_barquera.webp",
                position: "Director General de la Asociación Mexicana de la industria Automotriz (AMIA)."
            },
            {
                name: "Fermín Fernando",
                photo: "/speakers/fermin_fernando.webp",
                position: "Director Tec Mobility Solutions Vicerrectoría de Educación Continua"
            },
            {
                name: "Carlos Talamantes",
                photo: "/speakers/carlos_talamantes.webp",
                position: "Presidente del Cluster Automotriz de Guanajuato - CLAUGTO"
            },                                        
        ]
    },
    {
        "name": "Lanzamiento del Diplomado en Electromovilidad y Firma de Convenio UVEG - IGECO MÉXICO",
        "hours": "14:50 -15:40",
        description : "",
        speakers: [
            {
                name: "Aldelmo Emmanuel Reyes Pablo",
                photo: "/speakers/profile.svg",
                position: "Subsecretario de Educación Media Superior y Superior"
            },
            {
                name: "Ricardo Narváez Martínez",
                photo: "/speakers/ricardo_narvaez.webp",
                position: "Rector de la Universidad Virtual del Estado de Guanajuato"
            },
            {
                name: "Azul Ogazón",
                photo: "/speakers/azul_ogazon.webp",
                position: "Subdirectora General Italian German Exhibition Company Mexico"
            },  
            {
                name: "Jorge de Jesús Lozoya Santos",
                photo: "/speakers/jesus_lozoya.webp",
                position: "Profesor Investigador de GI • EIC Mecatrónica del ITM Campus Monterrey"
            },
            {
                name: "Ernesto Lugo Ledesma",
                photo: "/speakers/ernesto_ledesma.webp",
                position: "Rector del TecNM en Celaya"
            }                                      
        ]
    }
]

export default program;