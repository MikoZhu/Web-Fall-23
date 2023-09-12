//API Example

//Example URL
//https://www.dictionaryapi.com/api/v3/references/thesaurus/json/umpire?key=your-api-key

const BASE_URL = "https://www.dictionaryapi.com/api/v3/references/thesaurus/json"
const API_KEY = "1b5c3473-b930-4d32-a959-4b6be1c72f42" //query param
const word = "conundrum" //path param

const URL = `${BASE_URL}/${word}?key=${API_KEY}`

//console.log(URL)

const fetchWord = () => {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log("hej")
      console.log(data)
    })
    .catch((error) => console.log("Error ❌", error))
}

//fetchWord()

const fetchWordAsync = async () => {
  const response = await fetch(URL).catch((error) => console.log("My error:", error))
  const data = await response.json()
  console.log(data)
  updateHTML(data)
}

fetchWordAsync()

// //Headers
// const URL_TO_ANOTHER_API = 'https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf'
// const options = {
// 	method: 'POST', //This is the default method, there's also POST and others
// 	headers: {
// 		'X-RapidAPI-Key': 'fb2180e11emsh383fe87dd2f9172p1a2dbejsnc4b7896e9fbd',
// 		'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
//   },
//   body: JSON.stringify(data) //If this was a POST request, we would likely add a message or something in the body of the request
// }

// fetch(URL_TO_ANOTHER_API, options)

const updateHTML = (data) => {
  document.getElementById("word").innerText = word
  document.getElementById("explanation").innerText = data[0].shortdef
  document.getElementById("type").innerText = data[0].fl
  console.log(data[0].meta.syns[0])

  const synonyms = document.getElementById("synonym")

  const listOfSynonyms = data[0].meta.syns[0]

  synonyms.innerHTML = listOfSynonyms.map((synonym) => `<li>${synonym}</li>`).join("")
}