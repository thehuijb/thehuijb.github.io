# ResponCZive

## Requirements
### Environment
- [Bitbucket](https://bitbucket.org) account
- [Git](http://git-scm.com) and [SourceTree](http://sourcetreeapp.com) if necessary
- [NodeJS](http://nodejs.org)
- **OSX** Install XCode + CommandLine Tools
- **Windows** [Ruby](http://www.ruby-lang.org/en)
- Install Ruby `sass` and `jekyll` gems with the `gem install` command

### Setup
- Clone [ResponCZive git repository](https://bitbucket.org/OnlineInt/responczive.git)
- Setup SSH access for your Bitbucket account. (see this [guide](https://confluence.atlassian.com/pages/viewpage.action?pageId=270827678) for help)
- Navigate to folder in terminal
- Type: `npm install -g grunt-cli`
- Type: `npm install -g dyson`
- Type: `npm install`

### Live Reload
- Install the LiveReload browser extension (optional but useful)
	- [Chrome](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)
	- [FireFox](http://download.livereload.com/2.0.8/LiveReload-2.0.8.xpi)
	- [Safari](http://download.livereload.com/2.0.9/LiveReload-2.0.9.safariextz)

### Browser requirements
- Internet Explorer 8+
- Google Chrome (latest)
- Firefox (latest)
- Safari 5.1+


## Process
### Run
- Navigate to folder in terminal
- Type: `grunt` to do a default build
- Type: `grunt server` to start the following services in the background
	- *jekyll* will generate HTML, view at `localhost:4000`
	- *watch* will watch JS and SCSS changes for js hinting and CSS building
	- *dyson* will start a fake REST service at `localhost:3000`
- If you're using LiveReload, make sure the browser plugin is active

### Git
- Follow [gitflow](http://nvie.com/posts/a-successful-git-branching-model)
- Don't **decline** Pull Requests leave open and communicate through comments
- Use the last half hour of your day to review any active pull requests.
- Prevent the creation of big branches, try to minimize scope.

### Release
- As sprints take 3 weeks we have two minor releases each sprint
	- During the first week of development we focus on HTML, tuesday the second week we release version `0.x.1`
	- After the first release we focus on CSS and Javascript, the second release `0.x.2` is wrapped on tuesday week three.
	- Before the end of week three we have the option to do a quick fix release that only affects CSS and Javascript
- To make a release build follow these steps:
	- Make sure your `develop` and `master` branch are up-to-date
	- Start a new release using the `Gitflow` button, the Release Version should follow the above mentiond naming scheme
	- Run `grunt release` in a terminal window, this will populate the `dist` folder and compress the JS files
	- Commit the changes, these should just be the files copied by the grunt task to the `dist` folder
	- Merge the `master` branch into your release branch and resolve any merge conflicts using the `Resolve using Mine` option
	- Finish the release using the `Gitflow` button
	- If you haven't automatically pushed the changes to the `master` branch you need to do so now
	- Switch back to the `develop` branch if this isn't already the active branch
	- Remove the `dist` folder from disk,commit the changes to the `develop` branch and push them to the server


## Conventions

### Generic
- Terms are in English, only if it's difficult to translate we use the Dutch term.
- Testing should be done on the actual browser version, so no testing in compatibility modes, download a virtual machine from [modern.ie](http://www.modern.ie) if you have to.

### HTML
- Double quotes.
- Semantic HTML
- Use of HTML5 elements like `<section>`, `<nav>` and `<aside>`.
- Should follow [drempelvrij: level 1 requirements](http://www.drempelvrij.nl/het-waarmerk/niveau-1)

### JavaScript
- Single quotes.
- All javascript modules are wrapped using the requirejs module pattern.
- Each module lives in a separate file.
- Each module contains an export variable to indicate what it exports.

### CSS
- Single quotes.
- Only use vendor prefixes if necessary, check [caniuse.com](http://caniuse.com) or [shouldiprefix.com](http://shouldiprefix.com/) if you're not sure.S
- CSS classes are written in lower case separated by dashed

### SASS
- Use the SCSS syntax.

## Related
- `:visited` link style is [restricted](https://developer.mozilla.org/en-US/docs/Web/CSS/:visited)
- SVG to PNG, CSS preprocessor [grunticon](https://github.com/filamentgroup/grunticon)
