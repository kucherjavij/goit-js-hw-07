const mainList = document.querySelector("ul")
const categoriesEL = mainList.querySelectorAll(".item")
console.log(categoriesEL.length)


categoriesEL.forEach((eL) => {
    console.log("Категория:", eL.getElementsByTagName("h2")[0].textContent)
    console.log("Количество элементов:", eL.querySelectorAll("li").length)
})