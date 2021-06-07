import React, { useContext } from 'react';
import ImageLoader from './ImageLoader';
import {
  MapMarker,
  linkedin,
  twitter,
  github,
  githubWhite,
  mail,
} from '../assets/svg';
import { ThemeDispatch } from '../reducer';

const About = ({ translate }) => {
  const { theme } = useContext(ThemeDispatch);
  const myAge = new Date().getFullYear() - 1992;

  return (
    <div className='row mt-md-5'>
      <div className='col-12 col-lg-6 p-1 p-md-0'>
        <div className='col-12'>
          <h1 className='text-primary'>{translate('reda salmi')}</h1>
          <p className='h4'>{translate('job position')}</p>
          <p className='h5'>
            {myAge} {translate('years unit')}
          </p>
          <p className='h5 font-weight-bold'>
            <MapMarker className='text-primary svg' width='25' />
            <span className='text-primary'>
              {' '}
              {translate('current position')}
            </span>
          </p>
        </div>

        <div className='col-12 mt-5 lead'>
          <p>
            {translate('about me text1')}
            <span className='font-weight-bold text-primary'>
              {' '}
              {translate('coursera title')}
            </span>{' '}
            {translate('about me text2')}
            <span className='font-weight-bold text-primary'>
              {' '}
              {translate('youtube title')}
            </span>
            {translate('about me text3')}
            <span className='font-weight-bold text-primary'>
              {' '}
              {translate('javascript title')}{' '}
            </span>
            {translate('about me text4')}{' '}
            <span className='font-weight-bold text-primary'>
              {translate('python title')}{' '}
            </span>
            {translate('about me text5')}
          </p>

          <p className='mt-5 mb-0'>{translate('find me here')}</p>
          <ul className='list-inline text-center'>
            <li className='list-inline-item ml-4'>
              <a
                href='https://www.linkedin.com/in/reda-salmi-424a30168/'
                rel='noopener noreferrer'
                target='_blank'
              >
                <img
                  src={linkedin}
                  width='60'
                  height='60'
                  alt='linkedin account'
                />
              </a>
            </li>
            <li className='list-inline-item ml-4'>
              <a
                href='https://twitter.com/redsalmi'
                rel='noopener noreferrer'
                target='_blank'
              >
                <img
                  src={twitter}
                  width='60'
                  height='60'
                  alt='twitter account'
                />
              </a>
            </li>
            <li className='list-inline-item ml-4 mt-4 mt-md-2'>
              <a
                href='https://github.com/redasalmi'
                rel='noopener noreferrer'
                target='_blank'
              >
                <img
                  src={theme.theme === 'dark' ? githubWhite : github}
                  width='60'
                  height='60'
                  alt='github account'
                />
              </a>
            </li>
            <li className='list-inline-item ml-4 mt-4  mt-md-2'>
              <a
                href='mailto:reda.salmi.elt@gmail.com'
                rel='noopener noreferrer'
                target='_blank'
              >
                <img src={mail} width='60' height='60' alt='mail account' />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='col-12 col-lg-6 text-center p-3 p-sm-1 p-md-0'>
        <ImageLoader
          imgSrc='/reda-pic.jpg'
          imgAlt='reda'
          imgClass='text-md-right reda-pic'
          loaderHeight={500}
        />
      </div>
    </div>
  );
};

export default About;
