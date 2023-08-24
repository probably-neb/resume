BUILD_DIR := "build"

default:
    @just --list

build: template pdf

template:
	. env/bin/activate && python3 template.py > {{BUILD_DIR}}/resume.tex

pdf:
	latexmk -xelatex -output-directory={{BUILD_DIR}} {{BUILD_DIR}}/resume.tex
	mv build/resume.pdf .

watch:
	ls info.toml template.py resume.j2.tex | entr -s "just build"

# github release
release: build
	./make_release.sh

# preview
preview:
	zathura ./resume.pdf &

# dropbox link
link: build
	rclone copy ./resume.pdf db:perso
	rclone link db:perso/resume.pdf | tee >(echo) | xclip -sel clip
