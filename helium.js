/* @flow */
//jshint ignore:start

import React from 'react';
import type {ElementType} from './index';

const helium: ElementType = {
	renderer: class Foo extends React.Component { render() {return <div />;}}
};

export default helium;
