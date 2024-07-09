## Ways to add css in React
- Add css in index.css file
- scss sass (not recommended way)
- styled component 
- Using library and framework(like materialUI,bootstrap,Tailwind,ChakraUI,ant Design) => Get prebuild styled 

## Tailwind
- No need to move from file to other
- Light weight(When parcel buddle the code it will use include only those style which is required)
- If we want to add to much CSS then code become ugly

# Redux toolkit
- install @reduxjs/toolkit and react-redux
- Build our redux store =>  We will create redux store in util folder
- Connect store to our App => We can connect our app using <Provider store={appStore}></Provider> in App.js
- Slice (cartSlice)
- dispatch(action)
- selector
