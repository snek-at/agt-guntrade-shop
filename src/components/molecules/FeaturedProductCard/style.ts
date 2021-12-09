import {css} from '@emotion/react'

export const Borderline = css`
  display: block;
  position: relative;
  text-align: center;
  border-collapse: collapse;
  text-decoration: none;
  transition: all 150ms;

  &:before {
    transition: all 250ms;
    position: absolute;
    content: '';
    width: 100%;
    height: 50%;
    left: 50%;
    margin-left: -50%;
    top: 25%;
    border-color: #e6e6e9;
    border-style: solid;
    border-width: 0 3px;
    border-radius: 3px;
  }

  &:after {
    transition: all 250ms;
    position: absolute;
    content: '';
    width: 50%;
    height: 100%;
    left: 50%;
    margin-left: -25%;
    top: 0;
    border-color: #e6e6e9;
    border-style: solid;
    border-width: 3px 0;
    border-radius: 3px;
  }

  &:hover {
    transform: scale(1.03);
    &:after {
      width: 100%;
      margin-left: -50%;
      border-color: #ef3340;
    }

    &:before {
      height: 100%;
      top: 0%;
      border-color: #ef3340;
    }
  }
`
