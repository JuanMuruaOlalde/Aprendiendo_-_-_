# Rust


## Documentación por la que comenzar a aprender

### Basic concepts

Two books are key:

- [The Rust Lang Book - The Rust Programming Language](https://doc.rust-lang.org/book/index.html)

- [The Cargo Book - The Rust Package Manager](https://doc.rust-lang.org/cargo/index.html)

It is very paintful to try any work without mastering these three main concepts:

- [Understanding Ownership - The Rust Programming Language](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html)

- [The `Option` Enum and Its Advantages Over Null Values](https://doc.rust-lang.org/book/ch06-01-defining-an-enum.html?highlight=Option#the-option-enum-and-its-advantages-over-null-values)

- [The `Result` Enum and Error Handling in Rust](https://doc.rust-lang.org/book/ch09-00-error-handling.html)

As in any other language, it is very difficult to do anything serious without using libraries:

- [Rust Crate List - Blessed.rs - an unofficial guide to the Rust ecosystem](https://blessed.rs/crates)

- [Rust Crate List - Docs.rs - the official guide to the Rust ecosystem](https://docs.rs/)

- [Rust std library](https://doc.rust-lang.org/std/)


#### Ownership

Ownership es se refiere al concepto de qué variable o parámetro es la "dueña" (owner) en cada momento de cada porción de memoria que utiliza el programa. 

En Rust, ¡es vital comprenderlo bien!. 

Cada porción de memoria solo puede tener una única "dueña". Por ejemplo, cuando asignamos una variable a otra o cuando pasamos una variable como parámetro a una función, la variable original ya no puede acceder a la porción de memoria a la que sí pasa a poder acceder la nueva variable/parámetro.

El compilador se encarga de que sea imposible saltarse este mecanismo. Es la esencia por la que se considera Rust un lenguaje "memory safe". Cada porción de memoria se reserva cuando su primera "dueña" se crea; puede ir pasando de una a otra "dueña", pero en todo momento tiene una única "dueña" a lo largo de todo el programa; y se libera automáticamente cuando la última "dueña" conocida deja de existir.

Este mecanismo es uno de los principales responsables de que Rust tenga fama de ser un lenguaje complicado de aprender. Pero una vez se domina el concepto de `Ownership` (y el de `Lifetime`), se avanza rápidamente en el aprendizaje.

Un consejo: siempre, pero sobre todo en los primeros programas que escribamos, procurar leer atentamente (y de cabo a rabo) los mensajes de error que nos dé el compilador. El compilador (y el linter) de Rust son especialmente buenos en las explicaciones que dan; llegando en muchos casos hasta a proponer cómo solucionar el error que nos están reportando.

[Understanding Ownership - The Rust Programming Language](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html)

```
    let s1 = String::from("hello");
    let s2 = s1;

    println!("{s1}, world!");
```

```
$ cargo run
   Compiling ownership v0.1.0 (file:///projects/pruebas)
error[E0382]: borrow of moved value: `s1`
 --> src/main.rs:5:15
  |
2 |     let s1 = String::from("hello");
  |         -- move occurs because `s1` has type `String`, which does not implement the `Copy` trait
3 |     let s2 = s1;
  |              -- value moved here
4 |
5 |     println!("{s1}, world!");
  |               ^^^^ value borrowed here after move
  |
  = note: this error originates in the macro `$crate::format_args_nl` which comes from the expansion of the macro `println` (in Nightly builds, run with -Z macro-backtrace for more info)
help: consider cloning the value if the performance cost is acceptable
  |
3 |     let s2 = s1.clone();
  |                ++++++++

For more information about this error, try `rustc --explain E0382`.
error: could not compile `pruebas` (bin "pruebas") due to 1 previous error
```

[Ownership and Functions](https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html#ownership-and-functions)

[References and Borrowing](https://doc.rust-lang.org/book/ch04-02-references-and-borrowing.html)

[Understanding Ownership - Brown University](https://rust-book.cs.brown.edu/ch04-00-understanding-ownership.html)

[Rust Does Not Permit Manual Memory Management](https://rust-book.cs.brown.edu/ch04-01-what-is-ownership.html#rust-does-not-permit-manual-memory-management)

[References and Borrowing](https://rust-book.cs.brown.edu/ch04-02-references-and-borrowing.html)

[RustOwl, a new tool for visualizing Rust lifetimes - Let's Get Rusty - Youtube](https://youtu.be/NV6Xo_el_2o)

[RustOwl tool - Github](https://github.com/cordx56/rustowl)

nota: Hay más información más adelante en este documento, en las secciones de "Ownership, Borrow-checker" y de "Lifetimes"

#### struct

[Using Structs to Structure Related Data - The Rust Programming Language](https://doc.rust-lang.org/book/ch05-00-structs.html)

En cierta medida, los `struct` de Rust son como las clases en otros lenguajes. Pueden tener tanto propiedades (datos) como métodos (acciones).

Pero no perder de vista que Rust no es un lenguaje orientado a objeto. Sino más bien un lenguaje funcional.

#### trait

[Traits: Defining Shared Behavior - The Rust Programming Language](https://doc.rust-lang.org/book/ch10-02-traits.html)

En cierta medida, los `trait` de Rust con como los interfaces en otros lenguajes. Definen signaturas de funciones que han de implementar obligatoriamente todos aquellos `struct` que implementen el `trait`. 

```
pub trait DatosDeHuespedes {
    fn get_huesped_con_id_interno(&self, id: uuid::Uuid) -> Result<Huesped, String>;
    fn get_huesped(&self, numero_documento_id: &str) -> Result<Huesped, String>;
}
```

```
pub struct HuespedesParaPruebas {
    datos: Vec<Huesped>,
}

impl DatosDeHuespedes for HuespedesParaPruebas {

    fn get_huesped_con_id_interno(&self, id: uuid::Uuid) -> Result<Huesped, String> {
       let huesped = self
            .datos
            .iter()
            .find(|x| x.get_id_interno() == id);
        match huesped {
            Some(h) => Ok(h.clone()),
            None => Err(format!(
                "No existe huesped con id_interno {id}"
            )),
        }
    }

    fn get_huesped(&self, numero_documento_id: &str) -> Result<Huesped, String> {
        let huesped = self
            .datos
            .iter()
            .find(|x| x.numero_documento_id == numero_documento_id);
        match huesped {
            Some(h) => Ok(h.clone()),
            None => Err(format!(
                "No existe huesped con documento_id {numero_documento_id}"
            )),
        }
    }
    
}
```

```
pub struct HuespedesEnPostgreSQL {
    ../..
}

impl DatosDeHuespedes for HuespedesEnPostgreSQL {

    fn get_huesped_con_id_interno(&self, id: uuid::Uuid) -> Result<Huesped, String> {
        ../..
    }

    fn get_huesped(&self, numero_documento_id: &str) -> Result<Huesped, String> {
        ../..
    }
    
}
```

De esa forma, se puedan utilizar de forma intercambiable. Ayudando a cumplir con la L, la I y la D de los principios SOLID.
 


### Hands-on learning

If you want to start practicing without installing anything, you can try Rust online with (https://play.rust-lang.org/). 

If you want to start serious, install `rustup` (https://doc.rust-lang.org/book/ch01-01-installation.html) and use `cargo` (https://doc.rust-lang.org/cargo/getting-started/first-steps.html). If you are using [Visual Studio Code](https://code.visualstudio.com/download) as IDE, you can use it with the [Rust.analyzer extension](https://rust-analyzer.github.io)

Some resources and tutorials:

[Working the Rust Lang Book](https://www.youtube.com/playlist?list=PLai5B987bZ9CoVR-QEIN9foz4QCJ0H2Y8) - Let's Get Rusty - YouTube

[Rust by Practice](https://practice.course.rs/)

[Rust By Example](https://doc.rust-lang.org/rust-by-example/index.html)

[Rust Cookbook](https://rust-lang-nursery.github.io/rust-cookbook/intro.html)

[GitHub - mre-idiomatic-rust - 🦀 ](https://github.com/mre/idiomatic-rust)
A peer-reviewed collection of articles-talks-repos which teach concise, idiomatic Rust.

[GitHub - rust-lang-rustlings- 🦀 ](https://github.com/rust-lang/rustlings)Small exercises to get you used to reading and writing Rust code!

[Rust for Rustaceans by Jon Gjengset](https://rust-for-rustaceans.com/)

[A half-hour to learn Rust](https://fasterthanli.me/articles/a-half-hour-to-learn-rust)

[Getting started with Rust. A brief Introduction to the language - YouTube](https://www.youtube.com/watch?v=4q3Z5RBX7hQ)

[Learn Rust Programming - Complete Course 🦀 - freeCodeCamp - YouTube](https://www.youtube.com/watch?v=BpPEoZW5IiY)

[100 Exercises To Learn Rust](https://rust-exercises.com/100-exercises/)

[google-comprehensive-rust-](https://github.com/google/comprehensive-rust) This is the Rust course used by the Android team at Google. The course covers all aspects of Rust, from basic syntax to generics and error handling. It also includes deep dives on Android, Chromium, bare-metal, and concurrency. [Syllabus](https://google.github.io/comprehensive-rust/)

[Practical Rust Web Development](https://dev.to/werner/practical-rust-web-development-api-rest-29g1)


### some additional books and practical resources

[Rust Crash Course - Tutorial for Beginners](https://www.youtube.com/playlist?list=PLPoSdR46FgI412aItyJhj2bF66cudB6Qs)

[Let's Get Rusty - Youtube channel](https://www.youtube.com/@letsgetrusty)

[The Dev Method - Youtube channel](https://www.youtube.com/@TheDevMethod)

[Clippy - The Rust Linter](https://doc.rust-lang.org/clippy/)

[rustfmt - A tool for formatting Rust code according to style guidelines](https://github.com/rust-lang/rustfmt)

[The Rust Style Guide book](https://doc.rust-lang.org/stable/style-guide/)

[The rustup book](https://rust-lang.github.io/rustup/index.html)

[The rustc book](https://doc.rust-lang.org/nightly/rustc/what-is-rustc.html)

[Rust Editions](https://doc.rust-lang.org/nightly/edition-guide/editions/index.html)

[Rust Design Patterns](https://rust-unofficial.github.io/patterns/intro.html)

[Rust API Guidelines](https://rust-lang.github.io/api-guidelines/about.html)

[Cargo Workspaces](https://doc.rust-lang.org/book/ch14-03-cargo-workspaces.html)

[Rust: Managing a Growing Project](https://www.youtube.com/watch?v=JIvi-g5K8gk)

[Rust 🦀 and WebAssembly 🕸](https://rustwasm.github.io/docs/book/introduction.html)


### Some additional material to read/view

[Rust Is Easy - just read the compiler error messages  ;-) - YouTube](https://www.youtube.com/watch?v=CJtvnepMVAU)

[Getting familiar with Rust's syntax - YouTube](https://www.youtube.com/watch?v=AuzoABH7fRA)

[Simple error handling in Rust - YouTube](https://www.youtube.com/watch?v=g6WUHcyjsfc)

[The magic of Rust's type system - Youtube](https://www.youtube.com/watch?v=NDIU1GSBrVI)

[Learning Rust: Memory, Ownership and Borrowing - Youtube](https://www.youtube.com/watch?v=8M0QfLUDaaA)

[Rust Design Patterns](https://rust-unofficial.github.io/patterns/intro.html)

[Why Rust?](https://rerun.io/blog/why-rust)

[Rust stole C++'s best features - YouTube](https://www.youtube.com/watch?v=sjsnuirLyKM)

[pretzelhammer-rust-blog - Github](https://github.com/pretzelhammer/rust-blog/blob/master/posts/tour-of-rusts-standard-library-traits.md)

[5 traits your Rust types must implement](https://www.youtube.com/watch?v=Nzclc6MswaI)

[The genius of Rust constructors - Youtube](https://www.youtube.com/watch?v=6mVkva3_z9M)

[The size of your variables matters - Youtube](https://www.youtube.com/watch?v=hwyRnHA54lI)

[8 deadly mistakes beginner Rust developers make - YouTube](https://www.youtube.com/watch?v=PbR4ECFIckg)

[Top 5 deadly Rust anti-patterns to avoid - YouTube](https://www.youtube.com/watch?v=SWwTD2neodE)

[Common Newbie Mistakes and Bad Practices in Rust](https://adventures.michaelfbryan.com/posts/rust-best-practices/bad-habits/)


## Ownership , Borrow-checker

[Understanding Ownership](https://doc.rust-lang.org/book/ch04-00-understanding-ownership.html)

[Ownership - examples](https://doc.rust-lang.org/rust-by-example/scope/move.html)

[Borrowing - examples](https://doc.rust-lang.org/rust-by-example/scope/borrow.html)

En Rust, todo trozo de memoria es propiedad de una sola variable (una variable es simplemente el nombre con el que se accede a ese trozo). Un trozo de memoria es liberado cuando su variable propietaria deja de existir (queda fuera de alcance -scope-).

Se puede traspasar la propiedad -ownership-, asignando el valor a otra variable o pasándolo como parámetro a una función. Pero, ¡ojo!, al contrario que en otros lenguajes, la variable propietaria original pierde la propiedad y esta pasa a la variable o al parámetro destinatario. (Recordar que solo puede haber una única propietaria por cada trozo de memoria.)

También se puede prestar -borrow- la propiedad, incluso a varias variables, haciendo que esas otras variables tengan una referencia de solo lectura (&). Pero, en ese caso, ninguna de esas variables podrá actualizar el valor, ni tener una vida (lifetime) más larga que la variable propietaria.

nota colateral: Rust intenta potenciar el uso de variables inmutables (paradigma funcional). Si se desea poder cambiar el valor de un trozo de memoria, es necesario indicarlo expresamente con `mut` al asignar, traspasar o prestar su propiedad.


### Move semantics

Este es quizá el aspecto que más sorprende a quienes se acercan a Rust por primera vez desde otros lenguajes. Cuando una variable se asigna a otra o se pasa como parámetro a una función, se mueve la propiedad de ese trozo de memoria a esa otra variable o a ese parámetro. La variable original pierde el derecho de usar el trozo de memoria al que hacia referencia. 

Es decir: solo puede existir un único puntero a cada trozo de memoria reservado.

Esto suele obligar a organizar el código de manera diferente a como podamos estar acostumbrados. Puede resultar algo frustrante al principio. Pero perseverando, intentando pensar otras posibilidades, leyendo atentamente los mensajes de error del compilador y siguiendo sus indicaciones, se suele acabar llegando a una estructura de código normalmente más clara y lógica de la que habíamos pensado en un primer momento.


nota: Ayuda mucho si previamente estamos acostumbrados al paradigma de programación funcional y su énfasis en trabajar hasta donde sea posible con funciones puras; funciones que hacen lo que tengan que hacer utilizando solo aquellos valores que se le pasan a través de sus parámetros y que devuelven los resultados que tengan que devolver; funciones sin "efectos colaterales" sobre nada externo a ellas.

nota: Ayuda mucho si previamente estamos acostumbrados al uso de tests unitarios y a trabajar con mentalidad TDD. Esa forma de trabajar suele conducir de manera natural hacia una separación clara de responsabilidades entre las distintas partes del código, reduciendo dependencias entre partes y potenciando flujos de datos claros entre unas partes y otras.

aviso: Aunque Rust tiene mecanismos para compartir la propiedad de un trozo de memoria (ya que hay algoritmos que lo suelen requerir, sobre todo en programación concurrente). Son mecanismos de los que conviene no abusar. Sobre todo al principio, cuando aún no estamos acostumbrados a la forma de programar de Rust y puede resultar tentador utilizarlos masivamente para poder seguir programando como estábamos acostumbrados a hacerlo en otros lenguajes. 


### algo de documentación

[Rust: Ownership and Borrowing - The Dev Method](https://www.youtube.com/watch?v=DFx1Eo6apkQ)

[Clone and Copy for Duplicating Values](https://doc.rust-lang.org/book/appendix-03-derivable-traits.html#clone-and-copy-for-duplicating-values)

[begginer mistakes, Clone() everywhere](https://youtu.be/SWwTD2neodE?t=270)

[Capturing References or Moving Ownership](https://doc.rust-lang.org/book/ch13-01-closures.html#capturing-references-or-moving-ownership)

[Using move Closures with Threads](https://doc.rust-lang.org/book/ch16-01-threads.html#using-move-closures-with-threads)

[`Rc<T>`, the Reference Counted Smart Pointer](https://doc.rust-lang.org/book/ch15-04-rc.html)

[Shared-State Concurrency](https://doc.rust-lang.org/book/ch16-03-shared-state.html)

[deadly mistakes beginner Rust developers make](https://youtu.be/PbR4ECFIckg?t=545)



## Strong typed

[Data Types](https://doc.rust-lang.org/book/ch03-02-data-types.html)

[Advanced Data Types](https://doc.rust-lang.org/book/ch20-03-advanced-types.html)

Rust es un lenguaje "fuertemente tipado". El compilador se encarga de revisar el uso de valores del tipo adecuado en todo momento.

Por ejemplo, en Rust no se pueden sumar un `i32` y un `f32`. Para hacerlo es necesario indicar expresamente cuál se convierte de un tipo a otro, para saber con claridad cuál será el tipo resultante que se desea.

```
## esta suma:

    let resultado = 5 + 2.3;
    
## produce:

error[E0277]: cannot add a float to an integer
  --> src/main.rs:14:23
   |
14 |     let resultado = 5 + 2.3;
   |                       ^ no implementation for `{integer} + {float}`
   |
   = help: the trait `Add<{float}>` is not implemented for `{integer}`
   = help: the following other types implement trait `Add<Rhs>`:
             <&'a f128 as Add<f128>>
             <&'a f16 as Add<f16>>
             <&'a f32 as Add<f32>>
             <&'a f64 as Add<f64>>
             <&'a i128 as Add<i128>>
             <&'a i16 as Add<i16>>
             <&'a i32 as Add<i32>>
             <&'a i64 as Add<i64>>
           and 56 others

For more information about this error, try `rustc --explain E0277`.
```

Por eso, o bien los tipos resultantes se han de poder inferir con claridad por los tipos participantes en la operación, o bien se han de realizar expresamente las conversiones que sean necesarias.

```
    let resultado = 5 + 2.3 as i32;

## o

    let resultado = 5 as f32 + 2.3;
    
## o

    let resultado = 5.0 + 2.3;
```

Parece una tonteria, pero los redondeos en la representación interna pueden tener consecuencias en según qué aplicaciones. 

https://people.eecs.berkeley.edu/~wkahan/Mindless.pdf

Rust nos obliga a pensar en cómo estamos utilizando los valores que manejamos. En las implicaciones que puede tener usar un tipo de representación u otro.

En el fondo, los ordenadores  lo reducen todo a valores digitales 0|1 y esas traducciones a binario o desde binario tienen su importancia en según qué ocasiones.

https://doc.rust-lang.org/book/ch04-03-slices.html?highlight=string#string-slices

https://doc.rust-lang.org/book/ch08-02-strings.html

https://doc.rust-lang.org/book/ch08-02-strings.html#bytes-and-scalar-values-and-grapheme-clusters-oh-my


### Un consejo: definir tipos específicos para (casi) todo

Lo que en Rust se conoce como 'Newtype Pattern' y similares.

[New Type Idiom](https://doc.rust-lang.org/rust-by-example/generics/new_types.html)

[Advanced Types](https://doc.rust-lang.org/book/ch20-03-advanced-types.html)

[NewType Pattern](https://rust-unofficial.github.io/patterns/patterns/behavioural/newtype.html)

Una vez acostumbrados al tipado fuerte del propio lenguaje. Podemos ir más allá y definir tipos específicos para nuestra aplicación, usando `struct`. 

Los tipos específicos tienen una doble ventaja: 
- Permiten referirse a cada cosa por su nombre 
- Evitan errores al pasar valores como parámetros. 

Por ejemplo: no es lo mismo 
```
    pub fn calcular_precio_del_helado(precio_base: f32, temperatura: f32) -> f32 {
        ((precio_base + temperatura * 0.02) * 100.0).round() / 100.0
    }
```
que
```
    pub struct Temperatura {
        pub cantidad: f32,
    }
    
    pub struct Dinero {
        pub cantidad: f32,
    }
    
    pub fn calcular_precio_del_helado(precio_base: Dinero, temperatura: Temperatura) -> Dinero {
        Dinero {
            cantidad: ((precio_base.cantidad + temperatura.cantidad * 0.02) * 100.0).round() / 100.0,
        }
    }
```

En el primer caso, podríamos confundirnos y pasar el valor de la temperatura como precio y el del precio como temperatura:
```
    println!("{}", calcular_precio_del_helado(75.0, 22.4));
    
    println!("{}", calcular_precio_del_helado(22.4, 75.0));

```


Pero en el segundo caso es mucho más difícil que eso suceda:
```
    println!(
        "{}",
        calcular_precio_del_helado(Dinero { cantidad: 75.0 }, Temperatura { cantidad: 22.4 })
            .cantidad
    );

    println!(
        "{}",
        calcular_precio_del_helado(Dinero { cantidad: 22.4 }, Temperatura { cantidad: 75.0 })
            .cantidad
    );

```

Además, definir tipos específicos nos permite añadir más campos al `struct`, más concreción en el tipo. Como, por ejemplo, indicando la unidad de medida para cada cantidad.
```
pub struct Temperatura {
    pub cantidad: f32,
    pub unidad_de_medida: UnidadParaMedirTemperatura,
}
pub enum UnidadParaMedirTemperatura {
    Celsius,
    Farenheit,
}

pub struct Dinero {
    pub cantidad: f32,
    pub moneda: Moneda,
}
pub enum Moneda {
    EUR,
    USD,
    CAD,
    GPB,
    JPY,
    RUB,
    RMB,
}
```

Esto permite que el compilador nos ayude. Con errores como, por ejemplo:
```
error[E0063]: missing field `unidad_de_medida` in initializer of `Temperatura`
  --> src/main.rs:18:65
   |
18 |         calcular_precio_del_helado(&Dinero { cantidad: 75.0 }, &Temperatura { cantidad: 22.4 })
   |                                                                 ^^^^^^^^^^^ missing `unidad_de_medida`

For more information about this error, try `rustc --explain E0063`.
```

Estos errores evitan usar datos incompletos. En el ejemplo, el código no compilaría hasta indicar las unidades de medida:
```
    println!(
        "{}",
        calcular_precio_del_helado(
            &Dinero {
                cantidad: 75.0,
                moneda: Moneda::EUR
            },
            &Temperatura {
                cantidad: 22.4,
                unidad_de_medida: UnidadParaMedirTemperatura::Celsius
            }
        )
        .cantidad
    );
```

Otro ejemplo:
```
pub fn componer_saludo_formal(tratamiento: &str, apellido1: &str, apellido2: &str) -> String {
    String::from(format!(
        "Espero que tenga un buen dia, {tratamiento} {apellido1}, honorable descendiente de {apellido2}."))
}

pub fn componer_saludo_informal(
    saludo_favorito: &str,
    apodo_cariñoso: &str,
    nombre: &str,
) -> String {
    String::from(format!(
        "Mucha mierda, {saludo_favorito} {nombre} el {apodo_cariñoso}!."
    ))
}

..//..

    let persona = Nombre_de_persona {
        nombre: "Benzirpi".to_string(),
        apellido1: "Mirvento".to_string(),
        apellido2: "Liurvine".to_string(),
        tratamiento_formal: "Mr.".to_string(),
        saludo_favorito: "querido".to_string(),
        apodo_cariñoso: "griunquy".to_string(),
    };

    println!(
        "{}",
        componer_saludo_formal(
            &persona.tratamiento_formal,
            &persona.apellido1,
            &persona.apellido2
        )
    );
    println!(
        "{}",
        componer_saludo_informal(
            &persona.saludo_favorito,
            &persona.nombre,
            &persona.apodo_cariñoso
        )
    );

..//..
Espero que tenga un buen dia, Mr. Mirvento, honorable descendiente de Liurve.
Mucha mierda, querido qriunquy el Benzirpi!.
```

```
pub struct Nombre_de_persona {
    pub nombre: String,
    pub apellido1: String,
    pub apellido2: String,
    pub tratamiento_formal: String,
    pub saludo_favorito: String,
    pub apodo_cariñoso: String,
}

pub fn componer_saludo_formal(persona: &Nombre_de_persona) -> String {
    String::from(format!(
        "Espero que tenga un buen dia, {} {}, honorable descendiente de {}.",
        persona.tratamiento_formal, persona.apellido1, persona.apellido2
    ))
}

pub fn componer_saludo_informal(persona: &Nombre_de_persona) -> String {
    String::from(format!(
        "Mucha mierda, {} {} el {}!.",
        persona.saludo_favorito, persona.nombre, persona.apodo_cariñoso
    ))
}

..//..

    let persona = Nombre_de_persona {
        nombre: "Benzirpi".to_string(),
        apellido1: "Mirvento".to_string(),
        apellido2: "Liurvine".to_string(),
        tratamiento_formal: "Mr.".to_string(),
        saludo_favorito: "querido".to_string(),
        apodo_cariñoso: "griunquy".to_string(),
    };
    
    println!("{}", componer_saludo_formal(&persona));
    println!("{}", componer_saludo_informal(&persona));

..//..
Espero que tenga un buen dia, Mr. Mirvento, honorable descendiente de Liurvine.
Mucha mierda, querido Benzirpi el griunquy!.
```


### Structs

Como se ha comentado anteriormente, los `struct` permiten definir tipos específicos. Pero también pueden ir más allá e implementar métodos específicos para tratar con esos tipos específicos. Esta implementación de métodos se hace utilizando la palabra reservada `impl`.

Es decir, en el fondo los struct en Rust son como las clases en los lenguajes orientados a objeto.

Por ejemplo:
```
pub struct Ascensor {
    piso_en_el_que_estoy: i16,
}

impl Default for Ascensor {
    fn default() -> Self {
        Self {
            piso_en_el_que_estoy: 0,
        }
    }
}

impl Ascensor {
    pub fn get_piso_en_el_que_esta(&self) -> i16 {
        self.piso_en_el_que_estoy
    }
}


pub struct Edificio {
    piso_mas_bajo: i16,
    piso_mas_alto: i16,
    ascensores: HashMap<i8, Ascensor>,
}

impl Edificio {
    pub fn new(
        piso_mas_bajo: i16,
        piso_mas_alto: i16,
        ascensores: HashMap<i8, Ascensor>,
    ) -> Edificio {
        Edificio {
            piso_mas_bajo: piso_mas_bajo,
            piso_mas_alto: piso_mas_alto,
            ascensores: ascensores,
        }
    }

    pub fn get_piso_mas_bajo_y_piso_mas_alto(&self) -> (i16, i16) {
        (self.piso_mas_bajo, self.piso_mas_alto)
    }

    pub fn get_cuantos_ascensores_tiene(&self) -> usize {
        self.ascensores.len()
    }

    pub fn get_iter_for_ascensores(&self) -> std::collections::hash_map::Iter<'_, i8, Ascensor> {
        self.ascensores.iter()
    }

    pub fn pulsar_llamada_del_piso(&mut self, piso: i16) -> Result<i8, String> {
        let mut distancia_mas_pequeña = i16::MAX;
        let mut num_ascensor_mas_cercano: i8 = 1;
        for (num_ascensor, ascensor) in &self.ascensores {
            let posicion = ascensor.piso_en_el_que_estoy;
            if (piso - posicion).abs() < distancia_mas_pequeña {
                distancia_mas_pequeña = (piso - posicion).abs();
                num_ascensor_mas_cercano = *num_ascensor;
            }
        }
        match self.pulsar_boton_dentro_del_ascensor(num_ascensor_mas_cercano, piso) {
            Ok(_) => Ok(num_ascensor_mas_cercano),
            Err(error) => Err(error),
        }
    }

    pub fn pulsar_boton_dentro_del_ascensor(
        &mut self,
        num_ascensor: i8,
        piso_al_que_se_desea_ir: i16,
    ) -> Result<(), String> {
        if piso_al_que_se_desea_ir >= self.piso_mas_bajo
            && piso_al_que_se_desea_ir <= self.piso_mas_alto
        {
            if let Some(ascensor) = self.ascensores.get_mut(&num_ascensor) {
                ascensor.piso_en_el_que_estoy = piso_al_que_se_desea_ir;
                return Ok(());
            } else {
                return Err(format!(
                    "Este edificio no tiene ascensor {num_ascensor}, solo tiene {} ascensores",
                    self.ascensores.len()
                ));
            };
        } else {
            return Err(format!(
                "Este edificio no tiene piso {piso_al_que_se_desea_ir}, el más bajo es {} y el mas alto {}",
                self.piso_mas_bajo, self.piso_mas_alto
            ));
        };
    }
}

```


### Enums

[Enums and Pattern Matching](https://doc.rust-lang.org/book/ch06-00-enums.html)

### Option

Para cuando necesitamos distinguir claramente si una variable tiene un valor (`Some`) o no lo tiene (`None`).

[The Option Enum and Its Advantages Over Null Values](https://doc.rust-lang.org/book/ch06-01-defining-an-enum.html?highlight=Option#the-option-enum-and-its-advantages-over-null-values)

### Result

Para cuando necesitamos distinguir claramente si una función devuelve un resultado (`Ok`) o un error (`Error`).

[Error Handling](https://doc.rust-lang.org/book/ch09-00-error-handling.html)

[Recoverable Errors with Result](https://doc.rust-lang.org/book/ch09-02-recoverable-errors-with-result.html)

[Unrecoverable Errors with panic!](https://doc.rust-lang.org/book/ch09-01-unrecoverable-errors-with-panic.html)

[You’re Doing Exceptions Wrong - Matt Burke - NDC London 2025](https://www.youtube.com/watch?v=oWvX-hdIAQo) Conclusión extraida de esta conferencia: `Result` es con lo que Rust evita las "Vexing Exceptions" y trata los casos de "Exogenous Exceptions" en los que podemos hacer algo para mitigar la excepción; `panic` es con lo que Rust trata las "Fatal Exceptions", las "Boneheaded Exceptions" (en su primera fase, antes de corregir el bug que la causaba) y los casos de "Exogenous Exceptions" en los que no podemos hacer nada.

### ControlFlow

Para cuando necesitamos distinguir claramente entre continuar (`Continue`) o parar (`Break`).

[The ControlFlow Enum](https://doc.rust-lang.org/stable/std/ops/enum.ControlFlow.html)


### Pattern matching

[Patterns and Matching](https://doc.rust-lang.org/book/ch19-00-patterns.html?highlight=Patterns#patterns-and-matching)



## Tests

Los test unitarios se pueden escribir directamente en cada archivo del código fuente, normalmente al fondo del mismo. El bloque de tests se marca con la anotación `#[cfg(test)]` y cada función test con la anotación `#[test]`

```
pub fn add(left: u64, right: u64) -> u64 {
    left + right
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let result = add(2, 2);
        assert_eq!(result, 4);
    }
}
```
[How to Write Tests - The Rust Programming Language Book](https://doc.rust-lang.org/book/ch11-01-writing-tests.html)

[Unit Tests](https://doc.rust-lang.org/book/ch11-03-test-organization.html#unit-tests)


Los test de integración van en una carpeta `tests` fuera de la carpeta `src`. Desde ahí, solo pueden utilizar la parte pública del código funcional.

[Integration Tests](https://doc.rust-lang.org/book/ch11-03-test-organization.html#integration-tests)

Los ejemplos incluidos en la documentación también pueden actuar como tests. Es decir, se ejecutan cada vez se lanza `cargo test`. Así se comprueba que funcionan correctamente y, por tanto, siguen siendo ejemplos válidos.

[Documentation Comments as Tests](https://doc.rust-lang.org/book/ch14-02-publishing-to-crates-io.html#documentation-comments-as-tests)


Resumiendo, en Rust existen tres tipos de tests:
- Unitarios: dentro de cada archivo `.rs` del código fuente.
- Integración: en carpeta `tests` colgando de la raiz del proyecto.
- Documentación: los ejemplos de código puestos en la documentación.

## Lifetimes

[Preventing Dangling References with Lifetimes](https://doc.rust-lang.org/book/ch10-03-lifetime-syntax.html)

[Lifetimes - examples](https://doc.rust-lang.org/rust-by-example/scope/lifetime.html)

Como se ha comentado antes, cada trozo de memoria es propiedad de una sola variable y se libera cuando dicha variable deja de existir. Por eso, es importante indicarle al compilador las ocasiones en que se necesite prolongar el ciclo de vida normal de alguna variable.

Normalmente, una variable solo está viva en el alcance (scope) donde se defina: dentro de una instancia de un `struct`, dentro de una función `fn`, dentro de un bucle `for`, dentro de una rama condicional `if`,...

Pero, en ciertas ocasiones, puede resultar interesante ligar su ciclo de vida al de otras variables con las que ha de trabajar conjuntamente. De tal manera que todas ellas estén vivas durante el mismo tiempo (es decir, tengan el mismo "lifetime").


## Traits

[Traits: Defining Shared Behavior](https://doc.rust-lang.org/book/ch10-02-traits.html)

Podemos pensar en los `trait` de Rust como en los "interface" de otros lenguajes. Son un conjunto de funciones que se han de implementar con una signatura concreta. 

Es decir, los `struct` que implementen (`impl`) un `trait` concreto han de tener todas esas funciones, justo con esas signaturas concretas. Cada `struct` puede implementar internamente cada función como  desee, pero respetando su signatura. Y las ha de implementar todas (si no el código no se compilará)

Se podria decir que los "trait" definen tareas que se han de realizar; mientras que sus implementaciones deciden cómo se van a llevar a cabo esas tareas.

[Trait objects](https://doc.rust-lang.org/reference/types/trait-object.html)

A la hora de utilizar "trait objects", se puede requerir a un mismo objeto que implemente varios `trait`. Es decir, que tenga todas las funciones requeridas por todos los `trait` que se indiquen.)

[Traits as Parameters](https://doc.rust-lang.org/book/ch10-02-traits.html#traits-as-parameters)

## Slices

[The Slice Type](https://doc.rust-lang.org/book/ch04-03-slices.html)

Son trozos de una colección. Muy útiles cuando se necesita trabajar con una parte de la misma en lugar de con la colección completa.

## Iterators, Functional Iterators

https://doc.rust-lang.org/std/iter/trait.Iterator.html

Rust trabaja con formas propias de un lenguaje funcional al tratar con colecciones. Por ejemplo:

- [for_each](https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.for_each)
- [find](https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.find)
- [filter](https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.filter)
- [map](https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.map)
- [reduce](https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.reduce)
- [fold](https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.fold)
- [flatten](https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.flatten)
- [zip](https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.zip)
- [unzip](https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.unzip)
- [collect](https://doc.rust-lang.org/std/iter/trait.Iterator.html#method.collect)


[Processing a Series of Items with Iterators](https://doc.rust-lang.org/book/ch13-02-iterators.html)

[Comparing Performance: Loops vs. Iterators](https://doc.rust-lang.org/book/ch13-04-performance.html)

[Making Code Clearer with Iterator Adapters](https://doc.rust-lang.org/book/ch13-03-improving-our-io-project.html?highlight=filter#making-code-clearer-with-iterator-adapters)

[Iterators in Rust](https://dev.to/francescoxx/iterators-in-rust-fm)



## Toolchains

Un toolchain es una versión específica de las herramientas de Rust (components), para máquinas con una arquitectura específica (targets).

[toolchains](https://rust-lang.github.io/rustup/concepts/toolchains.html)

[components in a toolchain](https://rust-lang.github.io/rustup/concepts/components.html)

[targets](https://doc.rust-lang.org/nightly/rustc/platform-support.html)

Cabe destacar que el compilador de Rust, `rustc`, tiene capacidad para cross-compilar programas para un target diferente de aquel en el que está corriendo. Es decir, podemos generar ejecutables para máquinas con arquitecturas distintas a aquella en que estamos trabajando.

[Cross-compilation](https://rust-lang.github.io/rustup/cross-compilation.html)


Algunos comandos útiles:

- `rustup show`, para ver los toolchains instalados.

- `rustup default`, para fijar el toolchain a usar por defecto.


## Interoperabilidad de Rust con otros lenguajes

[The bindgen User Guide](https://rust-lang.github.io/rust-bindgen/)

[Interop with C](https://paandahl.github.io/rust-interop/c-intro.html)

[A little C with your Rust](https://docs.rust-embedded.org/book/interoperability/c-with-rust.html)

[CXX — safe interop between Rust and C++](https://cxx.rs/)

[rust-cpp — embed C++ code directly in Rust](https://github.com/mystor/rust-cpp)

[Foreign Function Interface](https://doc.rust-lang.org/nomicon/ffi.html)



## Lista de algunas bibliotecas-crates-

[crates.io - The Rust community’s crate registry](https://crates.io/)

[lib.rs - The unofficial catalog of programs written in Rust](https://lib.rs/about)

[Top 10 Rust crates you must know](https://www.youtube.com/watch?v=FPRH66r-zUQ)

### standard library

[std::collections](https://doc.rust-lang.org/std/collections/)

[std::String](https://doc.rust-lang.org/std/string/struct.String.html)

[std::split](https://doc.rust-lang.org/std/primitive.str.html#method.split)

[std::Thread](https://doc.rust-lang.org/std/thread/)

[std::sync](https://doc.rust-lang.org/std/sync/index.html)

[std::channel](https://doc.rust-lang.org/std/sync/mpsc/fn.channel.html)



### utilidades generales

[chrono - dates and times in the proleptic Gregorian calendar](https://docs.rs/chrono/latest/chrono/)

[dotenv - a configuration loader that loads environment variables from a .env file](https://docs.rs/dotenv/latest/dotenv/)

[num_format - producing string representations of numbers](https://docs.rs/num-format/latest/num_format/)

[json - parse and serialize JSON with ease](https://docs.rs/json/latest/json/)

[uuid - Generate and parse universally unique identifiers (UUIDs)](https://docs.rs/uuid/latest/uuid/)

[regex - Regular Expressions](https://docs.rs/regex/latest/regex/)

[anyhow - a trait object based error type for easy idiomatic error handling](https://docs.rs/anyhow/latest/anyhow/)

[thiserror - a convenient derive macro for the standard library’s std::error::Error trait](https://docs.rs/thiserror/latest/thiserror/)

[log - a lightweight logging facade](https://github.com/rust-lang/log)

[tracing - a framework for instrumenting Rust programs](https://github.com/tokio-rs/tracing)

[serde - a framework for serializing and deserializing Rust data structures efficiently and generically](https://docs.rs/serde/latest/serde/)

[serde - introduction](https://crates.io/crates/serde)

[serde - documentation](https://serde.rs/)

[base64 - decoding and encoding](https://docs.rs/base64/latest/base64/)

[bincode - a tiny binary serialization strategy](https://docs.rs/bincode/latest/bincode/)

[mockall - tools to create mock versions of almost any trait or struct](https://docs.rs/mockall/latest/mockall/)

[plotters - drawing library designed for rendering figures, plots, and charts](https://docs.rs/plotters/latest/plotters/)

[image - encoding and decoding as well as some basic manipulation functions](https://docs.rs/image/latest/image/index.html)

[serialimage - extends the image crate with serializable DynamicImages](https://docs.rs/serialimage/latest/serialimage/)

[palette - linear color calculations and conversions](https://docs.rs/palette/latest/palette/)

[RustCrypto - cryptographic algorithms](https://github.com/RustCrypto)

[printers - send files or bytes to print on unix and windows](https://docs.rs/printers/latest/printers/)

[windows-rs - let you call any Windows API](https://github.com/microsoft/windows-rs)


### i18n y l10n

[Are we i18n Yet? - The state of internazionalization in Rust](https://www.arewewebyet.org/topics/i18n/)

[rust_i18n - for loading localized text from a set of (YAML, JSON or TOML) mapping files](https://docs.rs/rust-i18n/latest/rust_i18n/index.html)

[fluent - to unleash the entire expressive power of natural language translations](https://crates.io/crates/fluent)

[fluent-bundle](https://crates.io/crates/fluent-bundle)

[gettext - safe bindings for gettext](https://crates.io/crates/gettext-rs)

### GUI

[Are we GUI Yet? - The state of building user interfaces in Rust](https://areweguiyet.com/)

[egui - a simple, fast, and highly portable immediate mode GUI library](https://crates.io/crates/egui)

[egui - github repository](https://github.com/emilk/egui)

[iced - a cross-platform GUI library inspired by Elm](https://iced.rs/)

[iced - github repository](https://github.com/iced-rs/iced)

[iced](https://crates.io/crates/iced)

[Tauri - Create small, fast, secure, cross-platform applications](https://tauri.app/)

[Tauri - documentation](https://tauri.app/start/)

[GUI development with Rust and GTK 4](https://gtk-rs.org/gtk4-rs/stable/latest/book/)

[Ratatui - for cooking up Terminal User Interfaces](https://ratatui.rs/)

[slint - declarative GUI for Rust, C++, JavaScript & Python](https://slint.dev/)

[slint - youtube tutorial](https://www.youtube.com/watch?v=7aFgeUG9TK4)

[Are we web yet? - The state of building web applications in Rust](https://www.arewewebyet.org/)

[Yew - A framework for creating reliable and efficient web applications](https://yew.rs/)

[Trunk - Build, bundle & ship your Rust WASM application to the web](https://trunkrs.dev/)

[Building a Rust App With Yew! - Let's Get Rusty - Youtube](https://www.youtube.com/watch?v=KmOeFrwz8BM)


### web - networking

[Are we web yet? - The state of building web applications in Rust](https://www.arewewebyet.org/)

[reqwest - a higher-level HTTP Client](https://docs.rs/reqwest/latest/reqwest/index.html)

[tonic - a gRPC over HTTP/2 implementation](https://docs.rs/tonic/latest/tonic/)

[Tokio - an asynchronous runtime - provides the building blocks needed for writing network applications](https://tokio.rs/)

[tower - a library of modular and reusable components for building robust networking clients and servers](https://docs.rs/tower/latest/tower/)

[Axum - github](https://github.com/tokio-rs/axum)

[Leptos - a full-stack framework for building web applications](https://docs.rs/leptos/latest/leptos/)

[The Leptos Book](https://book.leptos.dev/)

[Yew - a modern framework for creating multi-threaded front-end web apps using WebAssembly (WASM)](https://yew.rs/)

[Trunk - Build, bundle & ship your Rust WASM application to the web](https://trunkrs.dev/)

[Actix Web - web framework for backend](https://actix.rs/)


### bases de datos

[Diesel- a Safe, Extensible ORM and Query Builder](https://diesel.rs/)

[sqlx - the async SQL toolkit for Rust](https://docs.rs/sqlx/latest/sqlx/index.html)

[sqlx - usage tips](https://github.com/launchbadge/sqlx#usage)

[tokio_postgres - an asynchronous, pipelined, PostgreSQL client](https://docs.rs/tokio-postgres/latest/tokio_postgres/)



### gráficos

[Beby - a refreshingly simple data-driven game engine](https://github.com/bevyengine/bevy)

[Beby Engine](https://bevyengine.org/)

[integración Bevy-egui](https://github.com/vladbat00/bevy_egui)

[Learn OpenGL in Rust](https://rust-tutorials.github.io/learn-opengl/basics/index.html)

[three-d - a OpenGL/WebGL/OpenGL ES renderer and drawer](https://github.com/asny/three-d)

[gpu - a safe and portable graphics library based on the WebGPU API](https://wgpu.rs/)


### embedded - industrial - red - control - tiempo real

[The Embeded Rust Boook](https://docs.rust-embedded.org/book/)

[Embedded devices Working Group](https://github.com/rust-embedded/wg?tab=readme-ov-file#embedded-devices-working-group)

[embedded_hal - a Hardware Abstraction Layer (HAL) for embedded systems](https://docs.rs/embedded-hal/latest/embedded_hal/)

[probe-rs , a debugging toolset and library for debugging embedded ARM and RISC-V targets on a separate host](https://github.com/probe-rs/probe-rs)

[cargo-flash, just like ‘cargo run’, but will download your binary to the target and run](https://probe.rs/docs/tools/cargo-flash/)

[cargo-embed, the big brother of cargo-flash , it can also open an RTT terminal as well as a GDB server](https://probe.rs/docs/tools/cargo-embed/)

[embassy - the next-generation framework for embedded applications](https://embassy.dev/)

[The Rust on ESP Book - Expressif](https://docs.esp-rs.org/book/)

[Embedded Rust on Espressif microcontrollers](https://docs.esp-rs.org/std-training/)

[Embedded Rust (no_std) on Espressif](https://docs.esp-rs.org/no_std-training/)

[atsamd-rs , working with Microchip (nee Atmel) microcontrollers](https://github.com/atsamd-rs/atsamd)

[stm32-rs ,  support projects for STM32 microcontrollers](https://github.com/stm32-rs)

[heapless - data structures that don’t require dynamic memory allocation](https://docs.rs/heapless/latest/heapless/)

[rtic - Real-Time Interrupt-driven Concurrency](https://github.com/rtic-rs/rtic)

[pnets - a framework for manipulating Petri nets](https://docs.rs/pnets/latest/pnets/)

[socketcan - using CAN bus devices](https://docs.rs/socketcan/latest/socketcan/)

[tokio_modbus - using Modbus devices](https://docs.rs/tokio-modbus/latest/tokio_modbus/)

[pcap - a packet capture library](https://docs.rs/pcap/latest/pcap/)

[pnet - a cross-platform API for low level networking](https://docs.rs/pnet/latest/pnet/)

### juegos - VR - AR

[Are we game yet? - The state of virtual reality in Rust](https://arewegameyet.rs/ecosystem/vr/#:~:text=rust-webvr.%20Safe%20rust%20API%20that%20provides%20a%20way)

[Bevy - a refreshingly simple data-driven game engine](https://bevyengine.org/)

[JC - Rust Bevy Tutorial](https://www.youtube.com/watch?v=j7qHwb7geIM&list=PL7r-PXl6ZPcCB_9zZFU0krBoGK3y5f5Vt)

[OpenVR - c++ API and runtime that allows access to VR hardware from multiple vendors](https://github.com/ValveSoftware/openvr)

[rust-penvr - high-level bindings for OpenVR](https://github.com/rust-openvr/rust-openvr)


## Algunas notas prácticas sobre algunos aspectos concretos

Aquí voy recogiendo aquello que voy estudiando o practicando...


### Organizar el código

Modules (`mod`) allow to put each thing in it's own folder/file.

Traits (`trait`) are for abstraction

Structs (`struct`) are for composition

Generics or dynamic Trait Objects are for flexibility
- Generics (`<T>`) in compile time.
- Dynamic (`dyn`) in runtime. 

[Master hexagonal architecture in Rust - How To Code It](https://www.howtocodeit.com/articles/master-hexagonal-architecture-rust)

[Mastering Dependency Injection in Rust: Crafting a Custom Container](https://chesedo.me/blog/manual-dependency-injection-rust/)

[Dependency Injection via Traits and Generics in Rust](https://softwarepatternslexicon.com/patterns-rust/6/7/)

[Using Trait Objects That Allow for Values of Different Types](https://doc.rust-lang.org/book/ch18-02-trait-objects.html)
The advantage of using trait objects and Rust’s type system to write code similar to *code using duck typing* is that we never have to check whether a value implements a particular method at runtime or worry about getting errors if a value doesn’t implement a method but we call it anyway. Rust won’t compile our code if the values don’t implement the traits that the trait objects need.

[Dependency Injection in Rust: The Pragmatic Guide](https://medium.com/@adamszpilewicz/dependency-injection-in-rust-the-pragmatic-guide-4f0ec82fb9ec)

[Implementing an Object-Oriented Design Pattern: the state pattern](https://doc.rust-lang.org/book/ch18-03-oo-design-patterns.html)

[Functional Language Features: Iterators and Closures](https://doc.rust-lang.org/book/ch13-00-functional-features.html)

[Design Patterns in Rust](https://softwarepatternslexicon.com/patterns-rust/1/)


### Escribir documentación

[The rustdoc book](https://doc.rust-lang.org/stable/rustdoc/)

[Rust by Example - Documentation](https://doc.rust-lang.org/rust-by-example/meta/doc.html)

[document_features - a macro that extracts “documentation” comments from Cargo.toml](https://docs.rs/document-features/latest/document_features/)

[Rust API Guidelines - Documentation](https://rust-lang.github.io/api-guidelines/documentation.html)

[mdBook - a command line tool to create books with Markdown](https://rust-lang.github.io/mdBook/)


Algunas ideas para documentar software:

- Dar una visión general del propósito, las funcionalidades y los casos de uso principales.

- Detallar el contexto en el que se puede usar (y en el que no). Explicitar los requisitos necesarios. Explicitar las asunciones, los valores por defecto,...

- Dar un mapa de las partes internas principales y las relaciones entre ellas. Comentar las relaciones con otras partes externas, si las tuviera. 

- Explicar la forma de usar.

- Dar algunos ejemplos de código para los usos más habituales.

- Citar otras fuentes donde poder ampliar información.

[Diátaxis - A systematic approach to technical documentation authoring](https://diataxis.fr/)

Cuatro tipos de documentación técnica:
- Tutoriales.
- How-to X, guias de cómo hacer X
- Explicaciones.
- Referencias.

[The Good Docs Project](https://www.thegooddocsproject.dev/)



### Concurrencia

[Fearless Concurrency - The Rust Programming Language Book](https://doc.rust-lang.org/book/ch16-00-concurrency.html)

Poner a un trozo de código a correr en su propia hebra de ejecución es sencillo:
```
    let handle =  thread::spawn(move || {
    
      ../..
    
    });
```

La sincronización temporal entre hebras se realiza con el clásico *join*
```
    handle.join().unwrap();
```

El intercambio de información entre hebras se realiza transmitiendo y recibiendo a través de un canal *mpsc::channel*
```
use std::sync::mpsc;
use std::thread;

fn main() {
    let (tx, rx) = mpsc::channel();

    thread::spawn(move || {
        let val = String::from("hi");
        tx.send(val).unwrap();
    });

    let received = rx.recv().unwrap();
    println!("Got: {received}");
}
```

Como siempre en Rust, es necesario prestar atención a las reglas de *Onwership* y *Borrowing*.

Para situaciones más complejas, existe también la posibilidad de compartir elementos entre hebras. Usando los clásicos *Mutex*:
[Shared-State Concurrency](https://doc.rust-lang.org/book/ch16-03-shared-state.html)



### Asincronía

[Fundamentals of Asynchronous Programming: Async, Await, Futures, and Streams](https://doc.rust-lang.org/book/ch17-00-async-await.html)

Hacer que una función pueda llamarse sin esperar a que termine es sencillo: basta con señalarla como `async`.
```
    async fn xxxxxxxx() -> zzzzzzzz {
    
      ../..
    
    });
```

Allá donde se llame a una función así, es necesario marcar el punto de llamada como "pendiente para más tarde...". Para cuando la función termine y devuelva su resultado poder procesarlo. Esta marca es `.await`
```
    xxxxxxxx().await;
```

¡importante!

Contrariamente a lo que pudiera deducirse, `await` no significa que la ejecución se queda en ese punto del código esperando al resultado. 

`await` significa que se asume que la función a la que se ha llamado devolverá el resultado "cuando pueda" (y, la procesaremos entonces). Mientras tanto,sigue adelante la ejecución del código principal (fuera de la función `async` donde está el `await`). 

Es decir, en el fondo `await` es como si creara un 'callback' que entrega a la función llamada para que esta pueda avisar cuando termine de tener el resultado. En ese momento futuro, el punto que ha iniciado el "awaiting" es retrollamado ('callback') para que pueda retomar el tema que había quedado pendiente. 

> `await` no es "me quedo esperando aquí", sino más bien "como esto va a tardar, lo dejo para luego, mientras tanto sigue con lo tuyo y avisame cuando esté" ;-)


[Fundamentals of Asynchronous Programming: Async, Await, Futures, and Streams](https://doc.rust-lang.org/book/ch17-00-async-await.html)

[Fearless Concurrency](https://doc.rust-lang.org/book/ch16-00-concurrency.html)

[Asynchronous Programming in Rust](https://rust-lang.github.io/async-book/)

[Crate future_by_example](https://docs.rs/future-by-example/latest/future_by_example/)

[Crate futures](https://docs.rs/futures/latest/futures/index.html)



#### Ventajas y pegas

La gran ventaja de las arquitecturas asíncronas es que aprovechan mejor los recursos (no desperdician ciclos de CPU) y que escalan muy bien (horizontalmente). Suele merecer la pena tener una arquitectura asíncrona (o una concurrente). Sobre todo si hay involucradas tareas que requieran esperar a mucho trabajo de la CPU (grandes cálculos) o esperar a tareas con un fuerte componente I/O (como por ejemplo acceder a servidores en la red).

> La única pega es que, al igual que con sus primas la concurrencia, el paralelismo y la distribución. Con la asíncronia se complica bastante la escritura y depuración del código.

> Tampoco hay que perder de vista que todas esas técnicas de delegación o de reparto de trabajos no son compatibles con ciertos tipos de tareas. Por ejemplo, todas aquellas que necesiten garantizar un orden exacto de ejecución (tareas [deterministas](https://en.wikipedia.org/wiki/Deterministic_algorithm)) o completar transacciones encadenadas involucrando diversos sistemas (tareas [ACID](https://en.wikipedia.org/wiki/ACID)).

nota: más información en [Concurrente, Paralelo, Distribuido](https://github.com/JuanMuruaOlalde/Aprendiendo_-_-_/blob/main/aprendiendo_ConcurrenteParaleloDistribuido/Concurrente%20-%20Paralelo%20-%20Distribuido.md)

Las llamadas asíncronas (llamar a una función y continuar sin esperar a su resultado) se suelen utilizar allá donde la tarea la lleve un solo hilo de ejecución y se quiera evitar bloquearlo. 

Pero esta asincronía entre la petición y la respuesta:
 
- Hace complicado el mantenimiento estricto de estado entre distintas peticiones relacionadas. (Estado: información interna concerniente a una determinada tarea o cliente).

- Hace complicado garantizar el orden de respuesta a las distintas peticiones. Es decir, no se puede tener un control estricto de lo que sucede y cuándo sucede.

De ahí que la asincronía se tienda a utilizar junto con arquitecturas donde cada petición/llamada pueda tener una respuesta/procesado independiente (stateless architecture).

#### La asíncronia es "contagiosa"

Por otro lado, comentar que una vez se hace una llamada asíncrona en algún punto del código, es obligatorio llevar a asincronía hasta el origen. Es decir, no se pueden mezclar partes síncronas y partes asíncronas en una misma operación. Por ejemplo, si al pulsar un botón en el interfaz de usuario se desencadena una acción que al final requiere realizar una llamada asíncrona a una API para solicitar datos; aunque el .await esté en la llamada a la API, toda la cadena de vuelta (API -> modelo -> controlador -> vista) acabarán siendo funciones asíncronas (requiendo que la vista tenga también capacidad de atender y cerrar la cadena asíncrona).

> Podria decirse que la asíncronicidad es "contagiosa". Un proceso asíncrono lleva a que otro que lo utiliza también deba ser asíncrono. Y, muchas veces, al final acaba obligando a que más y más procesos sean asíncronos. Hasta que todo el sistema acaba teniendo una arquitectura asíncrona.


#### `main` function and `test` functions

En Rust no pueden ser asíncronas ni la función `main`, ni las funciones `test`. A no ser que se utilice algún framework que lo permita, como, por ejemplo:

[Tokio - an asyncronous Rust runtime](https://tokio.rs/)

````
#[tokio::main(flavor = "current_thread")]
async fn main() {

    ../..

}
````

````
#[tokio::test]
async fn al_asignar_habitaciones_a_una_estancia_estas_quedan_ocupadas() {

    ../..

}
````



Como se indica en el libro [Async programming in Rust with async-std](https://book.async.rs/):

"The only place we can use the await keyword is in async functions or blocks, and Rust won’t let us mark the special main function as async.

The reason main can’t be marked async is that async code needs a runtime: a Rust crate that manages the details of executing asynchronous code. A program’s main function can initialize a runtime, but it’s not a runtime itself. (We’ll see more about why this is the case in a bit.) Every Rust program that executes async code has at least one place where it sets up a runtime and executes the futures.

Most languages that support async bundle a runtime, but Rust does not. Instead, there are many different async runtimes available, each of which makes different tradeoffs suitable to the use case it targets. For example, a high-throughput web server with many CPU cores and a large amount of RAM has very different needs than a microcontroller with a single core, a small amount of RAM, and no heap allocation ability. The crates that provide those runtimes also often supply async versions of common functionality such as file or network I/O."

../..

"Each await point—that is, every place where the code uses the await keyword—represents a place where control is handed back to the runtime. To make that work, Rust needs to keep track of the state involved in the async block so that the runtime can kick off some other work and then come back when it’s ready to try advancing the first one again. This is an invisible state machine, as if you’d written an enum like this to save the current state at each await point:

````
enum PageTitleFuture<'a> {
    Initial { url: &'a str },
    GetAwaitPoint { url: &'a str },
    TextAwaitPoint { response: trpl::Response },
}
````

Writing the code to transition between each state by hand would be tedious and error-prone, however, especially when you need to add more functionality and more states to the code later. Fortunately, the Rust compiler creates and manages the state machine data structures for async code automatically. The normal borrowing and ownership rules around data structures all still apply, and happily, the compiler also handles checking those for us and provides useful error messages.

Ultimately, something has to execute this state machine, and that something is a runtime. (This is why you may come across references to executors when looking into runtimes: an executor is the part of a runtime responsible for executing the async code.)

Now you can see why the compiler stopped us from making main itself an async function back in Listing 17-3. If main were an async function, something else would need to manage the state machine for whatever future main returned, but main is the starting point for the program!"


### sqlx - acceso a bases de datos

[SQLx](https://github.com/launchbadge/sqlx?tab=readme-ov-file#sqlx)

[Crate sqlx](https://docs.rs/sqlx/latest/sqlx/)

[SQLx CLI - Command Line Interface](https://github.com/launchbadge/sqlx/tree/main/sqlx-cli)

La cadena de conexión se puede suministrar desde una variable de entorno o desde una entrada en el archivo `.env`. Usando el crate [dotenvy](https://crates.io/crates/dotenvy)

[sqlx-cli - Create/drop the database at DATABASE_URL](https://github.com/launchbadge/sqlx/blob/main/sqlx-cli/README.md#usage)

La conexión se realiza a través de un pool que se ha de abrirse al arrancar la aplicación y  cerrarse al terminar esta. Por ejemplo:
````
use dotenvy::dotenv;
use sqlx::mysql::MySqlPoolOptions;

#[tokio::main(flavor = "current_thread")]
async fn main() {
    println!();

    println!("Estableciendo conexión con la base de datos...");
    dotenvy::dotenv().ok();
    let conexion_con_la_bd = MySqlPoolOptions::new()
        .max_connections(1)
        .connect(
            &std::env::var("DATABASE_URL")
                .expect("No se han encontrado las llaves de entrada a la base de datos."),
        )
        .await
        .expect("No se ha podido establecer conexión con la base de datos.");
    println!("Conexión establecida.");
    
    
    // Aquí va el resto de la aplicación...
    
    
    conexion_con_la_bd.close().await;
}
````

[Why Use a Pool?](https://docs.rs/sqlx/latest/sqlx/struct.Pool.html#why-use-a-pool)

[Learn Rust SQLX on Postgres - David Choi](https://www.youtube.com/watch?v=v9fnBhzH5u8)

[SQLx is my favorite PostgreSQL driver to use with Rust - Dreams of Code](https://www.youtube.com/watch?v=TCERYbgvbq0)


Para tests de integración, anotando las funciones con `#[sqlx::test]`, SQLx se encarga de crear una nueva base de datos temporal y de proveer su conexión a la función de test. Al terminar de ejecutarse la función, la base de datos temporal se borra.
````
use sqlx::{MySql, Pool};

#[sqlx::test]
async fn esto_es_un_test_de_integracion_para_comprobar_algo(
    conexion: Pool<MySql>,
) {

    // Podemos inyectar &conexion allá donde lo necesitemos para trabajar con la base de datos...
    
}

````
[Attribute Macro sqlx::test](https://docs.rs/sqlx/latest/sqlx/attr.test.html)

[Database Tests for the Lazy - Matt Trighetti](https://mattrighetti.com/2025/02/17/rust-testing-sqlx-lazy-people)

[Mark an async fn as a test with SQLx support.](https://docs.rs/sqlx/latest/sqlx/attr.test.html)

¿Y cómo sabe las tablas que debe crear?. Pues usando las migraciones: archivos `.sql` guardados en una carpeta `migrations`.

[sqlx-cli - Create and run migrations](https://github.com/launchbadge/sqlx/blob/main/sqlx-cli/README.md#create-and-run-migrations)

[Learn Rust SQLx on Postgres - Migrations](https://youtu.be/v9fnBhzH5u8?t=215)


Las consultas y manipulación de datos se realizan a través de la [macro query](https://docs.rs/sqlx/latest/sqlx/macro.query.html) o de la [macro query_as](https://docs.rs/sqlx/latest/sqlx/macro.query_as.html). Por ejemplo:

````
    let resultado = sqlx::query("SELECT * FROM habitaciones WHERE nombre = ?")
        .bind(nombre)
        .fetch_optional(self.conexion_con_la_bd)
        .await;
    match resultado {
        Ok(datos) => match datos {
            Some(registro) => {
                let habitacion = Habitacion::from_persistencia(
                    registro.id,
                    registro.nombre,
                    registro.tipo_habitacion,
                    registro.tipo_baño,
                );
                match habitacion {
                    Ok(h) => Ok(h),
                    Err(e) => Err(format!("Problemas al convertir datos: {e}")),
                }
            }
            None => Err(format!("No se ha encontrado la habitacion {nombre}")),
        },
        Err(e) => Err(format!("Problemas al consultar la base de datos: {e}")),
    }
````

### egui - interfaz de usuario

[egui - documentation](https://docs.rs/egui/latest/egui/)

[egui - github repository](https://github.com/emilk/egui)

[egui - demo code](https://www.egui.rs/#demo)

[egui - examples](https://egui.info/examples/)

[egui - tutorial](https://whoisryosuke.com/blog/2023/getting-started-with-egui-in-rust#what-is-egui)

[eframe - the egui framework](https://github.com/emilk/egui/tree/master/crates/eframe)

[eframe template](https://github.com/emilk/eframe_template/tree/main)

[egui file dialog](https://lib.rs/crates/egui-file-dialog)


### Yew - interfaz de usuario

[Yew](https://yew.rs/)

[Yew - documentation](https://yew.rs/docs/getting-started/introduction)

[Yew - docs.rs](https://docs.rs/yew/latest/yew/)

[Yew - Github repository](https://github.com/yewstack/yew)

[Yew - tutorial](https://yew.rs/docs/tutorial)

Yew suele trabajar con otras dos dependencias:

- [trunk](https://trunkrs.dev/), un "compilador-empaquetador" (bundler) para gestionar Rust==>WASM

- [wasm32-unknown-unknow](https://doc.rust-lang.org/nightly/rustc/platform-support/wasm32-unknown-unknown.html), el objetivo ("target") del compilador de Rust para generar código webassembly (WASM) destinado a ser ejecutado en un navegador web.


En Yew, el interfaz de usuario se va construyendo a partir de componentes. De forma muy similar a cómo se hace en [React](https://react.dev/). 

Los componentes van en el `<body>` del `index.html`. Esa parte `<body>` es rellenada por un componente principal `App`, que inicia la aplicación:
```
<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8" />
        <title>Pruebas con Yew</title>
        <meta
            name="description"
            content="Pruebas y experimentos para aprender a usar Yew"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link data-trunk rel="css" href="style.css" />
        ................. 
    </head>
    <body>
        <!-- aquí va lo que se rellena con la aplicación usando componentes Yew-->
    </body>
</html>
```

```
use yew::prelude::*;

fn main() {
    yew::Renderer::<App>::new().render();
}

#[function_component(App)]
fn app() -> Html {
    ................. 
    html! {
    <body>
        <header>
            <h1>{"Haciendo pruebas con Yew"}</h1>
            ................. 
        </header>

        <nav>
            ................. 
        </nav>

        <main>
            ................. 
            <NombreDeUnComponente ... con sus props/>
            ................. 
        </main>

        <footer>
            ................. 
        </footer>
    </body>
    }
}
```

Los componentes Yew se pueden definir de dos formas:

- Los componentes sencillos: son una `fn` decorada con la etiqueta `#[function_component]`

  ````
  #[function_component(NombreDelComponente)]
  fn nombre_de_la_funcion(parámetros) -> Html {
  
      // código para realizar acciones o preparar datos...

      html! {
          //código para generar el html que va a devolver el componente...
      }

  }
  ````

- Los componentes normales: son un `struct` que implementa el trait `Component`

  ````
    #[derive(Properties, PartialEq, Default)]
    struct NombreDelComponente {
        atributo1: AttrValue,
        atributo2: AttrValue,
        ...
    }
    
    pub enum MensajeQueElComponentePuedeRecibir {
        NoHacerNada,
        HacerAlgo,
        HacerOtroAlgo,
    }
    
    impl Component for NombreDelComponente {
        type Message = MensajeQueElComponentePuedeRecibir;
        type Properties = NombreDelComponente;
    
        fn create(_ctx: &Context<Self>) -> Self {
            Self {
                atributo1: AttrValue::from("......."),
                atributo2: AttrValue::from("....."),
                ...
            }
        }
    
        fn update(&mut self, _ctx: &Context<Self>, msg: Self::Message) -> bool {
            match msg {
                MensajeQueElComponentePuedeRecibir::NoHacerNada => {
                    // código para realizar acciones o preparar datos...
                 }
                MensajeQueElComponentePuedeRecibir::HacerAlgo => {
                    // código para realizar acciones o preparar datos...
                }
                MensajeQueElComponentePuedeRecibir::HacerOtroAlgo => {
                    // código para realizar acciones o preparar datos...
                }
            }
            true
        }
    
        fn view(&self, ctx: &Context<Self>) -> Html {
          
              // código para realizar acciones o preparar datos...
        
              html! {
                  //código para generar el html que va a devolver el componente...
              }
        
        }
  }
  ````

Se usa la [macro html!](https://yew.rs/docs/concepts/html) para generar el HTML a mostrar en la página que está viendo el usuario. 

Para incorporar resultados y valores del código Rust al HTML, se usa una sintaxis parecida a JSXL.
```
#[function_component(Saludo)]
fn saludo() -> Html {
    let nombre_handle = use_state(|| String::from("mundo"));
    let nombre = (*nombre_handle).clone();
    let obtener_nombre = {
        let nombre_handle = nombre_handle.clone();
        Callback::from({
            move |evento: InputEvent| {
                let target: Option<EventTarget> = evento.target();
                let entrada = target.and_then(|t| t.dyn_into::<HtmlInputElement>().ok());
                if let Some(entrada) = entrada {
                    nombre_handle.set(entrada.value());
                }
            }
        })
    };
    html! {
        <div >
            <label for="nombre">{"Nombre:"}</label>
            <input type="text" id="nombre" oninput={obtener_nombre} value={nombre.clone()} />
            <div class="enmarcado_dentro_de_una_caja">
                <p>{"Hola, "}{nombre}{"."} </p>
            </div>
         </div>
    }
}
```


Para interacciones más directas con el DOM de HTML o con código Javascript, se puede usar el crate [web_sys](https://rustwasm.github.io/wasm-bindgen/api/web_sys/) que va integrado en Yew.

[DOM nodes](https://yew.rs/docs/concepts/html/elements)

[events](https://yew.rs/docs/concepts/html/events)


#### algunos enlaces

[A curated list of awesome things related to Yew](https://github.com/jetli/awesome-yew)

[A codebase containing real world examples (CRUD, auth, advanced patterns, etc)](https://github.com/jetli/rust-yew-realworld-example-app/tree/master)

[Rust Fullstack Web Application: Wasm, Yew, Rocket, Postgres and Docker - Francesco Ciulla](https://www.youtube.com/watch?v=FYVbt6YFMsM&list=PLPoSdR46FgI5QaLuj6muwN2T8WHUfV3AF)

[Mesmerizing Pixel Rain Effect with Rust and Yew on the HTML Canvas](https://www.youtube.com/watch?v=NTcvWDQ1mMI)


### Embedded con microcontroladores STM32

[STMicroelectronics STM32 32-bit Arm Cortex MCUs](https://www.st.com/en/microcontrollers-microprocessors/stm32-32-bit-arm-cortex-mcus.html)

[stm32-rs , Community Rust support projects for STM32 microcontrollers](https://github.com/stm32-rs/stm32-rs)

[Nucleo-64 development board with STM32F446RE MCU](https://www.st.com/en/evaluation-tools/nucleo-f446re.html)

#### Programación directa, usando un HAL

Por ejemplo, este HAL (Hardware Abstraction Layer) para los microcontrollers de la serie STM32F4: [stm32f4xx-hal](https://github.com/stm32-rs/stm32f4xx-hal)

[Embedded Rust for STM32 - Aleksey Ivanov](https://www.youtube.com/playlist?list=PLfBZ539IiUQzb6ZNAlBn_B4XxcS1oNenC)

[Embedded Rust course - JaJakub](https://www.youtube.com/playlist?list=PLL2SCPK5xSRWBPj-nKOVYIhxRw7C4kYeI)

[Custom STM32 Dev Board with Rust! - Ian Carey](https://youtu.be/VBXmCU-VQOw)


#### Programación indirecta, usando un framework

Por ejemplo, este framework asíncrono: [Embassy](https://embassy.dev/)

[Intro to Embassy: embedded development with async Rust - The Rusty Bits](https://youtu.be/pDd5mXBF4tY)

[Async Rust in Embedded Systems with Embassy - Dario Nieuwenhuis](https://youtu.be/H7NtzyP9q8E)

[Embassy STM32 HAL](https://embassy.dev/book/#_embassy_stm32_hal)

[60 lines of Rust - STM32 GPIOs and Interrupts - piers rocks](https://youtu.be/F6tI-qjXv_s)

[How to Embedded STM32 Rust - tRichCS](https://youtu.be/S6C--TmcWP0)


### Embedded con microcontroladores ATSAMD

[Microchip SAM D Arm® Cortex®-M-Based Microcontrollers (MCUs)](https://www.microchip.com/en-us/products/microcontrollers/32-bit-mcus/pic32-sam/sam-d#Products)

[Adafruit Trinket M0 development board](https://learn.adafruit.com/adafruit-trinket-m0-circuitpython-arduino)

#### Programación directa, usando un HAL

[a type-safe API for working with the Adafruit Trinket M0 board](https://github.com/atsamd-rs/atsamd/tree/master/boards/trinket_m0)

Firmware can be loaded in to the microcontroller using a variety of methods, broadly speaking these can be separated in to two categories: using the SWD debug interface, or over USB via a bootloader. [Loading code onto the device](https://github.com/atsamd-rs/atsamd/wiki/Loading-code-onto-the-device)


## Apéndice: algunos enlaces que he ido encontrando...

Aquí voy recogiendo aquello que no veo claro dónde encajar...


### (quasi)forbiden, arcane practice: The Rustonomicon

[-----Rust Koans-----](https://users.rust-lang.org/t/rust-koans/2408)
An article in The Rust Programming Language Forum

[-----The Rustonomicon-----](https://doc.rust-lang.org/nightly/nomicon/#the-rustonomicon) The Rustonomicon digs into all the awful details that you need to understand when writing Unsafe Rust programs. Should you wish a long and happy career of writing Rust programs, you should turn back now and forget you ever saw this book. 

[The embedonomicon](https://docs.rust-embedded.org/embedonomicon/)The embedonomicon walks you through the process of creating a #![no_std] application from scratch

### some links to security related info

[It’s Not As Simple As “Use A Memory Safe Language"](https://youtu.be/iQ-eTaW6-cM)

- Bindings code generation ([bindgen](https://github.com/rust-lang/rust-bindgen))
- Static analysis ([rustc](https://rustc-dev-guide.rust-lang.org/about-this-guide.html), [clippy](https://doc.rust-lang.org/stable/clippy/index.html))
- Undefined behavior interpreter ([Miri](https://github.com/rust-lang/miri))
- Model checking ([Kani](https://model-checking.github.io/kani/), [CBMC](https://www.cprover.org/cbmc))
- Property testing ([Proptest](https://proptest-rs.github.io/proptest/))
- Dynamic analysis ([sanitizers](https://doc.rust-lang.org/beta/unstable-book/compiler-flags/sanitizer.html))
- Fuzzing ([cargo fuzz](https://rust-fuzz.github.io/book/cargo-fuzz.html))

Some profiles from [C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/CppCoreGuidelines#S-profile):
- Pro.type: type safety
- Pro.bounds: bounds safety
- Pro.lifetime: lifetime safety

[cargo audit](https://docs.rs/cargo-audit/latest/cargo_audit/)

[RustSEC - a vulnerability database for the Rust ecosystem](https://rustsec.org/)

[Secure Code Working Group - making it easy to write secure code in Rust](https://github.com/rust-secure-code/wg?tab=readme-ov-file)

[Ferrocene, Rust compiler toolchain for safety- and mission-critical systems](https://ferrocene.dev/en/)


### some links to embedded related info

[The Embedded Rust Book](https://docs.rust-embedded.org/book/)

[Coordination repository of the embedded devices Working Group (WG)](https://github.com/rust-embedded/wg#embedded-devices-working-group)

[Running Rust on Microcontrollers - mbedded.ninja](https://blog.mbedded.ninja/programming/languages/rust/running-rust-on-microcontrollers/)

[The Rusty Bits - Youtube channel](https://www.youtube.com/@therustybits)

[Floodplain - Youtube channel](https://www.youtube.com/@floodplainnl)

[Embassy - write safe, correct and energy-efficient embedded code faster](https://embassy.dev/)

[Rust on an STM32 microcontroller](https://medium.com/digitalfrontiers/rust-on-a-stm32-microcontroller-90fac16f6342)

[Rust Runs on EVERYTHING, Including the Arduino](https://www.youtube.com/watch?v=ZPSqhb4KKNc)

[rust runs on EVERYTHING (no operating system, just Rust)](https://www.youtube.com/watch?v=jZT8APrzvc4)

[Writing a Driver on the Raspberry Pi - Kernel Mode Programming](https://www.youtube.com/watch?v=lWzFFusYg6g&list=PLc7W4b0WHTAX4F1Byvs4Bp7c8yCDSiKa9)

[Writing a SD Card driver in Rust - Jonathan Pallant | EuroRust 2024](https://www.youtube.com/watch?v=-ewuFNKIAVI)


### libros:

[Top 5 Rust books you MUST READ! - Let's Get Rusty](https://www.youtube.com/watch?v=uQYoSZTcUKI)

[A recopilation of books and other materials - Let's Get Rusty](https://letsgetrusty.kartra.com/page/XDk8)

[Getting Started with Rust](https://www.manning.com/bundles/getting-started-with-rust)

[Zero To Production In Rust, An introduction to backend development](https://www.zero2prod.com/index.html)

[Rust for Rustaceans by Jon Gjengset](https://nostarch.com/rust-rustaceans)


### cursos y tutoriales

[The Rust Developer Bootcamp - Let's Get Rusty](https://checkout.letsgetrusty.com/checkout-cart)

[The Rust Developer Bootcamp - (free part) - Let's Get Rusty](https://product.letsgetrusty.com/bootcamp)

[Let's Get Rusty Learning Guide 🦀](https://learn.letsgetrusty.com/index.html)

[Let's Get Rusty Learning Guide 🦀 - github repository](https://github.com/letsgetrusty/rust-learning-guide)

[ULTIMATE Rust Lang Tutorial! - Let's Get Rusty](https://www.youtube.com/watch?v=OX9HJsJUDxA&list=PLai5B987bZ9CoVR-QEIN9foz4QCJ0H2Y8)

[Idiomatic Rust - Let's Get Rusty](https://www.youtube.com/playlist?list=PLai5B987bZ9A5MO1oY8uihDWFC5DsdJZq)

[Rust Exercises by Mainmatter](https://rust-exercises.com/)

[Getting Started with Rust](https://www.youtube.com/watch?v=ZzRAdD38cRI&list=PLb1VOxJqFzDcAP5RwrGR3R8WFxGdQnJ8z)

[Learning Rust - DevOnDuty](https://www.youtube.com/watch?v=PMa2m0Fe-Q4&list=PLu-ydI-PCl0NFd2u8Vh2w7gUH_CzqxrhS)

[Build your own JIRA with Rust](https://github.com/LukeMathWalker/build-your-own-jira-with-rust)

[Learning Rust in 2024](https://github.com/pretzelhammer/rust-blog/blob/master/posts/learning-rust-in-2024.md)

[Rust Adventure, with Chris Biscardi](https://www.rustadventure.dev/)


### videos y lecturas varias

[10 Reasons Not To Use Rust (The Whole Truth) - fasterthanlime](https://www.youtube.com/watch?v=ul9vyWuT8SU)

[Rust Is Easy -Convince your boss to use Rust - No Boilerplate](https://www.youtube.com/watch?v=CJtvnepMVAU&list=PLZaoyhMXgBzqkaLKR8HHWZaASMvW4gRtZ&index=4)

[Build Blazing Fast Backends with Rust & Actix Web - Flo Woelki](https://www.youtube.com/watch?v=4Q7FAMydzOU)

[Getting started with Tokio. The ultimate starter guide to writing async Rust - Dreams of Code](https://www.youtube.com/watch?v=dOzrO40jgbU)

[SQLx is my favorite PostgreSQL driver to use with Rust - Dreams of Code](https://www.youtube.com/watch?v=TCERYbgvbq0)

[Rust's Most Important Containers 📦 10 Useful Patterns - Code to the Moon](https://www.youtube.com/watch?v=f82wn-1DPas)

[Rust for Rustaceans by Jon Gjengset](https://rust-for-rustaceans.com/)

[Learn to code anything in Rust - How To Code It](https://www.howtocodeit.com/)

[The ultimate guide to Rust newtypes](https://www.howtocodeit.com/articles/ultimate-guide-rust-newtypes)

[Zero To Production In Rust - an opinionated introduction to backend development in Rust - Luca Palmieri](https://www.zero2prod.com/index.html)

[Matt Trighetti's Blog](https://mattrighetti.com/)

[Using unwrap() in Rust is Okay](https://burntsushi.net/unwrap/)

[Why Rust?](https://rerun.io/blog/why-rust)

[8 deadly mistakes beginner Rust developers make - YouTube](https://www.youtube.com/watch?v=PbR4ECFIckg)

[Top 5 deadly Rust anti-patterns to avoid - YouTube](https://www.youtube.com/watch?v=SWwTD2neodE)

[Common Newbie Mistakes and Bad Practices in Rust](https://adventures.michaelfbryan.com/posts/rust-best-practices/bad-habits/)

[Rust for Beginners](https://www.youtube.com/playlist?list=PLptbpfKzsc3AGAZKEAgozrcetsCHQj2Rq)

[JC - Rust - Everything Rust Programming - Tutorials, Courses, Tips, Examples,...](https://www.youtube.com/playlist?list=PL7r-PXl6ZPcCIOFaL7nVHXZvBmHNhrh_Q)

[Visualizing memory layout of Rust's data types](https://www.youtube.com/watch?v=7_o-YRxf_cc)

[How to Split Strings in Rust](https://rustjobs.dev/blog/how-to-split-strings-in-rust/)

[String Concatenation in Rust](https://rustjobs.dev/blog/string-concatenation-in-rust/)

[C++ RAII vs Rust OBRM - Part 1](https://www.youtube.com/watch?v=AnFaf-L_DfE) RAII (Resource Adquisition Is Initialization) vs OBRM (Ownership Based Resource Management) [C++ RAII vs Rust OBRM - Part 2](https://www.youtube.com/watch?v=7EcNkr6KFy0)

[GUI programming with Rust](https://medium.com/digitalfrontiers/gui-programming-with-rust-c71fe4051b1a)

[Dario - Youtube channel](https://www.youtube.com/@dario.lencina/featured)

[Let's Build a RUST WebAssembly Frontend Video App With Yew](https://youtu.be/In09Lgqxp6Y)

[Rust on AWS (Amazon Web Services)](https://aws.amazon.com/developer/language/rust/)

[Floating-point cheat sheet for Rust](https://floating-point-gui.de/languages/rust/)

[UUID v7 vs. v4 + Rust Programming Examples](https://www.youtube.com/watch?v=zIebRwU0FOw&list=PL7r-PXl6ZPcCIOFaL7nVHXZvBmHNhrh_Q&index=3)

[RSTY stack - Build your entire tech stack in Rust](https://youtu.be/luOgEhLE2sg)

[How do I create a global, mutable singleton? - StackOverflow](https://stackoverflow.com/questions/27791532/how-do-i-create-a-global-mutable-singleton)

[MariaDB - Writing User-Defined Functions in Rust](https://mariadb.org/writing-user-defined-functions-in-rust/)

[Advanced Rust testing course](https://rust-exercises.com/advanced-testing/00_intro/00_welcome.html)

[EuroRust event](https://www.youtube.com/@eurorust)

[Rust Nederland (RustNL) - Youtube channel](https://www.youtube.com/@rustnederlandrustnl/featured)

[The existential threat against C++ and where to go from here](https://www.youtube.com/watch?v=gG4BJ23BFBE)

[Rust in the Android platform](https://security.googleblog.com/2021/04/rust-in-android-platform.html)

[Deploy your Rust project in 20 minutes](https://www.youtube.com/watch?v=_gMzg77Qjm0)

[Encapsulation in Rust - David Choi](https://www.youtube.com/watch?v=3Oj_McqC_ys)

[JC -  Rust Programming - Top Techniques and Tutorials](https://www.youtube.com/playlist?list=PL7r-PXl6ZPcCTiOerk-Nd9uw56KVXKtNV)


### conferencias, canales, blogs,...

[Let's Get Rusty - Youtube channel](https://www.youtube.com/@letsgetrusty)

[EuroRust conference](https://eurorust.eu/)

[Rust - Youtube channel](https://www.youtube.com/@RustVideos/featured)

[Thorsten Hans blog](https://www.thorsten-hans.com/tags/rust/)

[pretzelhammer's Rust blog 🦀](https://github.com/pretzelhammer/rust-blog/blob/master/readme.md)


#### Let's Get Rusty

[Rust is easy... (we make it hard)](https://www.youtube.com/watch?v=06CVZKbNvgE)

[Common Programming Concepts in Rust](https://www.youtube.com/watch?v=2V0JaMVjzws)

[The Rust Survival Guide](https://www.youtube.com/watch?v=usJDUSrcwqI)

[The magic of Rust's type system](https://www.youtube.com/watch?v=NDIU1GSBrVI)

[Error Handling in Rust](https://www.youtube.com/watch?v=wM6o70NAWUI)

[Simple error handling in Rust](https://www.youtube.com/watch?v=g6WUHcyjsfc)

[Understanding Ownership in Rust](https://www.youtube.com/watch?v=VFIOSWy93H0)

[How to fight Rust's borrow checker... and win](https://www.youtube.com/watch?v=Pg07HQJ0tvI)

[Top 10 Rust crates you must know](https://www.youtube.com/watch?v=FPRH66r-zUQ)

[MUST know Rust database libraries](https://www.youtube.com/watch?v=FW4oUXHly8c)

[5 traits your Rust types must implement](https://www.youtube.com/watch?v=Nzclc6MswaI)

[5 deadly Rust anti-patterns to avoid](https://www.youtube.com/watch?v=SWwTD2neodE)

[The genius of Rust constructors](https://www.youtube.com/watch?v=6mVkva3_z9M)

[Ultimate VS Code setup for Rust development (2025)](https://www.youtube.com/watch?v=ZhedgZtd8gw)

[Deploy your Rust project in 20 minutes](https://www.youtube.com/watch?v=_gMzg77Qjm0)

[Rust Project Ideas for Beginners](https://www.youtube.com/watch?v=6WXT1JOnH7c)

[Rust stole C++'s best features](https://www.youtube.com/watch?v=sjsnuirLyKM)

#### The Dev Method

[Rust: Structs](https://www.youtube.com/watch?v=MDT9vNjtGsY)

[Rust: Ownership and Borrowing](https://www.youtube.com/watch?v=DFx1Eo6apkQ)

[Rust: Error Handling](https://www.youtube.com/watch?v=y3wUCb-uS3g)

[Rust: Iterators](https://www.youtube.com/watch?v=Zcg6wmqdbzc)

[Rust: Closures](https://www.youtube.com/watch?v=IAeCSglFUK0)

[Rust: Automated Testing](https://www.youtube.com/watch?v=vft2M1aRev4)

[Rust: Generics, Traits, Lifetimes](https://www.youtube.com/watch?v=JLfEiJhpTbE)

#### Mainmatter - Rust exercises

[Rust Exercises](https://rust-exercises.com/)

[100 Exercises To Learn Rust](https://rust-exercises.com/100-exercises/)

[Advanced Rust testing](https://rust-exercises.com/advanced-testing/)

[Rust telemetry workshop](https://rust-exercises.com/telemetry/)

[Rust-Python interoperability](https://rust-exercises.com/rust-python-interop/)

#### 300 seconds of Rust

[4. Strings and string slices (&str)](https://www.youtube.com/watch?v=uo7Z4N5QAsM)

[5. Rust ownership system](https://www.youtube.com/watch?v=ebnICYrM9zs)

[10. Enum and Match](https://www.youtube.com/watch?v=jL-N0jRlT6E)

[11. Option](https://www.youtube.com/watch?v=OrL0DEChwpQ)

#### creativcoder

[Getting started with Rust programming language 🦀 2020: 1. Setup with rustup](https://www.youtube.com/watch?v=2hY7Uib2UDM)

[Getting started with Rust programming language 🦀 2020: 2. Development environment setup with VSCode](https://www.youtube.com/watch?v=NmCT7-j4xpU)

[Getting started with Rust programming language 🦀 in 2020: 3. Cargo crash course](https://www.youtube.com/watch?v=QMNjzulRodk)

[Getting started with Rust programming language 🦀 2021: 4. Building a CLI app in Rust](https://www.youtube.com/watch?v=4km2UijVC3M&list=PLfyJcJbPAedRqjVaOd-P8wp_Wy9RIN7Oq)


#### Francesco Ciulla

[Getting familiar with Rust's syntax](https://www.youtube.com/watch?v=AuzoABH7fRA)

[Rust Installation, Hello World, Hello Cargo - Full Crash Rust Tutorial for Beginners](https://www.youtube.com/watch?v=R33h77nrMqc&list=PLPoSdR46FgI412aItyJhj2bF66cudB6Qs)


#### Jon Gjengset

[Rust for Rustaceans - book](https://rust-for-rustaceans.com/)

[Crust of Rust: Lifetime Annotations](https://www.youtube.com/watch?v=rAl-9HwD858&list=PLqbS7AVVErFiWDOAVrPt7aYmnuuOLYvOa)

[Solving distributed systems challenges in Rust](https://www.youtube.com/watch?v=gboGyccRVXI)


#### MrJakob

[Quick Bytes - Installing Rust](https://www.youtube.com/watch?v=Xc_dDtJzpk4&list=PLy68GuC77sUQBwgU_f_RVHKzGvX-IpG9B)

[The Ray Tracer Challenge - 001 - Points and Vectors - Chapter 01 - Part 1](https://www.youtube.com/watch?v=xGEDQXBMdV4&list=PLy68GuC77sUTyOUvDhVboQoOlHoa4XrSO)

[Image Manipulation - Unicode & ANSI Alchemy: Turn Text into Images in Your Console](https://www.youtube.com/watch?v=MMJ1KRzWZwI&list=PLy68GuC77sUT7xppVqjE4dh3IopqrIdmv)


#### Thomas - nyxtom

[Rust Programming Exercises: Markdown Blog with Tide](https://www.youtube.com/watch?v=BcR6TnkKubQ&list=PLb1VOxJqFzDdS-xV9OkKKPfXvtQ8y1Wzk)

[Getting Started with Rust](https://www.youtube.com/watch?v=ZzRAdD38cRI&list=PLb1VOxJqFzDcAP5RwrGR3R8WFxGdQnJ8z)

#### Oliver Jumpertz

[Rust's Option In 180 Seconds](https://www.youtube.com/watch?v=988N79pAj3M)

[You Should Really Know These Traits in Rust](https://www.youtube.com/watch?v=tWa19Td87gw)



#### Rust Youtube channel

(https://www.youtube.com/@RustVideos)

[Rust Linz, November 2021 - Serde Shenanigans by Armin Ronacher](https://www.youtube.com/watch?v=UhZGYS13twc)

[Rust Linz January 2023 - The Builder Pattern and Typestate Programming by Stefan Baumgartner](https://www.youtube.com/watch?v=k8kd22jNcps)


