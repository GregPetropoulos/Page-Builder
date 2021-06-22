import { Draggable } from './Draggable';

export const TemplatePanel = ({ fields, onChange, onSave }) => {
	const xAxis = Math.floor(window.innerWidth / 2) - 200;
	const yAxis = Math.floor(window.innerHeight / 2) - 200;

	const components = fields.map(field => {
		switch (field.type) {
			case 'text':
				return (
					<div className="mb-3" key={field.id}>
						<label className="form-label">{field.name}</label>
						<input
							type="email"
							className="form-control"
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
			className="d-flex flex-column input-wrapper p-3  bg-dark text-white rounded border"
		>
			<h2 className="mb-3 border-bottom">Editor</h2>
			<div
				className="d-flex flex-column"
				style={{ cursor: 'default' }}
				onPointerDown={ev => ev.stopPropagation()}
			>
				{components}
				<button className="my-5 btn btn-primary" onClick={onSave}>
					Submit
				</button>
			</div>
		</Draggable>
	);
};
