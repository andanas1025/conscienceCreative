/**
 * i18n.js — Consciencia Creativa
 * Lightweight client-side i18n engine — locale data bundled inline.
 * No fetch() needed: works with file://, http:// and https://.
 * Usage in HTML:  <script src="i18n.js"></script>
 * Subdirectories: <script src="../i18n.js"></script>
 */
(function () {
  'use strict';

  /* ── Config ──────────────────────────────────────────────── */
  const SUPPORTED  = ['es', 'en', 'pt'];
  const DEFAULT    = 'es';
  const STORAGE_KEY = 'cc_lang';

  /* ── Bundled locale data (replaces fetch) ────────────────── */
  const LOCALES = {
    es: {
      "nav": {
        "lang_aria": "Seleccionar idioma",
        "login": "Iniciar Sesión",
        "login_aria": "Iniciar Sesión",
        "services": "Servicios",
        "about": "Quiénes Somos",
        "contact": "Contacto",
        "plan": "Planeación (OKRs)",
        "workshops": "Talleres y Mentorías",
        "equity": "Equidad Salarial",
        "recruitment": "Reclutamiento",
        "cta_diagnostic": "Agendar Diagnóstico",
        "cta_workshop": "Cotizar Taller",
        "cta_activate": "Activar Proceso",
        "cta_analysis": "Solicitar Análisis"
      },
      "footer": {
        "tagline": "Transformación humana consciente para personas, líderes y organizaciones.",
        "ecosystem": "Parte del ecosistema Andanas Group.",
        "copyright": "© 2026 Consciencia Creativa. Todos los derechos reservados.",
        "copyright_index": "© 2026 Consciencia Creativa. Transformación Estratégica y Bienestar Humano.",
        "services_heading": "Servicios",
        "company_heading": "Compañía",
        "legal_heading": "Legal",
        "plan": "Planeación Estratégica",
        "workshops": "Talleres y Mentorías",
        "equity": "Equidad Salarial",
        "recruitment": "Reclutamiento",
        "about": "Quiénes Somos",
        "contact": "Contacto",
        "privacy": "Política de Privacidad",
        "terms": "Términos de Servicio"
      },
      "whatsapp": {
        "label": "Consultar por WhatsApp",
        "label_plan": "Hablemos por WhatsApp"
      },
      "index": {
        "title": "Consciencia Creativa | Transformación humana consciente",
        "hero": {
          "h1": "Evoluciona sin perderte a ti.",
          "subtitle": "Un espacio de bienestar consciente, transformación humana y liderazgo emocional para personas y organizaciones que quieren crecer con más claridad, equilibrio y humanidad.",
          "cta1": "Quiero comenzar",
          "cta2": "Explorar servicios"
        },
        "purpose": {
          "eyebrow": "Nuestro Propósito",
          "h2": "Creemos en una forma más humana de crecer.",
          "body": "Vivimos en un mundo acelerado y emocionalmente agotador. En medio de esa presión constante, es fácil desconectarse de uno mismo, del bienestar y del propósito. Consciencia Creativa nace como una invitación a evolucionar de manera distinta: más consciente, más humana, más sostenible. Porque el bienestar no debería ser un premio al final del camino, sino parte del camino mismo."
        },
        "services": {
          "h2": "Espacios para transformar, reconectar y evolucionar",
          "s1_title": "Planeación Estratégica",
          "s1_body": "Estructura basada en OKRs y KPIs para un crecimiento medible. Alineamos la visión ejecutiva con la ejecución operativa para garantizar resultados de alto impacto.",
          "s1_link": "Ver metodología y soluciones",
          "s2_title": "Talleres y Experiencias",
          "s2_body": "Mentorías de liderazgo, pruebas DISC y programas de prevención de Burnout diseñados para construir equipos resilientes.",
          "s2_link": "Conocer experiencias",
          "s3_title": "Competitividad y Equidad Salarial",
          "s3_body": "Análisis de compensación inteligente y reducción de brechas salariales para una cultura organizacional justa, competitiva y atractiva.",
          "s3_link": "Ver análisis de compensación",
          "s4_title": "Reclutamiento y Potencial Humano",
          "s4_body": "Reclutamiento estratégico y preparación de talento para el futuro. Identificamos habilidades técnicas y la alineación cultural necesaria para el éxito mutuo.",
          "s4_link": "Conocer el proceso de selección"
        },
        "b2b": {
          "tag": "B2B",
          "h3": "Para Empresas",
          "body": "Optimizamos el motor de tu negocio a través de sistemas de gestión, planeación y atracción de talento humano de vanguardia.",
          "link": "Solicitar propuesta empresarial →"
        },
        "b2c": {
          "tag": "B2C",
          "h3": "Para Profesionales",
          "body": "Diseñamos tu trayectoria estratégica y te preparamos para que lideres con propósito y accedas al puesto deseado.",
          "link": "Ver preparación individual →"
        },
        "cta": {
          "h2": "Tal vez este sea el momento de volver a ti.",
          "body": "Si estás buscando más claridad, equilibrio, bienestar o una forma más consciente de crecer, este espacio es para ti. Agenda una sesión diagnóstica gratuita y demos juntos el primer paso.",
          "benefit1": "Diagnóstico inicial sin compromiso",
          "benefit2": "Flexibilidad de horarios",
          "service_label": "Servicio de interés",
          "opt_plan": "Planeación Estratégica (OKRs & KPIs)",
          "opt_workshops": "Talleres y Mentorías",
          "opt_equity": "Análisis de Equidad Salarial",
          "opt_recruitment": "Reclutamiento y Potencial Humano",
          "btn": "Agendar Diagnóstico Gratuito",
          "success": "¡Solicitud enviada! Le contactaremos pronto.",
          "sending": "Enviando…",
          "name_label": "Nombre Completo",
          "company_label": "Empresa / Organización",
          "email_label": "Email de Contacto",
          "name_placeholder": "Ej. Juan Pérez",
          "company_placeholder": "Tu compañía (o 'Independiente')",
          "email_placeholder": "juan@empresa.com"
        }
      },
      "about": {
        "title": "Quiénes Somos | Consciencia Creativa",
        "hero": {
          "eyebrow": "Quiénes somos",
          "h1_main": "Humanidad.",
          "h1_sub": "Consciencia. Estrategia.",
          "subtitle": "Conciencia Creativa integra bienestar consciente, liderazgo humano, inteligencia emocional y evolución organizacional para construir formas más humanas de vivir, trabajar y liderar."
        },
        "purpose": {
          "eyebrow": "Nuestro Propósito",
          "h2": "La transformación comienza adentro.",
          "body1": "Vivimos en un mundo acelerado, hiperproductivo y emocionalmente agotador. Un mundo donde muchas personas sienten presión constante por rendir, avanzar y sostener múltiples responsabilidades al mismo tiempo.",
          "body2": "Consciencia Creativa nace como una invitación a evolucionar de una manera distinta. Más consciente. Más humana. Más sostenible.",
          "body3": "Creemos que sí es posible crecer profesionalmente sin desconectarnos emocionalmente. Que sí es posible liderar desde la humanidad. Y que el bienestar no debería ser un premio al final del camino, sino parte del camino mismo."
        },
        "mission_title": "Misión",
        "mission_body": "Acompañar a personas y organizaciones a evolucionar con más claridad, humanidad y equilibrio, integrando bienestar emocional, liderazgo consciente y crecimiento profesional sostenible.",
        "vision_title": "Visión",
        "vision_body": "Construir un ecosistema donde bienestar, tecnología, transformación humana e innovación coexistan de manera armónica, creando nuevas formas de vivir, trabajar y liderar en el mundo actual.",
        "values": {
          "eyebrow": "Lo que nos define",
          "h2": "Nuestros Valores",
          "v1_title": "Consciencia",
          "v1_body": "No creemos en el crecimiento basado únicamente en presión o exigencia constante. Creemos que cuando una persona se entiende mejor, lidera mejor, trabaja mejor y vive mejor.",
          "v2_title": "Humanidad",
          "v2_body": "Integramos sensibilidad humana, profundidad emocional e inteligencia emocional en cada proceso. El bienestar no es un lujo; es parte del camino hacia el éxito real.",
          "v3_title": "Evolución",
          "v3_body": "Acompañamos procesos de cambio real: reconectarse consigo mismo, desarrollar herramientas emocionales, fortalecer el bienestar y evolucionar desde la autenticidad."
        },
        "method": {
          "eyebrow": "Cómo trabajamos",
          "h2": "Cómo acompañamos tu evolución",
          "subtitle": "Un proceso de cuatro momentos diseñado para que la transformación sea profunda, real y sostenible — no solo en papel, sino en la vida y el trabajo diario.",
          "s1_title": "Diagnóstico",
          "s1_body": "Escuchamos, analizamos datos y entendemos el estado real de la organización antes de proponer cualquier solución.",
          "s2_title": "Co-creación",
          "s2_body": "Diseñamos las soluciones junto con su equipo, no para su equipo. Esto garantiza adopción real y compromiso genuino.",
          "s3_title": "Implementación",
          "s3_body": "Acompañamos el despliegue en la operación diaria, gestionando la resistencia al cambio y ajustando en tiempo real.",
          "s4_title": "Acompañamiento",
          "s4_body": "Hacemos seguimiento a los resultados y entregamos el proceso documentado para que la empresa opere de forma autónoma."
        },
        "stats": {
          "companies": "Empresas transformadas",
          "experience": "Años de experiencia",
          "areas": "Áreas de consultoría",
          "deliverables": "Proyectos con entregables medibles"
        },
        "team": {
          "eyebrow": "El equipo",
          "h2": "Quiénes están detrás de Consciencia Creativa",
          "m1_role": "Co-Fundador & Director de Tecnología",
          "m1_bio": "Ingeniero de software con más de 10 años de experiencia en desarrollo tecnológico para empresas de múltiples sectores. Lidera la arquitectura digital de Consciencia Creativa, integrando herramientas de automatización, inteligencia de negocio y análisis de datos para convertir la consultoría en soluciones medibles y escalables.",
          "m1_tag1": "Transformación Digital",
          "m1_tag2": "Inteligencia de Negocio",
          "m1_tag3": "Automatización",
          "m2_role": "Co-Fundadora & Especialista en Talento Humano",
          "m2_bio": "Con más de 15 años convirtiendo el talento humano en el motor real del negocio, Ana Isabel lidera el diseño e implementación de estrategias de desarrollo organizacional. Especialista en coaching ejecutivo, diversidad e inclusión y gestión del cambio, es miembro activa de la organización internacional de Directores de RRHH (DCH) y certificada en Ciencias del Comportamiento por la Universidad EIA.",
          "m2_tag1": "Coaching Ejecutivo",
          "m2_tag2": "Diversidad & Inclusión",
          "m2_tag3": "Gestión del Cambio"
        },
        "andanas": {
          "eyebrow": "Parte de una visión más amplia",
          "h2": "Una visión construida entre humanidad y tecnología",
          "body": "Consciencia Creativa hace parte de Andanas Group, un ecosistema humano, creativo y tecnológico desarrollado por Ana Isabel Ramírez y Andrés Rubiano del Chiaro con una idea profunda: crear soluciones, experiencias y espacios que integren consciencia humana, bienestar, innovación y tecnología de una manera más auténtica, estratégica y sostenible.",
          "col1_title": "Ana Isabel lidera",
          "col1_body": "Transformación humana · Bienestar consciente · Liderazgo · Cultura organizacional · Inteligencia emocional · Evolución personal y profesional",
          "col2_title": "Andrés aporta",
          "col2_body": "Visión tecnológica · Pensamiento sistémico · Innovación · Estrategia digital · Arquitectura de soluciones · Automatización · Transformación digital"
        },
        "cta": {
          "h2": "Tal vez este sea el momento de volver a ti.",
          "body": "Si estás buscando más claridad, equilibrio, bienestar o una forma más consciente de crecer, este espacio es para ti.",
          "btn": "Hablemos"
        }
      },
      "talleres": {
        "title": "Talleres y Experiencias de Liderazgo | Consciencia Creativa",
        "hero": {
          "eyebrow": "Desarrollo Humano & Salud Organizacional",
          "h1_main": "Equipos de alto rendimiento,",
          "h1_sub": "libres de Burnout.",
          "subtitle": "Desarrollamos el potencial de sus líderes y protegemos la salud mental de sus colaboradores mediante mentorías transformadoras, dinámicas de equipo y la metodología de perfiles DISC.",
          "cta": "Diseñar un taller para mi empresa"
        },
        "experiences": {
          "eyebrow": "Nuestras Experiencias",
          "h2": "Soluciones a medida para la cultura de su empresa",
          "c1_title": "Evaluación y Talleres DISC",
          "c1_body": "Descubra los perfiles de comportamiento de su equipo (Dominancia, Influencia, Estabilidad, Cumplimiento). Optimice la comunicación interna, reduzca malentendidos y asigne las tareas según las fortalezas innatas de cada colaborador.",
          "c1_tag": "Ideal para: Integración y Comunicación",
          "c2_title": "Prevención del Burnout",
          "c2_body": "Talleres enfocados en bienestar, gestión de energía y manejo del estrés crónico. Enseña a los equipos a establecer límites saludables y a las empresas a construir entornos psicológicamente seguros sin perder productividad.",
          "c2_tag": "Ideal para: Clima Laboral y Retención",
          "c3_title": "Mentorías de Liderazgo",
          "c3_body": "Acompañamiento personalizado e individual o grupal para líderes y mandos medios. Desarrollamos inteligencia emocional, retroalimentación asertiva, resolución de conflictos y metodologías de delegación efectiva.",
          "c3_tag": "Ideal para: Mandos Medios y Directivos"
        },
        "impact": {
          "eyebrow": "El Impacto en el Negocio",
          "h2": "¿Por qué el bienestar humano impacta la rentabilidad?",
          "body1": "Un equipo desalineado o estresado comete más errores operativos, atiende peor a sus clientes y genera un ambiente tenso que expulsa al mejor talento.",
          "body2": "Nuestras metodologías están estructuradas bajo dinámicas lúdicas y herramientas científicamente validadas que aseguran que el aprendizaje no se quede en un aula, sino que cambie los hábitos del día siguiente.",
          "bullet1": "Talleres Prácticos: Cero teoría aburrida; 100% experiencias vivenciales aplicables al entorno corporativo real.",
          "bullet2": "Reporte Post-Taller: Entregamos un diagnóstico general a Recursos Humanos sobre las alertas y fortalezas encontradas en el grupo.",
          "m1_label": "Metodología Global",
          "m1_body": "Pruebas psicométricas que mapean el ADN conductual de sus líderes.",
          "m2_label": "Rotación Estimada",
          "m2_body": "Disminución de bajas laborales mediante la oportuna contención del Burnout.",
          "m3_label": "Mentoría Cercana",
          "m3_body": "Enfoque personalizado que acelera el desarrollo de competencias blandas.",
          "m4_label": "Co-Diseñado",
          "m4_body": "Adaptamos cada dinámica al número de personas y cultura específica de su sector."
        },
        "form": {
          "h2": "Inicie la transformación cultural de su organización",
          "body": "Cuéntenos un poco sobre las necesidades actuales de su equipo y diseñaremos una propuesta conceptual de taller a la medida de su empresa.",
          "bullet1": "Formato presencial o virtual según su ubicación.",
          "bullet2": "Materiales y reportes ejecutivos incluidos.",
          "name_label": "Nombre Solicitante",
          "email_label": "Email de Empresa",
          "focus_label": "Enfoque del Taller",
          "size_label": "Tamaño del Grupo estimado",
          "size_placeholder": "Ej. 15 personas",
          "opt_disc": "Pruebas DISC & Comunicación",
          "opt_burnout": "Prevención del Burnout & Bienestar",
          "opt_mentoring": "Mentorías de Liderazgo Ejecutivo",
          "opt_undefined": "Aún no lo tengo definido",
          "btn": "Solicitar Cotización Temática",
          "success_title": "¡Solicitud Recibida!",
          "success_body": "Su requerimiento de experiencia o taller ha sido enviado de manera exitosa. Le contactaremos prontamente para coordinar una breve llamada informativa."
        }
      },
      "planeacion": {
        "title": "Planeación Inteligente: OKRs y KPIs | Consciencia Creativa",
        "hero": {
          "eyebrow": "Consultoría Avanzada en Ejecución",
          "h1_main": "Deje de medir tareas.",
          "h1_sub": "Empiece a dirigir impactos.",
          "subtitle": "Alineamos los objetivos de su junta directiva con el día a día de sus equipos a través del diseño e implementación de sistemas OKR y KPI con enfoque humano.",
          "cta": "Diseñar la estrategia de mi empresa"
        },
        "problems": {
          "eyebrow": "El síntoma empresarial",
          "h2": "¿Por qué fallan las planeaciones tradicionales?",
          "p1_title": "Estrategias desconectadas",
          "p1_body": "La dirección tiene una meta clara, pero los equipos operativos avanzan en direcciones diferentes sin saber cómo sus tareas diarias impactan al negocio.",
          "p2_title": "Métricas de vanidad",
          "p2_body": "Saturación de métricas que miden «esfuerzo» u «horas», pero que no reflejan resultados reales de rentabilidad, eficiencia o crecimiento de mercado.",
          "p3_title": "Metodologías rígidas",
          "p3_body": "Intentar copiar el modelo OKR de Google a la fuerza genera frustración, rechazo del equipo y parálisis por análisis organizacional."
        },
        "proposal": {
          "eyebrow": "Nuestra Propuesta Única",
          "h2": "Fusión Métrica y Humana: OKRs que los equipos realmente adoptan",
          "body1": "No somos solo consultores de software o de hojas de cálculo. En Consciencia Creativa entendemos que detrás de un indicador (KPI) o un resultado clave (OKR) hay personas que necesitan motivación, claridad y salud mental para lograrlos.",
          "body2": "Unimos la rigurosidad analítica de los datos con dinámicas de comunicación efectivas para erradicar la resistencia al cambio institucional.",
          "stat1_body": "De tasa de éxito en cierre de metas frente a planeaciones anuales estáticas.",
          "stat2_body": "Alineamiento de los líderes de departamento bajo un ritmo trimestral ágil.",
          "box_h4": "¿Cómo impactamos directamente en su negocio?",
          "kpi_title": "KPIs (Key Performance Indicators)",
          "kpi_body": "Definen la salud y estabilidad de su operación diaria. Le indican qué está funcionando hoy y dónde hay fugas de rendimiento.",
          "okr_title": "OKRs (Objectives and Key Results)",
          "okr_body": "Impulsan la transformación y la innovación. Enfocan el 100% de la energía del negocio hacia la meta disruptiva del trimestre.",
          "ritmo_title": "Ritmo Operativo Sostenible",
          "ritmo_body": "Diseñamos ceremonias de seguimiento semanales cortas para que los objetivos no mueran en un archivo olvidado."
        },
        "stages": {
          "h2": "Etapas del Diseño Estratégico",
          "subtitle": "Garantizamos una transición suave y de alto compromiso para su empresa.",
          "s1_title": "Diagnóstico y Visión",
          "s1_body": "Analizamos el estado actual de sus métricas, la cultura de rendición de cuentas y los cuellos de botella de la gerencia.",
          "s2_title": "Co-creación del Framework",
          "s2_body": "Sesiones de trabajo con el equipo C-Level para redactar los Objetivos anuales e institucionales, decantándolos a cada área.",
          "s3_title": "Talleres de Adopción",
          "s3_body": "Capacitación teórica y práctica para mandos medios y colaboradores, reduciendo el miedo al «control» y convirtiéndolo en autonomía.",
          "s4_title": "Ritual de Seguimiento",
          "s4_body": "Institucionalizamos los check-ins semanales y las revisiones trimestrales (CFRs) para pivotar rápido según el mercado."
        },
        "form": {
          "h2": "¿Listo para alinear a sus equipos hacia un crecimiento real?",
          "body": "Solicite una sesión estratégica de 30 minutos sin costo. Evaluaremos su sistema de metas actual y le daremos 3 recomendaciones de mejora inmediata.",
          "bullet1": "Diseñado para CEOs, Directores y Líderes de RRHH.",
          "bullet2": "Enfoque 100% personalizado según su sector comercial.",
          "name_label": "Nombre",
          "email_label": "Email Corporativo",
          "size_label": "Tamaño de la Empresa",
          "opt_1_15": "1 a 15 colaboradores",
          "opt_16_50": "16 a 50 colaboradores",
          "opt_51_200": "51 a 200 colaboradores",
          "opt_200plus": "Más de 200 colaboradores",
          "btn": "Solicitar Sesión de Consultoría",
          "success_title": "¡Información Recibida!",
          "success_body": "Muchas gracias por tu interés. Tu solicitud ha sido registrada con éxito y serás contactado prontamente por nuestro equipo para agendar la sesión."
        }
      },
      "contacto": {
        "title": "Contacto | Consciencia Creativa",
        "hero": {
          "eyebrow": "Estamos para escucharle",
          "h1": "Hablemos.",
          "subtitle": "Cuéntenos cuál es su reto. Le ayudamos a encontrar el camino."
        },
        "channels": {
          "h2": "Canales de contacto",
          "wa_title": "WhatsApp",
          "wa_desc": "+57 304 593 5556",
          "wa_link": "Respuesta en menos de 2 horas →",
          "email_title": "Email",
          "email_link": "Enviar correo →",
          "li_title": "LinkedIn",
          "li_desc": "Consciencia Creativa",
          "li_link": "Ver perfil →"
        },
        "hours": {
          "h3": "Horario de atención",
          "weekdays": "Lunes a Viernes",
          "weekdays_hours": "8:00 am – 6:00 pm",
          "saturday": "Sábados",
          "saturday_hours": "9:00 am – 1:00 pm",
          "timezone": "Zona horaria",
          "timezone_val": "Colombia (UTC-5)"
        },
        "form": {
          "h2": "Cuéntenos su reto",
          "name_label": "Nombre Completo",
          "name_placeholder": "Su nombre completo",
          "company_label": "Empresa / Organización",
          "company_placeholder": "Su empresa",
          "email_label": "Email de Contacto",
          "email_placeholder": "correo@empresa.com",
          "phone_label": "Teléfono / WhatsApp",
          "phone_placeholder": "+57 300 000 0000",
          "area_label": "Área de interés",
          "message_label": "Cuéntenos brevemente su reto o necesidad",
          "message_placeholder": "Describa en pocas palabras el reto actual de su empresa o equipo...",
          "opt_plan": "Planeación Estratégica (OKRs & KPIs)",
          "opt_workshops": "Talleres y Mentorías de Liderazgo",
          "opt_disc": "Pruebas DISC y Diagnóstico de Equipos",
          "opt_equity": "Equidad Salarial y Compensación",
          "opt_recruitment": "Reclutamiento y Selección de Talento",
          "opt_undefined": "Aún no lo tengo definido",
          "btn": "Enviar Mensaje",
          "privacy": "Sus datos son confidenciales y no serán compartidos con terceros.",
          "success_title": "¡Mensaje Enviado!",
          "success_body": "Gracias por escribirnos. Nos pondremos en contacto con usted a la brevedad para coordinar una sesión diagnóstica."
        },
        "faq": {
          "h2": "Preguntas frecuentes",
          "q1": "¿Trabajan con startups o solo con empresas grandes?",
          "a1": "Trabajamos con organizaciones de todos los tamaños: desde startups con 10 personas hasta corporaciones con más de 500 colaboradores. El tamaño no determina el valor de la intervención; sí lo hace la disposición al cambio de los líderes.",
          "q2": "¿En qué ciudades y países operan?",
          "a2": "Nuestra base principal es Colombia, con operación en Bogotá, Medellín y Cali. Sin embargo, atendemos clientes de toda Latinoamérica de forma virtual. Los talleres presenciales están disponibles en ciudades colombianas y con desplazamiento acordado para otros países.",
          "q3": "¿Los talleres son presenciales o virtuales?",
          "a3": "Ofrecemos ambas modalidades. Los talleres presenciales tienen mayor impacto en dinámicas de equipo y sesiones DISC. Las consultorías de planeación estratégica y las mentorías individuales funcionan perfectamente en formato virtual. Co-diseñamos el formato según sus necesidades.",
          "q4": "¿Cuánto dura un proyecto típico?",
          "a4": "Depende del alcance. Una sesión de talleres DISC puede realizarse en un solo día. Un proceso completo de planeación estratégica con OKRs dura entre 4 y 8 semanas. Un análisis de equidad salarial típicamente requiere 3 a 6 semanas. Siempre definimos tiempos y entregables antes de iniciar."
        }
      },
      "reclutamiento": {
        "title": "Reclutamiento y Potencial Humano | Consciencia Creativa",
        "hero": {
          "eyebrow": "Atracción & Selección de Talento Estratégico",
          "h1_main": "El talento correcto,",
          "h1_sub": "en el rol correcto, desde el primer día.",
          "subtitle": "Reclutamos basados en competencias, cultura y potencial de crecimiento. No solo llenamos vacantes; construimos el equipo que su empresa necesita para la próxima etapa.",
          "cta": "Activar proceso de selección"
        },
        "cost": {
          "eyebrow": "El costo de contratar mal",
          "h2": "Una mala contratación cuesta entre 3 y 6 veces el salario anual del cargo",
          "c1_title": "Fit cultural deficiente",
          "c1_body": "Candidatos técnicamente brillantes que no se adaptan a la cultura organizacional, generando conflictos de equipo y deserción en los primeros 90 días.",
          "c2_title": "Perfiles genéricos",
          "c2_body": "Publicaciones vagas que atraen volumen pero no calidad, saturando al equipo de RRHH con hojas de vida irrelevantes y alargando el tiempo de contratación.",
          "c3_title": "Onboarding débil",
          "c3_body": "La inversión en la contratación se pierde si el primer mes del candidato no está estructurado para garantizar su adaptación y éxito en el cargo."
        },
        "approach": {
          "eyebrow": "Nuestro Enfoque",
          "h2": "Selección basada en comportamiento, no solo en currículum",
          "body1": "Integramos la metodología DISC y entrevistas por competencias para evaluar no solo lo que el candidato sabe, sino cómo actúa bajo presión, cómo se comunica con su equipo y cómo enfrenta los retos del cargo.",
          "body2": "El resultado final es una terna documentada con un informe comparativo que le permite a la gerencia tomar una decisión informada y con respaldo técnico.",
          "stat1_body": "Reducción de la rotación temprana (primeros 6 meses) con nuestro proceso.",
          "stat2_body": "Mayor rapidez para cubrir vacantes clave frente al proceso interno tradicional.",
          "box_h4": "¿Qué incluye el proceso?",
          "p1_title": "Perfil de Cargo Estratégico",
          "p1_body": "Definimos el ADN conductual y las competencias blandas requeridas para el éxito, más allá de las responsabilidades técnicas.",
          "p2_title": "Evaluación DISC en Candidatos",
          "p2_body": "Mapeamos el perfil de comportamiento de los finalistas y lo cruzamos con la dinámica del equipo existente.",
          "p3_title": "Entrevistas por Competencias",
          "p3_body": "Metodología STAR para evaluar con evidencias concretas, eliminando las decisiones basadas solo en impresiones subjetivas."
        },
        "stages": {
          "h2": "Etapas del Proceso de Selección",
          "subtitle": "Desde la definición del perfil hasta la negociación y el onboarding.",
          "s1_title": "Diseño del Perfil Ideal",
          "s1_body": "Sesión de trabajo con el líder del cargo para definir competencias técnicas, blandas y el fit cultural del candidato ideal.",
          "s2_title": "Búsqueda y Filtro",
          "s2_body": "Publicación estratégica, búsqueda activa en LinkedIn y preselección basada en criterios objetivos definidos previamente.",
          "s3_title": "Evaluación Psicométrica",
          "s3_body": "Aplicación de pruebas DISC y de razonamiento para los candidatos finalistas, con informe de compatibilidad con el equipo.",
          "s4_title": "Terna y Acompañamiento",
          "s4_body": "Presentación de los 3 mejores candidatos con informe comparativo y acompañamiento en la negociación salarial y onboarding."
        },
        "form": {
          "h2": "Cuéntenos sobre la vacante que necesita cubrir",
          "body": "Comparta los detalles del cargo y le diseñaremos una propuesta de proceso de selección a la medida de su organización.",
          "bullet1": "Cubrimos cargos operativos, mandos medios y posiciones ejecutivas.",
          "bullet2": "Incluye evaluación DISC y entrevistas por competencias.",
          "name_label": "Nombre Solicitante",
          "name_placeholder": "Su nombre",
          "email_label": "Email de Empresa",
          "position_label": "Nombre del Cargo a Cubrir",
          "position_placeholder": "Ej. Gerente Comercial",
          "level_label": "Nivel del Cargo",
          "opt_op": "Operativo / Analista",
          "opt_coord": "Coordinador / Jefe",
          "opt_mgr": "Gerente / Director",
          "opt_exec": "C-Level / VP",
          "btn": "Activar Proceso de Selección",
          "sending": "Enviando…",
          "success_title": "¡Solicitud Recibida!",
          "success_body": "Hemos recibido su requerimiento. Le contactaremos prontamente para coordinar el inicio del proceso de selección."
        }
      },
      "equidad": {
        "title": "Equidad Salarial y Compensación | Consciencia Creativa",
        "hero": {
          "eyebrow": "Estrategia de Compensación & Equidad",
          "h1_main": "Pague de forma justa.",
          "h1_sub": "Retenga el mejor talento.",
          "subtitle": "Diseñamos estructuras salariales competitivas y equitativas basadas en datos de mercado, eliminando las brechas que generan frustración y rotación en su equipo.",
          "cta": "Solicitar análisis salarial"
        },
        "hidden_cost": {
          "eyebrow": "El costo oculto de la inequidad",
          "h2": "¿Por qué su empresa pierde talento sin entender por qué?",
          "c1_title": "Compresión salarial",
          "c1_body": "Los nuevos entrantes ganan lo mismo o más que empleados con años de experiencia, generando resentimiento silencioso y salidas inesperadas de talento clave.",
          "c2_title": "Falta de transparencia",
          "c2_body": "Sin una estructura de bandas salariales clara, las negociaciones se vuelven arbitrarias, generando desconfianza y percepción de favoritismo en la organización.",
          "c3_title": "Desfase de mercado",
          "c3_body": "Las escalas salariales no se actualizan al ritmo del mercado, haciendo que la empresa pierda candidatos de alto potencial ante la competencia local e internacional."
        },
        "proposal": {
          "eyebrow": "Nuestra Propuesta",
          "h2": "Equidad interna + competitividad externa: la fórmula para retener talento",
          "body1": "Combinamos metodologías de valoración de cargos con benchmarking de mercado real para crear una estructura salarial percibida como justa internamente y atractiva para los candidatos que desea atraer.",
          "body2": "El resultado: menos rotación, conversaciones de desempeño más claras y una propuesta de valor al empleado coherente con sus ambiciones de crecimiento.",
          "stat1_body": "Reducción de rotación voluntaria en el primer año post-implementación.",
          "stat2_body": "Benchmarking con datos reales del mercado de su sector e industria.",
          "box_h4": "Componentes del análisis",
          "c1_title": "Valoración de Cargos",
          "c1_body": "Metodología de puntos y niveles para clasificar objetivamente cada posición según impacto, complejidad y autonomía.",
          "c2_title": "Benchmarking Externo",
          "c2_body": "Comparación de sus escalas con encuestas salariales de mercado del sector, la región y el tamaño de empresa.",
          "c3_title": "Bandas Salariales",
          "c3_body": "Diseño de rangos mínimo-medio-máximo que permiten crecer dentro del cargo y vinculan el salario al desempeño."
        },
        "process": {
          "h2": "Proceso de Análisis",
          "subtitle": "Cuatro etapas para una compensación objetiva y sostenible.",
          "s1_title": "Inventario de Cargos",
          "s1_body": "Levantamiento y documentación de todos los perfiles y sus responsabilidades reales, diferenciando el cargo del titular.",
          "s2_title": "Valoración y Niveling",
          "s2_body": "Clasificación objetiva de cada cargo usando criterios de impacto organizacional, complejidad técnica y autonomía.",
          "s3_title": "Benchmarking de Mercado",
          "s3_body": "Cruce de sus escalas actuales con datos de mercado de su sector, ciudad y tamaño de empresa para identificar brechas críticas.",
          "s4_title": "Bandas y Plan de Ajuste",
          "s4_body": "Entrega de la estructura final con un plan de implementación gradual, sin impacto fiscal traumático para la empresa."
        },
        "form": {
          "h2": "¿Sus salarios retienen o expulsan talento?",
          "body": "Solicite una revisión de su estructura actual. Le entregaremos un diagnóstico de equidad con las brechas más críticas a corregir.",
          "bullet1": "Dirigido a gerentes de RRHH, CEOs y directores financieros.",
          "bullet2": "Confidencial y personalizado para su empresa y sector.",
          "name_label": "Nombre",
          "name_placeholder": "Su nombre",
          "email_label": "Email Corporativo",
          "sector_label": "Sector / Industria",
          "opt_tech": "Tecnología / Software",
          "opt_mfg": "Manufactura e Industria",
          "opt_health": "Salud y Ciencias de la Vida",
          "opt_finance": "Servicios Financieros",
          "opt_retail": "Comercio y Retail",
          "opt_edu": "Educación",
          "opt_other": "Otro",
          "positions_label": "N.° aproximado de cargos",
          "opt_less10": "Menos de 10 cargos",
          "opt_10_30": "10 a 30 cargos",
          "opt_31_80": "31 a 80 cargos",
          "opt_80plus": "Más de 80 cargos",
          "btn": "Solicitar Análisis Salarial",
          "sending": "Enviando…",
          "success_title": "¡Solicitud Recibida!",
          "success_body": "Hemos recibido su interés. Nuestro equipo se pondrá en contacto a la brevedad para coordinar el levantamiento de información."
        }
      }
    },

    en: {
      "nav": {
        "lang_aria": "Select language",
        "login": "Sign In",
        "login_aria": "Sign In",
        "services": "Services",
        "about": "About Us",
        "contact": "Contact",
        "plan": "Planning (OKRs)",
        "workshops": "Workshops & Mentoring",
        "equity": "Pay Equity",
        "recruitment": "Recruitment",
        "cta_diagnostic": "Schedule Diagnostic",
        "cta_workshop": "Get a Quote",
        "cta_activate": "Start Process",
        "cta_analysis": "Request Analysis"
      },
      "footer": {
        "tagline": "Conscious human transformation for people, leaders and organizations.",
        "ecosystem": "Part of the Andanas Group ecosystem.",
        "copyright": "© 2026 Consciencia Creativa. All rights reserved.",
        "copyright_index": "© 2026 Consciencia Creativa. Strategic Transformation & Human Wellbeing.",
        "services_heading": "Services",
        "company_heading": "Company",
        "legal_heading": "Legal",
        "plan": "Strategic Planning",
        "workshops": "Workshops & Mentoring",
        "equity": "Pay Equity",
        "recruitment": "Recruitment",
        "about": "About Us",
        "contact": "Contact",
        "privacy": "Privacy Policy",
        "terms": "Terms of Service"
      },
      "whatsapp": {
        "label": "Chat on WhatsApp",
        "label_plan": "Talk on WhatsApp"
      },
      "index": {
        "title": "Consciencia Creativa | Conscious Human Transformation",
        "hero": {
          "h1": "Evolve without losing yourself.",
          "subtitle": "A space for conscious wellbeing, human transformation and emotional leadership for people and organizations that want to grow with more clarity, balance and humanity.",
          "cta1": "I want to start",
          "cta2": "Explore services"
        },
        "purpose": {
          "eyebrow": "Our Purpose",
          "h2": "We believe in a more human way to grow.",
          "body": "We live in a fast-paced, emotionally exhausting world. Amid that constant pressure, it's easy to disconnect from yourself, from wellbeing, and from purpose. Consciencia Creativa is born as an invitation to evolve differently: more conscious, more human, more sustainable. Because wellbeing shouldn't be a reward at the end of the road — it should be part of the journey itself."
        },
        "services": {
          "h2": "Spaces to transform, reconnect and evolve",
          "s1_title": "Strategic Planning",
          "s1_body": "OKR and KPI-based framework for measurable growth. We align executive vision with operational execution to deliver high-impact results.",
          "s1_link": "See methodology and solutions",
          "s2_title": "Workshops & Experiences",
          "s2_body": "Leadership mentoring, DISC assessments and Burnout prevention programs designed to build resilient teams.",
          "s2_link": "Explore experiences",
          "s3_title": "Pay Competitiveness & Equity",
          "s3_body": "Smart compensation analysis and salary gap reduction for a fair, competitive and attractive organizational culture.",
          "s3_link": "See compensation analysis",
          "s4_title": "Recruitment & Human Potential",
          "s4_body": "Strategic recruitment and future-ready talent preparation. We identify technical skills and the cultural alignment needed for mutual success.",
          "s4_link": "Learn about our selection process"
        },
        "b2b": {
          "tag": "B2B",
          "h3": "For Companies",
          "body": "We optimize your business engine through cutting-edge management, planning and talent acquisition systems.",
          "link": "Request a business proposal →"
        },
        "b2c": {
          "tag": "B2C",
          "h3": "For Professionals",
          "body": "We design your strategic career path and prepare you to lead with purpose and reach the position you desire.",
          "link": "See individual preparation →"
        },
        "cta": {
          "h2": "Maybe this is the moment to return to yourself.",
          "body": "If you're looking for more clarity, balance, wellbeing or a more conscious way to grow, this space is for you. Schedule a free diagnostic session and let's take the first step together.",
          "benefit1": "Initial diagnosis with no commitment",
          "benefit2": "Flexible scheduling",
          "service_label": "Service of interest",
          "opt_plan": "Strategic Planning (OKRs & KPIs)",
          "opt_workshops": "Workshops & Mentoring",
          "opt_equity": "Pay Equity Analysis",
          "opt_recruitment": "Recruitment & Human Potential",
          "btn": "Schedule Free Diagnostic",
          "success": "Request sent! We'll contact you soon.",
          "sending": "Sending…",
          "name_label": "Full Name",
          "company_label": "Company / Organization",
          "email_label": "Contact Email",
          "name_placeholder": "E.g. John Smith",
          "company_placeholder": "Your company (or 'Freelance')",
          "email_placeholder": "john@company.com"
        }
      },
      "about": {
        "title": "About Us | Consciencia Creativa",
        "hero": {
          "eyebrow": "Who we are",
          "h1_main": "Humanity.",
          "h1_sub": "Consciousness. Strategy.",
          "subtitle": "Consciencia Creativa integrates conscious wellbeing, human leadership, emotional intelligence and organizational evolution to build more human ways of living, working and leading."
        },
        "purpose": {
          "eyebrow": "Our Purpose",
          "h2": "Transformation starts within.",
          "body1": "We live in a fast-paced, hyperproductive and emotionally exhausting world — one where many people feel constant pressure to perform, advance and manage multiple responsibilities at once.",
          "body2": "Consciencia Creativa is born as an invitation to evolve in a different way. More conscious. More human. More sustainable.",
          "body3": "We believe it is possible to grow professionally without disconnecting emotionally. That it is possible to lead from humanity. And that wellbeing shouldn't be a reward at the end of the road — it should be part of the journey itself."
        },
        "mission_title": "Mission",
        "mission_body": "To accompany people and organizations in evolving with more clarity, humanity and balance, integrating emotional wellbeing, conscious leadership and sustainable professional growth.",
        "vision_title": "Vision",
        "vision_body": "To build an ecosystem where wellbeing, technology, human transformation and innovation coexist harmoniously, creating new ways of living, working and leading in today's world.",
        "values": {
          "eyebrow": "What defines us",
          "h2": "Our Values",
          "v1_title": "Consciousness",
          "v1_body": "We don't believe in growth based solely on pressure or constant demand. We believe that when a person understands themselves better, they lead better, work better and live better.",
          "v2_title": "Humanity",
          "v2_body": "We integrate human sensitivity, emotional depth and emotional intelligence into every process. Wellbeing isn't a luxury — it's part of the path to real success.",
          "v3_title": "Evolution",
          "v3_body": "We accompany real processes of change: reconnecting with oneself, developing emotional tools, strengthening wellbeing and evolving from authenticity."
        },
        "method": {
          "eyebrow": "How we work",
          "h2": "How we guide your evolution",
          "subtitle": "A four-step process designed so that transformation is deep, real and sustainable — not just on paper, but in daily life and work.",
          "s1_title": "Diagnosis",
          "s1_body": "We listen, analyze data and understand the real state of the organization before proposing any solution.",
          "s2_title": "Co-creation",
          "s2_body": "We design solutions together with your team, not for your team. This ensures genuine adoption and real commitment.",
          "s3_title": "Implementation",
          "s3_body": "We accompany the rollout in daily operations, managing resistance to change and adjusting in real time.",
          "s4_title": "Follow-up",
          "s4_body": "We monitor results and deliver a documented process so the organization can operate autonomously."
        },
        "stats": {
          "companies": "Organizations transformed",
          "experience": "Years of experience",
          "areas": "Consulting areas",
          "deliverables": "Projects with measurable deliverables"
        },
        "team": {
          "eyebrow": "The team",
          "h2": "The people behind Consciencia Creativa",
          "m1_role": "Co-Founder & Technology Director",
          "m1_bio": "Software engineer with over 10 years of experience in technology development for companies across multiple sectors. He leads the digital architecture of Consciencia Creativa, integrating automation tools, business intelligence and data analytics to turn consulting into measurable, scalable solutions.",
          "m1_tag1": "Digital Transformation",
          "m1_tag2": "Business Intelligence",
          "m1_tag3": "Automation",
          "m2_role": "Co-Founder & Human Talent Specialist",
          "m2_bio": "With over 15 years turning human talent into the real engine of business, Ana Isabel leads the design and implementation of organizational development strategies. A specialist in executive coaching, diversity & inclusion and change management, she is an active member of the international HR Directors organization (DCH) and certified in Behavioral Sciences by Universidad EIA.",
          "m2_tag1": "Executive Coaching",
          "m2_tag2": "Diversity & Inclusion",
          "m2_tag3": "Change Management"
        },
        "andanas": {
          "eyebrow": "Part of a broader vision",
          "h2": "A vision built between humanity and technology",
          "body": "Consciencia Creativa is part of Andanas Group, a human, creative and technological ecosystem developed by Ana Isabel Ramírez and Andrés Rubiano del Chiaro with a profound idea: to create solutions, experiences and spaces that integrate human consciousness, wellbeing, innovation and technology in a more authentic, strategic and sustainable way.",
          "col1_title": "Ana Isabel leads",
          "col1_body": "Human transformation · Conscious wellbeing · Leadership · Organizational culture · Emotional intelligence · Personal and professional evolution",
          "col2_title": "Andrés contributes",
          "col2_body": "Technology vision · Systems thinking · Innovation · Digital strategy · Solution architecture · Automation · Digital transformation"
        },
        "cta": {
          "h2": "Maybe this is the moment to return to yourself.",
          "body": "If you're looking for more clarity, balance, wellbeing or a more conscious way to grow, this space is for you.",
          "btn": "Let's talk"
        }
      },
      "talleres": {
        "title": "Leadership Workshops & Experiences | Consciencia Creativa",
        "hero": {
          "eyebrow": "Human Development & Organizational Health",
          "h1_main": "High-performance teams,",
          "h1_sub": "Burnout-free.",
          "subtitle": "We develop the potential of your leaders and protect the mental health of your team through transformative mentoring, team dynamics and the DISC profiling methodology.",
          "cta": "Design a workshop for my company"
        },
        "experiences": {
          "eyebrow": "Our Experiences",
          "h2": "Tailored solutions for your company culture",
          "c1_title": "DISC Assessment & Workshops",
          "c1_body": "Discover your team's behavioral profiles (Dominance, Influence, Steadiness, Compliance). Optimize internal communication, reduce misunderstandings and assign tasks based on each person's innate strengths.",
          "c1_tag": "Ideal for: Integration & Communication",
          "c2_title": "Burnout Prevention",
          "c2_body": "Workshops focused on wellbeing, energy management and chronic stress. Teaches teams to set healthy boundaries and helps companies build psychologically safe environments without losing productivity.",
          "c2_tag": "Ideal for: Workplace Climate & Retention",
          "c3_title": "Leadership Mentoring",
          "c3_body": "Personalized individual or group accompaniment for leaders and middle managers. We develop emotional intelligence, assertive feedback, conflict resolution and effective delegation methodologies.",
          "c3_tag": "Ideal for: Middle Management & Executives"
        },
        "impact": {
          "eyebrow": "Business Impact",
          "h2": "Why does human wellbeing impact profitability?",
          "body1": "A misaligned or stressed team makes more operational errors, serves clients poorly and creates a tense environment that drives out top talent.",
          "body2": "Our methodologies are structured around playful dynamics and scientifically validated tools that ensure learning doesn't stay in a classroom — it changes habits the very next day.",
          "bullet1": "Practical Workshops: Zero boring theory; 100% experiential learning applicable to real corporate environments.",
          "bullet2": "Post-Workshop Report: We deliver a general diagnosis to HR about the alerts and strengths identified in the group.",
          "m1_label": "Global Methodology",
          "m1_body": "Psychometric assessments that map the behavioral DNA of your leaders.",
          "m2_label": "Estimated Turnover Reduction",
          "m2_body": "Decrease in workforce departures through timely Burnout prevention.",
          "m3_label": "Close Mentoring",
          "m3_body": "Personalized approach that accelerates the development of soft skills.",
          "m4_label": "Co-Designed",
          "m4_body": "We adapt each dynamic to the group size and specific culture of your sector."
        },
        "form": {
          "h2": "Start your organization's cultural transformation",
          "body": "Tell us about your team's current needs and we'll design a conceptual workshop proposal tailored to your company.",
          "bullet1": "In-person or virtual format depending on your location.",
          "bullet2": "Materials and executive reports included.",
          "name_label": "Requester Name",
          "email_label": "Company Email",
          "focus_label": "Workshop Focus",
          "size_label": "Estimated Group Size",
          "size_placeholder": "E.g. 15 people",
          "opt_disc": "DISC Assessment & Communication",
          "opt_burnout": "Burnout Prevention & Wellbeing",
          "opt_mentoring": "Executive Leadership Mentoring",
          "opt_undefined": "I haven't defined it yet",
          "btn": "Request a Thematic Quote",
          "success_title": "Request Received!",
          "success_body": "Your workshop or experience request has been successfully submitted. We'll contact you shortly to schedule a brief introductory call."
        }
      },
      "planeacion": {
        "title": "Smart Planning: OKRs and KPIs | Consciencia Creativa",
        "hero": {
          "eyebrow": "Advanced Execution Consulting",
          "h1_main": "Stop measuring tasks.",
          "h1_sub": "Start directing impact.",
          "subtitle": "We align your board's objectives with your teams' day-to-day through the design and implementation of OKR and KPI systems with a human focus.",
          "cta": "Design my company's strategy"
        },
        "problems": {
          "eyebrow": "The business symptom",
          "h2": "Why do traditional planning processes fail?",
          "p1_title": "Disconnected strategies",
          "p1_body": "Leadership has a clear goal, but operational teams move in different directions without knowing how their daily tasks impact the business.",
          "p2_title": "Vanity metrics",
          "p2_body": "An overload of metrics that measure \"effort\" or \"hours\" but don't reflect real results in profitability, efficiency or market growth.",
          "p3_title": "Rigid methodologies",
          "p3_body": "Forcibly copying Google's OKR model creates frustration, team resistance and organizational analysis paralysis."
        },
        "proposal": {
          "eyebrow": "Our Unique Proposal",
          "h2": "Metric + Human Fusion: OKRs that teams actually adopt",
          "body1": "We're not just software or spreadsheet consultants. At Consciencia Creativa we understand that behind every indicator (KPI) or key result (OKR) are people who need motivation, clarity and mental health to achieve them.",
          "body2": "We combine analytical data rigor with effective communication dynamics to eradicate institutional resistance to change.",
          "stat1_body": "Goal achievement success rate compared to static annual planning.",
          "stat2_body": "Alignment of department heads under an agile quarterly rhythm.",
          "box_h4": "How do we directly impact your business?",
          "kpi_title": "KPIs (Key Performance Indicators)",
          "kpi_body": "Define the health and stability of your daily operations. They tell you what's working today and where performance gaps exist.",
          "okr_title": "OKRs (Objectives and Key Results)",
          "okr_body": "Drive transformation and innovation. They focus 100% of business energy toward the quarter's disruptive goal.",
          "ritmo_title": "Sustainable Operating Rhythm",
          "ritmo_body": "We design short weekly review ceremonies so that objectives don't die in a forgotten file."
        },
        "stages": {
          "h2": "Strategic Design Phases",
          "subtitle": "We ensure a smooth, high-commitment transition for your company.",
          "s1_title": "Diagnosis & Vision",
          "s1_body": "We analyze the current state of your metrics, accountability culture and management bottlenecks.",
          "s2_title": "Framework Co-creation",
          "s2_body": "Working sessions with the C-Level team to draft annual and institutional Objectives, cascading them to each area.",
          "s3_title": "Adoption Workshops",
          "s3_body": "Theoretical and practical training for middle managers and staff, reducing fear of \"control\" and turning it into autonomy.",
          "s4_title": "Follow-up Ritual",
          "s4_body": "We institutionalize weekly check-ins and quarterly reviews (CFRs) to pivot quickly based on the market."
        },
        "form": {
          "h2": "Ready to align your teams toward real growth?",
          "body": "Request a free 30-minute strategic session. We'll evaluate your current goal system and give you 3 immediate improvement recommendations.",
          "bullet1": "Designed for CEOs, Directors and HR Leaders.",
          "bullet2": "100% personalized approach for your commercial sector.",
          "name_label": "Name",
          "email_label": "Corporate Email",
          "size_label": "Company Size",
          "opt_1_15": "1 to 15 employees",
          "opt_16_50": "16 to 50 employees",
          "opt_51_200": "51 to 200 employees",
          "opt_200plus": "More than 200 employees",
          "btn": "Request a Consulting Session",
          "success_title": "Information Received!",
          "success_body": "Thank you for your interest. Your request has been successfully registered and you will be contacted shortly by our team to schedule the session."
        }
      },
      "contacto": {
        "title": "Contact | Consciencia Creativa",
        "hero": {
          "eyebrow": "We're here to listen",
          "h1": "Let's talk.",
          "subtitle": "Tell us about your challenge. We'll help you find the way."
        },
        "channels": {
          "h2": "Contact channels",
          "wa_title": "WhatsApp",
          "wa_desc": "+57 304 593 5556",
          "wa_link": "Response within 2 hours →",
          "email_title": "Email",
          "email_link": "Send email →",
          "li_title": "LinkedIn",
          "li_desc": "Consciencia Creativa",
          "li_link": "View profile →"
        },
        "hours": {
          "h3": "Business hours",
          "weekdays": "Monday to Friday",
          "weekdays_hours": "8:00 am – 6:00 pm",
          "saturday": "Saturdays",
          "saturday_hours": "9:00 am – 1:00 pm",
          "timezone": "Time zone",
          "timezone_val": "Colombia (UTC-5)"
        },
        "form": {
          "h2": "Tell us your challenge",
          "name_label": "Full Name",
          "name_placeholder": "Your full name",
          "company_label": "Company / Organization",
          "company_placeholder": "Your company",
          "email_label": "Contact Email",
          "email_placeholder": "email@company.com",
          "phone_label": "Phone / WhatsApp",
          "phone_placeholder": "+57 300 000 0000",
          "area_label": "Area of interest",
          "message_label": "Tell us briefly about your challenge or need",
          "message_placeholder": "Briefly describe your company or team's current challenge...",
          "opt_plan": "Strategic Planning (OKRs & KPIs)",
          "opt_workshops": "Leadership Workshops & Mentoring",
          "opt_disc": "DISC Assessments & Team Diagnosis",
          "opt_equity": "Pay Equity & Compensation",
          "opt_recruitment": "Recruitment & Talent Selection",
          "opt_undefined": "I haven't defined it yet",
          "btn": "Send Message",
          "privacy": "Your data is confidential and will not be shared with third parties.",
          "success_title": "Message Sent!",
          "success_body": "Thank you for writing to us. We will contact you shortly to coordinate a diagnostic session."
        },
        "faq": {
          "h2": "Frequently asked questions",
          "q1": "Do you work with startups or only large companies?",
          "a1": "We work with organizations of all sizes: from startups with 10 people to corporations with more than 500 employees. Size doesn't determine the value of the intervention — the leaders' openness to change does.",
          "q2": "What cities and countries do you operate in?",
          "a2": "Our main base is Colombia, operating in Bogotá, Medellín and Cali. However, we serve clients across Latin America virtually. In-person workshops are available in Colombian cities and with agreed travel to other countries.",
          "q3": "Are the workshops in-person or virtual?",
          "a3": "We offer both formats. In-person workshops have greater impact for team dynamics and DISC sessions. Strategic planning consultancies and individual mentoring work perfectly in virtual format. We co-design the format based on your needs.",
          "q4": "How long does a typical project last?",
          "a4": "It depends on scope. A DISC workshop session can be done in a single day. A complete OKR strategic planning process takes 4 to 8 weeks. A pay equity analysis typically requires 3 to 6 weeks. We always define timelines and deliverables before starting."
        }
      },
      "reclutamiento": {
        "title": "Recruitment & Human Potential | Consciencia Creativa",
        "hero": {
          "eyebrow": "Strategic Talent Attraction & Selection",
          "h1_main": "The right talent,",
          "h1_sub": "in the right role, from day one.",
          "subtitle": "We recruit based on competencies, culture and growth potential. We don't just fill vacancies — we build the team your company needs for the next stage.",
          "cta": "Activate selection process"
        },
        "cost": {
          "eyebrow": "The cost of a bad hire",
          "h2": "A bad hire costs between 3 and 6 times the annual salary of the position",
          "c1_title": "Poor cultural fit",
          "c1_body": "Technically brilliant candidates who don't adapt to the organizational culture, generating team conflicts and departures within the first 90 days.",
          "c2_title": "Generic profiles",
          "c2_body": "Vague job postings that attract volume but not quality, overwhelming the HR team with irrelevant resumes and extending hiring time.",
          "c3_title": "Weak onboarding",
          "c3_body": "The investment in hiring is lost if the candidate's first month isn't structured to ensure their adaptation and success in the role."
        },
        "approach": {
          "eyebrow": "Our Approach",
          "h2": "Behavior-based selection, not just resumes",
          "body1": "We integrate the DISC methodology and competency-based interviews to evaluate not just what the candidate knows, but how they act under pressure, how they communicate with their team and how they face role challenges.",
          "body2": "The final result is a documented shortlist with a comparative report that allows management to make an informed, technically supported decision.",
          "stat1_body": "Reduction in early turnover (first 6 months) with our process.",
          "stat2_body": "Faster time to fill key vacancies compared to traditional internal processes.",
          "box_h4": "What's included in the process?",
          "p1_title": "Strategic Role Profile",
          "p1_body": "We define the behavioral DNA and soft skills required for success, beyond technical responsibilities.",
          "p2_title": "DISC Assessment for Candidates",
          "p2_body": "We map the behavioral profile of finalists and cross-reference it with the existing team's dynamics.",
          "p3_title": "Competency-Based Interviews",
          "p3_body": "STAR methodology to evaluate with concrete evidence, eliminating decisions based solely on subjective impressions."
        },
        "stages": {
          "h2": "Selection Process Phases",
          "subtitle": "From profile definition to negotiation and onboarding.",
          "s1_title": "Ideal Profile Design",
          "s1_body": "Working session with the role's leader to define technical, soft skills and cultural fit of the ideal candidate.",
          "s2_title": "Search & Filtering",
          "s2_body": "Strategic posting, active LinkedIn search and pre-selection based on previously defined objective criteria.",
          "s3_title": "Psychometric Assessment",
          "s3_body": "DISC and reasoning tests for finalist candidates, with a team compatibility report.",
          "s4_title": "Shortlist & Support",
          "s4_body": "Presentation of the top 3 candidates with a comparative report and support during salary negotiation and onboarding."
        },
        "form": {
          "h2": "Tell us about the vacancy you need to fill",
          "body": "Share the position details and we'll design a selection process proposal tailored to your organization.",
          "bullet1": "We cover operational, middle management and executive positions.",
          "bullet2": "Includes DISC assessment and competency-based interviews.",
          "name_label": "Requester Name",
          "name_placeholder": "Your name",
          "email_label": "Company Email",
          "position_label": "Position to Fill",
          "position_placeholder": "E.g. Commercial Manager",
          "level_label": "Position Level",
          "opt_op": "Operational / Analyst",
          "opt_coord": "Coordinator / Supervisor",
          "opt_mgr": "Manager / Director",
          "opt_exec": "C-Level / VP",
          "btn": "Activate Selection Process",
          "sending": "Sending…",
          "success_title": "Request Received!",
          "success_body": "We've received your request. We'll contact you shortly to coordinate the start of the selection process."
        }
      },
      "equidad": {
        "title": "Pay Equity & Compensation | Consciencia Creativa",
        "hero": {
          "eyebrow": "Compensation Strategy & Equity",
          "h1_main": "Pay fairly.",
          "h1_sub": "Retain your best talent.",
          "subtitle": "We design competitive and equitable salary structures based on market data, eliminating the gaps that generate frustration and turnover in your team.",
          "cta": "Request salary analysis"
        },
        "hidden_cost": {
          "eyebrow": "The hidden cost of inequity",
          "h2": "Why is your company losing talent without understanding why?",
          "c1_title": "Salary compression",
          "c1_body": "New hires earn the same or more than experienced employees, generating silent resentment and unexpected departures of key talent.",
          "c2_title": "Lack of transparency",
          "c2_body": "Without a clear salary band structure, negotiations become arbitrary, generating mistrust and perceptions of favoritism in the organization.",
          "c3_title": "Market misalignment",
          "c3_body": "Salary scales don't keep pace with the market, causing the company to lose high-potential candidates to local and international competitors."
        },
        "proposal": {
          "eyebrow": "Our Proposal",
          "h2": "Internal equity + external competitiveness: the formula for retaining talent",
          "body1": "We combine role valuation methodologies with real market benchmarking to create a salary structure that feels fair internally and attractive to the candidates you want to hire.",
          "body2": "The result: less turnover, clearer performance conversations and an employee value proposition aligned with their growth ambitions.",
          "stat1_body": "Reduction in voluntary turnover in the first year post-implementation.",
          "stat2_body": "Benchmarking with real market data from your sector and industry.",
          "box_h4": "Analysis components",
          "c1_title": "Role Valuation",
          "c1_body": "Points and levels methodology to objectively classify each position by impact, complexity and autonomy.",
          "c2_title": "External Benchmarking",
          "c2_body": "Comparison of your scales with market salary surveys for your sector, region and company size.",
          "c3_title": "Salary Bands",
          "c3_body": "Design of minimum-mid-maximum ranges that allow growth within the role and link salary to performance."
        },
        "process": {
          "h2": "Analysis Process",
          "subtitle": "Four stages for objective and sustainable compensation.",
          "s1_title": "Role Inventory",
          "s1_body": "Survey and documentation of all profiles and their actual responsibilities, distinguishing between the role and the person filling it.",
          "s2_title": "Valuation & Leveling",
          "s2_body": "Objective classification of each role using criteria of organizational impact, technical complexity and autonomy.",
          "s3_title": "Market Benchmarking",
          "s3_body": "Cross-reference of your current scales with market data for your sector, city and company size to identify critical gaps.",
          "s4_title": "Bands & Adjustment Plan",
          "s4_body": "Delivery of the final structure with a gradual implementation plan, without traumatic fiscal impact for the company."
        },
        "form": {
          "h2": "Are your salaries retaining or repelling talent?",
          "body": "Request a review of your current structure. We'll deliver an equity diagnosis highlighting the most critical gaps to address.",
          "bullet1": "Aimed at HR managers, CEOs and financial directors.",
          "bullet2": "Confidential and personalized for your company and sector.",
          "name_label": "Name",
          "name_placeholder": "Your name",
          "email_label": "Corporate Email",
          "sector_label": "Sector / Industry",
          "opt_tech": "Technology / Software",
          "opt_mfg": "Manufacturing & Industry",
          "opt_health": "Health & Life Sciences",
          "opt_finance": "Financial Services",
          "opt_retail": "Commerce & Retail",
          "opt_edu": "Education",
          "opt_other": "Other",
          "positions_label": "Approximate number of positions",
          "opt_less10": "Less than 10 positions",
          "opt_10_30": "10 to 30 positions",
          "opt_31_80": "31 to 80 positions",
          "opt_80plus": "More than 80 positions",
          "btn": "Request Salary Analysis",
          "sending": "Sending…",
          "success_title": "Request Received!",
          "success_body": "We've received your interest. Our team will contact you shortly to coordinate the information gathering."
        }
      }
    },

    pt: {
      "nav": {
        "lang_aria": "Selecionar idioma",
        "login": "Entrar",
        "login_aria": "Entrar",
        "services": "Serviços",
        "about": "Quem Somos",
        "contact": "Contato",
        "plan": "Planejamento (OKRs)",
        "workshops": "Workshops e Mentoria",
        "equity": "Equidade Salarial",
        "recruitment": "Recrutamento",
        "cta_diagnostic": "Agendar Diagnóstico",
        "cta_workshop": "Solicitar Orçamento",
        "cta_activate": "Iniciar Processo",
        "cta_analysis": "Solicitar Análise"
      },
      "footer": {
        "tagline": "Transformação humana consciente para pessoas, líderes e organizações.",
        "ecosystem": "Parte do ecossistema Andanas Group.",
        "copyright": "© 2026 Consciencia Creativa. Todos os direitos reservados.",
        "copyright_index": "© 2026 Consciencia Creativa. Transformação Estratégica e Bem-Estar Humano.",
        "services_heading": "Serviços",
        "company_heading": "Empresa",
        "legal_heading": "Legal",
        "plan": "Planejamento Estratégico",
        "workshops": "Workshops e Mentoria",
        "equity": "Equidade Salarial",
        "recruitment": "Recrutamento",
        "about": "Quem Somos",
        "contact": "Contato",
        "privacy": "Política de Privacidade",
        "terms": "Termos de Serviço"
      },
      "whatsapp": {
        "label": "Consultar pelo WhatsApp",
        "label_plan": "Falar pelo WhatsApp"
      },
      "index": {
        "title": "Consciencia Creativa | Transformação Humana Consciente",
        "hero": {
          "h1": "Evolua sem se perder.",
          "subtitle": "Um espaço de bem-estar consciente, transformação humana e liderança emocional para pessoas e organizações que querem crescer com mais clareza, equilíbrio e humanidade.",
          "cta1": "Quero começar",
          "cta2": "Explorar serviços"
        },
        "purpose": {
          "eyebrow": "Nosso Propósito",
          "h2": "Acreditamos em uma forma mais humana de crescer.",
          "body": "Vivemos em um mundo acelerado e emocionalmente exaustivo. No meio dessa pressão constante, é fácil se desconectar de si mesmo, do bem-estar e do propósito. A Consciencia Creativa nasce como um convite para evoluir de forma diferente: mais consciente, mais humana, mais sustentável. Porque o bem-estar não deveria ser uma recompensa no final do caminho — deveria ser parte do caminho em si."
        },
        "services": {
          "h2": "Espaços para transformar, reconectar e evoluir",
          "s1_title": "Planejamento Estratégico",
          "s1_body": "Estrutura baseada em OKRs e KPIs para um crescimento mensurável. Alinhamos a visão executiva com a execução operacional para garantir resultados de alto impacto.",
          "s1_link": "Ver metodologia e soluções",
          "s2_title": "Workshops e Experiências",
          "s2_body": "Mentoria de liderança, avaliações DISC e programas de prevenção de Burnout projetados para construir equipes resilientes.",
          "s2_link": "Conhecer experiências",
          "s3_title": "Competitividade e Equidade Salarial",
          "s3_body": "Análise inteligente de remuneração e redução de disparidades salariais para uma cultura organizacional justa, competitiva e atrativa.",
          "s3_link": "Ver análise de remuneração",
          "s4_title": "Recrutamento e Potencial Humano",
          "s4_body": "Recrutamento estratégico e preparação de talentos para o futuro. Identificamos habilidades técnicas e o alinhamento cultural necessário para o sucesso mútuo.",
          "s4_link": "Conhecer o processo de seleção"
        },
        "b2b": {
          "tag": "B2B",
          "h3": "Para Empresas",
          "body": "Otimizamos o motor do seu negócio por meio de sistemas de gestão, planejamento e atração de talentos de ponta.",
          "link": "Solicitar proposta empresarial →"
        },
        "b2c": {
          "tag": "B2C",
          "h3": "Para Profissionais",
          "body": "Desenhamos sua trajetória estratégica e te preparamos para liderar com propósito e alcançar o cargo desejado.",
          "link": "Ver preparação individual →"
        },
        "cta": {
          "h2": "Talvez este seja o momento de voltar para você.",
          "body": "Se você está buscando mais clareza, equilíbrio, bem-estar ou uma forma mais consciente de crescer, este espaço é para você. Agende uma sessão diagnóstica gratuita e demos juntos o primeiro passo.",
          "benefit1": "Diagnóstico inicial sem compromisso",
          "benefit2": "Flexibilidade de horários",
          "service_label": "Serviço de interesse",
          "opt_plan": "Planejamento Estratégico (OKRs & KPIs)",
          "opt_workshops": "Workshops e Mentoria",
          "opt_equity": "Análise de Equidade Salarial",
          "opt_recruitment": "Recrutamento e Potencial Humano",
          "btn": "Agendar Diagnóstico Gratuito",
          "success": "Solicitação enviada! Entraremos em contato em breve.",
          "sending": "Enviando…",
          "name_label": "Nome Completo",
          "company_label": "Empresa / Organização",
          "email_label": "E-mail de Contato",
          "name_placeholder": "Ex. João Silva",
          "company_placeholder": "Sua empresa (ou 'Freelancer')",
          "email_placeholder": "joao@empresa.com"
        }
      },
      "about": {
        "title": "Quem Somos | Consciencia Creativa",
        "hero": {
          "eyebrow": "Quem somos",
          "h1_main": "Humanidade.",
          "h1_sub": "Consciência. Estratégia.",
          "subtitle": "A Consciencia Creativa integra bem-estar consciente, liderança humana, inteligência emocional e evolução organizacional para construir formas mais humanas de viver, trabalhar e liderar."
        },
        "purpose": {
          "eyebrow": "Nosso Propósito",
          "h2": "A transformação começa por dentro.",
          "body1": "Vivemos em um mundo acelerado, hiperprodutivo e emocionalmente exaustivo — um mundo onde muitas pessoas sentem pressão constante para render, avançar e sustentar múltiplas responsabilidades ao mesmo tempo.",
          "body2": "A Consciencia Creativa nasce como um convite para evoluir de uma forma diferente. Mais consciente. Mais humana. Mais sustentável.",
          "body3": "Acreditamos que é possível crescer profissionalmente sem se desconectar emocionalmente. Que é possível liderar a partir da humanidade. E que o bem-estar não deveria ser uma recompensa no final do caminho — deveria ser parte do próprio caminho."
        },
        "mission_title": "Missão",
        "mission_body": "Acompanhar pessoas e organizações na evolução com mais clareza, humanidade e equilíbrio, integrando bem-estar emocional, liderança consciente e crescimento profissional sustentável.",
        "vision_title": "Visão",
        "vision_body": "Construir um ecossistema onde bem-estar, tecnologia, transformação humana e inovação coexistam de forma harmoniosa, criando novas formas de viver, trabalhar e liderar no mundo atual.",
        "values": {
          "eyebrow": "O que nos define",
          "h2": "Nossos Valores",
          "v1_title": "Consciência",
          "v1_body": "Não acreditamos em crescimento baseado apenas em pressão ou exigência constante. Acreditamos que quando uma pessoa se entende melhor, lidera melhor, trabalha melhor e vive melhor.",
          "v2_title": "Humanidade",
          "v2_body": "Integramos sensibilidade humana, profundidade emocional e inteligência emocional em cada processo. O bem-estar não é um luxo — é parte do caminho para o sucesso real.",
          "v3_title": "Evolução",
          "v3_body": "Acompanhamos processos de mudança real: reconectar-se consigo mesmo, desenvolver ferramentas emocionais, fortalecer o bem-estar e evoluir a partir da autenticidade."
        },
        "method": {
          "eyebrow": "Como trabalhamos",
          "h2": "Como acompanhamos sua evolução",
          "subtitle": "Um processo de quatro momentos projetado para que a transformação seja profunda, real e sustentável — não apenas no papel, mas na vida e no trabalho diário.",
          "s1_title": "Diagnóstico",
          "s1_body": "Ouvimos, analisamos dados e entendemos o estado real da organização antes de propor qualquer solução.",
          "s2_title": "Co-criação",
          "s2_body": "Desenhamos soluções junto com sua equipe, não para sua equipe. Isso garante adoção real e comprometimento genuíno.",
          "s3_title": "Implementação",
          "s3_body": "Acompanhamos o lançamento nas operações diárias, gerenciando a resistência à mudança e ajustando em tempo real.",
          "s4_title": "Acompanhamento",
          "s4_body": "Monitoramos os resultados e entregamos o processo documentado para que a empresa opere de forma autônoma."
        },
        "stats": {
          "companies": "Organizações transformadas",
          "experience": "Anos de experiência",
          "areas": "Áreas de consultoria",
          "deliverables": "Projetos com entregáveis mensuráveis"
        },
        "team": {
          "eyebrow": "A equipe",
          "h2": "As pessoas por trás da Consciencia Creativa",
          "m1_role": "Co-Fundador & Diretor de Tecnologia",
          "m1_bio": "Engenheiro de software com mais de 10 anos de experiência em desenvolvimento tecnológico para empresas de múltiplos setores. Lidera a arquitetura digital da Consciencia Creativa, integrando ferramentas de automação, inteligência de negócios e análise de dados para transformar a consultoria em soluções mensuráveis e escaláveis.",
          "m1_tag1": "Transformação Digital",
          "m1_tag2": "Inteligência de Negócios",
          "m1_tag3": "Automação",
          "m2_role": "Co-Fundadora & Especialista em Talentos Humanos",
          "m2_bio": "Com mais de 15 anos transformando talentos humanos no verdadeiro motor dos negócios, Ana Isabel lidera o design e a implementação de estratégias de desenvolvimento organizacional. Especialista em coaching executivo, diversidade e inclusão e gestão de mudanças, é membro ativa da organização internacional de Diretores de RH (DCH) e certificada em Ciências do Comportamento pela Universidad EIA.",
          "m2_tag1": "Coaching Executivo",
          "m2_tag2": "Diversidade & Inclusão",
          "m2_tag3": "Gestão de Mudanças"
        },
        "andanas": {
          "eyebrow": "Parte de uma visão mais ampla",
          "h2": "Uma visão construída entre humanidade e tecnologia",
          "body": "A Consciencia Creativa faz parte do Andanas Group, um ecossistema humano, criativo e tecnológico desenvolvido por Ana Isabel Ramírez e Andrés Rubiano del Chiaro com uma ideia profunda: criar soluções, experiências e espaços que integrem consciência humana, bem-estar, inovação e tecnologia de forma mais autêntica, estratégica e sustentável.",
          "col1_title": "Ana Isabel lidera",
          "col1_body": "Transformação humana · Bem-estar consciente · Liderança · Cultura organizacional · Inteligência emocional · Evolução pessoal e profissional",
          "col2_title": "Andrés contribui",
          "col2_body": "Visão tecnológica · Pensamento sistêmico · Inovação · Estratégia digital · Arquitetura de soluções · Automação · Transformação digital"
        },
        "cta": {
          "h2": "Talvez este seja o momento de voltar para você.",
          "body": "Se você está buscando mais clareza, equilíbrio, bem-estar ou uma forma mais consciente de crescer, este espaço é para você.",
          "btn": "Vamos conversar"
        }
      },
      "talleres": {
        "title": "Workshops e Experiências de Liderança | Consciencia Creativa",
        "hero": {
          "eyebrow": "Desenvolvimento Humano & Saúde Organizacional",
          "h1_main": "Equipes de alto desempenho,",
          "h1_sub": "livres de Burnout.",
          "subtitle": "Desenvolvemos o potencial dos seus líderes e protegemos a saúde mental da sua equipe por meio de mentorias transformadoras, dinâmicas de equipe e a metodologia de perfis DISC.",
          "cta": "Criar um workshop para minha empresa"
        },
        "experiences": {
          "eyebrow": "Nossas Experiências",
          "h2": "Soluções personalizadas para a cultura da sua empresa",
          "c1_title": "Avaliação e Workshops DISC",
          "c1_body": "Descubra os perfis comportamentais da sua equipe (Dominância, Influência, Estabilidade, Conformidade). Otimize a comunicação interna, reduza mal-entendidos e atribua tarefas com base nas forças inatas de cada colaborador.",
          "c1_tag": "Ideal para: Integração e Comunicação",
          "c2_title": "Prevenção do Burnout",
          "c2_body": "Workshops focados em bem-estar, gestão de energia e manejo do estresse crônico. Ensina as equipes a estabelecer limites saudáveis e ajuda as empresas a construir ambientes psicologicamente seguros sem perder produtividade.",
          "c2_tag": "Ideal para: Clima de Trabalho e Retenção",
          "c3_title": "Mentorias de Liderança",
          "c3_body": "Acompanhamento personalizado individual ou em grupo para líderes e gerentes intermediários. Desenvolvemos inteligência emocional, feedback assertivo, resolução de conflitos e metodologias de delegação eficaz.",
          "c3_tag": "Ideal para: Gestores e Executivos"
        },
        "impact": {
          "eyebrow": "O Impacto no Negócio",
          "h2": "Por que o bem-estar humano impacta a lucratividade?",
          "body1": "Uma equipe desalinhada ou estressada comete mais erros operacionais, atende mal seus clientes e cria um ambiente tenso que expulsa os melhores talentos.",
          "body2": "Nossas metodologias são estruturadas em dinâmicas lúdicas e ferramentas cientificamente validadas que garantem que o aprendizado não fique em sala de aula — ele muda os hábitos no dia seguinte.",
          "bullet1": "Workshops Práticos: Zero teoria entediante; 100% experiências vivenciais aplicáveis ao ambiente corporativo real.",
          "bullet2": "Relatório Pós-Workshop: Entregamos um diagnóstico geral ao RH sobre os alertas e pontos fortes identificados no grupo.",
          "m1_label": "Metodologia Global",
          "m1_body": "Avaliações psicométricas que mapeiam o DNA comportamental dos seus líderes.",
          "m2_label": "Rotatividade Estimada",
          "m2_body": "Redução de saídas por meio da prevenção oportuna do Burnout.",
          "m3_label": "Mentoria Próxima",
          "m3_body": "Abordagem personalizada que acelera o desenvolvimento de habilidades interpessoais.",
          "m4_label": "Co-Criado",
          "m4_body": "Adaptamos cada dinâmica ao tamanho do grupo e à cultura específica do seu setor."
        },
        "form": {
          "h2": "Inicie a transformação cultural da sua organização",
          "body": "Conte-nos sobre as necessidades atuais da sua equipe e criaremos uma proposta conceitual de workshop sob medida para sua empresa.",
          "bullet1": "Formato presencial ou virtual de acordo com sua localização.",
          "bullet2": "Materiais e relatórios executivos incluídos.",
          "name_label": "Nome do Solicitante",
          "email_label": "Email Corporativo",
          "focus_label": "Foco do Workshop",
          "size_label": "Tamanho estimado do grupo",
          "size_placeholder": "Ex. 15 pessoas",
          "opt_disc": "Avaliação DISC & Comunicação",
          "opt_burnout": "Prevenção do Burnout & Bem-Estar",
          "opt_mentoring": "Mentoria de Liderança Executiva",
          "opt_undefined": "Ainda não defini",
          "btn": "Solicitar Orçamento Temático",
          "success_title": "Solicitação Recebida!",
          "success_body": "Sua solicitação de workshop ou experiência foi enviada com sucesso. Entraremos em contato em breve para agendar uma breve chamada informativa."
        }
      },
      "planeacion": {
        "title": "Planejamento Inteligente: OKRs e KPIs | Consciencia Creativa",
        "hero": {
          "eyebrow": "Consultoria Avançada em Execução",
          "h1_main": "Pare de medir tarefas.",
          "h1_sub": "Comece a dirigir impactos.",
          "subtitle": "Alinhamos os objetivos do seu conselho com o dia a dia das suas equipes por meio do design e implementação de sistemas de OKR e KPI com foco humano.",
          "cta": "Criar a estratégia da minha empresa"
        },
        "problems": {
          "eyebrow": "O sintoma empresarial",
          "h2": "Por que os planejamentos tradicionais falham?",
          "p1_title": "Estratégias desconectadas",
          "p1_body": "A liderança tem uma meta clara, mas as equipes operacionais avançam em direções diferentes sem saber como suas tarefas diárias impactam o negócio.",
          "p2_title": "Métricas de vaidade",
          "p2_body": "Saturação de métricas que medem «esforço» ou «horas», mas que não refletem resultados reais de rentabilidade, eficiência ou crescimento de mercado.",
          "p3_title": "Metodologias rígidas",
          "p3_body": "Tentar copiar o modelo OKR do Google à força gera frustração, resistência da equipe e paralisia por análise organizacional."
        },
        "proposal": {
          "eyebrow": "Nossa Proposta Única",
          "h2": "Fusão Métrica e Humana: OKRs que as equipes realmente adotam",
          "body1": "Não somos apenas consultores de software ou planilhas. Na Consciencia Creativa entendemos que por trás de um indicador (KPI) ou resultado-chave (OKR) há pessoas que precisam de motivação, clareza e saúde mental para alcançá-los.",
          "body2": "Combinamos o rigor analítico dos dados com dinâmicas de comunicação eficazes para erradicar a resistência institucional à mudança.",
          "stat1_body": "Taxa de sucesso no fechamento de metas em comparação com planejamentos anuais estáticos.",
          "stat2_body": "Alinhamento dos líderes de departamento sob um ritmo trimestral ágil.",
          "box_h4": "Como impactamos diretamente no seu negócio?",
          "kpi_title": "KPIs (Key Performance Indicators)",
          "kpi_body": "Definem a saúde e estabilidade da sua operação diária. Indicam o que está funcionando hoje e onde há vazamentos de desempenho.",
          "okr_title": "OKRs (Objectives and Key Results)",
          "okr_body": "Impulsionam a transformação e a inovação. Concentram 100% da energia do negócio na meta disruptiva do trimestre.",
          "ritmo_title": "Ritmo Operacional Sustentável",
          "ritmo_body": "Projetamos cerimônias de acompanhamento semanais curtas para que os objetivos não morram em um arquivo esquecido."
        },
        "stages": {
          "h2": "Etapas do Design Estratégico",
          "subtitle": "Garantimos uma transição suave e de alto comprometimento para sua empresa.",
          "s1_title": "Diagnóstico e Visão",
          "s1_body": "Analisamos o estado atual das suas métricas, a cultura de prestação de contas e os gargalos da gestão.",
          "s2_title": "Co-criação do Framework",
          "s2_body": "Sessões de trabalho com a equipe C-Level para redigir os Objetivos anuais e institucionais, desdobrando-os em cada área.",
          "s3_title": "Workshops de Adoção",
          "s3_body": "Treinamento teórico e prático para gestores intermediários e colaboradores, reduzindo o medo do «controle» e transformando-o em autonomia.",
          "s4_title": "Ritual de Acompanhamento",
          "s4_body": "Institucionalizamos os check-ins semanais e as revisões trimestrais (CFRs) para pivotar rapidamente conforme o mercado."
        },
        "form": {
          "h2": "Pronto para alinhar suas equipes em direção a um crescimento real?",
          "body": "Solicite uma sessão estratégica gratuita de 30 minutos. Avaliaremos seu sistema atual de metas e daremos 3 recomendações de melhoria imediata.",
          "bullet1": "Destinado a CEOs, Diretores e Líderes de RH.",
          "bullet2": "Abordagem 100% personalizada para o seu setor comercial.",
          "name_label": "Nome",
          "email_label": "Email Corporativo",
          "size_label": "Tamanho da Empresa",
          "opt_1_15": "1 a 15 colaboradores",
          "opt_16_50": "16 a 50 colaboradores",
          "opt_51_200": "51 a 200 colaboradores",
          "opt_200plus": "Mais de 200 colaboradores",
          "btn": "Solicitar Sessão de Consultoria",
          "success_title": "Informações Recebidas!",
          "success_body": "Muito obrigado pelo seu interesse. Sua solicitação foi registrada com sucesso e você será contatado em breve pela nossa equipe para agendar a sessão."
        }
      },
      "contacto": {
        "title": "Contato | Consciencia Creativa",
        "hero": {
          "eyebrow": "Estamos aqui para ouvir",
          "h1": "Vamos conversar.",
          "subtitle": "Conte-nos sobre seu desafio. Ajudamos você a encontrar o caminho."
        },
        "channels": {
          "h2": "Canais de contato",
          "wa_title": "WhatsApp",
          "wa_desc": "+57 304 593 5556",
          "wa_link": "Resposta em menos de 2 horas →",
          "email_title": "Email",
          "email_link": "Enviar email →",
          "li_title": "LinkedIn",
          "li_desc": "Consciencia Creativa",
          "li_link": "Ver perfil →"
        },
        "hours": {
          "h3": "Horário de atendimento",
          "weekdays": "Segunda a Sexta",
          "weekdays_hours": "8:00 – 18:00",
          "saturday": "Sábados",
          "saturday_hours": "9:00 – 13:00",
          "timezone": "Fuso horário",
          "timezone_val": "Colômbia (UTC-5)"
        },
        "form": {
          "h2": "Conte-nos seu desafio",
          "name_label": "Nome Completo",
          "name_placeholder": "Seu nome completo",
          "company_label": "Empresa / Organização",
          "company_placeholder": "Sua empresa",
          "email_label": "Email de Contato",
          "email_placeholder": "email@empresa.com",
          "phone_label": "Telefone / WhatsApp",
          "phone_placeholder": "+57 300 000 0000",
          "area_label": "Área de interesse",
          "message_label": "Conte-nos brevemente seu desafio ou necessidade",
          "message_placeholder": "Descreva brevemente o desafio atual da sua empresa ou equipe...",
          "opt_plan": "Planejamento Estratégico (OKRs & KPIs)",
          "opt_workshops": "Workshops e Mentorias de Liderança",
          "opt_disc": "Avaliações DISC e Diagnóstico de Equipes",
          "opt_equity": "Equidade Salarial e Remuneração",
          "opt_recruitment": "Recrutamento e Seleção de Talentos",
          "opt_undefined": "Ainda não defini",
          "btn": "Enviar Mensagem",
          "privacy": "Seus dados são confidenciais e não serão compartilhados com terceiros.",
          "success_title": "Mensagem Enviada!",
          "success_body": "Obrigado por nos escrever. Entraremos em contato em breve para coordenar uma sessão diagnóstica."
        },
        "faq": {
          "h2": "Perguntas frequentes",
          "q1": "Vocês trabalham com startups ou apenas com grandes empresas?",
          "a1": "Trabalhamos com organizações de todos os tamanhos: desde startups com 10 pessoas até corporações com mais de 500 colaboradores. O tamanho não determina o valor da intervenção — a disposição para mudança dos líderes, sim.",
          "q2": "Em quais cidades e países vocês atuam?",
          "a2": "Nossa base principal é a Colômbia, com operação em Bogotá, Medellín e Cali. No entanto, atendemos clientes de toda a América Latina de forma virtual. Os workshops presenciais estão disponíveis em cidades colombianas e com deslocamento acordado para outros países.",
          "q3": "Os workshops são presenciais ou virtuais?",
          "a3": "Oferecemos ambas as modalidades. Os workshops presenciais têm maior impacto em dinâmicas de equipe e sessões DISC. As consultorias de planejamento estratégico e as mentorias individuais funcionam perfeitamente no formato virtual. Co-criamos o formato de acordo com suas necessidades.",
          "q4": "Quanto tempo dura um projeto típico?",
          "a4": "Depende do escopo. Uma sessão de workshops DISC pode ser feita em um único dia. Um processo completo de planejamento estratégico com OKRs dura de 4 a 8 semanas. Uma análise de equidade salarial normalmente requer de 3 a 6 semanas. Sempre definimos prazos e entregáveis antes de começar."
        }
      },
      "reclutamiento": {
        "title": "Recrutamento e Potencial Humano | Consciencia Creativa",
        "hero": {
          "eyebrow": "Atração & Seleção Estratégica de Talentos",
          "h1_main": "O talento certo,",
          "h1_sub": "no papel certo, desde o primeiro dia.",
          "subtitle": "Recrutamos com base em competências, cultura e potencial de crescimento. Não apenas preenchemos vagas — construímos a equipe que sua empresa precisa para a próxima etapa.",
          "cta": "Ativar processo de seleção"
        },
        "cost": {
          "eyebrow": "O custo de contratar errado",
          "h2": "Uma má contratação custa entre 3 e 6 vezes o salário anual do cargo",
          "c1_title": "Fit cultural deficiente",
          "c1_body": "Candidatos tecnicamente brilhantes que não se adaptam à cultura organizacional, gerando conflitos de equipe e desistências nos primeiros 90 dias.",
          "c2_title": "Perfis genéricos",
          "c2_body": "Publicações vagas que atraem volume mas não qualidade, sobrecarregando a equipe de RH com currículos irrelevantes e prolongando o tempo de contratação.",
          "c3_title": "Onboarding fraco",
          "c3_body": "O investimento na contratação se perde se o primeiro mês do candidato não estiver estruturado para garantir sua adaptação e sucesso no cargo."
        },
        "approach": {
          "eyebrow": "Nossa Abordagem",
          "h2": "Seleção baseada em comportamento, não apenas em currículo",
          "body1": "Integramos a metodologia DISC e entrevistas por competências para avaliar não apenas o que o candidato sabe, mas como age sob pressão, como se comunica com sua equipe e como enfrenta os desafios do cargo.",
          "body2": "O resultado final é uma lista documentada com um relatório comparativo que permite à gerência tomar uma decisão informada e com respaldo técnico.",
          "stat1_body": "Redução na rotatividade precoce (primeiros 6 meses) com nosso processo.",
          "stat2_body": "Maior rapidez para preencher vagas-chave em comparação com processos internos tradicionais.",
          "box_h4": "O que está incluído no processo?",
          "p1_title": "Perfil de Cargo Estratégico",
          "p1_body": "Definimos o DNA comportamental e as habilidades interpessoais necessárias para o sucesso, além das responsabilidades técnicas.",
          "p2_title": "Avaliação DISC nos Candidatos",
          "p2_body": "Mapeamos o perfil comportamental dos finalistas e cruzamos com a dinâmica da equipe existente.",
          "p3_title": "Entrevistas por Competências",
          "p3_body": "Metodologia STAR para avaliar com evidências concretas, eliminando decisões baseadas apenas em impressões subjetivas."
        },
        "stages": {
          "h2": "Etapas do Processo de Seleção",
          "subtitle": "Da definição do perfil à negociação e onboarding.",
          "s1_title": "Design do Perfil Ideal",
          "s1_body": "Sessão de trabalho com o líder do cargo para definir competências técnicas, habilidades interpessoais e o fit cultural do candidato ideal.",
          "s2_title": "Busca e Filtragem",
          "s2_body": "Publicação estratégica, busca ativa no LinkedIn e pré-seleção com base em critérios objetivos definidos previamente.",
          "s3_title": "Avaliação Psicométrica",
          "s3_body": "Aplicação de testes DISC e de raciocínio para os candidatos finalistas, com relatório de compatibilidade com a equipe.",
          "s4_title": "Shortlist e Acompanhamento",
          "s4_body": "Apresentação dos 3 melhores candidatos com relatório comparativo e suporte na negociação salarial e onboarding."
        },
        "form": {
          "h2": "Conte-nos sobre a vaga que precisa preencher",
          "body": "Compartilhe os detalhes do cargo e criaremos uma proposta de processo de seleção sob medida para sua organização.",
          "bullet1": "Cobrimos cargos operacionais, gerência intermediária e posições executivas.",
          "bullet2": "Inclui avaliação DISC e entrevistas por competências.",
          "name_label": "Nome do Solicitante",
          "name_placeholder": "Seu nome",
          "email_label": "Email Corporativo",
          "position_label": "Nome do Cargo a Preencher",
          "position_placeholder": "Ex. Gerente Comercial",
          "level_label": "Nível do Cargo",
          "opt_op": "Operacional / Analista",
          "opt_coord": "Coordenador / Supervisor",
          "opt_mgr": "Gerente / Diretor",
          "opt_exec": "C-Level / VP",
          "btn": "Ativar Processo de Seleção",
          "sending": "Enviando…",
          "success_title": "Solicitação Recebida!",
          "success_body": "Recebemos sua solicitação. Entraremos em contato em breve para coordenar o início do processo de seleção."
        }
      },
      "equidad": {
        "title": "Equidade Salarial e Remuneração | Consciencia Creativa",
        "hero": {
          "eyebrow": "Estratégia de Remuneração & Equidade",
          "h1_main": "Pague de forma justa.",
          "h1_sub": "Retenha os melhores talentos.",
          "subtitle": "Criamos estruturas salariais competitivas e equitativas baseadas em dados de mercado, eliminando as lacunas que geram frustração e rotatividade na sua equipe.",
          "cta": "Solicitar análise salarial"
        },
        "hidden_cost": {
          "eyebrow": "O custo oculto da inequidade",
          "h2": "Por que sua empresa perde talentos sem entender por quê?",
          "c1_title": "Compressão salarial",
          "c1_body": "Novos contratados ganham o mesmo ou mais que funcionários com anos de experiência, gerando ressentimento silencioso e saídas inesperadas de talentos-chave.",
          "c2_title": "Falta de transparência",
          "c2_body": "Sem uma estrutura clara de faixas salariais, as negociações se tornam arbitrárias, gerando desconfiança e percepção de favoritismo na organização.",
          "c3_title": "Defasagem de mercado",
          "c3_body": "As escalas salariais não acompanham o ritmo do mercado, fazendo a empresa perder candidatos de alto potencial para concorrentes locais e internacionais."
        },
        "proposal": {
          "eyebrow": "Nossa Proposta",
          "h2": "Equidade interna + competitividade externa: a fórmula para reter talentos",
          "body1": "Combinamos metodologias de avaliação de cargos com benchmarking real de mercado para criar uma estrutura salarial percebida como justa internamente e atrativa para os candidatos que você deseja contratar.",
          "body2": "O resultado: menos rotatividade, conversas de desempenho mais claras e uma proposta de valor ao colaborador coerente com suas ambições de crescimento.",
          "stat1_body": "Redução na rotatividade voluntária no primeiro ano pós-implementação.",
          "stat2_body": "Benchmarking com dados reais do mercado do seu setor e indústria.",
          "box_h4": "Componentes da análise",
          "c1_title": "Avaliação de Cargos",
          "c1_body": "Metodologia de pontos e níveis para classificar objetivamente cada posição por impacto, complexidade e autonomia.",
          "c2_title": "Benchmarking Externo",
          "c2_body": "Comparação das suas escalas com pesquisas salariais de mercado do setor, região e tamanho de empresa.",
          "c3_title": "Faixas Salariais",
          "c3_body": "Design de faixas mínimo-médio-máximo que permitem crescer dentro do cargo e vinculam o salário ao desempenho."
        },
        "process": {
          "h2": "Processo de Análise",
          "subtitle": "Quatro etapas para uma remuneração objetiva e sustentável.",
          "s1_title": "Inventário de Cargos",
          "s1_body": "Levantamento e documentação de todos os perfis e suas responsabilidades reais, diferenciando o cargo do titular.",
          "s2_title": "Avaliação e Nivelamento",
          "s2_body": "Classificação objetiva de cada cargo usando critérios de impacto organizacional, complexidade técnica e autonomia.",
          "s3_title": "Benchmarking de Mercado",
          "s3_body": "Cruzamento das suas escalas atuais com dados de mercado do seu setor, cidade e tamanho de empresa para identificar lacunas críticas.",
          "s4_title": "Faixas e Plano de Ajuste",
          "s4_body": "Entrega da estrutura final com um plano de implementação gradual, sem impacto fiscal traumático para a empresa."
        },
        "form": {
          "h2": "Seus salários retêm ou repelem talentos?",
          "body": "Solicite uma revisão da sua estrutura atual. Entregaremos um diagnóstico de equidade com as lacunas mais críticas a corrigir.",
          "bullet1": "Destinado a gerentes de RH, CEOs e diretores financeiros.",
          "bullet2": "Confidencial e personalizado para sua empresa e setor.",
          "name_label": "Nome",
          "name_placeholder": "Seu nome",
          "email_label": "Email Corporativo",
          "sector_label": "Setor / Indústria",
          "opt_tech": "Tecnologia / Software",
          "opt_mfg": "Manufatura e Indústria",
          "opt_health": "Saúde e Ciências da Vida",
          "opt_finance": "Serviços Financeiros",
          "opt_retail": "Comércio e Varejo",
          "opt_edu": "Educação",
          "opt_other": "Outro",
          "positions_label": "N.° aproximado de cargos",
          "opt_less10": "Menos de 10 cargos",
          "opt_10_30": "10 a 30 cargos",
          "opt_31_80": "31 a 80 cargos",
          "opt_80plus": "Mais de 80 cargos",
          "btn": "Solicitar Análise Salarial",
          "sending": "Enviando…",
          "success_title": "Solicitação Recebida!",
          "success_body": "Recebemos seu interesse. Nossa equipe entrará em contato em breve para coordenar o levantamento de informações."
        }
      }
    }
  };

  /* ── Inject switcher styles ──────────────────────────────── */
  document.head.insertAdjacentHTML('beforeend', `<style id="i18n-styles">
    /* Dropdown animation */
    #lang-menu { transform-origin: top right; }
    #lang-menu.lang-open {
      display: block !important;
      animation: i18nFadeIn .15s ease forwards;
    }
    @keyframes i18nFadeIn {
      from { opacity: 0; transform: scale(.95) translateY(-6px); }
      to   { opacity: 1; transform: scale(1)  translateY(0); }
    }
    /* Active language highlight */
    [data-lang-option].lang-active { color: #436653; font-weight: 700; }
    [data-lang-option].lang-active .lang-check { display: inline-block !important; }
    /* Chevron rotation when open */
    #lang-switcher-btn[aria-expanded="true"] .lang-chevron { transform: rotate(180deg); }
    .lang-chevron { display: inline-block; transition: transform .2s ease; vertical-align: middle; }
  </style>`);

  /* ── Helpers ─────────────────────────────────────────────── */
  function get(obj, path) {
    return path.split('.').reduce((o, k) => (o != null ? o[k] : undefined), obj);
  }

  function detectLang() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;
    const browser = (navigator.language || 'es').split('-')[0].toLowerCase();
    return SUPPORTED.includes(browser) ? browser : DEFAULT;
  }

  /* ── Load locale (synchronous — no fetch needed) ─────────── */
  function loadLang(lang) {
    return LOCALES[lang] || null;
  }

  /* ── Apply translations ──────────────────────────────────── */
  function applyTranslations(t) {
    // Text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const v = get(t, el.dataset.i18n);
      if (v != null) el.textContent = v;
    });
    // HTML content (for bold, breaks, etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const v = get(t, el.dataset.i18nHtml);
      if (v != null) el.innerHTML = v;
    });
    // Attributes (format: "attr:key;attr2:key2")
    document.querySelectorAll('[data-i18n-attr]').forEach(el => {
      el.dataset.i18nAttr.split(';').forEach(pair => {
        const [attr, key] = pair.trim().split(':');
        const v = get(t, key && key.trim());
        if (v != null) el.setAttribute(attr, v);
      });
    });
    // Page title
    const titleEl = document.querySelector('title[data-i18n]');
    if (titleEl) {
      const v = get(t, titleEl.dataset.i18n);
      if (v) document.title = v;
    }
  }

  /* ── Update switcher UI ──────────────────────────────────── */
  function updateSwitcherUI(lang) {
    document.querySelectorAll('[data-lang-option]').forEach(btn => {
      btn.classList.toggle('lang-active', btn.dataset.langOption === lang);
    });
    document.querySelectorAll('.lang-current-label').forEach(el => {
      el.textContent = lang.toUpperCase();
    });
  }

  /* ── Dropdown toggle ─────────────────────────────────────── */
  function toggleLangMenu() {
    const menu = document.getElementById('lang-menu');
    const btn  = document.getElementById('lang-switcher-btn');
    if (!menu) return;
    const isOpen = menu.classList.contains('lang-open');
    if (isOpen) {
      closeLangMenu();
    } else {
      menu.style.display = 'block';
      // Trigger animation on next frame
      requestAnimationFrame(() => menu.classList.add('lang-open'));
      btn && btn.setAttribute('aria-expanded', 'true');
    }
  }

  function closeLangMenu() {
    const menu = document.getElementById('lang-menu');
    const btn  = document.getElementById('lang-switcher-btn');
    if (menu) {
      menu.classList.remove('lang-open');
      // Hide after animation
      setTimeout(() => { if (!menu.classList.contains('lang-open')) menu.style.display = 'none'; }, 160);
    }
    btn && btn.setAttribute('aria-expanded', 'false');
  }

  // Close on outside click
  document.addEventListener('click', e => {
    const sw = document.getElementById('lang-switcher');
    if (sw && !sw.contains(e.target)) closeLangMenu();
  });

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeLangMenu();
  });

  /* ── Cycle through languages (for mobile compact button) ─── */
  function cycleLang() {
    const current = detectLang();
    const idx  = SUPPORTED.indexOf(current);
    const next = SUPPORTED[(idx + 1) % SUPPORTED.length];
    setLang(next);
  }

  /* ── Public: setLang (synchronous) ──────────────────────── */
  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    const t = loadLang(lang);
    if (t) applyTranslations(t);
    updateSwitcherUI(lang);
    closeLangMenu();
  }

  /* ── Auto-init on DOMContentLoaded (synchronous) ────────── */
  document.addEventListener('DOMContentLoaded', () => {
    const lang = detectLang();
    document.documentElement.lang = lang;
    updateSwitcherUI(lang);

    if (lang !== DEFAULT) {
      const t = loadLang(lang);
      if (t) applyTranslations(t);
    }
  });

  /* ── Expose public API ───────────────────────────────────── */
  window.setLang        = setLang;
  window.toggleLangMenu = toggleLangMenu;
  window.closeLangMenu  = closeLangMenu;
  window.cycleLang      = cycleLang;
  window.getCurrentLang = detectLang;
  // Expose translation data so inline scripts can read current-language strings
  // Usage: (window.__i18nCache[getCurrentLang()] || {})
  Object.defineProperty(window, '__i18nCache', { get: () => loadLang(detectLang()) || {} });
})();
