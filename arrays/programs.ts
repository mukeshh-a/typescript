//find max and min element from given

// using predefined method
function min_max() {
    var ar:number[] = [10, 3, 99, 1, 45, 60, 75];

    var min = Math.min(...ar);
    var max = Math.max(...ar);

    console.log(`the minimum value is: ${min}`);
    console.log(`the maximum value is: ${max}`);
}

min_max()

// using for loop
function min_max_using_loop() {
    var ar: number[] = [10, 3, 99, 1, 45, 60, 75];

    var min = ar[0];
    var max = ar[0];

    for (var i = 1; i < ar.length; i++) {
        if (ar[i] > max) {
            max = ar[i];
        }

        if (ar[i] < min) {
            min = ar[i];
        }
    }

    console.log(`The minimum value is: ${min}`);
    console.log(`The maximum value is: ${max}`);
}

min_max_using_loop();


// reverse array : need to solve using reverse


// remove duplicate elements from an array

// find second largest number from an array

// sort an array

// rotate the array (left and right)

// merge two arrays

// count even and odd numbers from given array 

// multiplication of two arrays of similar length


// count occurance of a number in an array
