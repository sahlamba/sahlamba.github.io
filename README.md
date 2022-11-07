# sahlamba.github.io

## Prerequisite Setup

Jekyll requires Ruby and other pre-requisite dependencies. See docs.

1. [Installation](https://jekyllrb.com/docs/installation/)
1. [Quickstart](https://jekyllrb.com/docs/)

[TailwindCSS](https://tailwindcss.com/docs/installation/using-postcss) requires [NodeJs](https://nodejs.org/en/).

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
bundle install && npm install
```

## Start Jekyll Server

```bash
bundle exec jekyll serve
```

## Build Production site

```bash
NODE_ENV=production JEKYLL_ENV=production bundle exec jekyll build
```

## Start Production site

```bash
NODE_ENV=production JEKYLL_ENV=production bundle exec jekyll serve
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

# Create new blank Jekyll site (use --force cautiously!)
SITE_NAME="jekyll-blank-starter"
node -v && npm -v && gem -v && \
gem install jekyll bundler && \
mkdir "${SITE_NAME}" && cd "${SITE_NAME}" && \
bundle config set --local path 'vendor/bundle' && \
bundle init && \
bundle add jekyll && \
bundle exec jekyll new . --force --blank && \
echo "_site
.sass-cache
.jekyll-cache
.jekyll-metadata
vendor
node_modules" >> .gitignore
```

## Appendix

1. TailwindCSS [[link](https://tailwindcss.com/docs/installation/using-postcss)].
1. Using TailwindCSS with Jekyll [[link](https://mzrn.sh/2022/04/09/starting-a-blank-jekyll-site-with-tailwind-css-in-2022/)].
1. Adding Prettier pre-commit hook [[link](https://prettier.io/docs/en/precommit.html#option-2-pretty-quickhttpsgithubcomazzpretty-quick)].
