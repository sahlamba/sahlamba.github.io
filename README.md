# sahlamba.github.io

## Prerequisite Setup

Jekyll requires Ruby and other pre-requisite dependencies. See docs.
1. [Installation](https://jekyllrb.com/docs/installation/)
1. [Quickstart](https://jekyllrb.com/docs/)

```bash
# After installing Ruby, install Jekyll
gem install jekyll bundler
```

## Bundler Config Setup (First time only)

```bash
bundle config set --local path 'vendor/bundle'
```

## Install Dependencies

```bash
bundle install
```

## Start Jekyll Server

```bash
bundle exec jekyll serve

# If you run into a failure while starting the server, try updating dependencies
bundle update
```

Go to http://localhost:4000/

## Useful Commands

```bash
# Add new dependencies
bundle add no-style-please

# `Pessimize` auto adds explicit versions to your Gemfile
gem install pessimize && pessimize

# Remove unused dependencies from path
bundle clean 
```