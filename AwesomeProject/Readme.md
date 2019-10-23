# Whatsapp Workshop

# Styling Your Screens

- add mock data service to `src/services/api.js`

```javascript
export const mockMessages = [
  {
      incoming: true,
      message: 'Hi Vladimir'
  }
]

export const chats = [{
  id: "123",
  title: "John",
  description: "Hey there",
  avatar: "http://www.codetic.net/demo/templates/Privado/img/avatar.png",
  messages: mockMessages
}]

export const getChats = () => (
  new Promise(resolve => setTimeout(() => resolve(chats), 1000))
)

export const getMessages = () => (
  new Promise(resolve => setTimeout(() => resolve(mockMessages), 1000))
)
```

- retrieve data in ChatsScreen on initial render using useEffect hook.
- Display list of Chats

## Style ChatsScreen to look as in the picture.

- Style screen according to the following design:

![ChatsScreenView](https://s3-us-west-2.amazonaws.com/vladjs-presentations/ChatsScreen.png)
![ChatView](https://s3-us-west-2.amazonaws.com/vladjs-presentations/ChatView.png)


## Resources

- Layout style props https://facebook.github.io/react-native/docs/layout-props.html
- Test style props https://facebook.github.io/react-native/docs/text.html
- Vector Icons https://github.com/oblador/react-native-vector-icons

> Make sure to add to Info.plist and app/build.gradle the following:

`Info.plist`
```
<key>UIAppFonts</key>
	<array>
		<string>AntDesign.ttf</string>
		<string>Entypo.ttf</string>
		<string>EvilIcons.ttf</string>
		<string>Feather.ttf</string>
		<string>FontAwesome.ttf</string>
		<string>FontAwesome5_Brands.ttf</string>
		<string>FontAwesome5_Regular.ttf</string>
		<string>FontAwesome5_Solid.ttf</string>
		<string>Foundation.ttf</string>
		<string>Ionicons.ttf</string>
		<string>MaterialCommunityIcons.ttf</string>
		<string>MaterialIcons.ttf</string>
		<string>Octicons.ttf</string>
		<string>SimpleLineIcons.ttf</string>
		<string>Zocial.ttf</string>
	</array>
```

`app/build.gradle`

```
apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
```