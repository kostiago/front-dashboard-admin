export const menu = [
  {
    id: '1',
    title: 'principal',
    listItems: [
      {
        id: '1',
        title: 'Inicio',
        url: '/',
        icon: 'home.svg',
      },

      {
        id: '2',
        title: 'Perfil',
        url: '/perfil',
        icon: 'profile.svg',
      },
    ],
  },

  //CLIENTES/PESSOAS

  {
    id: '2',
    title: 'clientes',
    listItems: [
      {
        id: '1',
        title: 'Clientes',
        url: '/clientes',
        icon: 'profile.svg',
      },

      {
        id: '2',
        title: 'Perfil',
        url: '/perfil',
        icon: 'profile.svg',
      },
    ],
  },

  //PROCESSOS

  {
    id: '3',
    title: 'processos',
    listItems: [
      {
        id: '1',
        title: 'Processos',
        url: '/processos',
        icon: 'note.svg',
      },

      {
        id: '2',
        title: 'Perfil',
        url: '/perfil',
        icon: 'profile.svg',
      },
    ],
  },

  //OUTROS

  {
    id: '4',
    title: 'configurações',
    listItems: [
      {
        id: '1',
        title: 'Configurações',
        url: '/configuracao',
        icon: 'settings.svg',
      },

      {
        id: '2',
        title: 'Sair',
        url: '/sair',
        icon: 'expand.svg',
      },
    ],
  },
];

//USUARIOS
export const topDealUsers = [
  {
    id: 1,
    img: 'https://media.istockphoto.com/id/1369508766/pt/foto/beautiful-successful-latin-woman-smiling.jpg?s=1024x1024&w=is&k=20&c=6RjX9BmgYae7KefLlbxbz4ZaPvDW4isneQ56-VK2i3k=',
    username: 'Elva McDonald',
    email: 'elva@email.com',
    clientProcess: '000002',
    partProcess: '00000200',
    role: 'user',
  },
  {
    id: 2,
    img: 'https://media.istockphoto.com/id/1388644810/pt/foto/happy-caucasian-young-man-using-smart-phone-cellphone-for-calls-social-media-mobile.jpg?b=1&s=612x612&w=0&k=20&c=bvSv-Eh3GmPym0Yvzt-1KRAJ9_7wMQgcpMOsPnb-0Co=',
    username: 'John Moura',
    email: 'moura@email.com',
    clientProcess: '000003',
    partProcess: '00000201',
    role: 'admin',
  },
  {
    id: 3,
    img: 'https://media.istockphoto.com/id/1289220545/pt/foto/beautiful-woman-smiling-with-crossed-arms.jpg?s=1024x1024&w=is&k=20&c=iMSziXUpBaq3p4Vi6jax7AITgRl4zWeWz3Av_TuJauw=',
    username: 'Maria Lore',
    email: 'maria.lore@email.com',
    clientProcess: '000102',
    partProcess: '00100300',
    role: 'user',
  },
  {
    id: 4,
    img: 'https://media.istockphoto.com/id/1408041355/pt/foto/happy-black-businesswoman-using-a-smartphone-in-a-creative-office.jpg?s=1024x1024&w=is&k=20&c=j26b1VPEdLerWfwoTZpAyb0saJQxwXKkqgBOJxpNaB8=',
    username: 'Flavia Regina',
    email: 'regina@email.com',
    clientProcess: '004002',
    partProcess: '05010200',
    role: 'user',
  },
];

//RECHARTS

export const chartBoxUser = {
  color: '#8884d8',
  icon: '/userIcon.svg',
  title: 'Total de Clientes',
  dataKey: 'clientes',
  number: '600',
  percentage: '45',
  chartData: [
    { name: 'Sun', clientes: 100 },
    { name: 'SEG', clientes: 100 },
    { name: 'TER', clientes: 50 },
    { name: 'QUAR', clientes: 50 },
    { name: 'QUIN', clientes: 100 },
    { name: 'SEX', clientes: 100 },
    { name: 'SAB', clientes: 0 },
  ],
};
