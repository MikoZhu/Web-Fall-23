// 1-multiplication
export const multiply = (a, b) => {
  return a * b
}

// 2-first-last
export const firstLast = (items) => {
  if (items.length === 0) {
    return 'No items!'
  }

  if (items.length === 1) {
    return `Only item: ${items[0]}`
  }

  return `First: ${items[0]}, Last: ${items[items.length - 1]}`
}

// 3-find-index
export const findIndex = (array, value) => {
  return array.indexOf(value)
}

// 4-angle-calculator
export const angleCalculator = (turns) => {
  return turns * 360
}

// 5-month-name
export const monthName = (monthNumber) => {
  if (monthNumber < 1 || monthNumber > 12) {
    return null
  }

  return months[monthNumber - 1]
}

// 6-filter-numbers
export const filterNumbers = (array, largerThan) => {
  return array.filter(num => num <= largerThan)
}

// 7-is-empty
export const isEmpty = (stringArrayOrObject) => {
  switch (typeof stringArrayOrObject) {
    case 'string':
      return stringArrayOrObject === ''
    case 'object':
      return Object.keys(stringArrayOrObject).length === 0
  }
}

// 8-hacker-speak
export const hackerSpeak = (words) => {
  return words
    .replace(/a/gi, 4)
    .replace(/e/gi, 3)
    .replace(/i/gi, 1)
    .replace(/o/gi, 0)
    .replace(/s/gi, 5)
}

// 9-hashtags
export const hashtags = (text) => {
  return text.match(/(#\w+)/g)
}