const color = new Map();

color.CSS = 'bg-secondary';
color.HTML = 'bg-danger';
color.JavaScript = 'bg-light text-dark';
color.PHP = 'bg-dark';
color.Java = 'bg-info text-dark';
color.Python = 'bg-warning text-dark';
color.Shell = 'bg-success';
color.Lua = 'bg-secondary';

function getColor(language) {
  return color[language];
}

export default getColor;
