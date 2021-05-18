const rowDiv = document.createElement('div')
const colDiv = document.createElement('div')
const cardDiv = document.createElement('div')
const containerDiv = document.createElement('div')
const img = document.createElement('img')
const member = document.createElement('h2')
const email = document.createElement('p')
const years = document.createElement('p')
const quirks = document.createElement('p')
const more = document.createElement('button')
const currentProjects = document.createElement('p')
const certifications = document.createElement('p')
const skills = document.createElement('p')
const body = document.querySelector('body');
body.append(rowDiv)
rowDiv.append(colDiv)
colDiv.append(cardDiv)
cardDiv.append(img)
cardDiv.append(containerDiv)
containerDiv.append(member)
containerDiv.append(email)
containerDiv.append(years)
containerDiv.append(quirks)
containerDiv.append(more)
containerDiv.append(currentProjects)
containerDiv.append(skills)
containerDiv.append(certifications)
member.innerHTML = "Dhruv Bhatia"
email.innerHTML = "dhruv.bhatia@mtxb2b.com"
years.innerHTML = "Years at MTX : " + "2"
quirks.innerHTML = "\"Perfecttt.. Anything Else?? ..\" [in loop]"
more.innerHTML = "More Info"
currentProjects.innerHTML = "NYC, NC, NM, Chicago"
certifications.innerHTML = "MCD, MCPA, MCIA, PD1"
skills.innerHTML = "Mulesoft | Salesforce | Dell Boomi | Einstein Analytics"
rowDiv.setAttribute('class', 'row')
colDiv.setAttribute('class', 'column')
cardDiv.setAttribute('class', 'card')
containerDiv.setAttribute('class', 'contianer')
img.setAttribute('src', 'https://mtx--c.na152.content.force.com/profilephoto/7292L000000HN41/F')
img.setAttribute('style', 'width:100%')

function apicall() {
    fetch("http://localhost:8081/api/getData",{
            mode: 'no-cors',
    })
}
