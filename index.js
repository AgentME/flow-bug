/* @flow */
//jshint ignore:start

import React from 'react';

export type ElementType = {
  renderer: Class<React.Component>;
};

import helium from './helium';

const Elements: {[name:string]:ElementType} = {
  helium,
  beryllium: {
    renderer: class Foo extends React.Component { render() {return <div />;}}
  },
};
