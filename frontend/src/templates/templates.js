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
				id: 'imageDropdown',
				name: 'Background Image',
				value: 'Backgroundimage1.png',
				options: ['Backgroundimage1.png', 'Backgroundimage2.png','Backgroundimage3.png', 'Backgroundimage4.png', 'Backgroundimage5.png'],
				type: 'dropdown',
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
				value: 'Your story starts with us.',
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
				value: 'This is a simple example of a Landing Page you can build using Tailwind Starter Kit. It features multiple CSS components based on the Tailwindcss design system.',
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
                id: 'bannerSrc',
                name: 'Banner source',
                value: 'https://cdn.theatlantic.com/media/mt/culture_test/the%20office%20finale%20ending.jpg',
                type: 'text',
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
