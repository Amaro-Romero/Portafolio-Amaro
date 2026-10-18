import fotoPerfil from '../assets/cr7Programador.jpg';

export const portafolioData = {
  personal: {
    nombre: "Amaro Romero",
    titulo: "Analista Programador Computacional",
    institucion: "Duoc UC Sede Maipú",
    descripcion: "Estudiante de Analista Programador Computacional en Duoc UC Sede Maipú. Aprendiendo desarrollo de software Front-End, la construcción de interfaces interactivas y la resolución de problemas mediante código limpio y eficiente.",
    avatar: fotoPerfil,
    email: "amar.romero@duocuc.cl",
    linkedin: "https://linkedin.com",
    github: "https://github.com/Amaro-Romero"
  },
  experiencia: [
    {
      id: 1,
      cargo: "Desarrollador Front-End Trainee",
      empresa: "Proyectos Académicos y Personales",
      periodo: "2024 - Presente",
      descripcion: "Construcción de aplicaciones web interactivas SPA utilizando React, Ant Design y arquitectura Atomic Design."
    }
  ],
  estudios: [
    {
      id: 1,
      institucion: "Duoc UC Sede Maipú",
      titulo: "Analista Programador Computacional",
      periodo: "2023 - Presente"
    }
  ],
  proyectos: [
    {
      id: 1,
      nombre: "TECNOFIT",
      descripcion: "Plataforma web interactiva con registro, login y validaciones de correo de dominio Duoc UC.",
      link: "https://github.com/Amaro-Romero/Tecnofit"
    },
    {
      id: 2,
      nombre: "BLACKOUT",
      descripcion: "Aplicación web interactiva desarrollada para gestión y control con interfaz limpia y reactiva.",
      link: "https://github.com/Amaro-Romero/Blackout"
    }
  ]
};