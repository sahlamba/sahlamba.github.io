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

# Run and test GitHub Actions locally (deploy job does not work because of token issues!)
mkdir /tmp/artifacts;
act -v -r \
--artifact-server-path /tmp/artifacts \
-s GITHUB_TOKEN=<token>
```

## Appendix

1. TailwindCSS [[link](https://tailwindcss.com/docs/installation/using-postcss)].
1. Using TailwindCSS with Jekyll [[link](https://mzrn.sh/2022/04/09/starting-a-blank-jekyll-site-with-tailwind-css-in-2022/)].
1. Adding Prettier pre-commit hook [[link](https://prettier.io/docs/en/precommit.html#option-2-pretty-quickhttpsgithubcomazzpretty-quick)].
1. Building and deploying site with GitHub Actions -
   - `jekyll-postcss` build [issue](https://github.com/mhanberg/jekyll-postcss/issues/20) thread recommends using `jekyll-action-ts`.
   - Using [jekyll-action-ts](https://github.com/limjh16/jekyll-action-ts) to build Jekyll with NodeJs (for postcss).
   - Custom build/deploy workflow [[link](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow)].
   - Enable GitHub Pages and select source to `GitHub Actions` in [settings](https://github.com/sahlamba/sahlamba.github.io/settings/pages).
1. Testing GitHub Actions locally [[link](https://github.com/nektos/act)] -
   - [Docs](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-fine-grained-personal-access-token) to generate Personal Access GitHub tokens.
     - Fine-grained permissions required to run workflow: `content (write), pages (write)`
     - Classic permissions scope required to run workflow: `repo (all)`
