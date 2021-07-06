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
				value: 'Landing Title',
				type: 'text',
			},
			{
				id: 'navItem1',
				name: 'Navigation Item 1',
				value: 'Nav Item 1',
				type: 'text',
			},
			{
				id: 'navItem2',
				name: 'Navigation Item 2',
				value: 'Nav Item 2',
				type: 'text',
			},
			{
				id: 'navItem3',
				name: 'Navigation Item 3',
				value: 'Nav Item 3',
				type: 'text',
			},
			{
				id: 'pageLogoTitle',
				name: 'Logo Title',
				value: 'Logo Title',
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
				value: '#777',
				type: 'color',
			},
			{
				id: 'buttonText',
				name: 'Button Text',
				value: 'Template Button',
				type: 'text',
			},
			{
				id: 'imageDropdown',
				name: 'Image',
				value: 'screenshot.png',
				options: ['screenshot.png', 'cover.png', 'bootstrap.png','acrylicpaint.jpg','adorablekids.jpg'
				, 'antiqueart.jpg','antiqueartwall.jpg', 'architecture3.jpg','architecture5.jpg',
				'architecturewhite.jpg', 'architecturewhite2.jpg', 'art2.jpg', 'art3.jpg', 'art4.jpg', 'artmueseum.jpg',
				'artpaint.jpg', 'baby1.jpg', 'balloons.jpg', 'bridgeandtrees.jpg', 'canyon.jpg', 'cellphone.jpg', 'cityview.jpg',
				'clouds.jpg', 'colorfulbirds.jpg', 'colors1.jpg', 'computerdesk.jpg', 'contemporaryart.jpg', 'everythingisconnected.jpg',
				'foreignvehicle.jpg', 'forest.jpg', 'hello.jpg', 'lights.jpg', 'love1.jpg', 'model1.jpg', 'multicoloredfish.jpg',
				'nature1.jpg', 'notebook.jpg', 'room.jpg', 'royalbuilding.jpg', 'scenery.jpg', 'scenery2.jpg', 'scenery3.jpg', 'scenery5.jpg', 'spices.jpg',
				'statues.jpg', 'videoedit.jpg', 'waterfall.jpg', 'watermountains.jpg', 'wedding.jpg', 'whereIwanttobe.jpg', 'workandcoffee.jpg'],
				type: 'dropdown',
			},
		],
		component: Template1,
	},
];
