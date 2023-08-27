BUILD_DIR := "build"
RESUME_PDF := {{BUILD_DIR}} / resume.pdf
RESUME_HTML := {{BUILD_DIR}} / resume.html

default:
    @just --list

build:
	pnpx tsx resume.tsx
    mv resume.html resume.pdf ./build/

serve: build
    @just watch &
    browser-sync start --server --index resume.html --files resume.html

watch:
	ls resume.config.ts resume.tsx | entr -s "just build"

# preview
preview: build
	zathura {{RESUME_PDF}} &

# dropbox link
link: build
	rclone copy {{RESUME_PDF}} db:perso
	rclone link db:perso/resume.pdf | tee >(echo) | xclip -sel clip

# github release
release: build
    #!/bin/bash

    printf "Unsaved Changes:\n%s\n" $(git status -s)

    while true; do
        read -r -p "Are You Sure? [Y/n] " input

        case $input in
        [yY][eE][sS] | [yY])
            echo "Yes"
            break
            ;;
        [nN][oO] | [nN])
            echo "No"
            # break
            exit
            ;;
        *)
            echo "Invalid input..."
            ;;
        esac
    done

    read -r -p "Notes: " notes

    gh release create "$(date +%m-%d-%y)" --notes "${notes}" {{RESUME_PDF}}

