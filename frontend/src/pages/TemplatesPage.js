import { TemplateCard } from '../components/TemplateCard';

export const TemplatePage = ({ configs }) => {

  return (
    <div className="grid grid-cols-2 p-8 place-items-center mb-4">
      <div className="flex flex-row gap p-5 flex-wrap justify-content-center row-span-1">
        {configs.map((template) => (
          <TemplateCard
            key={template.id}
            thumbnail={template.thumbnail}
            name={template.name}
            id={template.id}
          />
        ))}
      </div>
    </div>
	);
};
