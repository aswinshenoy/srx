import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import '../../styles/hero.sass';

const Hero = props => {

  const content = (
    <div>
      <div className="tagline">{props.tagline}</div>
      <h1>{props.title}</h1>
      <p>{props.paragraph}</p>
    </div>
  );

  return (
    <div
        id={props.id}
        style={props.style}
        className={classNames(
          'hero',
          props.bg ? {[`lg-${props.bg.gradient}`]:  props.bg.gradient} : null,
          {[`justify-content-${props.align}`]: props.align},
          {[`text-${props.align}`]: props.align},
          {[`elevation-${props.elevation}`]: props.elevation},
          {[`rounded-${props.rounded}`]: props.rounded!=null},
          props.className
    )}>
      <div>
        {props.image ?
          <div className="d-flex align-items-center">
            { props.imagePosition === 'right' ?
              <>
                {content}
                <div className='mx-4'>{props.image}</div>
              </> :
              <>
                <div className='mx-4'>{props.image}</div>
                {content}
              </>
              }
          </div>
          : content
        }

      </div>
    </div>
  )
};

Hero.propTypes = {
  /*
  *  Alignment for the content inside the Hero
  */
  align: PropTypes.oneOf(["left","center","right"]),
  /*
  *  Background for the hero area
  */
  bg: PropTypes.shape({
    gradient: PropTypes.string,
    color: PropTypes.string,
  }),
  /*
   * Additional custom class names for the hero
   */
  className: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string,
  ]),
  /*
  *  Elevation for the Hero Component
  */
  elevation: PropTypes.number,
  /*
 * Unique id for the hero. Autogenerated if empty.
 */
  id: PropTypes.string,
  /*
  *  Accepts an image node for showing inside the Hero
  */
  image: PropTypes.node,
  /*
  *  Position for placing the image within the Hero
  */
  imagePosition: PropTypes.oneOf(["left", "right"]),
  /*
  *  Descriptive paragraph for the hero
  */
  paragraph: PropTypes.string,
  /*
  *  Border radius (in Range of 0-4) for the hero
  */
  rounded: PropTypes.number,
  /*
  *  Additional overrideable styles for the hero
  */
  style: PropTypes.object,
  /*
  *  Tagline for the hero
  */
  tagline: PropTypes.string,
  /*
  *  Title for the hero
  */
  title: PropTypes.string,
};

export default Hero;