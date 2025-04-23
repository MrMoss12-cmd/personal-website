interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  description?: string;
  logo?: string;
  websiteUrl?: string;
  assessments?:Assessment[];
  documentUrl?:string;
}

interface Assessment {
  name: string;
  score: string;
  maxScore?: string;
  date?: string;
  issuer?: string;
  documentUrl?: string; // Añade esta propiedad

}

export const educationData: Education[] = [
  {
    id: "1",
    institution: "Institución Educativa Nuestra Señora del Carmen",
    degree: "Technical High School Diploma",
    field: "Secondary Education",
    endDate: "2012-12",
    description: "Specialized in culinary arts. Actively participated in scientific and cultural events, achieving 19th place in the Colombian ICFES national exam.",
    logo: "https://i.ibb.co/HTqqzKck/Escudo-INENSCAR.jpg",
    startDate: "2009-01",
    websiteUrl: "https://nuestrasenoradelcarmen.edu.co/",
    documentUrl: "https://drive.google.com/file/d/1HDdANPbn_mxK-khtGseTpPGqjkZYSx_9/view?usp=drive_link",
    assessments: [
      {
        name: "ICFES National Exam",
        score: "19th place nationally",
        date: "2012-11",
        documentUrl: "https://drive.google.com/file/d/1qCNkYMekKc3XxGQik76Er314gGYcBtRm/view?usp=drive_link"
      }
    ]
  },
  {
    id: "2",
    institution: "Servicio Nacional de Aprendizaje",
    degree: "Technical Certificate",
    field: "Culinary",
    startDate: "2012-03",
    endDate: "2013-04",
    description: "Specialized training in quality control of raw materials, food preparation according to client specifications, and professional kitchen management. Completed practical training with excellence scores and developed English language proficiency for the culinary industry.",
    logo: "https://i.ibb.co/Vcm9KsKP/Escudosena.webp",
    websiteUrl: "https://www.sena.edu.co/es-co/Paginas/default.aspx",
    documentUrl: "https://drive.google.com/file/d/1h0IHa09ZSi_JpQgBWCr90TKE4dU9Bwfy/view?usp=drive_link",
  },
  {
    id: "3",
    institution: "Servicio Nacional de Aprendizaje",
    degree: "Technology Degree",
    field: "Information Systems Analysis and Development",
    startDate: "2021-07",  
    endDate: "2024-11",
    description: "Comprehensive training in software development, including client requirements analysis, software quality practices, system design and implementation, and IT negotiation processes. Achieved excellence scores across all modules.",
    logo: "https://i.ibb.co/Vcm9KsKP/Escudosena.webp",
    websiteUrl: "https://www.sena.edu.co/es-co/Paginas/default.aspx",
    documentUrl: "https://drive.google.com/file/d/12FjqcUoajvYcK0qhPSaQ7k1ZpiSEjSvQ/view?usp=drive_link",
    assessments: [
      {
        name: "TYT National Exam",
        score: "104/200 place nationally",
        date: "2024-11",
        documentUrl: "https://drive.google.com/file/d/1x80iqDM4u3JOmfE5dKmYPMiPtBBOLdUd/view?usp=drive_link"
      }
    ]
  }
];

export default educationData;