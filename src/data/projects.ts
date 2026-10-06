import type {Lang} from "../i18n";

type OS = "windows" | "linux" | "android";

export interface Project {
  name: string;
  description: Record<Lang, string>;
  stack: string[];
  url?: string;
  downloadUrls?: Array<{url: string; platform: OS}>;
}


export const projects: Project[] = [
  {
    name: "FeedPipe",
    description: {
      es: "FeedPipe es una app de seguimiento nutricional y fitness que te ayuda a entender qué comes y cómo entrenas. Registra comidas desde un catálogo de unos 8.000 alimentos o añade los tuyos, y controla ejercicios, recetas, medidas corporales y progreso en un solo lugar. Crea varios perfiles para gestionar a distintas personas desde una cuenta, cada uno con su plan diario de nutrientes personalizado. Más allá de las calorías y los macros, explora vitaminas, minerales y tipos de grasa en una interfaz limpia y sencilla. Disponible en inglés, español y portugués.",
      en: "FeedPipe is a nutrition and fitness tracking app that helps you understand what you eat and how you train. Log meals from a catalog of around 8,000 foods or enter your own, track exercises, recipes, body measurements, and progress, all in one place. Create multiple profiles to manage several people from a single account, each with personalized physical data and a daily nutrient plan. Beyond calories and macros, explore vitamins, minerals, and fat types in a clean, simple interface. Available in English, Spanish, and Portuguese.",
      pt: "FeedPipe é um app de acompanhamento nutricional e fitness que ajuda você a entender o que come e como treina. Registre refeições a partir de um catálogo de cerca de 8.000 alimentos ou adicione os seus, e controle exercícios, receitas, medidas corporais e progresso em um só lugar. Crie vários perfis para gerenciar diferentes pessoas em uma conta, cada um com seu plano diário de nutrientes. Além das calorias e dos macros, explore vitaminas, minerais e tipos de gordura em uma interface limpa e simples. Disponível em inglês, espanhol e português."
    },
    stack: ["Next.js", "TypeScript", "Django REST Framework", "Python"],
    url: "https://www.feedpipe.life",
  },
  {
    name: "Password Manager",
    description: {
      en: "A cross-platform password management application designed to store and protect credentials in a simple and secure way. It uses an encrypted file-based vault protected by a master password, allowing users to securely access and manage their credentials. The application supports creating, editing, deleting, and organizing passwords, while also providing an automatic password generator capable of suggesting strong and secure passwords. It is available for mobile devices, Linux, and Windows, providing a consistent experience across platforms. Its design focuses on simplicity, privacy, and security, allowing users to keep their credentials protected locally without relying on external services to store their personal passwords.",
      es: "Aplicación multiplataforma de gestión de contraseñas diseñada para almacenar y proteger credenciales de forma sencilla y segura. Utiliza una bóveda basada en un archivo cifrado, protegida mediante una contraseña maestra que permite al usuario acceder y administrar sus credenciales. La aplicación permite crear, editar, eliminar y organizar contraseñas, además de incorporar un generador automático capaz de sugerir contraseñas fuertes y seguras. Está disponible para dispositivos móviles, Linux y Windows, ofreciendo una experiencia consistente entre plataformas. Su enfoque prioriza la simplicidad, privacidad y seguridad, evitando la necesidad de depender de servicios externos para almacenar las credenciales personales del usuario.",
      pt: "Aplicativo multiplataforma de gerenciamento de senhas, desenvolvido para armazenar e proteger credenciais de forma simples e segura. Utiliza um cofre baseado em um arquivo criptografado, protegido por uma senha mestra que permite ao usuário acessar e gerenciar suas credenciais com segurança. O aplicativo permite criar, editar, excluir e organizar senhas, além de oferecer um gerador automático capaz de sugerir senhas fortes e seguras. Está disponível para dispositivos móveis, Linux e Windows, proporcionando uma experiência consistente entre diferentes plataformas. Seu design prioriza simplicidade, privacidade e segurança, permitindo manter as credenciais protegidas localmente sem depender de serviços externos para armazenar senhas pessoais."
    },
    stack: ["Vite.js", "TypeScript", "Eel", "Python"],
    url: "",
    downloadUrls: [
      {platform: "windows", url: "/downloads/password-manager-windows.zip"},
      {platform: "linux", url: "/downloads/password-manager-linux.zip"},
      {platform: "android", url: "/downloads/password-manager-android.zip"},
    ]
  },
  // {
  //   name: "Electric Mobility Comparator",
  //   description: {
  //     en: "Electric Mobility Comparator is a web platform designed to help users in São Paulo compare electric mobility products and make better purchasing decisions. The platform centralizes technical specifications, prices, offers, stores, and historical price information in a single searchable catalog. It applies deterministic rules to classify vehicles according to Brazilian regulations and São Paulo circulation requirements, including licensing, driving license, and bicycle-lane restrictions. The system also supports authentication, product comparison, legal verification, affiliate click-outs, caching, pagination, and scalable integrations with external stores through dedicated data connectors.",
  //     es: "Comparador de Movilidad Eléctrica es una plataforma web diseñada para ayudar a los usuarios de São Paulo a comparar productos de movilidad eléctrica y tomar mejores decisiones de compra. La plataforma centraliza especificaciones técnicas, precios, ofertas, tiendas e históricos de precios en un catálogo único y consultable. Aplica reglas deterministas para clasificar los vehículos según la normativa brasileña y los requisitos de circulación de São Paulo, incluyendo restricciones relacionadas con registro, licencia de conducir y ciclovías. También incorpora autenticación, comparación, verificación legal, enlaces afiliados, caché, paginación e integraciones escalables con tiendas externas.",
  //     pt: "O Comparador de Mobilidade Elétrica é uma plataforma web desenvolvida para ajudar usuários de São Paulo a comparar produtos de mobilidade elétrica e tomar melhores decisões de compra. A plataforma centraliza especificações técnicas, preços, ofertas, lojas e histórico de preços em um catálogo pesquisável. Ela aplica regras determinísticas para classificar veículos de acordo com a legislação brasileira e os requisitos de circulação de São Paulo, incluindo restrições relacionadas a registro, habilitação e ciclovias. O sistema também oferece autenticação, comparação de produtos, verificação legal, links afiliados, cache, paginação e integrações escaláveis com lojas externas."
  //   },
  //   stack: ["Next.js", "TypeScript", "Django REST Framework", "Python"],
  //   url: "",
  // }
];
