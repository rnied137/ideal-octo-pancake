---
layout: ../../layouts/MainLayout.astro
---

# Rust - przypomnienie


```ts 
const zmienna tworzy stale, let zmienne

W rust dla typow referencyjnych w przypadku borrow checking mozna uzyc
metody .clone() wtedy typ referencyjny jest brany jako wartosc, nie referencja.

typ zwracany w funkcji -> String
fn nazwa (x: String) -> String {}

&referencja
& mut String -> mutowalna referencja

Na koncu funkcji mozna zwrocic element bez slowka return. np.
fn zwroc_x()->u32{
let c = 12;
x
}


let mut heroes: HashMap<&str, &str> = HashMap::new();
heroes.insert(k:"Ala", v: "Tola");

for (k: &&str, v: &&str) in heroes.iter(){
println!({}, k)};

----

struct Customer {
name: String,
address: String,
balance: f32,
}

let mut bob: Customer = Customer {
name: String::from("Bob"),
balance: 234.11
};

bob.address = String::from("asdas");

struct Rectangle<T, U>{
length: T,
width: U
}

let rec: Rectangle = new Rectangle<i32, i32> {
length: 10.3, width: 41.3
};

Traits:
taki trait moze byc uzyty przez struct ktory impl trait
trait Shape {
fn new(length: f32, width: f32) -> Self; --<<to jest jak interfejs
fn area(&self) -> f32;
}


struct Rectangle {
length: T,
width: U
}

struct Circle {
length: T,
width: U
}

impl Shape for Rectangle {
fn new(length: f32, width: f32) -> Rectangle {
return Rectangle{length, width};

fn area(&self) -> f32 {
return self.length * self.width:
}
}

impl Shape for Circle {
fn new(length: f32, width: f32) -> Rectangle {
return Circle{length, width};

fn area(&self) -> f32 {
return self.length * self.width * 2pir:
}
}
}

let rec: Rectangle = Shape::new(length: 10, width: 5);


pub fn to publiczna funkcja


Liczby w rust dziela sie na 3 kategorie (i - int, u - insigned, f - float), moga byc 8-128 bitowe ale floaty sa tylko f32 i f64


Iterators.

An iterator is an arbitrary-length stream of items
They have an enumerate method which returns a tuple (i, val) for each value
They have a filter method which uses a closure to determine whether to yield an element of the iterator
They have a map method which uses a closure to modify elements of the iterator
```