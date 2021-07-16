
const createDom = (tag, ...childs) => {
 const element = document.createElement(tag)
 childs.forEach(child => {
  if (typeof child === 'string') {
   const textNode = document.createTextNode(child)
   element.append(textNode)
  } else if (child instanceof HTMLElement) {
   element.append(child)
  } else if (child instanceof Object) {
   Object.entries(child).forEach(([key, value]) => {
    element.setAttribute(key, value)
   })
  }
 })
 return element
}

/* const body = document.querySelector('.body');
const fragment = createDom('h1',
  'salut',
  createDom("button", "clic", {style: "background: lightblue"}),
  {"class" : "tesmorts"}
)
fragment.classList.add("azoozoz")
body.appendChild(fragment);
 */