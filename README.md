ember-cli-easypiechart
==============================================================================

[Short description of the addon.]

# Ember-cli-easypiechart

[![Build Status](https://travis-ci.org/conormag/ember-cli-easypiechart.svg?branch=v0.1.2)](https://travis-ci.org/conormag/ember-cli-easypiechart)

An [ember-cli](http://www.ember-cli.com) addon for using [jQuery Easy Pie Chart](https://rendro.github.io/easy-pie-chart/) in Ember applications.

## Installation
`ember install ember-cli-easypiechart`

## Usage

```{{easy-pie-chart percent=50 symbol="%"}}```

The blockless-version will render
```<span class="percentage">{{percent}}</span>{{symbol}}```

inside the component.

#### Block Version
```javascript
{{#easy-pie-chart percent=50}}
    <your layout here with {{percent}} & {{symbol}}>
{{/easy-pie-chart}}
```

All parameters from [easy-pie-chart](https://rendro.github.io/easy-pie-chart/) are available.
To trigger the plugin's enableAnimation/disableAnimation methods, pass 
  `animationOn=true|false`
to the component and change accordingly.

#### Animation Callbacks
For example, to have the percent value change incrementally while animation is running:
```js
// {{! app/controllers/application.js}}

export default Ember.Controller.extend({
  percent: 0,
	onStep: function(from,to,value) {
		$(this.el).find('span').text(~~value);
  }
});
```

```js
// {{! app/templates/application.hbs}}

{{easy-pie-chart percent=percent animate=true onStep=onStep}}
```
## Testing
* `git clone` this repository
* `npm install`
* `bower install`
## Running


Installation
------------------------------------------------------------------------------

```
ember install ember-cli-easypiechart
```


Usage
------------------------------------------------------------------------------

[Longer description of how to use the addon in apps.]


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
