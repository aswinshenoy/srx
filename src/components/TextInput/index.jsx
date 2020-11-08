import React, {useEffect, useRef, useState} from "react";
import classNames from "classnames";
import shortid from "shortid";
import styled from '@emotion/styled'
import PropTypes from "prop-types";

const emailValidator =
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const containsSpace = /^\S*$/

const WarningContainer = styled.div`
    font-size: 0.8rem;
    font-weight: 600;
    color: ${({ ratio }) => ratio > 0.8 ? 'red' : ratio > 0.5 ? 'orange' : 'green'};
    text-align: right;
`;

const CharLimitWarning = ({ show, currentLength, charLimit }) => {

  return currentLength && charLimit && show ?
    <WarningContainer className="col-4 px-2" ratio={currentLength/charLimit}>
      {currentLength}/{charLimit}
    </WarningContainer> : null

}

const TextAreaBackdrop = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    line-height: 1.5;
    padding: .375rem .75rem;
    z-index: 1;
    mark {
        opacity: 0.35;
        padding: 0!important;
        background: #ffe8a1;
        border-radius: 0.25rem;
    }
`;

const StyledTextArea = styled.textarea`
    position: relative!important;
    top: 0;
    left: 0;
    z-index: 100;
    background: transparent;
    border-radius: 0!important;
    
    ${({ minimal }) => minimal && `
          border-radius: 0!important;
          border: none!important;
          border-bottom: 0.75px solid rgba(0,0,0,0.3)!important;
          &:focus {
            outline: none!important;
            box-shadow: none!important;
          }
    `}
`;

const StyledTextInput = styled.input`
    position: relative!important;
    top: 0;
    left: 0;
    z-index: 100;
    background: transparent;
    border-radius: 0!important;
    &:focus {
      outline: none!important;
      background: transparent;
    }
    ${({ minimal }) => minimal && `
          border-radius: 0;
          border: none;
          border-bottom: 0.8px solid rgba(0,0,0,0.3)!important;
          &:focus {
            outline: none!important;
            box-shadow: none!important;
            border-bottom: 1.3px solid #4A148C!important;
          }
    `}
`;


const TextInput = ({
   id, label, name, placeholder, type, value: val, inputClassName, className, inputStyles,
   icon, inputProps,
   isRequired = false, isDisabled = false, showLimit = true, alwaysShowLabel = false, hideLabel = false, minimal = true, autoFocus = false,
   hasErrors = false, highlighters,
   customRegex, disableSpace, charLimit, minLength = 0,
   rows, spellCheck, autoComplete, autoCorrect, autoCapitalize,
   renderAbove, renderBottom,
   onValidate = () => {}, onChange, onFocus, onBlur
 }) => {

  const inputID = id && id.length > 1 ? id : `${name}-input-${shortid.generate()}`;

  const [value, setValue] = useState(val !== null ? val : '');

  useEffect(() => { setValue(val) },[val]);

  const [isTyping, setTyping] = useState(false);
  const [errorState, setErrorState] = useState(false);

  const textInput = useRef();
  const backdropRef = useRef();

  // set ID only after mount, to avoid mismatch warnings
  useEffect(() => { textInput.current.id = inputID; }, []);

  const validateInput = (str) => {
    if(str) {
      if(str.length < 1) return false;
      if(str.length < minLength) return  false;
      if(type === "email" && !emailValidator.test(String(str).toLowerCase()))
        return false;
      if(disableSpace && !containsSpace.test(String(str).toLowerCase()))
        return false;
      if(customRegex && !new RegExp(customRegex, 'g').test(String(str).toLowerCase()))
        return false;
      //@todo more conditions can be added here later
      return true;
    } else return false
  };

  const getBackdropText = (value) => {
    if(highlighters && highlighters)
    {
      value = value.replace(/\r\n/g, '<br />').replace(/[\r\n]/g, '<br />');
      highlighters.map(i => value = value.replace(i.regex,`<mark class="${i.className}">$&</mark>`) );
      return value;
    }
    return null
  };

  const handleChange = (e) => {
    const value = e.currentTarget.value;
    if(typeof onChange === "function")
      if(type === "number")
        onChange(parseInt(value));
      else
        onChange(value);
    setValue(value);
    if(typeof onValidate === "function")
      onValidate(validateInput(value));
  };


  const handleScroll = () => {
    if(type === "textarea" && textInput.current.scrollTop !== 0)
      backdropRef.current.scrollTop = textInput.current.scrollTop;
  };

  useEffect(() => { onValidate(validateInput(val)) }, []);
  useEffect(handleScroll, [textInput]);

  const handleFocus = (e) => {
    if(typeof onFocus === "function")
      onFocus();
    setTyping(true);
    setErrorState(false);
  };

  const handleBlur = (e) => {
    if(typeof onBlur === "function")
      onBlur();
    setTyping(false);
    const val = e.currentTarget.value;
    if(!validateInput(val))
      setErrorState(true);
  };

  const props = {
    ref: textInput,
    "aria-label": label,
    "aria-required":  isRequired,
    id: inputID,
    value: value,
    placeholder: placeholder || label,
    isDisabled,
    spellCheck,
    autoComplete,
    autoCorrect,
    autoCapitalize,
    autoFocus: autoFocus ? "true" : null,
    maxLength: charLimit,
    required: isRequired,
    minimal: minimal,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: handleChange,
    style: inputStyles,
  };


  const renderInput = type === "textarea" ?
    <div className="d-inline-block w-100 textarea-container position-relative">
      <TextAreaBackdrop ref={backdropRef} dangerouslySetInnerHTML={{ __html: getBackdropText(value) }} />
      <StyledTextArea
        rows={rows}
        onScroll={handleScroll}
        className={classNames(inputClassName, 'form-control text-input-field',)}
        {...props}
        {...inputProps}
      />
    </div> :
    <StyledTextInput
      name={name}
      type={type}
      isInvalid={(hasErrors || errorState) && (value && value.length > 0 || isRequired)}
      className={classNames(
        inputClassName,
        'd-block form-control',
        { 'is-invalid' : (hasErrors || errorState) && (value && value.length > 0 || isRequired) },
        { 'minimal': minimal},
      )}
      {...props}
      {...inputProps}
    />;

  const renderLabel = !hideLabel &&
  <div className="col-8 px-1">
    <label
      htmlFor={inputID}
      aria-hidden={false}
      className={(value && value.length > 0) && !errorState || alwaysShowLabel ? 'font-weight-bold text-primary small mb-0' : 'd-none'}
    >
      {label}
    </label>
  </div>;

  return <div
    className={classNames("form-group p-2 rounded mb-0", className)}
    style={{ background: '#FAFAFA' }}
  >
    <div className="row m-0">
      {renderLabel}
      <CharLimitWarning
        show={showLimit && isTyping}
        charLimit={charLimit}
        currentLength={value && value.length}
      />
    </div>
    {renderAbove}
    <div className="d-flex align-items-center">
      {icon && <span className="pr-2">{icon}</span>}
      {renderInput}
    </div>
    {renderBottom}
  </div>

};

TextInput.propTypes  = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(["email", "number", "password", "text", "textarea", "search", "url"]),
  value: PropTypes.string,
  description: PropTypes.string,
  charLimit: PropTypes.number,
  minLength: PropTypes.number,
  disableSpace: PropTypes.bool,
  isRequired: PropTypes.bool,
  isDisabled: PropTypes.bool,
  showLimit: PropTypes.bool,
  hideLabel: PropTypes.bool,
  minimal: PropTypes.bool,
  className: PropTypes.string,
  inputClassName: PropTypes.string,
  inputStyles: PropTypes.object,
  inputProps: PropTypes.object,
  customRegex: PropTypes.any,
  renderAbove: PropTypes.node,
  renderBottom: PropTypes.node,
  rows: PropTypes.number,
  spellCheck: PropTypes.string,
  autoComplete: PropTypes.oneOf(["off", "on", "email", "current-password", "username"]),
  autoCorrect: PropTypes.oneOf(["off", "on"]),
  autoCapitalize: PropTypes.oneOf(["off", "on"]),
  onValidate: PropTypes.func,
  onChange: PropTypes.func,
};

export default TextInput;