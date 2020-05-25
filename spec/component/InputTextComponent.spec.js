import React from 'react';
import { shallow } from 'enzyme';
import InputTextComponent from '../../src/component/InputTextComponent';



describe('Rendering App Component without crash', () => {
    let inputTextComponent;
    beforeEach(() => {
        inputTextComponent = shallow(
          <InputTextComponent/>
        );
    });

    describe('TEST FEILD', () => {
        it('Render text feild', () => {
            //expect(inputTextComponent.find('#inputtextStyle').props().label).toEqual('Name');
            expect(inputTextComponent.find('#inputtextStyle').props().placeholder).toEqual('Please Enter Name...');
            expect(inputTextComponent).toMatchSnapshot();
        })
        
    })
})