import { TemplateCard } from "../components/TemplateCard";
import { SideNavbar } from "../components/SideNavbar";

export const TemplatePage = ({ configs }) => {
  return (
    <div>
      <div>
        <SideNavbar />
      </div>

      <div className="d-flex flex-row gap p-5 flex-wrap justify-content-center">
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
