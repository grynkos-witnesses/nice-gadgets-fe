import React, { FC } from 'react';

import s from './ProductTechSpecs.module.scss';

interface Props {
  specs: {
    screen?: string,
    resolution?:string,
    processor?:string,
    ram?:string,
    capacity?:string,
    camera?:string,
    zoom?: string,
    cell?:string[],
  }
}

const specsLabels: { [index: string]: string } = {
  screen: 'Screen',
  resolution: 'Resolution',
  processor: 'Processor',
  ram: 'RAM',
  capacity: 'Built in memory',
  camera: 'Camera',
  zoom: 'Zoom',
  cell: 'Cell',
};

export const ProductTechSpecs: FC<Props> = ({ specs }) => {
  const specsKeys = Object.keys(specs);
  const specsCopy: { [index: string]: string | string[] } = specs;

  return (
    <div className={s.productTechspecs}>
      <ul>
        {specsKeys.map(key => {
          const specTitle = specsLabels[key] || 'unknown';

          const specValue = Array.isArray(specsCopy[key])
            ? (specsCopy[key] as Array<string>).join(', ')
            : specsCopy[key];

          return (
            <li key={key}>
              <h3>{specTitle}</h3>

              <span>{specValue}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
