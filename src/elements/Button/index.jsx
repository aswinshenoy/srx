import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from '@emotion/styled';

import { keyframes } from 'emotion';

const emptyFunc = () => {};

const gradient = keyframes`
      0% { background-position: 0 50%; } 
      50% { background-position: 0 100%; } 
      100% { background-position: 0 50%; } 
`;

const StyledButton = styled.button`
  font-weight: bold;
  border: none !important;
  margin: 0 0.25rem;
  padding: 0.5rem 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.35rem;
  line-height: 1;
  color: ${props => (props.brandColors ? 'white!important' : '#424242')};
  background: ${props => (props.brandColors ? `#7B1FA2` : '#EEEEEE')};
  text-decoration: none;
  &:disabled {
    color: ${props => (props.brandColors ? `#4A148C` : 'black')};
    background: ${props => (props.brandColors ? `#616161` : '#E0E0E0')};
    cursor: not-allowed;
  }
  &:hover,
  &:focus {
    text-decoration: none;
    outline: none !important;
    color: ${props => (props.brandColors ? `#4A148C` : 'black')};
    background: ${props => (props.brandColors ? `#D500F9` : '#E0E0E0')};
    animation: ${props => (props.brandColors ? `${gradient} 1s ease infinite` : null)};
    &:disabled {
      color: ${props => (props.brandColors ? `#4A148C` : 'black')};
      background: ${props => (props.brandColors ? `#880E4F` : '#E0E0E0')};
    }
  }
`;

const Button = ({
  type, text, link, label, children, target, rel,
  shadow, round = 2, bg, style, fw = false,
  className, brandAccent,
  disabled = false, title,
  onClick = emptyFunc, onFocus = emptyFunc, onBlur = emptyFunc,
}) => {
  const borderRadius = (() => {
    switch (round) {
      case 1: return '0.15rem';
      case 2: return '0.25rem';
      case 3: return '0.5rem';
      case 4: return '1rem';
      case 5: return '2rem';
      default: return 0;
    }
  })();
  const shadowClass = (() => {
    switch (shadow) {
      case 0: return 'shadow-none';
      case 1: return 'shadow-sm';
      case 2: return 'shadow';
      case 3: return 'shadow-lg';
      default: return null;
    }
  })();
  return (
    <StyledButton
      as={link != null ? 'a' : 'button'}
      aria-label={label}
      type={type}
      className={classNames(shadowClass, { 'w-100': fw }, className)}
      onClick={e => {
        e.stopPropagation();
        onClick();
      }}
      onBlur={onBlur}
      onFocus={onFocus}
      tabIndex={0}
      title={title || label}
      disabled={disabled}
      brandColors={brandAccent}
      href={link}
      target={target}
      rel={rel}
      style={{
        borderRadius,
        background: bg,
        ...style,
      }}
    >
      {children || text}
    </StyledButton>
  );
};

Button.propTypes = {
  shadow: PropTypes.oneOf([0, 1, 2, 3]),
  round: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
  bg: PropTypes.string,
  disabled: PropTypes.bool,
  fw: PropTypes.bool,
  children: PropTypes.node,
  text: PropTypes.string,
  link: PropTypes.string,
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
};

export default Button;
