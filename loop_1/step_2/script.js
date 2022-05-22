const tabs = {
    positive: 'tab1',
    negative: 'tab2',
    neutral: 'tab3'
}

const indexTabs = {
    '1': 'positive',
    '2': 'negative',
    '3': 'neutral'
}

const tabDivs = document.querySelectorAll('.tab');

function changeTab(value) {
    [...tabDivs].map( tabDiv => {
        tabDiv.style.display = 'none';
    })
    const activetab  = document.getElementById(tabs[value])
    activetab.style.display = 'block';
}

function changeTabByNum(value) {

}

changeTab('positive')

for(let i in tabs) {
    document.getElementById(i).addEventListener('change', () => {
        changeTab(i)
    })
}

const tabIndex = document.getElementById('index');
const indexButton = document.getElementById('changeTab');

indexButton.addEventListener('click', (e) => {
    e.preventDefault();
    let reqTab = tabIndex.value;
    switch(reqTab) {
        case "1":
            changeTab(indexTabs[1]);
            document.getElementById('positive').checked = true;
            break;
        case "2":
            changeTab(indexTabs[2]);
            document.getElementById('negative').checked = true;
            break;
        case "3":
            changeTab(indexTabs[3]);
            document.getElementById('neutral').checked = true;
            break;
        default:
            alert('Invalid Index Number');
    }
})