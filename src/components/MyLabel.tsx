import './myLabel.css';

export interface Props {
	/***Este es el mensaje a mostrar en la etiqueta*/
	label: string;

	/***Este es el tamaño de la etiqueta*/
	size: 'normal' | 'h1' | 'h2' | 'h3';

	/**Permite capitalizar todo el mensaje */
	allCaps?: boolean;

	/**Color del mensaje */
	color?: 'primary' | 'secondary' | 'tertiary';

	/**fontColor */
	fontColor?: string;
}

export const MyLabel = ({
	label = 'No label',
	size = 'normal',
	allCaps = false,
	color = 'primary',
	fontColor,
}: Props) => {
	return (
		<span
			style={{ color: fontColor }}
			className={['label', size, `text-${color}`].join(' ')}>
			{allCaps ? label.toUpperCase() : label}
		</span>
	);
};
