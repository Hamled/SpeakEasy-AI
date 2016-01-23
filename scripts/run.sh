#!/usr/local/bin/bash
# Runs the speak_easy model with my default hard drive directories.

venv/bin/python speak_easy.py --train_dir='/Volumes/HD/SPEAKEASY_DATA/REDDIT/reddit_data/' --data_dir='/Volumes/HD/SPEAKEASY_DATA/REDDIT/reddit_data/data_25000_reddit' $@
