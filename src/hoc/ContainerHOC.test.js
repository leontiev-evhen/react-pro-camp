import React from 'react';
import { shallow } from 'enzyme';
import ContainerHOC from './ContainerHOC';

describe('ContainerHOC', () => {
	const SomeComponent = () => <h1>Some Component</h1>;
	const DivContainerHOC = ContainerHOC(SomeComponent);
	describe('ContainerHOC Preloader', () => {
		const props = {
			isFetching: true,
			error: '',
		};
		const Component = shallow(<DivContainerHOC {...props} />);
		it('Render Preloader', () => {
			expect(Component.find('Preloader')).toHaveLength(1);
		});
		it('Render correctly Preloader component', () => {
			expect(Component).toMatchSnapshot();
		});
	});
	describe('ContainerHOC error', () => {
		const props = {
			isFetching: false,
			error: 'Unknown error',
		};
		const Component = shallow(<DivContainerHOC {...props} />);
		it('Render error', () => {
			expect(Component.find('.error-message').text()).toEqual(props.error);
		});
		it('Render correctly error', () => {
			expect(Component).toMatchSnapshot();
		});
	});
	describe('ContainerHOC Component', () => {
		const props = {
			isFetching: false,
			error: '',
		};
		const Component = shallow(<DivContainerHOC {...props} />);
		it('Render Component', () => {
			expect(Component.find(SomeComponent)).toBeTruthy();
		});
		it('Render correctly Component', () => {
			expect(Component).toMatchSnapshot();
		});
	});
});
