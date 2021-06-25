/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source repo.
 */

import React, { FC } from 'react';
// prettier-ignore
import ImageCarouselStyles from './style.js'
interface Props {
  item: any;
  namespace: string;
  imagesStorageUrl: string;
}

const ImageCarousel: FC<Props> = (props: Props) => {
  return (
    <ImageCarouselStyles>
      <div
        id={`${props.namespace}-indicators`}
        className="carousel slide"
        data-ride="carousel"
        data-interval="false"
      >
        {props.item?.Images && props.item.Images.length > 0 ? (
          <ol className="carousel-indicators">
            <li
              data-target={`#${props.namespace}-indicators`}
              data-slide-to="0"
              className="active"
            ></li>
            {props.item.Images.map((img, index) => {
              return (
                <li
                  key={`${props.item.id}-carousel-indicator-${index}`}
                  data-target={`#${props.namespace}-indicators`}
                  data-slide-to={index + 1}
                ></li>
              );
            })}
          </ol>
        ) : null}
        <div className="carousel-inner">
          <div
            className="carousel-item active"
            style={{
              backgroundImage: props.item?.id
                ? `url(${props.imagesStorageUrl}images/responsive/${props.item.id})`
                : ''
            }}
          ></div>
          {props.item?.Images && props.item.Images.length > 0
            ? props.item.Images.map((img, index) => {
                return (
                  <div
                    key={`${props.item.id}-carousel-img-${index}`}
                    className="carousel-item"
                    style={{
                      backgroundImage: `url(${props.imagesStorageUrl}images/related/${props.item.id}/responsive/${img})`
                    }}
                  ></div>
                );
              })
            : null}
        </div>
        <a
          className="carousel-control-prev"
          id="carousel-prev"
          href={`#${props.namespace}-indicators`}
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          id="carousel-prev"
          href={`#${props.namespace}-indicators`}
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </ImageCarouselStyles>
  );
};

export default ImageCarousel;
