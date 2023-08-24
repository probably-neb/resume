BUILD=build

build: template pdf

template:
	. env/bin/activate && python3 template.py > ${BUILD}/resume.tex

pdf:
	latexmk -xelatex -output-directory=${BUILD} ${BUILD}/resume.tex
	mv build/resume.pdf .

watch:
	ls info.toml template.py resume.j2.tex | entr -s "make build"

# github release
release: all
	./make_release.sh

# preview
preview:
	zathura ./resume.pdf &

# dropbox link
link: all
	rclone copy ./resume.pdf db:perso
	rclone link db:perso/resume.pdf | tee >(echo) | xclip -sel clip
