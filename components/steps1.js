import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Steps1 = (props) => {
  return (
    <>
      <div className="steps1-container10 thq-section-padding">
        <span className="steps1-text10">
          {props.text ?? (
            <Fragment>
              <span className="steps1-text33">
                Sua jornada de transformação
              </span>
            </Fragment>
          )}
        </span>
        <div className="steps1-max-width thq-section-max-width">
          <div className="steps1-container11">
            <animate-on-reveal
              animation="fadeInLeft"
              duration="300ms"
              delay="0s"
              direction="normal"
              easing="ease"
              iteration="1"
            >
              <div
                data-thq-animate-on-reveal="true"
                className="steps1-container12 thq-card"
              >
                <img
                  alt={props.step1ImageAlt}
                  src={props.step1ImageSrc}
                  className="steps1-image1 thq-img-ratio-1-1"
                />
                <h2 className="steps1-text11">
                  {props.step1Title ?? (
                    <Fragment>
                      <span className="steps1-text40">Heading</span>
                    </Fragment>
                  )}
                </h2>
                <span className="steps1-text12">
                  {props.step1Description ?? (
                    <Fragment>
                      <span className="steps1-text31">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim in eros elementum tristique.
                        Duis cursus, mi quis viverra ornare, eros dolor interdum
                        nulla.
                      </span>
                    </Fragment>
                  )}
                </span>
                <label className="steps1-text13">01</label>
              </div>
            </animate-on-reveal>
            <animate-on-reveal
              animation="fadeInLeft"
              duration="300ms"
              delay="0ms"
              direction="normal"
              easing="ease"
              iteration="1"
            >
              <div
                data-thq-animate-on-reveal="true"
                className="steps1-container13 thq-card"
              >
                <img
                  alt={props.step2Alt}
                  src={props.step2ImageSrc}
                  className="steps1-image2 thq-img-ratio-1-1"
                />
                <h2 className="steps1-text14">
                  {props.step2Title ?? (
                    <Fragment>
                      <span className="steps1-text32">Heading</span>
                    </Fragment>
                  )}
                </h2>
                <span className="steps1-text15">
                  {props.step2Description ?? (
                    <Fragment>
                      <span className="steps1-text29">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisuis viverra ornare, eros dolor interdum nulla.
                      </span>
                    </Fragment>
                  )}
                </span>
                <label className="steps1-text16">02</label>
              </div>
            </animate-on-reveal>
          </div>
          <div className="steps1-container14">
            <animate-on-reveal
              animation="fadeInLeft"
              duration="300ms"
              delay="0ms"
              direction="normal"
              easing="ease"
              iteration="1"
            >
              <div
                data-thq-animate-on-reveal="true"
                className="steps1-container15 thq-card"
              >
                <img
                  alt={props.step3ImageAlt}
                  src={props.step3ImageSrc}
                  className="steps1-image3 thq-img-ratio-1-1"
                />
                <h2 className="steps1-text17">
                  {props.step3Title ?? (
                    <Fragment>
                      <span className="steps1-text37">Heading</span>
                    </Fragment>
                  )}
                </h2>
                <span className="steps1-text18">
                  {props.step3Description ?? (
                    <Fragment>
                      <span className="steps1-text35">adfasd</span>
                    </Fragment>
                  )}
                </span>
                <label className="steps1-text19">03</label>
              </div>
            </animate-on-reveal>
            <animate-on-reveal
              animation="fadeInLeft"
              duration="300ms"
              delay="0ms"
              direction="normal"
              easing="ease"
              iteration="1"
            >
              <div
                data-thq-animate-on-reveal="true"
                className="steps1-container16 thq-card"
              >
                <img
                  alt={props.step4ImageAlt}
                  src={props.step4ImageSrc}
                  className="steps1-image4 thq-img-ratio-1-1"
                />
                <h2 className="steps1-text20">
                  {props.step4Title ?? (
                    <Fragment>
                      <span className="steps1-text39">Heading</span>
                    </Fragment>
                  )}
                </h2>
                <span className="steps1-text21">
                  {props.step4Description ?? (
                    <Fragment>
                      <span className="steps1-text34">sdfasdfasd</span>
                    </Fragment>
                  )}
                </span>
                <label className="steps1-text22">04</label>
              </div>
            </animate-on-reveal>
          </div>
          <div className="steps1-container17">
            <animate-on-reveal
              animation="fadeInLeft"
              duration="300ms"
              delay="0ms"
              direction="normal"
              easing="ease"
              iteration="1"
            >
              <div
                data-thq-animate-on-reveal="true"
                className="steps1-container18 thq-card"
              >
                <img
                  alt={props.step3ImageAlt1}
                  src={props.step3ImageSrc1}
                  className="steps1-image5 thq-img-ratio-1-1"
                />
                <h2 className="steps1-text23">
                  {props.step3Title1 ?? (
                    <Fragment>
                      <span className="steps1-text41">Heading</span>
                    </Fragment>
                  )}
                </h2>
                <span className="steps1-text24">
                  {props.step3Description1 ?? (
                    <Fragment>
                      <span className="steps1-text38">asdfasdf</span>
                    </Fragment>
                  )}
                </span>
                <label className="steps1-text25">05</label>
              </div>
            </animate-on-reveal>
            <animate-on-reveal
              animation="fadeInLeft"
              duration="300ms"
              delay="0ms"
              direction="normal"
              easing="ease"
              iteration="1"
            >
              <div
                data-thq-animate-on-reveal="true"
                className="steps1-container19 thq-card"
              >
                <img
                  alt={props.step4ImageAlt1}
                  src={props.step4ImageSrc1}
                  className="steps1-image6 thq-img-ratio-1-1"
                />
                <h2 className="steps1-text26">
                  {props.step4Title1 ?? (
                    <Fragment>
                      <span className="steps1-text36">Heading</span>
                    </Fragment>
                  )}
                </h2>
                <span className="steps1-text27">
                  {props.step4Description1 ?? (
                    <Fragment>
                      <span className="steps1-text30">asdfsdf</span>
                    </Fragment>
                  )}
                </span>
                <label className="steps1-text28">06</label>
              </div>
            </animate-on-reveal>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .steps1-container10 {
            gap: var(--dl-layout-space-fiveunits);
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            align-items: center;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            justify-content: center;
          }
          .steps1-text10 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            width: 100%;
            font-size: 3rem;
            font-style: normal;
            text-align: center;
            font-weight: 300;
          }
          .steps1-max-width {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .steps1-container11 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            display: flex;
            position: relative;
            align-items: flex-start;
            flex-direction: row;
          }
          .steps1-container12 {
            flex: 1;
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-primary1);
          }
          .steps1-image1 {
            width: var(--dl-layout-size-large);
            height: var(--dl-layout-size-large);
            padding: var(--dl-layout-space-twounits);
            object-fit: contain;
          }
          .steps1-text11 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 20px;
            text-align: center;
            font-family: 'Montserrat';
            font-weight: 400;
            text-transform: none;
            text-decoration: none;
          }
          .steps1-text12 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 14px;
            text-align: center;
            font-family: 'Montserrat';
            font-weight: 400;
            text-transform: none;
            text-decoration: none;
          }
          .steps1-text13 {
            top: var(--dl-layout-space-unit);
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 30px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 500;
            text-transform: none;
            text-decoration: none;
          }
          .steps1-container13 {
            flex: 1;
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: center;
            border-radius: var(--dl-layout-radius-cardradius);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-primary1);
          }
          .steps1-image2 {
            width: var(--dl-layout-size-large);
            height: var(--dl-layout-size-large);
            padding: var(--dl-layout-space-twounits);
            object-fit: contain;
          }
          .steps1-text14 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 20px;
            text-align: center;
            font-family: 'Montserrat';
            font-weight: 400;
            text-transform: none;
            text-decoration: none;
          }
          .steps1-text15 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 14px;
            text-align: center;
            font-family: 'Montserrat';
            font-weight: 400;
            text-transform: none;
            text-decoration: none;
          }
          .steps1-text16 {
            top: var(--dl-layout-space-unit);
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 30px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 500;
            text-transform: none;
            text-decoration: none;
          }
          .steps1-container14 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: row;
          }
          .steps1-container15 {
            flex: 1;
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: center;
            border-radius: var(--dl-layout-radius-cardradius);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-primary1);
          }
          .steps1-image3 {
            width: var(--dl-layout-size-large);
            height: var(--dl-layout-size-large);
            padding: var(--dl-layout-space-twounits);
            object-fit: contain;
          }
          .steps1-text17 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 20px;
            text-align: center;
            font-family: 'Montserrat';
            font-weight: 400;
            text-transform: none;
            text-decoration: none;
          }
          .steps1-text18 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 14px;
            text-align: center;
            font-family: 'Montserrat';
            font-weight: 400;
            text-transform: none;
            text-decoration: none;
          }
          .steps1-text19 {
            top: var(--dl-layout-space-unit);
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 30px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 500;
            text-transform: none;
            text-decoration: none;
          }
          .steps1-container16 {
            flex: 1;
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: center;
            border-radius: var(--dl-layout-radius-cardradius);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-primary1);
          }
          .steps1-image4 {
            width: var(--dl-layout-size-large);
            height: var(--dl-layout-size-large);
            padding: var(--dl-layout-space-twounits);
            object-fit: contain;
          }
          .steps1-text20 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 20px;
            text-align: center;
            font-family: 'Montserrat';
            font-weight: 400;
            text-transform: none;
            text-decoration: none;
          }
          .steps1-text21 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 14px;
            text-align: center;
            font-family: 'Montserrat';
            font-weight: 400;
            text-transform: none;
            text-decoration: none;
          }
          .steps1-text22 {
            top: var(--dl-layout-space-unit);
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 30px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 500;
            text-transform: none;
            text-decoration: none;
          }
          .steps1-container17 {
            gap: var(--dl-layout-space-unit);
            flex: 1;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            animation-name: none;
            flex-direction: row;
            animation-delay: 0s;
            animation-duration: 300ms;
            animation-direction: normal;
            animation-iteration-count: 1;
            animation-timing-function: ease;
          }
          .steps1-container18 {
            flex: 1;
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: center;
            border-radius: var(--dl-layout-radius-cardradius);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-primary1);
          }
          .steps1-image5 {
            width: var(--dl-layout-size-large);
            height: var(--dl-layout-size-large);
            padding: var(--dl-layout-space-twounits);
            object-fit: contain;
          }
          .steps1-text23 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 20px;
            text-align: center;
            font-family: 'Montserrat';
            font-weight: 400;
            text-transform: none;
            text-decoration: none;
          }
          .steps1-text24 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 14px;
            text-align: center;
            font-family: 'Montserrat';
            font-weight: 400;
            text-transform: none;
            text-decoration: none;
          }
          .steps1-text25 {
            top: var(--dl-layout-space-unit);
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 30px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 500;
            text-transform: none;
            text-decoration: none;
          }
          .steps1-container19 {
            flex: 1;
            display: flex;
            position: relative;
            align-self: stretch;
            align-items: center;
            border-radius: var(--dl-layout-radius-cardradius);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-theme-primary1);
          }
          .steps1-image6 {
            width: var(--dl-layout-size-large);
            height: var(--dl-layout-size-large);
            padding: var(--dl-layout-space-twounits);
            object-fit: contain;
          }
          .steps1-text26 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 20px;
            text-align: center;
            font-family: 'Montserrat';
            font-weight: 400;
            text-transform: none;
            text-decoration: none;
          }
          .steps1-text27 {
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            font-size: 14px;
            text-align: center;
            font-family: 'Montserrat';
            font-weight: 400;
            text-transform: none;
            text-decoration: none;
          }
          .steps1-text28 {
            top: var(--dl-layout-space-unit);
            fill: var(--dl-color-theme-secondary1);
            color: var(--dl-color-theme-secondary1);
            right: var(--dl-layout-space-unit);
            position: absolute;
            font-size: 30px;
            font-style: normal;
            font-family: 'Montserrat';
            font-weight: 500;
            text-transform: none;
            text-decoration: none;
          }
          .steps1-text29 {
            display: inline-block;
          }
          .steps1-text30 {
            display: inline-block;
          }
          .steps1-text31 {
            display: inline-block;
          }
          .steps1-text32 {
            display: inline-block;
          }
          .steps1-text33 {
            display: inline-block;
          }
          .steps1-text34 {
            display: inline-block;
          }
          .steps1-text35 {
            display: inline-block;
          }
          .steps1-text36 {
            display: inline-block;
          }
          .steps1-text37 {
            display: inline-block;
          }
          .steps1-text38 {
            display: inline-block;
          }
          .steps1-text39 {
            display: inline-block;
          }
          .steps1-text40 {
            display: inline-block;
          }
          .steps1-text41 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .steps1-max-width {
              flex-direction: column;
            }
          }
          @media (max-width: 767px) {
            .steps1-container11 {
              flex-direction: column;
            }
            .steps1-container12 {
              width: 100%;
            }
            .steps1-container13 {
              width: 100%;
            }
            .steps1-container14 {
              flex-direction: column;
            }
            .steps1-container15 {
              width: 100%;
            }
            .steps1-container16 {
              width: 100%;
            }
            .steps1-container17 {
              flex-direction: column;
            }
            .steps1-container18 {
              width: 100%;
            }
            .steps1-container19 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

Steps1.defaultProps = {
  step2Description: undefined,
  step4Description1: undefined,
  step1Description: undefined,
  step4ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  imageSrc: 'd0931c62-d973-4af3-a47a-9ccb94dbf72a',
  step2Title: undefined,
  step3ImageSrc1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  text: undefined,
  step4Description: undefined,
  step4ImageSrc1: 'https://play.teleporthq.io/static/svg/default-img.svg',
  step3Description: undefined,
  step2ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  step2Alt: 'image',
  step3ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  step4ImageAlt1: 'image',
  imageSrc2: 'd0931c62-d973-4af3-a47a-9ccb94dbf72a',
  step4ImageAlt: 'image',
  step4Title1: undefined,
  step3ImageAlt: 'image',
  step3Title: undefined,
  step1ImageSrc: 'https://play.teleporthq.io/static/svg/default-img.svg',
  step1ImageAlt: 'image',
  step3ImageAlt1: 'image',
  step3Description1: undefined,
  step4Title: undefined,
  step1Title: undefined,
  step3Title1: undefined,
}

Steps1.propTypes = {
  step2Description: PropTypes.element,
  step4Description1: PropTypes.element,
  step1Description: PropTypes.element,
  step4ImageSrc: PropTypes.string,
  imageSrc: PropTypes.string,
  step2Title: PropTypes.element,
  step3ImageSrc1: PropTypes.string,
  text: PropTypes.element,
  step4Description: PropTypes.element,
  step4ImageSrc1: PropTypes.string,
  step3Description: PropTypes.element,
  step2ImageSrc: PropTypes.string,
  step2Alt: PropTypes.string,
  step3ImageSrc: PropTypes.string,
  step4ImageAlt1: PropTypes.string,
  imageSrc2: PropTypes.string,
  step4ImageAlt: PropTypes.string,
  step4Title1: PropTypes.element,
  step3ImageAlt: PropTypes.string,
  step3Title: PropTypes.element,
  step1ImageSrc: PropTypes.string,
  step1ImageAlt: PropTypes.string,
  step3ImageAlt1: PropTypes.string,
  step3Description1: PropTypes.element,
  step4Title: PropTypes.element,
  step1Title: PropTypes.element,
  step3Title1: PropTypes.element,
}

export default Steps1
