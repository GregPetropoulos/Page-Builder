import { TemplateCard } from '../components/TemplateCard';

export const TemplatePage = ({ configs, currentUserProp, signOutFunc }) => {

  return (
    <div className="grid grid-cols-5 grid-rows-1 p-8 space-x-4">
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
