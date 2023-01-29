#!/bin/bash

GIT_STATUS=$(git status -s)

function confirm() {
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
}

printf "Unsaved Changes:\n%s\n" ${GIT_STATUS}

confirm

read -r -p "Notes: " notes

# argv[1:]
# mainly for ./make_release.sh --draft
args=$*

gh release create $(shell date +%m-%d-%y) ${args} --notes ${notes} ./resume.pdf
