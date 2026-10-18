import fotoPerfil from '../assets/cr7Programador.jpg';

export const portafolioData = {
  personal: {
    nombre: "AMARO ROMERO INFANTE",
    titulo: "Analista Programador Computacional",
    institucion: "Duoc UC Sede Maipú",
    descripcion: "Estudiante de Analista Programador Computacional en Duoc UC Sede Maipú. Aprendiendo desarrollo de software Front-End, la construcción de interfaces interactivas y la resolución de problemas mediante código limpio y eficiente.",
    avatar: fotoPerfil,
    email: "amar.romero@duocuc.cl",
    linkedin: "https://www.linkedin.com/in/amaro-romero-infante-760b26444/", 
    github: "https://github.com/Amaro-Romero"
  },
  experiencia: [
    {
      id: 1,
      cargo: "Desarrollador Front-End Trainee",
      empresa: "Proyectos Académicos y Personales",
      periodo: "2025 - Presente",
      descripcion: "Experiencia en diversos proyectos académicos para tiendas utilizando JSX, HTML, CSS, JavaScript, React, Ant Design y arquitectura Atomic Design."
    }
  ],
  estudios: [
    {
      id: 1,
      institucion: "Duoc UC Sede Maipú",
      titulo: "Analista Programador Computacional",
      periodo: "2025 - Presente"
    }
  ],
  proyectos: [
    {
      id: 1,
      nombre: "TECNOFIT",
      descripcion: "Proyecto desarrollado para una tienda de deportes que cuenta con registro, login, validaciones y página de inicio (home)."
    },
    {
      id: 2,
      nombre: "BLACKOUT",
      descripcion: "Plataforma para una empresa de telonería enfocada en la venta y cotización de telones por metro."
    }
  ]
};