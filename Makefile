default: build

.PHONY: build serve setup

build:
	bundle exec jekyll build

serve:
	@open http://localhost:4000
	bundle exec jekyll serve --watch

setup:
	gem install bundler
	bundle install

test: build
	bundle exec htmlproofer ./_site \
		--allow-hash-href \
		--assume-extension \
		--empty-alt-ignore \
		--internal-domains natemcmaster.com,natemcmaster.github.io,localhost \
		--url-ignore https://www.linkedin.com/in/natemcmaster
