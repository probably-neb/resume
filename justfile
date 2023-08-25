BUILD_DIR := "build"

default:
    @just --list

build:
	pnpx tsx resume.tsx

serve: build
    @just watch &
    browser-sync start --server --index resume.html --files resume.html

watch:
	ls resume.config.ts resume.tsx | entr -s "just build"

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
