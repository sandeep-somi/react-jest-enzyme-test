import React from 'react';
import ContentLoader from 'react-content-loader';

const CardLoader = () => <ContentLoader 
		height={150}
		width={100}
		speed={2}
		primaryColor="#e2e2e2"
		secondaryColor="#fff"
	>
		<rect x="0" y="0" rx="0" ry="0" width="100" height="100" /> 
		<rect x="0" y="105" rx="0" ry="0" width="50" height="10" /> 
		<rect x="0" y="120" rx="0" ry="0" width="80" height="10" />
	</ContentLoader>

export default CardLoader;