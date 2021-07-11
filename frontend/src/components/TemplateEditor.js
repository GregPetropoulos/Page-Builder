import { forwardRef, useMemo, useRef, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import pagesService from '../services/pages';
import { TemplatePanel } from './TemplatePanel';

const TemplateProvider = forwardRef(({ children }, ref) => {
	return (
		<div ref={ref}>

			<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"/>
			{children}
		</div>
	);
});

export const TemplateEditor = ({ configs }) => {
	const { id } = useParams();
	const history = useHistory();
	const templateRef = useRef(null);

	const config = useMemo(
		() => configs.filter(config => config.id === parseInt(id))[0],
		[id, configs]
	);

	const [fields, setFields] = useState(config.fields);

	const onChange = (fieldId, value) => {
		setFields(prev => {
			const result = prev.map(field =>
				field.id === fieldId ? { ...field, value: value } : field
			);
			return result;
		});
	};

	const Template = config.component;
	const templateFields = fields.reduce(
		(result, field) => ({
			...result,
			[field.id]: field.value,
		}),
		{}
	);

	const handleSave = async () => {
		const html = templateRef.current.innerHTML;
		const pageTitle = fields.filter(f => f.id === 'pageTitle');
		const response = await pagesService.createPage(
			pageTitle.length > 0 ? pageTitle[0].value : config.name,
			config.thumbnail,
			html
		);
		history.push('/');
	};

	return (
		<div>
			<TemplatePanel
				fields={fields}
				onChange={onChange}
				onSave={handleSave}
			></TemplatePanel>
			<TemplateProvider ref={templateRef}>
				<Template {...templateFields} />
			</TemplateProvider>
		</div>
	);
};
