import { MyAwesomeTemplate } from './MyAwesomeTemplate';
import { Template1 } from './Template1';

export const templates = [
	{
		id: 1,
		thumbnail: 'bootstrap.png',
		name: 'Landing Page Template 2',
		fields: [
			{
				id: 'pageTitle',
				name: 'Page Title',
				value: 'Welcome Page',
				type: 'text',
			},
            {
                id: 'bannerSrc',
                name: 'Background Image',
                value: 'https://images.pexels.com/photos/5253574/pexels-photo-5253574.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
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
				id: 'navBackground',
				name: 'Navigation Background',
				value: '#444',
				type: 'color',
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
				id: 'buttonText',
				name: 'Button Text',
				value: 'Learn More',
				type: 'text',
			},
			{
				id: 'footerText',
				name: 'footer',
				value: 'Footer Inc. ©',
				type: 'text',
			},
		],
		component: MyAwesomeTemplate,
	},
	{
		id: 2,
		thumbnail: 'cover.png',
		name: 'Landing Page Template',
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
				value: '#444',
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
			{
				id: 'landingText2',
				name: 'Landing Text 2',
				value: 'This is the second paragraph of your landing page. You are allowed to type out your thooughts here if you need extra space or simply ignore this area. The freedom to choose is yours.',
				type: 'text',
			},
			{
				id: 'footerText',
				name: 'footer',
				value: 'Footer Inc. ©',
				type: 'text',
			},
		],
		component: Template1,
	},
];
