---
sidebar: auto
---

# Jest Walkthrough

A sandbox app with a few quick examples for testing Vue components with Jest. A strategy for reducing boilerplate is also showcased.

Largely based off of the [Vue Testing Handbook](https://lmiller1990.github.io/vue-testing-handbook/).

## Demo App
```
npm install
```

### Development

Compiles and hot-reloads for development.

```
npm run serve
```

### Production

Compiles and minifies for production.

```
npm run build
```

### Unit Tests

Run your unit tests.

```
npm run test:unit
```

### Linting

Lints and formats files.

```
npm run lint
```

### Docs Dev

Starts Vuepress development server.

```
npm run docs:dev
```

### Docs Build

Builds and minifies documentation for production.

```
npm run docs:dev
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Testing Setup

To reduce some boilerplate we use the factory function `createWrapper()` to let us mount our components will global requirements in addition to per-test customization.

### Factory

#### createWrapper(component, options)

`@/testing/create-wrapper.js`

- `component` the component we're testing. i.e. HelloWorld.vue
- `options` mocks, stubs, etc.

```js
const createWrapper = (component, options = {}) => {
  const localVue = createLocalVue()
  const wrapper = mount(component, ({
    localVue,
    ...options
  }))
  return wrapper
}
```

Here we're creating a function called `createWrapper()` which takes in the component we're testing and the test options. Inside the block, we invoke [createLocalVue()](https://vue-test-utils.vuejs.org/api/#createlocalvue) which returns a fresh Vue instance for us to add components, mixins, and install plugins without polluting the global Vue class. Then we merge in any provided options. See below for for example options.

### Mocks

#### $route

If your component needs data from the $route object, you'll need to provide the mounted component with that information.

Add dynamic values to params: `$route.params.YOUR_VALUE_NAME`.

```js
// router
{
  path: 'my-component/:id',
  component: MyComponent
}

// test
const options = {
  mocks: {
    $route: {
      params: {
        id: '123'
      }
    }
  }
}
```

#### $router

To test whether or not our programmatic navigation worked as expected, we need to add spies for the core vue-router methods.

```js
// component
this.$router.push('/home').catch(()=>{})
this.$router.replace('/login').catch(()=>{})

// test
const options = {
  mocks: {
    $router: {
      push: jest.fn(() => {
        return {
          catch: jest.fn()
        }
      }),
      replace: jest.fn(() => {
        return {
          catch: jest.fn()
        }
      })
    }
  }
}
```

#### $store

Mocking Vuex and it's methods is a little verbose but pretty straight forward.

```js
// component
computed: {
  data() {
    return this.$store.state.Module.data
  }
}

this.$store.dispatch('Module/getProperty', 'foo')

// test
const options = {
  mocks: {
    $store: {
      state: {
        Module: {
          data: null
        }
      },
      dispatch: jest.fn()
    }
  }
}
```

## Examples 

- [Computed Properties](#computed-properties)
- [Emitted Events](#emitted-events)
- [Props](#props)
- [User Input](#user-input)
- [Vue Router](#vue-router)

### Computed Properties

`@/examples/computed`

The computed property example component has a prop of "fullName" is a string. Prop value provided for example: John Doe

#### Template 

```vue
<p>Initials: {{ initials }}</p>
```

#### Test

```js
expect(wrapper.find('p').text()).toBe('Initials: JD')
```

#### Note

This is a good example for how unit testing can help us refactor with confidence. Below are two different computed properties which both pass our tests. One is a little cleaner than the other. 

##### Computed A

```js
initials () {
  const names = this.fullName.split(' ')

  const input = []
  names.forEach(n => {
    input.push(n.charAt(0).toUpperCase())
  })

  return input.join('')
}
```

##### Computed B

```js
initials() {
  const names = this.fullName.split(' ')
  return names[0].charAt(0).toUpperCase() + names[1].charAt(0).toUpperCase()
}
```


### Emitted Events

`@/examples/emitted`

```js
  // component
  this.$emit('myEvent', 'name', 'password')

  // test
  await wrapper.find('button').trigger('click')
  expect(wrapper.emitted().myEvent[0]).toEqual(['name', 'password'])
```

### Props

`@/examples/props`

The props example component has a prop called "state" that is a string and can be one of three options: 
"error", "loading", or "default".

#### Template

```vue
<h1>Component State: {{ state }}</h1>
```

#### Test 

```js
expect(wrapper.find('h1').text()).toBe('Component State: default')
```

### User Input

`@/examples/user-input`

```vue
<form @submit="handleSubmit">
  <input v-model="username" data-username />
  <button type="submit" />
</form>
<div class="message" v-if="submitted">
  Thank you for your submission, {{ username }}.
</div>
```
