import {css} from '@emotion/react'

export const Borderline = css`
  .borderline {
    display: block;
    position: relative;
    text-align: center;
    border-collapse: collapse;
    text-decoration: none;
    transition: all 0.4s;

    &:before {
      transition: all 0.4s;
      position: absolute;
      content: '';
      width: 100%;
      height: 50%;
      left: 50%;
      margin-left: -50%;
      top: 25%;
      border-color: rgba(255, 255, 255, 0);
      border-style: solid;
      border-width: 0 2px;
      border-radius: 5px;
    }

    &:after {
      transition: all 0.4s;
      position: absolute;
      content: '';
      width: 50%;
      height: 100%;
      left: 50%;
      margin-left: -25%;
      top: 0;
      border-color: rgba(255, 255, 255, 0);
      border-style: solid;
      border-width: 2px 0;
      border-radius: 5px;
    }

    &:hover {
      transform: scale(1.03);
      &:after {
        width: 100%;
        margin-left: -50%;
      }

      &:before {
        height: 100%;
        top: 0%;
      }
    }
  }
`
