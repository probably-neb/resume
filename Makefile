ACTIVATE=${PWD}/env/bin/activate
BUILD=build

all: template pdf

template:
	. env/bin/activate && python3 template.py > ${BUILD}/resume.tex

pdf:
	latexmk -xelatex -output-directory=${BUILD} ${BUILD}/resume.tex
	mv build/resume.pdf .

# github release
release: all
	./make_release.sh

# preview
prev: all
	zathura ./resume.pdf &

# dropbox link
link: all
	rclone copy ./resume.pdf db:perso
	rclone link db:perso/resume.pdf | tee >(echo) | xclip -sel clip
