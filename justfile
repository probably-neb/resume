BUILD_DIR := "build"

default:
    @just --list

build: pdf

pdf:
	pnpx tsx resume.tsx

serve: pdf
    browser-sync start --server --index resume.html --files resume.html

watch:
	ls info.toml resume.tsx | entr -s "just build"

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
