import { useState } from 'react';

export const Draggable = ({
	children,
	className,
	position: initialPosition,
}) => {
	const [position, setPosition] = useState(initialPosition ?? { x: 0, y: 0 });

	const onPointerDown = ev => {
		const elem = ev.currentTarget;
		elem.setPointerCapture(ev.pointerId);
		ev.stopPropagation();
	};

	const onPointerUp = ev => {
		const elem = ev.currentTarget;
		elem.releasePointerCapture(ev.pointerId);
	};

	const onPointerMove = ev => {
		if (ev.currentTarget.hasPointerCapture(ev.pointerId)) {
			setPosition(prev => ({
				x: prev.x + ev.movementX,
				y: prev.y + ev.movementY,
			}));
		}
	};

	return (
		<div
			className={className}
			onPointerDown={onPointerDown}
			onPointerUp={onPointerUp}
			onPointerMove={onPointerMove}
			style={{
				position: 'absolute',
				touchAction: 'none',
				top: position.y,
				left: position.x,
			}}
		>
			{children}
		</div>
	);
};
