import jinja2
import tomli

env = jinja2.Environment(
        loader=jinja2.FileSystemLoader("."),
        comment_start_string="%",
        comment_end_string="\n",
        block_start_string="<#",
        block_end_string="#>",
        variable_start_string="<<",
        variable_end_string=">>",
     )
TEMPLATE = env.get_template("resume.j2.tex")
info = tomli.load(open('info.toml','rb'))
# print(info)

# format links in header_info
header_info = info['header_info']
formatted_header_info = []
for h_info in header_info:
    if h_info.get('href'):
        h_info["val"] = f"\\href{{{h_info['val']}}}{{{h_info['pretty']}}}"
    formatted_header_info.append(h_info)
info['header_info'] = formatted_header_info

to_remove = []
# format url in project info
for i, p in enumerate(info['projects']):
    if p.get('exclude') or (p.get('include') is False):
        to_remove.append(p)
    if (url := p.get('url')):
        info['projects'][i]['url'] = "\\texttt{\\small \\url{"+url+"}}"
for p in to_remove:
    info['projects'].remove(p)

# print(info)
print(TEMPLATE.render(**info))
