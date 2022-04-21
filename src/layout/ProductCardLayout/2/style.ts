import {css} from '@emotion/react'

export const cardStyle = () => css`
  .pcard {
    display: block;
    position: relative;
    border-collapse: collapse;
    text-decoration: none;
    transition: all 150ms;
    z-index: 99;

    .borderline {
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -99;
      right: 0%;
      border-collapse: collapse;
      text-decoration: none;
      transition: all 150ms;
  
      &:before {
        transition: all 150ms;
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
        transition: all 150ms;
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
    }

    &:hover {
      transform: scale(1.03);
      z-index: 999;
    }

    &:hover .borderline {
      position: absolute;
      top: 0;
      width: 150%;
      height: 100%;
      right: -50%;
    }

    &:hover .borderline:after {
      width: 100%;
      margin-left: -50%;
      border-color: red;
    }

    &:hover .borderline:before {
      height: 100%;
      top: 0%;
    }
    &:hover .imgline{
      opacity: 1;
    }
    .radioimg {
      display: none
    }
    .radioimg + .pimg {
      display: none
    }
    .radioimg:checked + .pimg {
      display: block
    }
  }
`
