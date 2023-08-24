BUILD_DIR := "build"

default:
    @just --list

build: pdf

pdf:
	pnpx tsx resume.tsx

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
