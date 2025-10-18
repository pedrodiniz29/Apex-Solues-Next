import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Hero9 = (props) => {
  return (
    <>
      <div className="hero9-header30 thq-section-padding">
        <img
          alt={props.image1Alt}
          src={props.imageSrc}
          className="hero9-image"
        />
        <div className="hero9-container"></div>
        <div className="hero9-max-width thq-section-max-width">
          <div className="hero9-content">
            <h1 className="hero9-text1">
              {props.heading1 ?? (
                <Fragment>
                  <span className="hero9-text3">
                    Assessoria em Power Plataform
                  </span>
                </Fragment>
              )}
            </h1>
            <p className="hero9-text2">
              {props.content1 ?? (
                <Fragment>
                  <span className="hero9-text4">
                    <span>
                      Atinja o ápice da performance com nossas soluções
                      inteligentes e customizadas em Power Plataform.
                    </span>
                    <br></br>
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .hero9-header30 {
            gap: var(--dl-layout-space-twounits);
            height: 280px;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: var(--dl-layout-space-twounits);
            padding-right: var(--dl-layout-space-twounits);
            padding-bottom: var(--dl-layout-space-twounits);
          }
          .hero9-image {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: cover;
          }
          .hero9-container {
            top: 0px;
            left: 0px;
            right: 0px;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            bottom: 0px;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            background-color: rgba(0, 0, 0, 0.1);
          }
          .hero9-max-width {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            height: 100%;
            display: flex;
            z-index: 1;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .hero9-content {
            gap: var(--dl-layout-space-oneandhalfunits);
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
          }
          .hero9-text1 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 60px;
            text-align: center;
            font-family: 'Montserrat';
            font-weight: 400;
            animation-name: fadeInUp;
            text-transform: none;
            animation-delay: 0s;
            text-decoration: none;
            animation-duration: 400ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .hero9-text2 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 18px;
            text-align: center;
            font-family: 'Montserrat';
            font-weight: 300;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .hero9-text3 {
            display: inline-block;
          }
          .hero9-text4 {
            display: inline-block;
          }
        `}
      </style>
    </>
  )
}

Hero9.defaultProps = {
  imageSrc: '/business-data-panel%20(1)-1500w.jpg',
  heading1: undefined,
  image1Alt: 'image',
  content1: undefined,
}

Hero9.propTypes = {
  imageSrc: PropTypes.string,
  heading1: PropTypes.element,
  image1Alt: PropTypes.string,
  content1: PropTypes.element,
}

export default Hero9
