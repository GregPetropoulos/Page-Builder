import { MyAwesomeTemplate } from './MyAwesomeTemplate';
import { Template1 } from './Template1';

export const templates = [
	{
		id: 1,
		thumbnail: 'LandingPageTemplate2.png',
		name: 'Landing Page Template 2',
		fields: [
			{
				id: 'pageTitle',
				name: 'Page Title',
				value: 'Impossible is Possible.©',
				type: 'text',
			},
			{
                id: 'bannerSrc',
                name: 'Banner source',
                value: 'https://images.pexels.com/photos/2478248/pexels-photo-2478248.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                type: 'text',
            },
			{
				id: 'landingText',
				name: 'Landing Text',
				value: 'Welcome to our site. We hope to provide you with all of your needs',
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
		thumbnail: 'LandingTemplate.png',
		name: 'Landing Page Template',
		fields: [

			{
				id: 'landingTitle',
				name: 'Landing Title: ',
				value: 'Your story starts with us.',
				type: 'text',
			},
			{
				id: 'navItem1',
				name: 'Link 1: ',
				value: 'Nav 1',
				type: 'text',
			},
			{
				id: 'navItem2',
				name: 'Link 2: ',
				value: 'Nav 2',
				type: 'text',
			},
			{
				id: 'navItem3',
				name: 'Link 3: ',
				value: 'Nav 3',
				type: 'text',
			},
			{
				id: 'pageTitle',
				name: 'Page Title: ',
				value: 'Title',
				type: 'text',
			},
			{
				id: 'landingText',
				name: 'Landing Text: ',
				value: 'This is a simple example of a Landing Page you can build using Tailwind Starter Kit. It features multiple CSS components based on the Tailwindcss design system.',
				type: 'text',
			},
			{
				id: 'backgroundColor',
				name: 'Background Color: ',
				value: '#fff',
				type: 'color',
			},
			{
				id: 'buttonText',
				name: 'Button Text: ',
				value: 'Template Button',
				type: 'text',
			},
			{
				id: 'footerText',
				name: 'footer: ',
				value: 'Footer Inc. ©',
				type: 'text',
			},
		],
		component: Template1,
	},
];
