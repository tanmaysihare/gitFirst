var obj={
    'name':'Luffy'
};

var obj1={
    'name':'zoro'
};
var obj2={
    'name':'sanji'
};
var student={
    'age':'20'
};
var fullname = function(e){
    return e+this.name;
};
var printAge = function(e){
    return e+this.age;
};

var arr=['world best swordsman rononoa '];
console.log(fullname.call(obj,'Monkey D '));
console.log(fullname.apply(obj1,arr));
var sanji= fullname.bind(obj2);
console.log(sanji('world best cook Vinsmoke '));
var stuAge=printAge.bind(student);
console.log(stuAge('your age is '));