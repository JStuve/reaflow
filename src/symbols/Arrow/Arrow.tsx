import React, { FC } from 'react';
import classNames from 'classnames';
import css from './Arrow.module.scss';

type ArrowProps = {
  size?: number;
  x?: number;
  y?: number;
  angle?: number;
  className?: string;
};

export const Arrow: FC<ArrowProps> = ({
  size = 8,
  y = 0,
  x = 0,
  angle = 0,
  className,
}) => (
  <path
    transform={`translate(${x}, ${y}) rotate(${angle})`}
    className={classNames(css.arrow, className)}
    d={`M0,-${size / 2}L${size},0L0,${size / 2}`}
  />
);
