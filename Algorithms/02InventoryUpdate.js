//Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

function updateInventory(arr1, arr2) {
    for(var item1 in arr1){
        for(var item2 in arr2){
            if(arr1[item1][1] == arr2[item2][1])
                arr1[item1][0] += arr2[item2][0];
        }
    }
    for(var item in arr2){
        let key = arr2[item][1];
        let flag = false;
        for(var j in arr1){
            let key2 = arr1[j][1];
            if(key==key2)
                flag = true;
        }
        if(flag==true)
            continue;
        else
            arr1.push(arr2[item]);
    }
    console.log(arr1);
    arr1.sort(function(currItem, nextItem) {
        return currItem[1] > nextItem[1] ? 1 : -1;
    });
    return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
