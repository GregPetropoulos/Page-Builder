import { Draggable } from './Draggable';

export const TemplatePanel = ({ fields, onChange, onSave }) => {
	const xAxis = Math.floor(window.innerWidth / 2) - 200;
	const yAxis = Math.floor(window.innerHeight / 2) - 200;
	console.log('onSave', onSave)
	const components = fields.map(field => {
		switch (field.type) {
			case 'text':
				return (
					<div className="mb-3" key={field.id}>
						<label className="form-label">{field.name}</label>
						<input
							type="email"
							className="form-control col-start-2"
							aria-describedby="emailHelp"
							value={field.value}
							onChange={ev => onChange(field.id, ev.target.value)}
						/>
					</div>
				);
			case 'dropdown':
				return (
					<div className="mb-3 d-flex flex-column" key={field.id}>
						<label className="form-label">{field.name}</label>
						<select
							className="p-2"
							key={field.id}
							value={field.value}
							onChange={ev => onChange(field.id, ev.target.value)}
						>
							{field.options.map(op => (
								<option key={op} value={op}>
									{op}
								</option>
							))}
						</select>
					</div>
				);
			case 'color':
				return (
					<div className="mb-3 d-flex flex-column" key={field.id}>
						<label className="form-label">{field.name}</label>
						<input
							type="color"
							key={field.id}
							value={field.value}
							onChange={ev => onChange(field.id, ev.target.value)}
						/>
					</div>
				);
			default:
				return <div>Not implemented: {field.type}</div>;
		}
	});

	return (
		<Draggable
			position={{ x: xAxis, y: yAxis }}
			className="flex-wrap grid col-start-1 col-end-2 space-x-4 px-3 py-2 bg-indigo-700 text-white rounded-lg z-40"
		>
			<h2 className="col-span-2 text-center text-md uppercase font-black border-b-2">Your Template Editor</h2>
			<div
				className="grid grid-cols-2 gap-2 text-gray-900 text-sm uppercase pb-2"
				style={{ cursor: 'default' }}
				onPointerDown={ev => ev.stopPropagation()}
			>
				{components}
				<button className="my-4 px-3 col-span-2 bg-indigo-50 text-indigo-600 btn-active rounded-lg" onClick={onSave}>
					Submit
				</button>
			</div>
		</Draggable>
	);
};
