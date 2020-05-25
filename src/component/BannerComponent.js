import React from 'react';
import styled from 'styled-components';

const BannerStyles = styled.div`
    background-image: url("img/banner.jpg");
    height: 200px;
    background-position: center;
    background-size: cover;
`;

export default function BannerComponent() {
    return(
        <BannerStyles/>
    )
}