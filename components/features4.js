import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Features4 = (props) => {
  return (
    <>
      <div className="features4-layout301 thq-section-padding">
        <div className="features4-max-width thq-section-max-width">
          <h2 className="features4-text10">
            {props.sectionTitle ?? (
              <Fragment>
                <span className="features4-text15">
                  Discover the Key Features
                </span>
              </Fragment>
            )}
          </h2>
          <div className="features4-row thq-grid-auto-300">
            <div className="features4-feature1">
              <animate-on-reveal
                animation="fadeInUp"
                duration="800ms"
                delay="0s"
                direction="normal"
                easing="ease"
                iteration="1"
              >
                <img
                  alt={props.feature1ImageAlt}
                  src={props.feature1ImageSrc}
                  data-thq-animate-on-reveal="true"
                  className="features4-img1 thq-img-ratio-4-3"
                />
              </animate-on-reveal>
              <div className="features4-content1 thq-flex-column">
                <div className="features4-section-title1 thq-flex-column">
                  <h3 className="features4-title1">
                    {props.feature1Title ?? (
                      <Fragment>
                        <span className="features4-text17">
                          Discover the Magic of Lorem Ipsum Text Generation
                        </span>
                      </Fragment>
                    )}
                  </h3>
                  <span className="features4-description1">
                    {props.feature1Description ?? (
                      <Fragment>
                        <span className="features4-text14">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="features4-feature2">
              <animate-on-reveal
                animation="fadeInUp"
                duration="800ms"
                delay="0s"
                direction="normal"
                easing="ease"
                iteration="1"
              >
                <img
                  alt={props.feature2ImageAlt}
                  src={props.feature2ImageSrc}
                  data-thq-animate-on-reveal="true"
                  className="features4-img2 thq-img-ratio-4-3"
                />
              </animate-on-reveal>
              <div className="features4-content2 thq-flex-column">
                <div className="features4-section-title2 thq-flex-column">
                  <strong className="features4-title2">
                    {props.feature2Title ?? (
                      <Fragment>
                        <span className="features4-text18">
                          Discover the Magic of Lorem Ipsum Text Generation
                        </span>
                      </Fragment>
                    )}
                  </strong>
                  <span className="features4-description2">
                    {props.feature2Description ?? (
                      <Fragment>
                        <span className="features4-text16">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="features4-feature3">
              <animate-on-reveal
                animation="fadeInUp"
                duration="800ms"
                delay="0s"
                direction="normal"
                easing="ease"
                iteration="1"
              >
                <img
                  alt={props.feature3ImageAlt}
                  src={props.feature3ImageSrc}
                  data-thq-animate-on-reveal="true"
                  className="features4-img3 thq-img-ratio-4-3"
                />
              </animate-on-reveal>
              <div className="features4-content3 thq-flex-column">
                <div className="features4-section-title3 thq-flex-column">
                  <strong className="features4-title3">
                    {props.feature3Title ?? (
                      <Fragment>
                        <span className="features4-text11">
                          Discover the Magic of Lorem Ipsum Text Generation
                        </span>
                      </Fragment>
                    )}
                  </strong>
                  <span className="features4-description3">
                    {props.feature3Description ?? (
                      <Fragment>
                        <span className="features4-text13">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
            <div className="features4-feature4">
              <animate-on-reveal
                animation="fadeInUp"
                duration="800ms"
                delay="0s"
                direction="normal"
                easing="ease"
                iteration="1"
              >
                <img
                  alt={props.feature4ImageAlt}
                  src={props.feature4ImageSrc}
                  data-thq-animate-on-reveal="true"
                  className="features4-img4 thq-img-ratio-4-3"
                />
              </animate-on-reveal>
              <div className="features4-content4 thq-flex-column">
                <div className="features4-section-title4 thq-flex-column">
                  <strong className="features4-title4">
                    {props.feature4Title ?? (
                      <Fragment>
                        <span className="features4-text19">
                          Discover the Magic of Lorem Ipsum Text Generation
                        </span>
                      </Fragment>
                    )}
                  </strong>
                  <span className="features4-description4">
                    {props.feature4Description ?? (
                      <Fragment>
                        <span className="features4-text12">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros elementum
                          tristique.
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .features4-layout301 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            height: auto;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-shrink: 0;
            flex-direction: column;
            justify-content: center;
            background-image: radial-gradient(
              circle at center,
              rgb(14, 116, 144) 1%,
              rgb(0, 6, 56) 100%
            );
          }
          .features4-max-width {
            gap: var(--dl-layout-space-threeunits);
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .features4-text10 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 3rem;
            font-style: normal;
            text-align: center;
            font-family: 'Montserrat';
            font-weight: 300;
            text-transform: none;
            text-decoration: none;
          }
          .features4-row {
            width: 100%;
          }
          .features4-feature1 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: auto;
            display: flex;
            overflow: hidden;
            max-width: 600px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features4-img1 {
            width: 100%;
            object-fit: contain;
            padding-top: var(--dl-layout-space-twounits);
            padding-bottom: var(--dl-layout-space-twounits);
          }
          .features4-content1 {
            align-self: stretch;
            align-items: center;
          }
          .features4-section-title1 {
            align-self: stretch;
            align-items: center;
          }
          .features4-title1 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 1.5rem;
            text-align: center;
            font-family: 'Montserrat';
            font-weight: 300;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .features4-description1 {
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
          .features4-feature2 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: auto;
            display: flex;
            overflow: hidden;
            max-width: 600px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features4-img2 {
            object-fit: contain;
            padding-top: var(--dl-layout-space-twounits);
            padding-bottom: var(--dl-layout-space-twounits);
          }
          .features4-content2 {
            align-self: stretch;
            align-items: center;
          }
          .features4-section-title2 {
            align-self: stretch;
            align-items: center;
          }
          .features4-title2 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 1.5rem;
            text-align: center;
            font-family: 'Montserrat';
            font-weight: 300;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .features4-description2 {
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
          .features4-feature3 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: auto;
            display: flex;
            overflow: hidden;
            max-width: 600px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features4-img3 {
            object-fit: contain;
            padding-top: var(--dl-layout-space-twounits);
            padding-bottom: var(--dl-layout-space-twounits);
          }
          .features4-content3 {
            align-self: stretch;
            align-items: center;
          }
          .features4-section-title3 {
            align-self: stretch;
            align-items: center;
          }
          .features4-title3 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 1.5rem;
            text-align: center;
            font-family: 'Montserrat';
            font-weight: 300;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .features4-description3 {
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
          .features4-feature4 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            width: auto;
            display: flex;
            overflow: hidden;
            max-width: 600px;
            align-items: flex-start;
            flex-shrink: 0;
            flex-direction: column;
          }
          .features4-img4 {
            object-fit: contain;
            padding-top: var(--dl-layout-space-twounits);
            padding-bottom: var(--dl-layout-space-twounits);
          }
          .features4-content4 {
            align-self: stretch;
            align-items: center;
          }
          .features4-section-title4 {
            align-self: stretch;
            align-items: center;
          }
          .features4-title4 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 1.5rem;
            text-align: center;
            font-family: 'Montserrat';
            font-weight: 300;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .features4-description4 {
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
          .features4-text11 {
            display: inline-block;
          }
          .features4-text12 {
            display: inline-block;
          }
          .features4-text13 {
            display: inline-block;
          }
          .features4-text14 {
            display: inline-block;
          }
          .features4-text15 {
            display: inline-block;
          }
          .features4-text16 {
            display: inline-block;
          }
          .features4-text17 {
            display: inline-block;
          }
          .features4-text18 {
            display: inline-block;
          }
          .features4-text19 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .features4-row {
              width: auto;
              align-items: center;
              flex-direction: column;
            }
            .features4-feature1 {
              width: 100%;
            }
            .features4-feature2 {
              width: 100%;
            }
            .features4-feature3 {
              width: 100%;
            }
            .features4-feature4 {
              width: 100%;
            }
          }
          @media (max-width: 479px) {
            .features4-max-width {
              gap: var(--dl-layout-space-oneandhalfunits);
            }
          }
        `}
      </style>
    </>
  )
}

Features4.defaultProps = {
  feature1ImageAlt: 'image1',
  feature3Title: undefined,
  feature4Description: undefined,
  feature2ImageAlt: 'image2',
  feature4ImageSrc: '/solution-yrd4gqxrbaij4o5l-600w.webp',
  feature3Description: undefined,
  feature3ImageAlt: 'PlaceholderImage1314',
  feature1Description: undefined,
  sectionTitle: undefined,
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  feature2Description: undefined,
  feature1Title: undefined,
  feature3ImageSrc:
    'https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDI0fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  feature2Title: undefined,
  feature4ImageAlt: 'image 4',
  feature2ImageSrc:
    'https://images.unsplash.com/photo-1552083974-186346191183?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&ixlib=rb-4.0.3&w=600',
  feature4Title: undefined,
}

Features4.propTypes = {
  feature1ImageAlt: PropTypes.string,
  feature3Title: PropTypes.element,
  feature4Description: PropTypes.element,
  feature2ImageAlt: PropTypes.string,
  feature4ImageSrc: PropTypes.string,
  feature3Description: PropTypes.element,
  feature3ImageAlt: PropTypes.string,
  feature1Description: PropTypes.element,
  sectionTitle: PropTypes.element,
  feature1ImageSrc: PropTypes.string,
  feature2Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature3ImageSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature4ImageAlt: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  feature4Title: PropTypes.element,
}

export default Features4
