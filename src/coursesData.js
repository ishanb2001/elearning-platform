import videoFile from './video.mp4';
import videoFile1 from './video1.mp4';
import videoFile2 from './video2.mp4';


const coursesData = [
    {
      id: '1',
      category: 'A',
      content: '1',
      SubHeaderText: "Title",
      pageDescription: "The role of an Analyst is dynamic, complex, and driven by a variety of skills. These skills range from a basic understanding of financial statement data and non-financial metrics that can be linked to financial performance, to a deeper dive into business and financial modeling. Analysts also utilize spreadsheet models, modeling techniques, and common investment analysis application as part of their toolkit to make informed financial decisions and investments.",
      bodyText: "The role of an Analyst is dynamic, complex, and driven by a variety of skills.",
      description: 'Finance',
      videoUrl: videoFile,
      modules: [
        {
            name: "Module 1",
            lessons: ["Test", "Lesson 2"]
        },
        {
            name: "Module 2",
            lessons: ["Lesson 1", "Lesson 2", "Lesson 3"]
        },

        {
          name: "Module 3",
          lessons: ["Lesson 1", "Lesson 2", "Lesson 3"]
      },

      {
        name: "Module 4",
        lessons: ["Lesson 1", "Lesson 2", "Lesson 3"]
    }
    ],

    },
    {
        id: '2',
        category: 'A',
        content: '2',
        SubHeaderText: "What you'll learn",
        pageDescription: "The role of an Analyst is dynamic, complex, and driven by a variety of skills. These skills range from a basic understanding of financial statement data and non-financial metrics that can be linked to financial performance, to a deeper dive into business and financial modeling. Analysts also utilize spreadsheet models, modeling techniques, and common investment analysis application as part of their toolkit to make informed financial decisions and investments.",
        bodyText: "The role of an Analyst is dynamic, complex, and driven by a variety of skills. These skills range from a basic understanding of financial statement data and non-financial metrics that can be linked to financial performance, to a deeper dive into business and financial modeling. Analysts also utilize spreadsheet models, modeling techniques, and common investment analysis application as part of their toolkit to make informed financial decisions and investments.",
        image: '/static/media/brainstorming.28fb1b351a07bfcf88f2.png',
        description: 'UX Design Certification',
        videoUrl: videoFile1,
        modules: [
          {
              name: "Module 1",
              lessons: ["Lesson 1", "Lesson 2"]
          },
          {
              name: "Module 2",
              lessons: ["Lesson 1", "Lesson 2", "Lesson 3"]
          }
      ],
  },
      
      {
        id: '3',
        category: 'A',
        content: '2',
        SubHeaderText: "What you'll learn",
        pageDescription: "The role of an Analyst is dynamic, complex, and driven by a variety of skills. These skills range from a basic understanding of financial statement data and non-financial metrics that can be linked to financial performance, to a deeper dive into business and financial modeling. Analysts also utilize spreadsheet models, modeling techniques, and common investment analysis application as part of their toolkit to make informed financial decisions and investments.",
        bodyText: "The role of an Analyst is dynamic, complex, and driven by a variety of skills. These skills range from a basic understanding of financial statement data and non-financial metrics that can be linked to financial performance, to a deeper dive into business and financial modeling. Analysts also utilize spreadsheet models, modeling techniques, and common investment analysis application as part of their toolkit to make informed financial decisions and investments.",
        image: '/static/media/brainstorming.28fb1b351a07bfcf88f2.png',
        description: 'CFA Level 1 - Corporate Finance',
        videoUrl: videoFile2,
        modules: [
          {
              name: "Module 1",
              lessons: ["Lesson 1", "Lesson 2"]
          },
          {
              name: "Module 2",
              lessons: ["Lesson 1", "Lesson 2", "Lesson 3"]
          }
      ],
  
      },

      {
        id: '4',
        category: 'A',
        content: '2',
        pageDescription: "The role of an Analyst is dynamic, complex, and driven by a variety of skills. These skills range from a basic understanding of financial statement data and non-financial metrics that can be linked to financial performance, to a deeper dive into business and financial modeling. Analysts also utilize spreadsheet models, modeling techniques, and common investment analysis application as part of their toolkit to make informed financial decisions and investments.",
        image: '/static/media/brainstorming.28fb1b351a07bfcf88f2.png',
        description: 'CFA Level 1 - Corporate Finance',
        videoUrl: videoFile,
        modules: [
          {
              name: "Module 1",
              lessons: ["Lesson 1", "Lesson 2"]
          },
          {
              name: "Module 2",
              lessons: ["Lesson 1", "Lesson 2", "Lesson 3"]
          }
      ],
  
      },
];

export default coursesData;
