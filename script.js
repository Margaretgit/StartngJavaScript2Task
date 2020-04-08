// this is the test data

let data = [{Principal: 2500, time: 1.8}, {Principal: 1000, time: 5}, {Principal: 3000, time: 1}, {Principal: 2000, time: 3}]

    //Create function here

const interestCalculator = testArr => {
    //determine the rate
    let i = 0;
    for (i; i < testArr.length; i++) {
        if (testArr[i].Principal >= 2500 && testArr[i].time > 1 && testArr[i].time < 3) {
            testArr[i].rate = 3;
        }else if (testArr[i].Principal < 2500 && testArr[i].time >= 3) {
            testArr[i].rate = 4;
        }else if (testArr[i].Principal < 2500 || testArr[i].time <= 1) {
            testArr[i].rate = 2;
        } else {
            testArr[i].rate = 1;
        }
        
         }

        // the function is then called here and returned

    let interestData =  interestIndividualObj(testArr)

    console.log(interestData)

    return interestData

    }

    // this function calculates for the individual interest of the object
    const interestIndividualObj = arryProp => {
        let i = 0;
        for(i; i < arryProp.length; i++) {
            arryProp[i].interest = (arryProp[i].Principal *arryProp[i].rate * arryProp[i].time) / 100 
        }

        return arryProp
    }

interestCalculator(data);