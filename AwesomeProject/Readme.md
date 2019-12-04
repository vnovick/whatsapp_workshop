# Whatsapp Workshop

## If cloning from step1 branch

- npm install
- cd ios && pod install && cd ../
- react-native run-android


## Add Navigation to your app.

Getting started: https://reactnavigation.org/docs/en/getting-started.html

Ultimately screens should look as following

![ChatList](https://s3-us-west-2.amazonaws.com/vladjs-presentations/ChatList.png)
![Chat](https://s3-us-west-2.amazonaws.com/vladjs-presentations/Chat.png)

## Input and Keyboard

As you may have noticed there is also Compose component added at this step.
Make sure to add it and make it Keyboard Aware:

![KeyboardAvoiding](https://s3-us-west-2.amazonaws.com/vladjs-presentations/KeyboardAvoiding.png)

## Add the following part to `services/api.js`

```javascript

export const postMessage = (message) => mockMessages.push({
  incoming: false,
  message
});
```


## Resources

- [React Navigation](https://reactnavigation.org/)
- [TextInput](https://facebook.github.io/react-native/docs/textinput.html)
- [KeyboardAvoidingView](https://facebook.github.io/react-native/docs/keyboardavoidingview.html)