# language-picker-react

## React Component to pick a Language. You require @material-ui/core, react and react-dom,


### You must pass to the component 
<ul>
<li> an Array with the languages you will have in your app</li>
<li> The current language</li>
<li> A function, it could be a redux dispatch or a setState handler </li>
</ul>

###Important

the component is Dummy. It not change the state of your app.



### Example

```javascript

<LangaugePicker
 currentLanguage={"es"}
 setOfLanguages={["de", "es", "pt", "it"]}
 actionToDispatch={ (lang)=> doSomethingWithTheClickedLanguage(lang)  }
/>



````


## the function actionToDispatch it is a callback. it gives the clicked language




