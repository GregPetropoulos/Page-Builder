import { MyAwesomeTemplate } from './MyAwesomeTemplate';
import { Template1 } from './Template1';

export const templates = [
	{
		id: 1,
		thumbnail: 'bootstrap.png',
		name: 'My awesome template',
		fields: [
			{
				id: 'pageTitle',
				name: 'Page Title',
				value: 'My awesome page',
				type: 'text',
			},
			{
				id: 'bannerSrc',
				name: 'Banner source',
				value: 'https://via.placeholder.com/350',
				type: 'text',
			},
		],
		component: MyAwesomeTemplate,
	},
	{
		id: 2,
		thumbnail: 'cover.png',
		name: 'Cover Template',
		fields: [
			{
				id: 'pageTitle',
				name: 'Page Title',
				value: 'Homepage',
				type: 'text',
			},

			{
				id: 'landingTitle',
				name: 'Landing Title',
				value: 'Cover',
				type: 'text',
			},
			{
				id: 'pageLogoTitle',
				name: 'Logo Title',
				value: 'Cover',
				type: 'text',
			},
			{
				id: 'landingText',
				name: 'Landing Text',
				value: 'Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.',
				type: 'text',
			},
			{
				id: 'backgroundColor',
				name: 'Background Color',
				value: '#333',
				type: 'color',
			},
			{
				id: 'buttonText',
				name: 'Button Text',
				value: 'Learn more',
				type: 'text',
			},
			{
				id: 'imageDropdown',
				name: 'Image',
				value: 'screenshot.png',
				options: ['screenshot.png', 'cover.png', 'bootstrap.png'],
				type: 'dropdown',
			},
		],
		component: Template1,
	},
];
