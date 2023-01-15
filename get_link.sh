#!/bin/bash

rclone copy ./resume.pdf db:perso
rclone link db:perso/resume.pdf
