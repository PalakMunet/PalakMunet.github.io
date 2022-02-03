
    async function apicall() {
    let res = await fetch("https://sf-appflow-demo-kss.s3.ap-south-1.amazonaws.com/cdc-s3-demo/2022/84087e70c9e8a53c5498af2cccb8cb46-0061FB6186062702C2-2022-02-03T05%3A00%3A59s3://sf-appflow-demo-kss/cdc-s3-demo/2022/84087e70c9e8a53c5498af2cccb8cb46-0061FB6186062702C2-2022-02-03T05:00:59")
    // let res = await fetch("./placeInfo/places.json")
    let data = await res.json()
    console.log(data)
    // let count = 0


    var i = 0
    for (i = 0; i < data.length; i++) {
        if (i == 0 || i % 4 == 0) {
            console.log('hi')
            var rowDiv = document.createElement('div')
        }
        teamMember = data[i]
        console.log(teamMember)
        buildMemberCard(teamMember, rowDiv)
    }
    // data.forEach(teamMember => buildMemberCard(teamMember, count))
    }
async function pushTopicCall() {
    //  let res = await fetch("http://integration-team.us-e2.cloudhub.io/api/getData")
    let res = await fetch("./placeInfo/places2.json")
    let data = await res.json()
    console.log(data)
    var rowDiv = document.createElement('div')
    buildMemberCard(data, rowDiv)

}


function buildMemberCard(teamMember, rowDiv) {

    // if (count % 3 == 0 || count == 0) {
    //     const rowDiv = document.createElement('div')
    //     count = 0
    // }
    // const rowDiv = document.createElement('div')
    const colDiv = document.createElement('div')
    const cardDiv = document.createElement('div')
    const containerDiv = document.createElement('div')
    const img = document.createElement('img')
    const member = document.createElement('h3')
    const email = document.createElement('p')
    const years = document.createElement('p')
    const quirks = document.createElement('p')
    const more = document.createElement('button')
    const p = document.createElement('p')
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
    // containerDiv.append(quirks)
    containerDiv.append(p)
    p.append(more)
    containerDiv.append(currentProjects)
    containerDiv.append(skills)
    containerDiv.append(certifications)
    member.innerHTML = teamMember.Place__c
    // email.innerHTML = teamMember.Time__c
    // years.innerHTML = "Years at MTX : " + teamMember.years
    more.innerHTML = "More Info"
    currentProjects.innerHTML = "Average Price : " + teamMember.Average_Price__c
    // quirks.innerHTML = "Things To Do : " + teamMember.Experience__c 
    certifications.innerHTML = "Best Time To Visit : " + teamMember.Time__c
    skills.innerHTML = "Things To Do : " + teamMember.Experience__c
    rowDiv.setAttribute('class', 'row')
    colDiv.setAttribute('class', 'column')
    cardDiv.setAttribute('class', 'card')
    containerDiv.setAttribute('class', 'container')
    more.setAttribute('class', 'button')
    more.setAttribute('onClick', 'toggleInfo()')
    img.setAttribute('src', 'src/images/' + teamMember.display_image__c + '.jpeg')
    img.setAttribute('style', 'width:100%')
    currentProjects.setAttribute('class', 'moreInfo')
    certifications.setAttribute('class', 'moreInfo')
    skills.setAttribute('class', 'moreInfo')

}



function toggleInfo() {
    var infos = document.getElementsByClassName("moreInfo");
    console.log(infos)

    Array.from(infos).forEach(function (element) {
        console.log(element)
        element.classList.remove("moreInfo");
    });

}


