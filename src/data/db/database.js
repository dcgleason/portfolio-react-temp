import Mock from "../mock";

const database = {
  information: {
    name: 'Danny Gleason',
    aboutContent: "I am a frontend web developer. I enjoy working through challenging problems, and provide clean code when finding solutions.",
    age: 29,
    phone: '978-402-6218',
    // nationality: 'American',
    // language: 'English',
    email: 'danny.c.gleason@gmail.com',
    address: 'Boston, MA',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: 'https://www.facebook.com/dcgleason',
      twitter: 'https://twitter.com/danny_collins',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/dcgleason/',
      dribbble: '',
      github: 'https://github.com/dcgleason'
    },
    brandImage: 'https://i.ibb.co/YQ5Xs8c/headshot.png',
    aboutImage: 'https://i.ibb.co/YQ5Xs8c/headshot.png',
    aboutImageLg: 'https://i.ibb.co/YQ5Xs8c/headshot.png',
    cvfile: 'https://docs.google.com/document/d/1fliqkVw-Dl5DH0lNOvzOcoEvW8gz_ChUBTg0QFZFVLg'
  },
  services: [
    {
      title: "Web Development",
      icon: 'code',
      details: "Proficient in HTML, CSS, Javascript, React.js "
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Danny is an individual that will always be there when you need him. He is dependable...he is creative and always thinking outside the box.",
      author: {
        name: 'Stephen Sullivan',
        designation: 'Institutional Equity Sales, Guggenheim Partners'
      }
    }
  ],
  skills: [
    {
      title: "HTML5",
      value: 95
    },
    {
      title: "CSS3",
      value: 80
    },
    {
      title: "Javascript",
      value: 85
    },
    
    {
      title: "ReactJS",
      value: 80
    },
    {
      title: "Bootstrap",
      value: 65
    },
    {
      title: "Git",
      value: 65
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "Trivia Game",
      subtitle: "User friendly game built with HTML, CSS, and Javascript",
      imageUrl: "https://i.ibb.co/dDqhmwN/Screen-Shot-2019-12-12-at-1-23-23-PM.png",
      largeImageUrl: ["https://i.ibb.co/dDqhmwN/Screen-Shot-2019-12-12-at-1-23-23-PM.png"],
      url: 'https://dcgleason.github.io/triviaGame/'
    },
    {
      id: 2,
      title: "Puppy Click Game",
      subtitle: "Game made in ReactJS, designed so that a user isn't allowed to click a puppy image twice.",
      imageUrl: "https://i.ibb.co/dJRDhhK/Screen-Shot-2019-12-24-at-11-13-28-AM.png",
      largeImageUrl: [
        "https://i.ibb.co/dJRDhhK/Screen-Shot-2019-12-24-at-11-13-28-AM.png"
      ],
      url: 'https://polar-cove-77559.herokuapp.com/'
    },
    {
      id: 3,
      title: "Brewery Tour Manager",
      subtitle: "Built using ReactJS. Made so that a user can plan his/her own brewery tour in a select city. Draws upon the OpenBrewery API to display breweries in cities across the US",
      imageUrl: "https://i.ibb.co/Lz2DtpM/Screen-Shot-2020-01-09-at-1-04-50-PM.png",
      largeImageUrl: [
        "https://i.ibb.co/Lz2DtpM/Screen-Shot-2020-01-09-at-1-04-50-PM.png"
      ],
      url: 'https://flamboyant-booth-ec5a09.netlify.com/'
    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2019 - Present",
        position: "General Assembly Software Engineering Fellow",
        company: "General Assembly",
        details: "Three-month, 500-hour full-time and full-stack program that provides experience with the latest front- and back-end programming languages, tools, and methodologies including: HTML, CSS, SASS, Javascript, jQuery, PostgreSQL, MongoDB, Ruby, Ruby on Rails, AngularJS, NodeJS, ReactJS, Wordpress, Git, Github, and Agile/Scrum."
      },
      {
        id: 2,
        year: "2018 - 2019",
        position: "Medical Scribe",
        company: "Scribe America",
        details: "Wrote full doctor’s SOAP notes along-side Primary Care Physician; saw 15-18 patients per day. Was preparing for medical school at this time. Key Accomplishment:  Promoted to Scribe Trainer, trained successor. Was preparing for medical school during this time. "
      },
      {
        id: 3,
        year: "2017 - 2018",
        position: "Business Development Representative",
        company: "ZeroTurnaround",
        details: "Called 100+ potential clients per day. Worked with team to identify strategies for business development within target accounts. Key Accomplishment:  Brought in 11 new opportunities "
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2019 - 2020",
        graduation: "Bootcamp Ceritficate",
        university: "General Assembly",
        details: "Learned HTML, CSS, SASS, Javascript, jQuery, PostgreSQL, MongoDB, Ruby, Ruby on Rails, AngularJS, NodeJS, ReactJS, Wordpress, Git, Github, and Agile/Scrum. "
      },
      {
        id: 2,
        year: "2009 - 2013",
        graduation: "Bachelor of Arts",
        university: "Boston College",
        details: "Took advanced coursework in Theology, Chinese, and the Sciences. Accepted as part of the Honors Program."
      }
      // {
      //   id: 3,
      //   year: "2004 - 2009",
      //   graduation: "High School Graduation",
      //   university: "Middlesex School",
      //   details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      // }
    ]
  },
  blogs: [
    {
      id: 1,
      title: "React new version is coming!",
      imageUrl: "/images/blog-image-1.jpg",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "03 December 2019"
    },
    {
      id: 2,
      title: "More about react hooks",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "04 December 2019"
    },
    {
      id: 3,
      title: "Next generation javascript learning source",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "05 December 2019"
    },
    {
      id: 4,
      title: "Free tutorial downloading link.",
      imageUrl: "/images/blog-image-2.jpg",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "06 December 2019"
    },
    {
      id: 5,
      title: "Get 2500 free mockup for design.",
      youtubeUrl: "TKnufs85hXk",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "08 December 2019"
    },
    {
      id: 6,
      title: "React vs Vue vs Angular, what is best?",
      vimeoUrl: "23534361",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "10 December 2019"
    },
    {
      id: 7,
      title: "Web design typography & spacing.",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "03 December 2019"
    },
    {
      id: 8,
      title: "React new version is coming with a great features.",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "03 December 2019"
    }
  ],
  contactInfo: {
    phoneNumbers: ['(978)402-6218'],
    emailAddress: ['danny.c.gleason@gmail.com'],
    address: "Boston, MA, USA"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});