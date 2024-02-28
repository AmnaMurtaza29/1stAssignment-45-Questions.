// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface programmer {
    qualification : string,
    Projects : number,
    work : string,
    expertise : string
}


let programmer :programmer = {
    qualification : 'Artificial Intelligence',
    Projects : 50,
    work : 'Work from Home',
    expertise: 'Python'
}

console.log(programmer);
