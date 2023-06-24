const btnNav = document.getElementById("btnNav")
const btnP = document.getElementById("btnP")
const btnLi = document.getElementById("btnLi")
const btnUl = document.getElementById("btnUl")
const btnH1 = document.getElementById("btnH1")

const divElem = document.querySelector("#divElem")

const claUl = document.querySelector(".ul")
const claLi = document.querySelector(".li")
const claH1 = document.querySelector(".h1")
const claP = document.querySelector(".p")
const claNav = document.querySelector(".nav")

const inputLi = document.querySelector("#inLi")
const inputH1 = document.querySelector("#inH1")
const inputUl = document.querySelector("#inUl")
const inputNav = document.querySelector("#inNav")
const inputP = document.querySelector("#inP")

const divLi = document.querySelector(".inputLi")
const divH1 = document.querySelector(".inputH1")
const divUl = document.querySelector(".inputUl")
const divNav = document.querySelector(".inputNav")
const divP = document.querySelector(".inputP")

const crH1 = document.querySelector("#crH1")
const dirH1 = document.querySelector("#dH1")
const esqH1 = document.querySelector("#eH1")
const cimaH1 = document.querySelector("#cH1")
const baixoH1 = document.querySelector("#rH1")

const crLi = document.querySelector("#crLi")
const dirLi = document.querySelector("#dLi")
const esqLi = document.querySelector("#eLi")
const cimaLi = document.querySelector("#cLi")
const baixoLi = document.querySelector("#rLi")

const crUl = document.querySelector("#crUl")
const dirUl = document.querySelector("#dUl")
const esqUl = document.querySelector("#eUl")
const cimaUl = document.querySelector("#cUl")
const baixoUl = document.querySelector("#rUl")

const crNav = document.querySelector("#crNa")
const dirNav = document.querySelector("#dNa")
const esqNav = document.querySelector("#eNa")
const cimaNav = document.querySelector("#cNa")
const baixoNav = document.querySelector("#rNa")

const crP = document.querySelector("#crP")
const dirP = document.querySelector("#dP")
const esqP = document.querySelector("#eP")
const cimaP = document.querySelector("#cP")
const baixoP = document.querySelector("#rP")

btnH1.addEventListener("click", () => {
   claUl.style.display = "none"
   claLi.style.display = "none"
   claNav.style.display = "none"
   claP.style.display = "none"
   claH1.style.display = "flex"
   
   divUl.style.display = "none"
   divLi.style.display = "none"
   divNav.style.display = "none"
   divP.style.display = "none"
   divH1.style.display = "block"
})
btnP.addEventListener("click", () => {
   claUl.style.display = "none"
   claLi.style.display = "none"
   claNav.style.display = "none"
   claP.style.display = "flex"
   claH1.style.display = "none"
   
   divUl.style.display = "none"
   divLi.style.display = "none"
   divNav.style.display = "none"
   divP.style.display = "block"
   divH1.style.display = "none"
})
btnLi.addEventListener("click", () => {
   claUl.style.display = "none"
   claLi.style.display = "flex"
   claNav.style.display = "none"
   claP.style.display = "none"
   claH1.style.display = "none"
   
   divUl.style.display = "none"
   divLi.style.display = "block"
   divNav.style.display = "none"
   divP.style.display = "none"
   divH1.style.display = "none"
})
btnUl.addEventListener("click", () => {
   claUl.style.display = "flex"
   claLi.style.display = "none"
   claNav.style.display = "none"
   claP.style.display = "none"
   claH1.style.display = "none"
   
   divUl.style.display = "block"
   divLi.style.display = "none"
   divNav.style.display = "none"
   divP.style.display = "none"
   divH1.style.display = "none"
})
btnNav.addEventListener("click", () => {
   claUl.style.display = "none"
   claLi.style.display = "none"
   claNav.style.display = "flex"
   claP.style.display = "none"
   claH1.style.display = "none"
   
   divUl.style.display = "none"
   divLi.style.display = "none"
   divNav.style.display = "block"
   divP.style.display = "none"
   divH1.style.display = "none"
})

let pX = 0
let pY = 300


    const r = Math.floor(Math.random() * 255)
    const g = Math.floor(Math.random() * 255)
    const b = Math.floor(Math.random() * 255)


crH1.addEventListener("click", () => {
   const elH1 = document.createElement("h1")
   elH1.setAttribute("style","position:absolute;")
   elH1.innerHTML = inputH1.value
   elH1.style.color = `rgb(${r},${g},${b})`
   elH1.style.left = pX + "px"
   divElem.appendChild(elH1)
  
  dirH1.addEventListener("click",() => {
   pX += 10
   elH1.style.left = pX + "px"
 })
 
  esqH1.addEventListener("click",() => {
   pX -= 10
   elH1.style.left = pX + "px"
 })
 
  cimaH1.addEventListener("click",() => {
   pY -= 10
   elH1.style.top = pY + "px"
 })

  baixoH1.addEventListener("click",() => {
   pY += 10
   elH1.style.top = pY + "px"
 })
})
crP.addEventListener("click", () => {
   const elP = document.createElement("p")
   elP.setAttribute("style","position:absolute;")
   elP.innerHTML = inputP.value
   elP.style.color = `rgb(${r},${g},${b})`
   elP.style.left = pX + "px"
   divElem.appendChild(elP)
  
  dirP.addEventListener("click",() => {
   pX += 10
   elP.style.left = pX + "px"
 })
 
  esqP.addEventListener("click",() => {
   pX -= 10
   elP.style.left = pX + "px"
 })
 
  cimaP.addEventListener("click",() => {
   pY -= 10
   elP.style.top = pY + "px"
 })

  baixoP.addEventListener("click",() => {
   pY += 10
   elP.style.top = pY + "px"
 })
})
crLi.addEventListener("click", () => {
   const elLi = document.createElement("li")
   elLi.setAttribute("style","position:absolute;")
   elLi.innerHTML = inputLi.value
   elLi.style.color = `rgb(${r},${g},${b})`
   elLi.style.left = pX + "px"
   divElem.appendChild(elLi)
  
  dirLi.addEventListener("click",() => {
   pX += 10
   elLi.style.left = pX + "px"
 })
 
  esqLi.addEventListener("click",() => {
   pX -= 10
   elLi.style.left = pX + "px"
 })
 
  cimaLi.addEventListener("click",() => {
   pY -= 10
   elLi.style.top = pY + "px"
 })

  baixoLi.addEventListener("click",() => {
   pY += 10
   elLi.style.top = pY + "px"
 })
})
crUl.addEventListener("click", () => {
   const elUl = document.createElement("ul")
   elUl.setAttribute("style","position:absolute;")
   elUl.innerHTML = inputUl.value
   elUl.style.color = `rgb(${r},${g},${b})`
   elUl.style.left = pX + "px"
   divElem.appendChild(elUl)
  
  dirUl.addEventListener("click",() => {
   pX += 10
   elUl.style.left = pX + "px"
 })
 
  esqUl.addEventListener("click",() => {
   pX -= 10
   elUl.style.left = pX + "px"
 })
 
  cimaUl.addEventListener("click",() => {
   pY -= 10
   elUl.style.top = pY + "px"
 })

  baixoUl.addEventListener("click",() => {
   pY += 10
   elUl.style.top = pY + "px"
 })
})
crNav.addEventListener("click", () => {
   const elNav = document.createElement("nav")
   elNav.setAttribute("style","position:absolute;")
   elNav.innerHTML = inputNav.value
   elNav.style.left = pX + "px"
   elNav.style.color = `rgb(${r},${g},${b})`
   divElem.appendChild(elNav)
  
  dirNav.addEventListener("click",() => {
   pX += 10
   elNav.style.left = pX + "px"
 })
 
  esqNav.addEventListener("click",() => {
   pX -= 10
   elNav.style.left = pX + "px"
 })
 
  cimaNav.addEventListener("click",() => {
   pY -= 10
   elNav.style.top = pY + "px"
 })

  baixoNav.addEventListener("click",() => {
   pY += 10
   elNav.style.top = pY + "px"
 })
})