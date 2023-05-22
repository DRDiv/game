var l = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
var count = 0;
var mode = false;
function createNewElement(source) {
    var element = document.createElement('img');
    element.src = source;
    element.style.height = '10vw';
    return element;
}
var list = [0, 1, 2, 3, 4, 5, 6, 7, 8]
function check() {
    bool = false
    m = -1
    if (!(l[0].includes(0) || l[1].includes(0) || (l[2].includes(0)))) {
        bool = true
        var p = []



    }
    if (l[0][0] == l[0][1] && l[0][1] == l[0][2] && l[0][0] != 0) {
        bool = true
        m = l[0][0]
        var p = ['r11', 'r12', 'r13']

    }
    if (l[1][0] == l[1][1] && l[1][1] == l[1][2] && l[1][0] != 0) {
        bool = true
        m = l[1][0]
        var p = ['r21', 'r22', 'r23']
    }
    if (l[2][0] == l[2][1] && l[2][1] == l[2][2] && l[2][0] != 0) {
        bool = true
        m = l[2][0]
        var p = ['r31', 'r32', 'r33']
    }
    if (l[0][0] == l[1][0] && l[1][0] == l[2][0] && l[0][0] != 0) {
        bool = true
        m = l[0][0]
        var p = ['r11', 'r21', 'r31']
    }
    if (l[0][1] == l[1][1] && l[1][1] == l[2][1] && l[1][1] != 0) {
        bool = true
        m = l[0][1]
        var p = ['r12', 'r22', 'r32']
    }
    if (l[0][2] == l[1][2] && l[1][2] == l[2][2] && l[0][2] != 0) {
        bool = true
        m = l[0][0]
        var p = ['r13', 'r23', 'r33']
    }
    if (l[0][0] == l[1][1] && l[1][1] == l[2][2] && l[0][0] != 0) {
        bool = true
        m = l[0][0]
        var p = ['r11', 'r22', 'r33']

    }
    if (l[2][0] == l[1][1] && l[1][1] == l[0][2] && l[2][0] != 0) {
        bool = true
        m = l[2][0]
        var p = ['r31', 'r22', 'r13']

    }

    if (bool) {
        console.log(p)
        if (p.length == 0) { alert("DRAW")
         location.reload()}
        else {
            p.forEach(function (element) { document.getElementById(element).children[0].src = (m == 1) ? "redcross.png" : "redzero.png" })
            setTimeout(() => {
                s = m == 1 ? 'P1 WIN' : 'P2 WIN';
                alert(s)
                location.reload()
            }, 100)
        }
        



    }
}
function getRandomInt(min, max) {

    return Math.floor(Math.random() * (max - min) + min);
}
function computermove() {

    const indslice = getRandomInt(0, list.length);
    const ind = list[indslice];
    list.splice(indslice, 1);
    var element = createNewElement('zero.png');

    var cell;
    console.log(l)
    console.log(list)
    if (ind < 3) {
        cell = 'r1' + (ind + 1);
        l[0][ind] = 2;
    } else if (ind < 6) {
        cell = 'r2' + (ind - 2);
        l[1][ind - 3] = 2;
    } else if (ind < 9) {
        cell = 'r3' + (ind - 5);
        l[2][ind - 6] = 2;
    }
    console.log(l)
    console.log(list)
    document.getElementById(cell).appendChild(element);
   

}
function handleClick(cell) {



    if (mode) {
        if (l[parseInt(cell.id[1]) - 1][parseInt(cell.id[2]) - 1] == 0) {
            var element = createNewElement('cross.png');
            var int1 = parseInt(cell.id[1]) - 1
            var int2 = parseInt(cell.id[2]) - 1

            l[int1][int2] = 1;
            list.splice(list.indexOf(int1 * 3 + int2), 1);
            console.log(l)
            console.log(list)

            cell.appendChild(element);
            count++;
        }
        
        setTimeout(computermove, 500)
        setTimeout(check,500)
    }
    else {
        if (l[parseInt(cell.id[1]) - 1][parseInt(cell.id[2]) - 1] == 0) {
            var element = count % 2 === 0 ? createNewElement('cross.png') : createNewElement('zero.png');
            l[parseInt(cell.id[1]) - 1][parseInt(cell.id[2]) - 1] = count % 2 == 0 ? 1 : 2;
            cell.appendChild(element);
            count++;
        }
        setTimeout(check, 5);
    }


}


function computer() {
   mode=true

    const tds = document.querySelectorAll('td');
    count = 0
    l = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    tds.forEach((td) => {
        while (td.firstChild) {
            td.removeChild(td.firstChild);
        }
    });

    var cells = document.querySelectorAll('td');
    cells.forEach(function (cell) {
        cell.addEventListener('click', () => setTimeout(handleClick(cell)), 500);
    });
}
function player2() {
  
    count = 0
    l = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    const tds = document.querySelectorAll('td');
    tds.forEach((td) => {
        while (td.firstChild) {
            td.removeChild(td.firstChild);
        }
    });




    var cells = document.querySelectorAll('td');
    cells.forEach(function (cell) {
        cell.addEventListener('click', () => handleClick(cell));
    });
}
document.getElementById('players').addEventListener('click', player2)
document.getElementById('computer').addEventListener('click', computer)
