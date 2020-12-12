import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shortid from 'shortid';
import styled from '@emotion/styled';

import { ThemeContext } from '../../utils/theme';

const emptyFunc = () => {};

const TextContainer = styled.div`
  background-color: ${({ bg }) => bg || null};
  padding: 0.5rem;
  input {
    color: ${({ color }) => color || null};
    &::placeholder {
      color: ${({ color }) => color || null};
      opacity: 0.8;
    }
  }
`;

const StyledTextInput = styled.input`
  background: transparent;
  border-radius: 0 !important;
  border: none;
  display: block;
  width: 100%;
  border-bottom: ${({ hasErrors }) => (hasErrors ? '1px solid red!important' : '1px solid #4A148C!important')};
  &:focus {
    outline: none !important;
    background: transparent;
    border-bottom: ${({ hasErrors }) => (hasErrors ? '2px solid red!important' : '1.5px solid #4A148C!important')};
  }
`;

const TextInput = ({
  id,
  label,
  name,
  placeholder,
  value: val,
  charLimit,
  className,
  style,
  hideLabel = false,
  alwaysShowLabel = false,
  isRequired = false,
  isDisabled = false,
  autoFocus = false,
  rows = 3,
  spellCheck,
  autoComplete,
  autoCorrect,
  autoCapitalize,
  inputStyle,
  inputClassName,
  type,
  errorText,
  description,
  onChange = emptyFunc,
  onFocus = emptyFunc,
  onBlur = emptyFunc,
}) => {
  const inputID = id && id.length > 1 ? id : `${name}-input-${shortid.generate()}`;

  const [isTyping, setTyping] = useState(false);

  const theme = useContext(ThemeContext);

  const [value, setValue] = useState(val !== null ? val : '');
  useEffect(() => {
    setValue(val);
  }, [val]);

  const handleChange = e => {
    // eslint-disable-next-line no-shadow
    const { value } = e.currentTarget;
    if (charLimit == null || value.length <= charLimit) {
      if (typeof onChange === 'function')
        if (type === 'number') onChange(parseInt(value));
        else onChange(value);
      setValue(value);
    }
  };

  const handleFocus = () => {
    if (typeof onFocus === 'function') onFocus();
    setTyping(true);
  };

  const handleBlur = () => {
    if (typeof onBlur === 'function') onBlur();
    setTyping(false);
  };

  const props = {
    'aria-label': label,
    'aria-required': isRequired,
    id: inputID,
    value,
    placeholder: placeholder || label,
    spellCheck,
    autoComplete,
    autoCorrect,
    autoCapitalize,
    autoFocus: autoFocus ? 'true' : null,
    required: isRequired,
    disabled: isDisabled,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: handleChange,
    type,
    style: inputStyle,
  };

  // eslint-disable-next-line no-shadow
  const getTextInputBg = theme => {
    return theme?.inputBackground ? theme?.inputBackground : null;
  };

  return (
    <TextContainer bg={getTextInputBg(theme)} color={theme.color} className={className} style={style}>
      {!((isTyping || value?.length > 0) && !hideLabel) && !alwaysShowLabel && <div style={{ height: '0.75rem' }} />}
      <div className="row mx-0">
        {(((isTyping || value?.length > 0) && !hideLabel) || alwaysShowLabel) && (
          <div className="col-8 px-0" style={{ height: '1.5rem' }}>
            <label
              htmlFor={inputID}
              aria-hidden={false}
              style={{ color: theme.secondary }}
              className="font-weight-bold small mb-0"
            >
              {label}
            </label>
          </div>
        )}
        {value?.length > 0 && isTyping && charLimit > 0 && (
          <div className="col-4 px-1 d-flex justify-content-end small" style={{ color: theme.color }}>
            {value?.length}/{charLimit}
          </div>
        )}
      </div>
      <StyledTextInput
        as={type === 'textarea' ? 'textarea' : 'input'}
        rows={type === 'textarea' ? rows : null}
        {...props}
        hasErrors={!!errorText}
        classNames={classNames(inputClassName)}
      />
      {errorText && <div className="text-danger mt-0">{errorText}</div>}
      {description && <div style={{ fontSize: '10px' }}>{description}</div>}
      {!((isTyping || value?.length > 0) && !hideLabel) && !alwaysShowLabel && <div style={{ height: '0.75rem' }} />}
    </TextContainer>
  );
};

TextInput.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['email', 'number', 'password', 'text', 'textarea', 'url']),
  value: PropTypes.string,
  isRequired: PropTypes.bool,
  isDisabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  inputClassName: PropTypes.string,
  inputStyle: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  rows: PropTypes.number,
  charLimit: PropTypes.number,
  errorText: PropTypes.string,
  description: PropTypes.string,
  hideLabel: PropTypes.bool,
  alwaysShowLabel: PropTypes.bool,
  autoFocus: PropTypes.oneOf(['off', 'on']),
  spellCheck: PropTypes.oneOf(['off', 'on']),
  autoComplete: PropTypes.oneOf(['off', 'on', 'email', 'current-password', 'username']),
  autoCorrect: PropTypes.oneOf(['off', 'on']),
  autoCapitalize: PropTypes.oneOf(['off', 'on']),
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
};

export default TextInput;
