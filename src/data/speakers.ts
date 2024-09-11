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
            "Como algunas de sus actividades sobresalientes destaca el haber sido responsable de crear la Subsecretaría de Apoyo a las Micro, Pequeñas y Medianas Empresas, líder de programas como Mi Plaza y En Marcha; entre otras. Antes de su nuevo nombramiento se desempeñó como subsecretario de empleo y formación laboral."
        ],
        position: "Secretario de Desarrollo Económico Sustentable de Guanajuato"
    },
    {
        name: "Odracir Barquera",
        photo: "/speakers/odracir_barquera.webp",
        profile: [
            "Es Director General de la Asociación Mexicana de la industria Automotriz (AMIA). Previamente, fue Director General de Estrategia en la Presidencia del Consejo Coordinador Empresarial, a cargo del área internacional, el US Mexico CEO Dialogue, la oficina de Washington, Dimensión Social y la Agenda 2030. Antes fue Consultor Independiente de empresas privadas y organismos multilaterales sobre políticas públicas, estrategias sociales, asuntos políticos e internacionales; Asesor Especial del Presidente de la Cámara de Diputados para la institucionalización, diseño e implementación del Sistema de Evaluación Legislativa; Coordinador de Asesores de la Senadora Cristina Díaz(Pdta.de la Comisión de Gobernación); Director de Enlace Institucional y CoPresidente del Comité de Asuntos Fiscales de ConMéxico(Consejo Mexicano de la Industria de Productos de Consumo); y en la Oficina del Banco Mundial para México y Colombia coordinó Vinculación Interinstitucional y Análisis Político, participando en diversos estudios y proyectos especiales sobre Pobreza, Gobernabilidad y Política Económica; entre otros cargos."
        ],
        position: "Director General de la Asociación Mexicana de la industria Automotriz (AMIA)."
    }

]

export default speaker;