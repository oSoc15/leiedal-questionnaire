# leiedal-questionnaire
Determine ecolabel of a user

## Development

```
npm install -g gulp bower
npm install
bower install

# watch for changes and build
gulp
```

Gulp will start a server on http://localhost:12121 and watch for changes and livereload and build the sass.

## App structure

Angular app that loads an array of questions from a REST API.

### Front end

The user sees a question on the left and a visual representation of a residence on the right.

Each question has...
- a **type** that determines how it's rendered
- an array of **answers**

These answers and its values are saved in the **residence** object.
The residence object contains location information and a unique hash that's created the first time a question for the residence is answered.
This unique hash is appended to the url in the fragment and saved in localStorage.

The user is asked one question at a time.
It's possible to skip a question, in that case the ecolabel rating will be based off a default value and the subject will be hidden in the visual representation.

For optimal performance, the landing page does not have angular, it is a seperately static/dynamic page. There is just 1 controller for questions and 1 controller for visualizing. No routing required.

### Back end

REST API compatible with angular-resource with following endpoints:

/api/questions/:id  
with at least these properties  
- key: lowercase string
- title: string
- description: string
- type: button | slider (can be overwritten in answer object)
- answers: []
  - value: int (or maybe string?)
  - title: string
  - (optional) image: path
  - (optional) type: overwrites question type

/api/residence/:hash
- hash: string
- name: string
- locationstuff: ...
- answers (or replies): []