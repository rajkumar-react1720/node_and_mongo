import React from 'react';
import BannerComponent from '../../src/component/BannerComponent';
import renderer from 'react-test-renderer';
import 'jest-styled-components'



describe('Rendering App Component without crash', () => {
    let bannerComponent;
    bannerComponent = renderer.create( <BannerComponent/>).toJSON()
    describe('RENDER BANNER COMPONENT WITHOUT CRASH', () => {
        it('Render Bannerstyles', () => {
            expect(bannerComponent).toHaveStyleRule('height', '200px')
            expect(bannerComponent).toHaveStyleRule('background-position', 'center')
            expect(bannerComponent).toHaveStyleRule('background-size', 'cover')
        })
        
    })
})