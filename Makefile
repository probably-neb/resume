ACTIVATE=${PWD}/env/bin/activate
BUILD=build


all: template pdf

template:
	. env/bin/activate && python3 template.py > ${BUILD}/resume.tex

pdf:
	latexmk -output-format=pdf -output-directory=${BUILD} ${BUILD}/resume.tex
	mv build/resume.pdf .
