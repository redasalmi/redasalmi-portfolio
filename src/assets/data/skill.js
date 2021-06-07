import {
  html,
  css,
  javascript,
  python,
  sass,
  bootstrap,
  react,
  redux,
  flask,
  flaskWhite,
  express,
  expressWhite,
  git,
  npm,
} from '../svg';

export const SKILLS = {
  programming: [
    {
      imgSrc: html,
      imgAlt: 'html',
      skill: 'HTML5',
      alignTop: false,
    },
    {
      imgSrc: css,
      imgAlt: 'css',
      skill: 'CSS3',
      alignTop: false,
    },
    {
      imgSrc: javascript,
      imgAlt: 'javascript',
      skill: 'JavaScript',
      alignTop: false,
    },
    {
      imgSrc: python,
      imgAlt: 'python',
      skill: 'Python',
      alignTop: true,
    },
  ],

  librairies: [
    {
      imgSrc: sass,
      imgAlt: 'sass',
      skill: 'SASS',
      alignTop: true,
    },
    {
      imgSrc: bootstrap,
      imgAlt: 'bootstrap',
      skill: 'Bootstrap',
      alignTop: true,
    },
    {
      imgSrc: react,
      imgAlt: 'react',
      skill: 'React',
      alignTop: false,
    },
    {
      imgSrc: redux,
      imgAlt: 'redux',
      skill: 'Redux',
      alignTop: true,
    },
    {
      imgSrc: flask,
      imgAlt: 'flask',
      skill: 'Flask',
      alignTop: true,
      whiteImgSrc: flaskWhite,
    },
    {
      imgSrc: express,
      imgAlt: 'express',
      skill: 'ExpressJS',
      alignTop: true,
      whiteImgSrc: expressWhite,
    },
  ],

  tools: [
    {
      imgSrc: git,
      imgAlt: 'git',
      skill: 'Git',
      alignTop: false,
    },
    {
      imgSrc: npm,
      imgAlt: 'npm',
      skill: 'NPM',
      alignTop: false,
    },
  ],
};
