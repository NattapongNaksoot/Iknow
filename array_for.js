let fruits = ["Apple", "Banana", "Orange", "Grape", "Lemon"];
console.log("List of fruits");

for (let i = 0; i < fruits.length; i++) {
    console.log("%d. %s", i + 1, fruits[i]);
}

let languages = ["GO", "JavaScript", "PHP", "Python", "Ruby"];
console.log("List of programming languages (reversed)");

let count = 1;
for (let i = languages.length - 1; i >= 0; i--) {
    console.log("%d. %s", count, languages[i]);
    count++;
}

/*ผลลัพธ์ 
List of fruits
1. Apple
2. Banana
3. Orange
4. Grape
5. Lemon
List of programming languages (reversed)
1. Ruby
2. Python
3. PHP
4. JavaScript
5. GO
*/