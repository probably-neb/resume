import jinja2
import json

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
info = json.load(open('info.json','r'))
print(TEMPLATE.render(**info))
