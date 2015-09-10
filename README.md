# React Mess About

This is a demo repository to act as a starter to messing about with [React](http://reactjs.org) components.

It was originally used as part of a more-or-less impromptu talk at [PyUnconf 2015](http://pyunconf.de).

Because this was presented to people whose main language wasn't javascript, this README tries to explain everything you need to do to get up and running.

## Getting started

To start off, you need to install [node.js](http://nodejs.org) for your platform

Once installed, you need to install one global package, gulp:

```
npm install -g gulp
```

If you're linux/mac, you will need to `sudo` this command.  Under windows, you *may* need to run it under an administrator command prompt (if you get errors when trying it normally, try starting a command prompt by right clicking on the `Command Prompt`, and clicking `Run as Administrator`)

[Gulp](http://gulpjs.com) is a task runner that enables the files to be built to something that can run in a browser.

Once that's done, you can just type

```
npm install
```

Which installs all the dependencies for the project.

It will download a load of stuff, and put everything in `node_modules`.

When that's complete, check out the tag `step1`, and run

```
gulp watch
```

Which will build the project initially, and watch the source files for changes, and automatically rebuild anytime anything changes.  All the dependencies are installed at `step1`, so you shouldn't need to run it again, unless you add extra things in.

There's a special error handler installed ([errorify](https://github.com/zertosh/errorify)) which will display any compile errors on the webpage, so it's really easy to see if something has gone wrong.


To start the server, just run

```
node server.js
```

This starts a webserver listening on port 8010, so just point your browser at http://localhost:8010/

# Steps

There are 6 steps, all tagged in git so you can work through and see how each step is done, or play with any step to your heart's content.

1. Base component (git tag `step1`).  Start here. This has a very simple component.
2. (tag `step2`) Make a button that counts the clicks, and displays the click count as it's label.
3. (tag `step3`) Instead of just counting, record the date & time of each click, and display a list of the clicks
4. (tag `step4`) Add a button for each click in the list to remove that 'click'
5. (tag `step5`) Add a new component (`Count.jsx` that takes a `isLoading` prop, and if true, displays an image of a spinner (you can find an appropriate image in `images/loading.gif`).  This isn't actually integrated in this step, so you won't see any extra changes if you just checkout this step, but if you want to integrate the component yourself without typing the code out, you can use this step to save some time.
6. (tag `step6`) Integrate the `Count.jsx`, calling `/api/slow` when you mount the main `MyComponent` (hint: use `Superagent` in the `componentWillMount` method).  You'd normally use a flux framework/pattern to fetch data for react, but if you're only playing around, it's an easy way to see how the lifecycle methods work.  You could doing things in the other lifecycle methods too - `componentDidMount`, `componentDidUpdate`, `componentWillReceiveProps`, `componentWillUnmount`.  It's probably easiest to start with a `console.log` statement, as you're not allowed to call certain things (e.g. `setState`) from certain lifecycle methods.

# Help, it doesn't work

If things don't work, or you get stuck, raise an issue (don't worry if you're just stuck and it's not an issue with the repo, just raise an issue and I'll try to help)

If twitter is more your thing, ping me on twitter [@bruderstein](http://twitter.com/bruderstein)

# Contributing

If you want to improve this repo, feel free - it was basically thrown together in one night to prepare for the talk, then tidied up a bit after the fact. There are bound to be lots of things to improve.  Feel free to send PRs.

# License

MIT
