import { Fragment } from 'react';
import { GoodCard } from '../GoodCard';
import './GoodList.scss';

export const GoodList = ({ goods, moveUp, moveDown }) => (
  <div className="GoodList">
    {goods.map(good => (
      <Fragment key={good.id}>
        <GoodCard good={good} />
      </Fragment>
    ))}
  </div>
);
