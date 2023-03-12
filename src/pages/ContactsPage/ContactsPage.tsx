import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import roman from '../../mock_data/img/roman.jpg';
import artem from '../../mock_data/img/artem.jpg';
import victoria from '../../mock_data/img/victoria.jpg';
import oleh from '../../mock_data/img/oleh.jpg';
import yana from '../../mock_data/img/yana.jpg';
import s from './ContactsPage.module.scss';

export const ContactsPage: React.FC = memo(() => {
  return (
    <div className={s.container}>
      <ul className={s.listContainer}>
        <li className={s.card}>
          <img src={roman} alt="Roman" className={s.image} />
          <ul className={s.infoContainer}>
            <li className={s.name}>Roman Blyashuk</li>
            <div>
              <li className={s.link}>
                <Link to="https://github.com/romanblyashuk94" target="_blank">
                  GitHub
                </Link>
              </li>
              <li className={s.link}>
                <Link
                  to="https://www.linkedin.com/in/761120182/"
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </li>
            </div>
          </ul>
        </li>
        <li className={s.card}>
          <img src={artem} alt="Artem" className={s.image} />
          <ul className={s.infoContainer}>
            <li className={s.name}>Artem Rymarchuk</li>
            <div>
              <li className={s.link}>
                <Link to="https://github.com/4ebupel" target="_blank">
                  GitHub
                </Link>
              </li>
              <li className={s.link}>
                <Link
                  to="https://www.linkedin.com/in/artem-rymarchuk-22511a265/"
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </li>
            </div>
          </ul>
        </li>
        <li className={s.card}>
          <img src={victoria} alt="Victoria" className={s.image} />
          <ul className={s.infoContainer}>
            <li className={s.name}>Victoria Kovalenko</li>
            <div>
              <li className={s.link}>
                <Link
                  to="https://github.com/victoria-kovalenko"
                  target="_blank"
                >
                  GitHub
                </Link>
              </li>
              <li className={s.link}>
                <Link
                  to="https://www.linkedin.com/in/viktoriia-kovalenko-3ba230263/"
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </li>
            </div>
          </ul>
        </li>
        <li className={s.card}>
          <img src={oleh} alt="Oleh" className={s.image} />
          <ul className={s.infoContainer}>
            <li className={s.name}>Oleh Yablunovskyi</li>
            <div>
              <li className={s.link}>
                <Link to="https://github.com/oleh-yablunovskyi" target="_blank">
                  GitHub
                </Link>
              </li>
              <li className={s.link}>
                <Link
                  to="https://www.linkedin.com/in/oleh-yablunovskyi/"
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </li>
            </div>
          </ul>
        </li>
        <li className={s.card}>
          <img src={yana} alt="Yana" className={s.image} />
          <ul className={s.infoContainer}>
            <li className={s.name}>Yana Eva Gonchar</li>
            <div>
              <li className={s.link}>
                <Link to="https://github.com/YanaEvaGonchar" target="_blank">
                  GitHub
                </Link>
              </li>
              <li className={s.link}>
                <Link
                  to="https://www.linkedin.com/in/yana-eva-gonchar/"
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </li>
            </div>
          </ul>
        </li>
      </ul>
    </div>
  );
});
