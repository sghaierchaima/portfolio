type Props = { id?: string; title: string; subtitle?: string };
export default function SectionTitle({ id, title, subtitle }: Props){
  return (
    <div id={id} className="section-header text-center">
      <h2 className="display-5 fw-bold">{title}</h2>
      {subtitle && <p className="text-muted mt-2">{subtitle}</p>}
      <div className="section-underline mt-3"></div>
    </div>
  );
}
