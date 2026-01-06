// Detalles de los proyectos
const projectDetails = {
    'examen-final': {
    title: 'MarketPlace - Detalles del Proyecto',
    content: `
      <h4>Contexto del Proyecto</h4>
      <p>Este proyecto fue desarrollado como examen final para la materia de Programación 4 de la carrera de Técnico Universitario en Programación. El objetivo era demostrar la capacidad de crear una aplicación web completa utilizando Django y aplicar todos los conceptos aprendidos durante el curso de manera grupal.</p>
      
      <h4>Objetivos de Aprendizaje</h4>
      <ul>
        <li>Implementar un sistema de autenticación y autorización de usuarios</li>
        <li>Crear un sistema de registro de productos que sean válidos</li>
        <li>Cerrar sesión de una cuenta con inactividad > 30 minutos</li>
        <li>Generar presupuestos con validez de 3 días que se envíen al email del usuario</li>
        <li>Aplicar principios de UX/UI para una experiencia de usuario fluida</li>
        <li>Integración de MercadoPago como método de pago</li>
        <li>Formas de iniciar sesión, ya sea con Google o GitHub</li>
        <li>Integrar IA como chatbot o para recomendar precios para los productos que quieras publicar</li>
      </ul>
      
      <h4>Tecnologías Utilizadas</h4>
      <div class="tech-stack">
        <span class="tech-badge-modal">Django</span>
        <span class="tech-badge-modal">Python</span>
        <span class="tech-badge-modal">MySQL</span>
        <span class="tech-badge-modal">Bootstrap 5</span>
        <span class="tech-badge-modal">JavaScript Vanilla</span>
        <span class="tech-badge-modal">PythonAnywhere</span>
      </div>
      
      <h4>Características Técnicas</h4>
      <ul>
        <li><strong>Sistema de usuarios:</strong> Roles diferenciados para administrador y usuario</li>
        <li><strong>Creación de Productos:</strong> Interfaz para que los usuarios creen productos</li>
        <li><strong>Temporizador:</strong> Control de tiempo para cerrar sesión a los usuarios inactivos</li>
        <li><strong>Inteligencia Artificial:</strong> Chatbot para conversar y otro chat para que te recomiende un aproximado de a cuánto puedes vender o comprar algo</li>
        <li><strong>Reportes:</strong> Generación de presupuestos detallados para usuarios con validez de 3 días aproximadamente</li>
      </ul>
      <h4>Desafíos del Trabajo en Equipo</h4>
      <p><strong>Desafío 1:</strong> Coordinar el trabajo de 3 personas con diferentes horarios.<br>
      <strong>Solución:</strong> Establecimos reuniones fijas 1 vez por semana y usamos Jira para seguimiento.</p>
      
      <p><strong>Desafío 2:</strong> Resolver conflictos de código y mantener consistencia.<br>
      <strong>Solución:</strong> Implementamos un flujo de trabajo Git con branches por funcionalidad y revisiones de código (code reviews).</p>
      
      <h4>Aprendizajes Clave</h4>
      <ul>
        <li>Coordinación efectiva en equipo utilizando metodologías ágiles</li>
        <li>Uso de Git para control de versiones en proyectos colaborativos</li>
        <li>Diseño de APIs RESTful para comunicación entre frontend y backend</li>
        <li>Documentación de código y creación de manuales de usuario</li>
        <li>Presentación de proyectos a evaluadores (simulando clientes)</li>
      </ul>
      
      <h4>Lo que aprendí</h4>
      <p>Este proyecto me permitió consolidar mis conocimientos en Django, especialmente en el trabajo en equipo y entender que no todos podemos trabajar al mismo tiempo, afianzar un poco más sobre cómo integrar métodos de pago o cómo se generan los presupuestos.</p>
    `
  },
  
  'proyecto-grupal': {
    title: 'Sistema de Gestión Académica - Detalles del Proyecto',
    content: `
      <h4>Contexto del Proyecto</h4>
      <p>Desarrollado como proyecto final grupal para la materia de Desarrollo de Software, este sistema fue creado por un equipo de 4 estudiantes. El objetivo era simular un entorno de trabajo real, aplicando metodologías ágiles y colaborativas para crear una solución completa de gestión académica.</p>
      
      <h4>Organización del Equipo</h4>
      <ul>
        <li><strong>Rol en el equipo:</strong> Líder técnico y desarrollador backend</li>
        <li><strong>Metodología:</strong> Scrum con sprints de 2 semanas</li>
        <li><strong>Herramientas de colaboración:</strong> GitHub Projects, Discord para comunicación, Trello para seguimiento de tareas</li>
        <li><strong>Reparto de responsabilidades:</strong>
          <ul>
            <li>Diseño de base de datos y modelos (mi responsabilidad)</li>
            <li>Desarrollo de backend con Django (responsabilidad compartida)</li>
            <li>Implementación de frontend con Bootstrap</li>
            <li>Pruebas y documentación</li>
          </ul>
        </li>
      </ul>
      
      <h4>Tecnologías Utilizadas</h4>
      <div class="tech-stack">
        <span class="tech-badge-modal">Django</span>
        <span class="tech-badge-modal">Python</span>
        <span class="tech-badge-modal">MySQL</span>
        <span class="tech-badge-modal">Bootstrap 5</span>
        <span class="tech-badge-modal">JavaScript</span>
        <span class="tech-badge-modal">Git/GitHub</span>
      </div>
      
      <h4>Módulos del Sistema</h4>
      <ul>
        <li><strong>Gestión de usuarios:</strong> Registro, autenticación y perfiles para estudiantes, profesores y administradores</li>
        <li><strong>Módulo académico:</strong> Inscripción a materias, horarios, planes de estudio</li>
        <li><strong>Sistema de calificaciones:</strong> Registro, modificación y consulta de notas</li>
        <li><strong>Control de asistencia:</strong> Registro diario y reportes de inasistencias</li>
        <li><strong>Panel administrativo:</strong> Gestión completa del sistema para administradores</li>
      </ul>
      
      <h4>Desafíos del Trabajo en Equipo</h4>
      <p><strong>Desafío 1:</strong> Coordinar el trabajo de 4 personas con diferentes horarios.<br>
      <strong>Solución:</strong> Establecimos reuniones fijas dos veces por semana y usamos GitHub Projects para seguimiento.</p>
      
      <p><strong>Desafío 2:</strong> Resolver conflictos de código y mantener consistencia.<br>
      <strong>Solución:</strong> Implementamos un flujo de trabajo Git con branches por funcionalidad y revisiones de código (code reviews).</p>
      
      <h4>Aprendizajes Clave</h4>
      <ul>
        <li>Coordinación efectiva en equipo utilizando metodologías ágiles</li>
        <li>Uso de Git para control de versiones en proyectos colaborativos</li>
        <li>Diseño de APIs RESTful para comunicación entre frontend y backend</li>
        <li>Documentación de código y creación de manuales de usuario</li>
        <li>Presentación de proyectos a evaluadores (simulando clientes)</li>
      </ul>
      
      <h4>Resultados</h4>
      <p>El proyecto fue calificado con 9/10, destacándose por su funcionalidad completa, código bien estructurado y documentación exhaustiva. Esta experiencia me preparó para trabajar eficientemente en entornos colaborativos profesionales.</p>
    `
  },


  'receta-smart': {
    title: 'Receta Smart - Detalles del Proyecto',
    content: `
      <h4>Origen del Proyecto</h4>
        <p>   
            Receta Smart nació de una necesidad de ayudar a mi madre, ya que ella me contaba que tenía problemas para recordar el tiempo que tenía para comprar un medicamento antes de que se venciera la receta.
            Este mismo proyecto primero pasó por una versión donde solamente era de escritorio, pero estuve pensando que así como mi madre tenía el problema, otras personas tenían el mismo problema, 
            así que lo pasé a Django para que tenga una base de datos y se puedan registrar normalmente o con Google.
        </p>
      
      <h4>Desafíos Técnicos</h4>
      <ul>
        <li><strong>Gestión de fechas:</strong> Implementación de un sistema inteligente de alertas para vencimientos de recetas y medicamentos.</li>
        <li><strong>Búsqueda avanzada:</strong> Desarrollo de algoritmos para búsqueda rápida por paciente, medicamento o fecha.</li>
        <li><strong>Seguridad de datos:</strong> Implementación de autenticación y autorización robustas para proteger información sensible de pacientes.</li>
        <li><strong>Interfaz intuitiva:</strong> Diseño de una UI que fuera fácil de usar para personal médico con diferentes niveles de habilidad técnica.</li>
      </ul>
      
      <h4>Tecnologías Utilizadas</h4>
      <div class="tech-stack">
        <span class="tech-badge-modal">Django</span>
        <span class="tech-badge-modal">Python</span>
        <span class="tech-badge-modal">MySQL</span>
        <span class="tech-badge-modal">Bootstrap 5</span>
        <span class="tech-badge-modal">JavaScript</span>
      </div>
      
      <h4>Características Principales</h4>
      <ul>
        <li>Registro digital de recetas médicas con todos los datos necesarios</li>
        <li>Sistema de alertas para vencimientos (7 días, 3 días, vencido)</li>
        <li>Búsqueda avanzada por múltiples criterios</li>
        <li>Generación de reportes en PDF</li>
        <li>Panel de administración completo</li>
        <li>Diseño responsivo para uso en dispositivos móviles</li>
      </ul>
      
      <h4>Lo que aprendí</h4>
      <p>
      Este proyecto me permitió profundizar en el manejo de fechas y tiempos en aplicaciones web, 
      la importancia de una buena experiencia de usuario ya que tiene que ser ágil incluso para personas que no entiendan mucho sobre tecnología,
      y la elección de bases de datos para grandes volúmenes de información aunque todavía me falte integrarle un escaneo para las imágenes o PDFs que son imágenes.
      </p>
    `
  },
  'casamia': {
    title: 'CasaMia - Detalles del Proyecto',
    content: `
      <h4>Origen del Proyecto</h4>
      <p>
        CasaMia fue el primer proyecto grupal que tuve alrededor de 2023 y empezó porque un amigo 
        tenía modelos hechos en Figma. Entonces, con otro amigo que queríamos practicar más sobre HTML y CSS, le dijimos que si podíamos usar los modelos y ahí nació el primer modelo.
        Después, un profesor nos enseñó Django y me animé a darle vida completa al primer proyecto grupal que tuve, donde me manejé con Trello y llamadas para confirmar cambios.
      </p>
      
      <h4>Desafíos Técnicos</h4>
      <ul>
        <li><strong>Gestión de imágenes:</strong> Implementación de carga y optimización de múltiples imágenes por propiedad.</li>
        <li><strong>Sistema de filtros:</strong> Desarrollo de filtros avanzados para búsqueda de propiedades (precio, ubicación, características).</li>
        <li><strong>Integración de mapas:</strong> Uso de APIs de mapas para mostrar ubicaciones de propiedades.</li>
        <li><strong>Sistema de roles:</strong> Implementación de diferentes permisos para administradores, agentes y clientes.</li>
      </ul>
      
      <h4>Tecnologías Utilizadas</h4>
      <div class="tech-stack">
        <span class="tech-badge-modal">Django</span>
        <span class="tech-badge-modal">Python</span>
        <span class="tech-badge-modal">SQLite</span>
        <span class="tech-badge-modal">JavaScript</span>
        <span class="tech-badge-modal">Bootstrap</span>
      </div>
      
      <h4>Características Principales</h4>
      <ul>
        <li>Catálogo completo de propiedades con fotos y descripciones</li>
        <li>Sistema de filtros avanzados para búsqueda</li>
        <li>Formulario de contacto integrado</li>
        <li>Panel de administración para gestión de propiedades</li>
        <li>Sistema de favoritos para usuarios registrados</li>
        <li>Diseño completamente responsivo</li>
      </ul>
      
      <h4>Lo que aprendí</h4>
      <p>Este proyecto me enseñó la importancia de un buen manejo de archivos multimedia en aplicaciones web, cómo integrar APIs de terceros de manera eficiente, y cómo diseñar interfaces que faciliten la conversión de visitantes en clientes potenciales.</p>
    `
  }
};

// Mostrar detalles del proyecto
function showProjectDetails(projectId) {
  const modal = document.getElementById('projectModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalContent = document.getElementById('modalContent');
  
  if (projectDetails[projectId]) {
    modalTitle.textContent = projectDetails[projectId].title;
    modalContent.innerHTML = projectDetails[projectId].content;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

// Cerrar detalles del proyecto
function closeProjectDetails() {
  const modal = document.getElementById('projectModal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Cerrar modal al hacer clic fuera del contenido
document.getElementById('projectModal').addEventListener('click', function(e) {
  if (e.target === this) {
    closeProjectDetails();
  }
});

// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
      
      // Cerrar menú móvil si está abierto
      const navbarCollapse = document.querySelector('.navbar-collapse.show');
      if (navbarCollapse) {
        navbarCollapse.classList.remove('show');
      }
    }
  });
});

// Cambiar estilo de la barra de navegación al hacer scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.padding = '0.8rem 0';
    navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.98)';
  } else {
    navbar.style.padding = '1.2rem 0';
    navbar.style.backgroundColor = 'rgba(15, 23, 42, 0.95)';
  }
});

// Efecto de aparición al hacer scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observar elementos para animación
document.querySelectorAll('.about-card, .project-card, .skill-category').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
  console.log('Portfolio de Antonio Riveros cargado');
  
  // Añadir estilos para badges dentro del modal
  const style = document.createElement('style');
  style.textContent = `
    .tech-badge-modal {
      display: inline-block;
      background-color: rgba(37, 99, 235, 0.2);
      color: var(--primary-color);
      padding: 0.4rem 0.8rem;
      border-radius: 50px;
      font-size: 0.85rem;
      font-weight: 600;
      border: 1px solid rgba(37, 99, 235, 0.3);
      margin: 0.2rem;
    }
    
    .modal-content h4 {
      color: white;
      margin-top: 1.5rem;
      margin-bottom: 0.8rem;
      font-size: 1.3rem;
    }
    
    .modal-content ul {
      padding-left: 1.5rem;
      margin-bottom: 1.5rem;
    }
    
    .modal-content li {
      margin-bottom: 0.5rem;
      color: var(--gray-light);
    }
    
    .tech-stack {
      margin: 1.5rem 0;
    }
  `;
  document.head.appendChild(style);
});