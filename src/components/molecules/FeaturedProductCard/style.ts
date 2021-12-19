import {css} from '@emotion/react'

const transform = (visible: boolean) => (visible ? 'scale(1.03)' : 'none')
const width = (visible: boolean) => (visible ? '100%' : '50%')
const margin = (visible: boolean) => (visible ? '-50%' : '-25%')
const borderColor = (visible: boolean) => (visible ? '#ef3340' : '#e6e6e9')

export const borderline = (visible: boolean) => css`
  display: block;
  position: relative;
  border-collapse: collapse;
  text-decoration: none;
  transition: all 150ms;
  transform: ${transform(visible)};

  &:after {
    transition: all 250ms;
    position: absolute;
    content: '';
    width: ${width(visible)};
    height: 100%;
    left: 50%;
    margin-left: ${margin(visible)};
    top: 0;
    border-color: ${borderColor(visible)};
    border-style: solid;
    border-width: 2px 0;
    border-radius: 5px;
  }
`
