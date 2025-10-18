import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Footer15 = (props) => {
  return (
    <>
      <footer className="footer15-container1 thq-section-padding">
        <div className="footer15-max-width thq-section-max-width">
          <div className="footer15-content">
            <div className="footer15-actions1">
              <div className="footer15-newsletter">
                <span className="footer15-content1">
                  {props.content1 ?? (
                    <Fragment>
                      <span className="footer15-text4">
                        Entre em contato conosco através dos telefones abaixo ou
                        em nossas redes sociais
                      </span>
                    </Fragment>
                  )}
                </span>
                <div className="footer15-actions2">
                  <span className="footer15-content21">
                    {props.content2 ?? (
                      <Fragment>
                        <span className="footer15-text2">16 99167-0896</span>
                      </Fragment>
                    )}
                  </span>
                  <span className="footer15-content22">
                    {props.content21 ?? (
                      <Fragment>
                        <span className="footer15-text5">17 99604-1371</span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
              <div className="footer15-media">
                <div className="footer15-container2">
                  <div className="footer15-container3">
                    <img
                      alt={props.image1Alt}
                      src={props.image1Src}
                      className="footer15-image1"
                    />
                    <span className="footer15-text1">
                      {props.text ?? (
                        <Fragment>
                          <span className="footer15-text3">Apex Soluções</span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                  <div className="footer15-social-links">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="footer15-icon1 thq-icon-small"
                    >
                      <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                    </svg>
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="footer15-icon3 thq-icon-small"
                    >
                      <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                    </svg>
                    <svg
                      width="512"
                      height="512"
                      viewBox="0 0 512 512"
                      className="footer15-icon5"
                    >
                      <path
                        d="M414.73 97.1A222.14 222.14 0 0 0 256.94 32C134 32 33.92 131.58 33.87 254a220.6 220.6 0 0 0 29.78 111L32 480l118.25-30.87a223.6 223.6 0 0 0 106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 0 0 414.73 97.1M256.94 438.66h-.08a185.75 185.75 0 0 1-94.36-25.72l-6.77-4l-70.17 18.32l18.73-68.09l-4.41-7A183.46 183.46 0 0 1 71.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 0 1 185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52m101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78s-14.4 18-17.65 21.75s-6.5 4.16-12.07 1.38s-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26s.93-6.94-.46-9.71s-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52c-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 0 0-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38s39.3 59.73 95.21 83.76a323 323 0 0 0 31.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2c10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37s-5.11-3.71-10.69-6.48"
                        fill="currentColor"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer15-credits">
            <div className="footer15-row"></div>
            <span className="footer15-content3">
              {props.copyright ?? (
                <Fragment>
                  <span className="footer15-text6">© 2025Apex Soluções</span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .footer15-container1 {
            display: flex;
            padding: var(--dl-layout-space-threeunits);
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .footer15-max-width {
            display: flex;
            flex-direction: column;
          }
          .footer15-content {
            gap: var(--dl-layout-space-twounits);
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-shrink: 0;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: 0px;
            border-radius: var(--dl-layout-radius-radius4);
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: flex-start;
          }
          .footer15-actions1 {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 100%;
            display: flex;
            flex-grow: 1;
            align-items: flex-start;
          }
          .footer15-newsletter {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: 50%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer15-content1 {
            font-size: 2rem;
            font-family: 'Montserrat';
            font-weight: 400;
            text-transform: none;
            text-decoration: none;
          }
          .footer15-actions2 {
            gap: 16px;
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
          }
          .footer15-content21 {
            font-size: 30px;
            align-self: stretch;
            font-family: 'Montserrat';
            font-weight: 300;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .footer15-content22 {
            font-size: 30px;
            align-self: stretch;
            font-family: 'Montserrat';
            font-weight: 300;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .footer15-media {
            width: 50%;
            display: flex;
            align-self: stretch;
            align-items: flex-end;
            flex-direction: column;
          }
          .footer15-container2 {
            gap: var(--dl-layout-space-oneandhalfunits);
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .footer15-container3 {
            gap: var(--dl-layout-space-oneandhalfunits);
            flex: 0 0 auto;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
          }
          .footer15-image1 {
            height: 4rem;
          }
          .footer15-text1 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            width: 100%;
            font-size: 2rem;
            align-self: center;
            font-style: normal;
            font-weight: 400;
          }
          .footer15-social-links {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .footer15-icon1 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            width: 50px;
            height: 50px;
          }
          .footer15-icon3 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            width: 50px;
            height: 50px;
          }
          .footer15-icon5 {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            width: 50px;
            height: 50px;
          }
          .footer15-credits {
            gap: var(--dl-layout-space-oneandhalfunits);
            width: auto;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer15-row {
            flex: 1;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-shrink: 0;
            justify-content: space-between;
          }
          .footer15-content3 {
            font-size: 18px;
            align-self: center;
            font-family: 'Montserrat';
            font-weight: 300;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .footer15-text2 {
            display: inline-block;
          }
          .footer15-text3 {
            display: inline-block;
          }
          .footer15-text4 {
            display: inline-block;
          }
          .footer15-text5 {
            display: inline-block;
          }
          .footer15-text6 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .footer15-content {
              flex-direction: row;
            }
            .footer15-newsletter {
              width: 50%;
            }
            .footer15-media {
              width: 50%;
            }
            .footer15-image1 {
              height: 4rem;
            }
            .footer15-credits {
              flex-direction: column;
            }
            .footer15-row {
              align-items: center;
              flex-direction: row;
              justify-content: center;
            }
          }
          @media (max-width: 767px) {
            .footer15-content {
              gap: var(--dl-layout-space-twounits);
              width: auto;
              align-self: stretch;
              flex-direction: column;
            }
            .footer15-actions1 {
              width: 100%;
              align-items: flex-start;
              flex-direction: column;
            }
            .footer15-newsletter {
              width: 100%;
            }
            .footer15-media {
              width: 100%;
              align-items: center;
            }
            .footer15-credits {
              flex-direction: column;
            }
            .footer15-row {
              padding: 0px;
              padding-right: 0px;
              flex-direction: column;
            }
          }
          @media (max-width: 479px) {
            .footer15-content {
              gap: var(--dl-layout-space-twounits);
            }
            .footer15-newsletter {
              width: 100%;
            }
            .footer15-actions2 {
              width: 100%;
            }
            .footer15-media {
              width: 100%;
            }
            .footer15-image1 {
              height: 3rem;
            }
            .footer15-social-links {
              align-items: center;
              justify-content: center;
            }
            .footer15-row {
              align-items: center;
              justify-content: center;
            }
          }
        `}
      </style>
    </>
  )
}

Footer15.defaultProps = {
  content2: undefined,
  text: undefined,
  image1Src: '6cc34e33-ce08-45a1-ab8b-59986aaca1a6',
  content1: undefined,
  content21: undefined,
  image1Alt: 'logo',
  copyright: undefined,
}

Footer15.propTypes = {
  content2: PropTypes.element,
  text: PropTypes.element,
  image1Src: PropTypes.string,
  content1: PropTypes.element,
  content21: PropTypes.element,
  image1Alt: PropTypes.string,
  copyright: PropTypes.element,
}

export default Footer15
