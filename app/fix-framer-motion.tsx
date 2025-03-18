"use client"

// This file provides a fix for the framer-motion positionalValues error
import {
  motion as baseMotion,
  AnimatePresence,
  useInView,
  useMotionValue,
  useTransform,
  HTMLMotionProps,
  SVGMotionProps,
  useScroll,
} from "framer-motion"
import React from 'react'

// Utility function to ensure positional values have proper units
function ensureUnitValue(value: any): any {
  if (typeof value === 'number') {
    return `${value}px`;
  }
  return value;
}

// Process props to ensure that numeric position values are converted to strings with 'px'
const processProps = (props: any) => {
  const safeProps = { ...props }
  const positionProps = ['x', 'y', 'top', 'left', 'right', 'bottom', 'translateX', 'translateY']
  
  // Process animation props
  const animationProps = ['animate', 'initial', 'whileHover', 'whileTap', 'whileFocus', 'whileDrag', 'whileInView']
  
  // Handle each animation prop
  animationProps.forEach(animProp => {
    if (safeProps[animProp] && typeof safeProps[animProp] === 'object') {
      const animValue = { ...safeProps[animProp] }
      
      // Convert numeric position values to strings with 'px'
      positionProps.forEach(prop => {
        if (animValue[prop] !== undefined) {
          animValue[prop] = ensureUnitValue(animValue[prop])
        }
      })
      
      safeProps[animProp] = animValue
    }
  })
  
  // Process style prop
  if (safeProps.style) {
    const style = { ...safeProps.style }
    
    positionProps.forEach(prop => {
      if (style[prop] !== undefined) {
        style[prop] = ensureUnitValue(style[prop])
      }
    })
    
    safeProps.style = style
  }
  
  return safeProps
}

// Create safe versions of framer-motion hooks and components
// Directly re-export the hooks from framer-motion
export {
  AnimatePresence,
  useInView,
  useMotionValue,
  useTransform,
  useScroll
}

// Create a safer implementation for motion components
const motion = {} as typeof baseMotion;

// Create component factory
const createSafeComponent = (tag: string) => {
  const Component = baseMotion[tag as keyof typeof baseMotion];
  if (!Component) return null;
  
  return React.forwardRef((props: any, ref: any) => {
    const safeProps = processProps(props);
    return React.createElement(Component, { ...safeProps, ref });
  });
};

// HTML Elements
const htmlTags = [
  'div', 'span', 'a', 'button', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'ul', 'ol', 'li', 'img', 'section', 'article', 'nav', 'footer', 'header',
  'form', 'input', 'textarea', 'label', 'select', 'option'
];

// SVG Elements
const svgTags = [
  'svg', 'path', 'circle', 'rect', 'line', 'g', 'polygon', 'ellipse'
];

// Create components
[...htmlTags, ...svgTags].forEach(tag => {
  const component = createSafeComponent(tag);
  if (component) {
    // @ts-ignore - We know this is safe
    motion[tag] = component;
  }
});

export { motion }