/**
 * @license
 * Copyright (c) 2021 QBCart Inc. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source repo.
 */

import React, { FC, useState } from 'react';
// prettier-ignore
import ImageCarouselStyles from './style.js'
interface Props {
  item: any;
  imagesStorageUrl: string;
}

const ImageCarousel: FC<Props> = (props: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  function nextSlide() {
    setCurrentSlide(
      currentSlide === props.item.Images?.length - 1 ? 0 : currentSlide + 1
    );
  }

  function prevSlide() {
    setCurrentSlide(
      currentSlide === 0 ? props.item.Images?.length - 1 : currentSlide - 1
    );
  }

  if (!props.item) {
    return null;
  }

  if ((props.item.Images?.length ?? 0) < 1) {
    return (
      <ImageCarouselStyles>
        <div
          className="slide-image"
          style={{
            backgroundImage: `url(${props.imagesStorageUrl}images/responsive/${props.item.id})`
          }}
        ></div>
      </ImageCarouselStyles>
    );
  }

  if (props.item.Images && props.item.Images.length === 1) {
    return (
      <ImageCarouselStyles>
        <div
          className="slide-image"
          style={{
            backgroundImage: `url(${props.imagesStorageUrl}images/responsive/${props.item.Images[0]})`
          }}
        ></div>
      </ImageCarouselStyles>
    );
  }

  return (
    <ImageCarouselStyles>
      <span className="material-icons arrow left-arrow" onClick={prevSlide}>
        arrow_back_ios_new
      </span>
      <span className="material-icons arrow right-arrow" onClick={nextSlide}>
        arrow_forward_ios_new
      </span>

      {props.item.Images?.map((image, index) => {
        return (
          <div
            className={
              index === currentSlide ? 'slide-active' : 'slide-inactive'
            }
            key={image}
          >
            {index === currentSlide && (
              <div
                className="slide-image"
                style={{
                  backgroundImage: `url(${props.imagesStorageUrl}images/responsive/${image})`
                }}
              ></div>
            )}
          </div>
        );
      })}
    </ImageCarouselStyles>
  );
};

export default ImageCarousel;
