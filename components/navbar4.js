import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

const Navbar4 = (props) => {
  return (
    <>
      <header className="navbar4-container">
        <header data-thq="thq-navbar" className="navbar4-navbar-interactive">
          <img
            alt={props.logoAlt}
            src={props.logoSrc}
            className="navbar4-image1"
          />
          <div data-thq="thq-navbar-nav" className="navbar4-desktop-menu">
            <nav className="navbar4-links1">
              <a href={props.link1Url} className="navbar4-link11">
                {props.link1 ?? (
                  <Fragment>
                    <span className="navbar4-text2">Link1</span>
                  </Fragment>
                )}
              </a>
              <a href={props.link2Url} className="navbar4-link21">
                {props.link2 ?? (
                  <Fragment>
                    <span className="navbar4-text3">Link2</span>
                  </Fragment>
                )}
              </a>
              <a href={props.link3Url} className="navbar4-link31">
                {props.link3 ?? (
                  <Fragment>
                    <span className="navbar4-text6">Link3</span>
                  </Fragment>
                )}
              </a>
              <a href={props.link4Url} className="navbar4-link41">
                {props.link4 ?? (
                  <Fragment>
                    <span className="navbar4-text4">Link4</span>
                  </Fragment>
                )}
              </a>
            </nav>
            <div className="navbar4-buttons1">
              <button className="navbar4-action11 thq-button-animated thq-button-filled">
                <span className="navbar4-text1">
                  {props.action1 ?? (
                    <Fragment>
                      <span className="navbar4-text5">Action 1</span>
                    </Fragment>
                  )}
                </span>
              </button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="navbar4-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navbar4-icon1">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="navbar4-mobile-menu">
            <div className="navbar4-nav">
              <div className="navbar4-top">
                <img
                  alt={props.logoAlt}
                  src={props.logoSrc}
                  className="navbar4-logo"
                />
                <div data-thq="thq-close-menu" className="navbar4-close-menu">
                  <svg viewBox="0 0 1024 1024" className="navbar4-icon3">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="navbar4-links2">
                <a href={props.link1Url} className="navbar4-link12">
                  {props.link1 ?? (
                    <Fragment>
                      <span className="navbar4-text2">Link1</span>
                    </Fragment>
                  )}
                </a>
                <a href={props.link2Url} className="navbar4-link22">
                  {props.link2 ?? (
                    <Fragment>
                      <span className="navbar4-text3">Link2</span>
                    </Fragment>
                  )}
                </a>
                <a href={props.link3Url} className="navbar4-link32">
                  {props.link3 ?? (
                    <Fragment>
                      <span className="navbar4-text6">Link3</span>
                    </Fragment>
                  )}
                </a>
                <a href={props.link4Url} className="navbar4-link42">
                  {props.link4 ?? (
                    <Fragment>
                      <span className="navbar4-text4">Link4</span>
                    </Fragment>
                  )}
                </a>
              </nav>
            </div>
            <div className="navbar4-buttons2">
              <button className="navbar4-action12">Login</button>
            </div>
          </div>
        </header>
      </header>
      <style jsx>
        {`
          .navbar4-container {
            width: 100%;
            display: flex;
            position: relative;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar4-navbar-interactive {
            width: 100%;
            display: flex;
            max-width: 100%;
            align-items: center;
            padding-top: var(--dl-layout-space-twounits);
            padding-left: var(--dl-layout-space-threeunits);
            padding-right: var(--dl-layout-space-threeunits);
            padding-bottom: var(--dl-layout-space-twounits);
            justify-content: space-between;
          }
          .navbar4-image1 {
            height: 3rem;
          }
          .navbar4-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .navbar4-links1 {
            gap: var(--dl-layout-space-twounits);
            flex: 1;
            display: flex;
            align-items: center;
            margin-left: var(--dl-layout-space-twounits);
            flex-direction: row;
            justify-content: center;
          }
          .navbar4-link11 {
            font-size: 18px;
            text-align: center;
            transition: 0.3s;
            font-family: 'Montserrat';
            font-weight: 300;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .navbar4-link11:hover {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-style: normal;
            font-weight: 500;
          }
          .navbar4-link21 {
            font-size: 18px;
            transition: 0.3s;
            font-family: 'Montserrat';
            font-weight: 300;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .navbar4-link21:hover {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-style: normal;
            font-weight: 500;
            text-decoration: underline none;
          }
          .navbar4-link31 {
            font-size: 18px;
            transition: 0.3s;
            font-family: 'Montserrat';
            font-weight: 300;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .navbar4-link31:hover {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-style: normal;
            font-weight: 500;
            text-decoration: underline none;
          }
          .navbar4-link41 {
            fill: var(--dl-color-theme-neutral-dark);
            color: var(--dl-color-theme-neutral-dark);
            font-size: 18px;
            font-style: normal;
            transition: 0.3s;
            font-family: 'Montserrat';
            font-weight: 300;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .navbar4-link41:hover {
            fill: var(--dl-color-theme-primary1);
            color: var(--dl-color-theme-primary1);
            font-style: normal;
            font-weight: 500;
            text-decoration: underline none;
          }
          .navbar4-buttons1 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            align-items: center;
            margin-left: var(--dl-layout-space-twounits);
          }
          .navbar4-action11 {
            display: flex;
            transition: 0.3s;
            flex-direction: row;
          }
          .navbar4-action11:hover {
            background-color: var(--dl-color-theme-primary2);
          }
          .navbar4-text1 {
            font-size: 18px;
            font-family: 'Montserrat';
            font-weight: 300;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .navbar4-burger-menu {
            display: none;
          }
          .navbar4-icon1 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .navbar4-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-layout-space-twounits);
            z-index: 100;
            position: absolute;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar4-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar4-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-layout-space-threeunits);
            justify-content: space-between;
          }
          .navbar4-logo {
            height: 3rem;
          }
          .navbar4-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar4-icon3 {
            width: var(--dl-layout-size-xsmall);
            height: var(--dl-layout-size-xsmall);
          }
          .navbar4-links2 {
            gap: var(--dl-layout-space-unit);
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar4-link12 {
            font-size: 18px;
            font-family: 'Montserrat';
            font-weight: 300;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .navbar4-link22 {
            font-size: 18px;
            font-family: 'Montserrat';
            font-weight: 300;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .navbar4-link32 {
            font-size: 18px;
            font-family: 'Montserrat';
            font-weight: 300;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .navbar4-link42 {
            font-size: 18px;
            font-family: 'Montserrat';
            font-weight: 300;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .navbar4-buttons2 {
            gap: var(--dl-layout-space-twounits);
            display: flex;
            margin-top: var(--dl-layout-space-twounits);
            align-items: center;
          }
          .navbar4-action12 {
            font-size: 18px;
            font-family: 'Montserrat';
            font-weight: 300;
            line-height: 1.15;
            text-transform: none;
            text-decoration: none;
          }
          .navbar4-text2 {
            display: inline-block;
          }
          .navbar4-text3 {
            display: inline-block;
          }
          .navbar4-text4 {
            display: inline-block;
          }
          .navbar4-text5 {
            display: inline-block;
          }
          .navbar4-text6 {
            display: inline-block;
          }
          @media (max-width: 991px) {
            .navbar4-action11 {
              border-radius: var(--dl-layout-radius-imageradius);
            }
            .navbar4-action12 {
              fill: var(--dl-color-theme-secondary1);
              color: var(--dl-color-theme-secondary1);
              border-radius: var(--dl-layout-radius-cardradius);
              background-color: var(--dl-color-theme-primary1);
            }
          }
          @media (max-width: 767px) {
            .navbar4-navbar-interactive {
              padding-left: var(--dl-layout-space-twounits);
              padding-right: var(--dl-layout-space-twounits);
            }
            .navbar4-desktop-menu {
              display: none;
            }
            .navbar4-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .navbar4-navbar-interactive {
              padding: var(--dl-layout-space-unit);
            }
            .navbar4-mobile-menu {
              padding: var(--dl-layout-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Navbar4.defaultProps = {
  link1: undefined,
  link2: undefined,
  link4: undefined,
  action1: undefined,
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  logoAlt: 'logo',
  link2Url: 'https://www.teleporthq.io',
  link3: undefined,
  link1Url: 'https://www.teleporthq.io',
  link4Url: 'https://www.teleporthq.io',
  link3Url: 'https://www.teleporthq.io',
}

Navbar4.propTypes = {
  link1: PropTypes.element,
  link2: PropTypes.element,
  link4: PropTypes.element,
  action1: PropTypes.element,
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  link2Url: PropTypes.string,
  link3: PropTypes.element,
  link1Url: PropTypes.string,
  link4Url: PropTypes.string,
  link3Url: PropTypes.string,
}

export default Navbar4
