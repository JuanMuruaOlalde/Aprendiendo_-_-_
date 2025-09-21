# Desarrollo de aplicaciones Android

En este documento se recogen conceptos generales aún válidos, pero está un tanto desfasado. Se centra sobre todo en la forma de programar "tradicional": utilizando Views, Bindings, Java, la biblioteca `android`, algo de la biblioteca `androidx` (Jetpack),...

Por eso conviene destacar que: 

- En estos momentos (2025) Google está potenciando el desarrollo de aplicaciones usando Jetpack Compose para el interfaz de usuario y el lenguaje Kotlin para programar.

- Sin embargo, en el mercado sigue habiendo muchas aplicaciones realizadas usando Views y Bindings para el interfaz de usuario y los lenguajes Java o Kotlin para programar. 

Comentar también de que la forma de programar aplicaciones Android ha tenido (y sigue teniendo) un desarrollo bastante rápido. Google ha ido probando diversas maneras de hacer las cosas. Por lo que no es de extrañar que convivan todas esas diversas maneras de trabajar. Tenerlo en cuenta a la hora de buscar información o de mantener aplicaciones ya existentes.

Como siempre, para aplicaciones nuevas es conveniente utilizar lo que sea la última tendencia establecida en el momento de comenzar con ellas.

aviso: La tendencia actual es a usar Kotlin como lenguaje de programación. Se podria decir que Hoy en día (2025) el lenguaje Java para desarrollo Android está en desuso.

[Android mobile development has been Kotlin-first since Google I/O in 2019](https://kotlinlang.org/docs/android-overview.html)

[Full 2025 Kotlin Crash Course For Beginners - Philipp Lackner](https://www.youtube.com/watch?v=dzUc9vrsldM)

aviso:  La forma de programar "moderna" del interface de usuario es utilizando Compose y la biblioteca `androidx` (Jetpack):

[MAD, Modern Android Development](https://developer.android.com/courses/pathways/android-architecture)

[JETPACK COMPOSE - MoureDev by Brais Moure](https://www.youtube.com/watch?v=eNuaMn4ukdo&list=PLNdFk2_brsRclwvl8ruCo_q36jVbXcCCx&index=1)

[The Jetpack Compose Beginner Crash Course for 2023 - Philipp Lackner](https://www.youtube.com/watch?v=6_wK_Ud8--0)

[Beginner's Crash Course to the New Navigation 3 Library - Philipp Lackner](https://www.youtube.com/watch?v=jhrfx8Uk_y0)

Para terminar la introducción, comentar que, yendo más allá de Android, entre Google y JetBrains están desarrollando una iniciativa para convertir Compose/Kotlin en un sistema general para desarrollar aplicaciones multiplataforma. 

[Kotlin Multiplataform](https://www.jetbrains.com/kotlin-multiplatform/) 

[Compose Multiplataform](https://www.jetbrains.com/compose-multiplatform/)


## Manos a la obra, algunas pinceladas para comenzar a trabajar

https://developer.android.com/

### Herramientas

[Android Developers Tools](https://developer.android.com/)

[Android Studio](https://developer.android.com/studio)

[Kotlin](https://developer.android.com/kotlin/first)

### Bibliotecas

- [Biblioteca android](https://developer.android.com/reference/packages) || [Support Library](https://developer.android.com/topic/libraries/support-library) La biblioteca estandard original del sistema operativo Android. (deprecated)

- [Biblioteca androidx](https://developer.android.com/reference/androidx/packages) || [Jetpack](https://developer.android.com/jetpack/androidx/explorer) La actual biblioteca estandard del sistema operativo Android.

- [Google Play Services](https://developers.google.com/android/guides/overview): productos y herramientas para desplegar y vender aplicaciones en la tienda online de Google.

- [Firebase framework/platform](https://firebase.google.com/): sobre la base de Google Cloud, productos y herramientas para:
  - [construir aplicaciones (Build)](https://firebase.google.com/products-build): autentificación, mensajeria, almacenamiento, machine learning,...
  - [desplegar aplicaciones (Run)](https://firebase.google.com/products-run): despliegues progresivos, notificaciones, observabilidad, configuración remota,...

- [Supabase framework/platform](https://supabase.com/): una alternativa open source a Firebase.


### Algunos trucos interesantes

[android.util.Log](https://developer.android.com/reference/android/util/Log)

[Logcat](https://developer.android.com/studio/debug/logcat)

[Almacenar información privada](https://developer.android.com/build/gradle-tips#remove-private-signing-information-from-your-project)

### Algunos componentes interesantes

- [Recyclerview](https://developer.android.com/jetpack/androidx/releases/recyclerview)
    : display large sets of data in your UI while minimizing memory usage.

- [Room](https://developer.android.com/jetpack/androidx/releases/room)
    : a persistence library, provides an abstraction layer over SQLite.

- [Retrofit](https://square.github.io/retrofit/) : a type-safe HTTP client for Android and Java.

- Dependency inyection with [Hilt](https://developer.android.com/training/dependency-injection).

- [Android WebView](https://danielme.com/2012/05/19/android-webview-incrustar-un-navegador-en-nuestras-apps/): cómo incrustar un navegador en nuestras apps

[mappings from the old support library packages to the new androidx packages](https://developer.android.com/jetpack/androidx/migrate/class-mappings)


 
### Algunos plugins interesantes

[JSON to Kotlin class](https://plugins.jetbrains.com/plugin/9960-json-to-kotlin-class-jsontokotlinclass-)

### Algunas muestras de código y enlaces interesantes

(https://developer.android.com/samples)

(https://github.com/android/architecture-components-samples)

[El nuevo repositorio de muestras](https://github.com/android/platform-samples)

[El viejo repositorio de muestras - views](https://github.com/android/views-widgets-samples/tree/main)

[Aplicaciones de muestra - arquitectura](https://github.com/android/architecture-samples)

[Aplicaciones de muestra - Compose](https://github.com/android/compose-samples)

[70+ Jetpack Compose Projects For Beginners And Experts](https://www.theinsaneapp.com/2021/08/jetpack-compose-sample-examples-projects-and-android-apps.html)

(https://www.youtube.com/@AndroidDevelopers)

(https://medium.com/androiddevelopers)

(https://medium.com/android-beginners)


## Conceptos generales

### Estructura de carpetas y archivos en un proyecto

nota: para ver todas las carpetas tal y como están en el disco, poner el modo de vista del explorador en "Project Files" en lugar de en "Android".

Prácticamente todo lo interesante está dentro de la carpeta `src` / `main`.

- En la parte de /`java` está el código.

- En la parte de /`res` están los recursos para el interfaz de usuario.

Algunos archivos interesantes:

- `src` / `build.gradle.kts` : la configuración de la compilación, las dependencias,...

- `src` / `main` / `AndroidManifest.xml` : la configuración de la aplicación cuando vaya a correr en el dispositivo Android; por ejemplo, los permisos que necesita. (https://developer.android.com/guide/topics/manifest/manifest-intro)

- `src` / `main` / `java` / `MainActivity.java` : el punto de arranque de la aplicación.

- `src` / `main` / `res` / `layout` / `activity_main.xml` : declaración de la primera pantalla de la aplicación. 

Algunas carpetas interesantes:

- `src` / `main` / `res` / `layout` : aquí van los .xml que declaran las pantallas y fragmentos del interfaz de usuario.

- `src` / `main` / `res` / `navigation` : aquí va el .xml que declara las acciones de navegación entre fragmentos, el mapa de navegación del IU.

- `src` / `main` / `res` / `menu` : aquí van los .xml que declaran componentes del IU tales como "top app bar", "bottom navigation bar", "navigation drawer",... 

- `src` / `main` / `res` / `drawable` : aquí van recursos "dibujables" tales como imágenes e iconos.

- `src` / `main` / `res` / `values` : aquí va el .xml que recoge textos para permitir su traducción a distintos idiomas.



### Actividades (Activity) y fragmentos (Fragment)

Las [actividades](https://developer.android.com/guide/components/activities/intro-activities) son elementos globales. Una actividad representa un punto de entrada a la aplicación.

Los [fragmentos](https://developer.android.com/guide/fragments) son elementos parciales, reutilizables, de la interfaz. Tales como pantallas o grupos de controles. Los fragmentos representan las distintas partes por las que el usuario va navegando.

Los [servicios](https://developer.android.com/develop/background-work/services) son procesos auxiliares corriendo "de fondo", sin interfaz de usuario.

### Ciclo de vida 

Una actividad o un fragmento va pasando por varios estados mientras la aplicación está en marcha. Según esos estados, se van llamando a los métodos correspondientes: onCreate(), onCreateView(), onViewCreated(), onStart(), onResume(), onPause(), onStop(), onDestroy(),...

En esos métodos se pone el código que se desea sea ejecutado en cada uno de esos momentos concretos de la vida de la actividad o del fragmento.

Los cambios de estado pueden ser iniciados por el usuario o por el propio sistema Android.

aviso: Las actividades y fragmentos pueden ser destruidas en ciertas fases del ciclo de vida, para ser recreadas de nuevo; (por ejemplo en los cambios de orientación de pantalla de landscape a portrait o viceversa). Tenerlo presente si se necesita preservar alguna información de estado. 

nota: en esos casos suele ayudar mucho tener una arquitectura MVMV, ya que la parte ViewModel no se ve afectada por los cambios de configuración en la parte View.

aviso: Los ViewModel se ven afectados cuando una aplicación está inactiva y el sistema Android decide retirar la aplicación de memoria por falta de espacio, para recrearla después de nuevo cuando el usuario la vuelve a activar.

Resumiendo: es importante ser consciente de las implicaciones que tienen las distintas fases y estados por los que puede pasar una aplicación a lo largo de su ciclo de vida.


[Activity lifecycle](https://developer.android.com/guide/components/activities/activity-lifecycle)

[Fragment lifecycle](https://developer.android.com/guide/fragments/lifecycle)

[Lifecycle Avare Components](https://developer.android.com/topic/libraries/architecture/lifecycle)

[Handle configuration changes - Android Developers Guide](https://developer.android.com/guide/topics/resources/runtime-changes)

[Deep dive into Fragments when to use onCreate(), onCreateView and onViewCreated()](https://medium.com/@abdulqadirtr/deep-dive-into-fragments-when-to-use-oncreate-oncreateview-and-onviewcreated-33faf6454955)

A grandes rasgos:

- `onCreate()` : Se suele encargar de inicializar recursos en memoria (pensar en este método como el constructor de la clase).

- `onCreateView()` :  Se suele encargar de preparar la vista que mostrará el fragmento. 

  nota: Android tiene un concepto bastante curioso, el `Inflater` (pensar como si las declaraciones .xml del interfaz fueran un hinchable que se infla y se hace operativo con el objeto `Inflater`)

- `onViewCreated() : Se suele encargar de rellenar con datos esa vista.

- `onStart()` y `onResume()` : Estos dos métodos son llamados, en ese orden, cuando la navegación muestra el fragmento.

- `onPause()` : Este método es llamado cuando la navegación oculta el fragmento.

- `onStop()` : ?

- `onDestroyView()` y `onDestroy()` : Se suelen encargar de la limpieza de recursos en memoria (pensar en esos métodos como los destructores de la clase).
- 

### Diversos tipos de aplicación

Las aplicaciones Android puede ejecutarse en:

- Móviles o tabletas.

- Dispositivos "vestibles", tales como relojes inteligentes.

- Televisores inteligentes.

- Sistemas embarcados en vehiculos.

[Device compatibility overview](https://developer.android.com/guide/practices/compatibility)

[Distintos diseños de interfaz según distintos dispositivos](https://developer.android.com/design/ui)

[Screen compatibility overview](https://developer.android.com/guide/practices/screens_support.html)

[Build responsive navigation](https://developer.android.com/develop/ui/views/layout/build-responsive-navigation)


## Conceptos sobre interfaz de usuario

### Un poco de historia...

Al inicio (allá por la primera década de los 2000), el interfaz de usuario se programaba directamente. Con el soporte de unos cuantos elementos gráficos (Widgets) y unas cuantas formas de ubicar (Layouts) esos elementos por la pantalla. Cada cual programaba los interfaces como estimaba oportuno, resultando multitud de diseños diferentes.

Para unificar criterios, en 2014 Google lanzó [Material Design](https://en.wikipedia.org/wiki/Material_Design). Material es un conjunto de principios para diseñar interfaces Android. Estos principios han ido evolucionando a lo largo del tiempo: m1, m2, m3,...

[M2, principalmente pensado para interfaces usando "Views"](https://m2.material.io/)

[M3, principalmente pensado para interfaces usando "Compose"](https://m3.material.io/)

Desde el nacimiento de Android (allá por 2008) el interfaz de usuario se ha venido construyendo con el paradigma "views":

- Por un lado, el diseño de las pantallas se declara en archivos XML.

- Por otro lado, la operatoria de la interacción con las pantallas se implementa en código (Java o Kotlin).

En 2021 Google lanzó la biblioteca `Jetpack Compose`. En este nuevo paradigma:

- El diseño de las pantallas se declara en el propio código (funciones anotadas con `@Composable`). 

- Y todo, tanto el diseño como la funcionalidad, va programado en lenguaje Kotlin.

Merece destacar también que a partir de 2017, Google ha ido mostrando de forma cada vez más clara su preferencia por el lenguaje de programación Kotlin. Siendo hoy en día el lenguaje en que se recomienda programar las aplicaciones Android. Tanto en el paradigma "views", como en el paradigma "compose".

https://developer.android.com/develop/ui


### "Views" y bindings

[Layouts in views](https://developer.android.com/develop/ui/views/layout/declaring-layout)

nota: En la literatura Android, cada componente del interfaz se denomina "View". Esa palabra puede referirse tanto a un simple campo de texto o a un simple botón, como a un grupo de radio butons o a un menú de navegación, como hasta a una pantalla completa. Cualquier elemento de interfaz es un "View"; (aunque a los más simples a veces se les denomina "Widgets")

Se puede construir todo el interface programandolo directamente en el código fuente. Pero lo habitual suele ser separarlo en dos partes:

- La declaración del interfaz va en archivos .xml, en la carpeta `main` / `res` / `layout`.

- La funcionalidad de cómo interactuar con el interfaz va en archivos de código .java o .ktl, en la carpeta `main` / `java`.

Para ligar esas dos partes entre sí, hay varias maneras:

- [findViewById()](https://developer.android.com/reference/android/view/View#ids)

  Se identifican los elementos de interfaz marcandolos con la etiqueta `@+id:/` en el archivo xml.

  Luego se buscan esos elementos con la función `findViewById(nombreid)` para asignarlos a variables con las interactuar en el programa.


- [viewBinding](https://developer.android.com/topic/libraries/view-binding)

  En lugar de estar buscando uno a uno cada elemento `@+id:/` del interfaz. Se pueden mapear todos a la vez a través de una sola variable "binding".

  Para usar esto en Android Studio, se ha de activar en el archivo `build.gradle.kts` de la carpeta `app`
  ```
    buildFeatures {
        viewBinding = true
    }
  ```

  En el código, el mapeo se realiza al llamar a la función `inflate()` sobre la vista o fragmento correspondiente.

  Para más detalles, ver más adelante; en la sección de "Aspectos prácticos" "viewBinding".

- [dataBinding](https://developer.android.com/topic/libraries/data-binding)

  Se puede ir un paso más allá del viewBinding, mapeando directamente elementos del interfaz contra variables de datos en el código. De esta forma, cada vez que se modifica el valor de una de esas variables, el interfaz es notificado y se actualiza automáticamente.

  Para usar esto en Android Studio, se ha de activar en el archivo `build.gradle.kts` de la carpeta `app`
  ```
    buildFeatures {
        dataBinding = true
    }
  ```
nota: dataBinding incluye viewBinding (https://developer.android.com/topic/libraries/view-binding#data-binding)


### Layouts

[Layout is the visual arrangement of elements on the screen](https://m2.material.io/design/layout/understanding-layout.html)

https://developer.android.com/develop/ui/views/layout/declaring-layout

- `FrameLayout`, una caja donde ir colocando componentes.
  (https://developer.android.com/reference/android/widget/FrameLayout#summary)

- `LinearLayout`, para colocar componentes uno a continuación de otro; horizontalmente o verticalmente.
   (https://developer.android.com/reference/android/widget/LinearLayout)
 
- `GridLayout`, para colocar componentes según celdas de una rejilla rectangular.
   (https://developer.android.com/reference/android/widget/GridLayout)

- `ConstraintLayout`, es el mas "responsive" ya que indica las relaciones entre componentes más que colocarlos en arreglos predeterminados.
   (https://developer.android.com/reference/androidx/constraintlayout/widget/ConstraintLayout)

   [Build a responsive UI with ConstraintLayout](https://developer.android.com/develop/ui/views/layout/constraint-layout)



### Jetpack Compose

[Develop UI with JetPack Compose](https://developer.android.com/compose)

[Develop UI for Android](https://developer.android.com/develop/ui)

Con Jetpack Compose, todo el interface se define en el propio código. Las funciones para componer las diversas partes del interfaz se anotan con la etiqueta `@Composable`. El interfaz se construye de forma automatica al llamar a la función `setContent()`.

Esta manera de funcionar se ha de activar en el archivo `build.gradle.kts` de la carpeta `app`
```
buildFeatures {
    compose = true
}
```

También se han de declarar las dependencias correspondientes
```
dependencies {
    val composeBom = platform("androidx.compose:compose-bom:2024.12.01")
    implementation(composeBom)
    androidTestImplementation(composeBom)

    // Choose one of the following:
    // Material Design 3
    implementation("androidx.compose.material3:material3")
    // or Material Design 2
    implementation("androidx.compose.material:material")
    // or skip Material Design and build directly on top of foundational components
    implementation("androidx.compose.foundation:foundation")
    // or only import the main APIs for the underlying toolkit systems,
    // such as input and measurement/layout
    implementation("androidx.compose.ui:ui")

    // Android Studio Preview support
    implementation("androidx.compose.ui:ui-tooling-preview")
    debugImplementation("androidx.compose.ui:ui-tooling")

    // UI Tests
    androidTestImplementation("androidx.compose.ui:ui-test-junit4")
    debugImplementation("androidx.compose.ui:ui-test-manifest")

}
```

Se utiliza la biblioteca [Jetpack Compose](https://developer.android.com/develop/ui/compose/documentation)

[curso para aprender Jetpack Compose](https://developer.android.com/courses/jetpack-compose/course)

[principios Material Design para diseñar interfaces en Jetpack Compose](https://m3.material.io/develop/android/jetpack-compose)


Las interfaces Jetpack Compose son interfaces declarativas que se enganchan a un estado y se auto-actualizan cada vez que ese estado cambia.

nota: (declarativo = decir lo que se quiere que se haga)  
nota: (imperativo = indicar paso a paso lo que se ha de hacer)

El funcionamiento de Compose se basa en tres elementos:

- Una biblioteca UI suministra los componentes con los que definir el interface.

  (https://developer.android.com/reference/kotlin/androidx/compose/material3/package-summary)

- Un plugin de Gradle se encarga de compilar las funciones `@Composable` y generar el código necesario para pintar el interface.

- Un runtime se encarga de refrescar el interface cada vez que el estado subyacente asociado se modifica.

nota: si queremos ver cómo va quedando el interface, tenemos que añadir la etiqueta `@Preview` al componente `@Composable` del que deseemos ver su apariencia.

#### Layouts de Compose

[Layout is the visual arrangement of elements on the screen](https://m3.material.io/foundations/layout/understanding-layout/overview)

`Box` (componentes dentro de una caja) (es el reemplazo de FrameLayout).

`Row` y `Column` (componentes en horizontal y en vertical, respectivamente).

`LazyRow`, `LazyColumn` y `LazyVerticalGrid`, variantes para cuando haya muchos componentes (son el reemplazo de RecycleView).

`ConstraintLayout` (sigue como siempre).

`Scaffold` (el coordinador general de las pantallas de la aplicación).

`Surface` (una caja más sofisticada).

`Card` (una caja especializada).

Además de estos layouts estandares, se pueden definir layouts propios partiendo del componente base `Layout`.

Las caracteristicas de cualquiera de estos layouts se ajustan pasandole [Modifiers](https://developer.android.com/develop/ui/compose/modifiers) como parámetros.  
Recordar que los componentes en Jetpack Compose son funciones anotadas @Composable; y, como tales funciones, pueden recibir parámetros().

### Navegación de una pantalla a otra de la aplicación

Los sistemas Android tiene un comportamiento específico al que los usuarios están acostumbrados. Es importante respetarlo en las aplicaciones.

(https://developer.android.com/guide/navigation/principles)

Hay diversas formas de navegar por las distintas pantallas de la aplicación:

- La más simple: con botones puestos expresamente por nosotros que te mandan de un lado para otro.

- La más estandard, con patrones tales como:
  - menú en la parte de arriba de la pantalla, "top app bar".
  - menú en la parte inferior de la pantalla, "bottom navigation bar".
  - menú desplegable en un lateral, "navigation drawer".

A lo largo del tiempo ha habido varias maneras de organizar una aplicación y, en ocasiones, se han utilizado varias actividades y/o fragmentos. Realizándose la navegación de variadas maneras. 

Pero hoy en día se aboga por tener una única actividad (MainActivity) y varios fragmentos para las distintas pantallas de la aplicación. Realizándose la navegación a base de transiciones de un fragmento a otro.

[Single activity: Why, when, and how (Android Dev Summit '18)](https://www.youtube.com/watch?v=2k8x8V77CrU)

La navegación de un fragmento a otro se solía realizar usando [FragmentTransaction](https://developer.android.com/guide/fragments/transactions).

Pero hoy en día se utiliza el componente `Navigation` de la biblioteca Jetpack.

[NavController - Navigation Controller](https://developer.android.com/guide/navigation/navcontroller?hl=es-419)

[Android Jetpack: presentando Navigation Component](https://youtu.be/Y0Cs2MQxyIs)

[Jetpack Navigation](https://developer.android.com/jetpack/androidx/releases/navigation)

[Jetpack Navigation - User Guide](https://developer.android.com/guide/navigation)

[Migrate from Activities to Fragments](https://www.youtube.com/watch?v=_44UHTa0GUA)

[Complete Guide for Beginners](https://medium.com/@pandeyvishakha21/jetpacks-navigation-component-complete-guide-for-beginners-caad21b67ba9)

[Navigation component](https://medium.com/@muhamed.riyas/navigation-component-the-complete-guide-c51c9911684)

notas: 

En la navegación entre pantallas, también tiene su importancia la "pila de actividades": el "botón atrás" con el que el usuario puede volver a los destinos previos que había visitado.

[NavController.navigateUp() , NavController.popBackStack()](https://developer.android.com/guide/navigation/backstack?hl=es-419)

Y también hay que prestar atención al estado y al ciclo de vida de cada pantalla, controlados en parte por el propio sistema operativo Android.


### Barras y menús de navegación

- "Top app bar", la barra superior es más que solo navegación; pero también incluye navegación
  (https://m2.material.io/components/app-bars-top#anatomy)
  
  (https://m3.material.io/components/top-app-bar/overview)

- `BottomNavigationView`, una botonera para navegar entre un máximo de cinco destinos.   
  (https://danielme.com/2023/09/01/android-bottomnavigationbar-listener-badges-navigationcomponent/)

- `Navigation Drawer`, un menú lateral desplegable para navegar entre cualquier número de destinos.
  (https://danielme.com/2023/06/22/android-sidebar-menu-with-navigation-drawer/)



### Notificaciones y alertas

- `Toast`:  Pequeños mensajes de aviso

  (https://developer.android.com/guide/topics/ui/notifiers/toasts)

- `Snackbar`: Pequeños mensajes en la parte inferior de la pantalla

  (https://m2.material.io/components/snackbars)
  
  (https://developer.android.com/develop/ui/views/notifications/snackbar)
  
  (https://danielme.com/2015/07/30/diseno-android-notificaciones-con-snackbar/)

- `AlertDialog`: Mensajes en el centro de la pantalla

  (https://developer.android.com/develop/ui/views/components/dialogs)

- `Notifications`: Mensajes cuando la aplicación está corriendo de fondo.

  (https://m2.material.io/design/platform-guidance/android-notifications.html)

  (https://developer.android.com/develop/ui/views/notifications/build-notification)

- `Cloud Messaging`: Mensajes a través de la red.

  (https://firebase.google.com/docs/cloud-messaging)


### Gestos

https://m3.material.io/foundations/interaction/gestures

- un toque y doble toque, (tap and double tap)
- un toque largo, (long press)
- desplazarse por la pantalla arrastrando, (scroll and pan)
- arrastrar un elemento para hacer algo con él, (swipe)
- arrastrar la pantalla a derecha o izquierda para navegar a otra, (swipe)

### Recursos

https://developer.android.com/guide/topics/resources/providing-resources


### Unidades de medida

[Dimension units](https://developer.android.com/guide/topics/resources/more-resources#Dimension)

Las más usadas son:

- dp : versión abstracta de un pixel, son "pixeles" independientes de la densidad (pixel/mm2) de la pantalla; es la medida más habitual.

- sp : otra versión abstracta de un pixel, son "pixeles" independientes de la escala de la pantalla; son útiles para definir tamaños de fuente de letra.

- mm : milimetro, unidad real de tamaño en pantalla.


## Conceptos sobre arquitectura interna

Para aplicaciones sencillas de pocos componentes, se pueden implementar como se nos ocurra. 

Pero para aplicaciones más elaboradas, es mejor utilizar una arquitectura bien establecida. Organizando los componentes en capas, según el trabajo que haga cada uno. Dejando claras las relaciones entre componentes, los interfaces entre ellos.

Al estar cada aspecto de la aplicación separado en su propia capa y quedar claras las dependencias entre ellas, es más sencillo modificar cada parte sin afectar demasiado a las demás.

Todo ello con la idea de permitir evolucionar la aplicación de manera más sencilla y segura.

[Guide to app architecture in Android](https://developer.android.com/topic/architecture)

[Qué son los Patrones de Presentación: MVC, MVP, MVVM](https://www.youtube.com/watch?v=S3h-u4M1q3w)

[MVP, MVVM y Clean Architecture](https://youtu.be/3vQcVAvwpCw?list=PLrn69hTK5FByUkR-HQbC_ROmaH0GKsrDS)

[Building a scalable, modularized, testable app from scratch, in Kotlin and MAD](https://www.youtube.com/watch?v=qX6zmKY4KP0)


### El Modelo (Model)

Lo que es común en todas las arquitecturas multicapa es que la lógica del negocio y el tratamiento de información residen en su propia capa: en el modelo (Model). 

Así este modelo (Model) queda separado del interfaz de usuario (View-Xxxxx). 

[Multitier architecture](https://en.wikipedia.org/wiki/Multitier_architecture)

Yendo un poco más lejos, es conveniente separar también el modelo propiamente dicho (la lógica de trabajo y las estructuras de datos para soportarla), de los aspectos tecnológicos subyacentes del sistema donde esté implementado (base de datos, APIs externas, sensores, comunicaciones de red,...).

[Hexagonal architecture](https://en.wikipedia.org/wiki/Hexagonal_architecture_(software))


### Arquitectura MVP (Model-View-Presenter)

En esta arquitectura, la comunicación entre `View` y `Presenter` es directa: con llamadas explícitas entre ambas partes.

En MVP, un `Presenter` se comunica con un `View` a través de un interface. Este interface declara los métodos que `View` ha de implementar para que `Presenter` pueda llamarlos.

Para ayudar en esa comunicación se suele utilizar: [view binding](https://developer.android.com/topic/libraries/view-binding)


### Arquitectura MVVM (Model-View-ViewModel)

En esta arquitectura, la comunicación entre `View` y `ViewModel` es indirecta: a través de variables observables que `View Model` mantiene y `View` observa.

- La vista (View) se subscribe a unos elementos observables que residen en el controlador (ViewModel). 

  La vista (View) es notificada cada vez que hay un cambio en alguno de esos elementos observables, para que se refresque en consecuencia.

- La vista (View) llama a ciertas funciones del controlador (ViewModel) cuando se dan ciertas interacciones del usuario sobre el interfaz.

  Así el controlador (ViewModel) realiza las acciones solicitadas por el usuario y modifica los elementos afectados.

Para ayudar en la comunicación se suele utilizar:  [data binding](https://developer.android.com/topic/libraries/data-binding). 

Para la "observabilidad" de datos se suele utilizar:

- [Observable objects - @Bindable , @BindingAdapter](https://developer.android.com/topic/libraries/data-binding/observability#observable_objects), en casos simples donde no sea necesario tener en cuenta el ciclo de vida.

- [LiveData , MutableLiveData](https://developer.android.com/topic/libraries/architecture/livedata), en casos donde es necesario tener en cuenta el ciclo de vida.


[ViewModel](https://developer.android.com/topic/libraries/architecture/viewmodel)




### Arquitectura MVI (Model-View-Intent)

La arquitectura MVI está basada en UDF (Unidirectional Data Flow):

- La vista (View) acepta datos de estado. Pero no pregunta por ellos, solo los recibe cuando se los envian. Los cambios en los datos de estado hacen que la vista reaccione cuando los recibe, y cambie lo que muestra.

- La vista emite eventos. Pero no los procesa, solo los transmite a quien corresponda. Los eventos son emitidos según la interacción del usuario con la vista, para avisar de las intenciones del usuario (Intent) a la parte del programa encargada de actuar en consecuencia.

[Unidirectional Data Flow](https://devexpert.io/unidirectional-data-flow-android/)

[JetPack Compose](https://developer.android.com/develop/ui/compose/tutorial)

nota: el fundamento teórico tras esta arquitectura es [Actor model](https://en.wikipedia.org/wiki/Actor_model)



### algo de documentación variada

[Qué son los Patrones de Presentación: MVC, MVP, MVVM ¿Son Arquitecturas de Software?](https://youtu.be/S3h-u4M1q3w)

[The Ultimate Beginner's Roadmap to Android App Architecture](https://youtu.be/-QExSMcBvOg)

[MVVM vs. MVI - Understand the Difference Once and for All](https://youtu.be/b2z1jvD4VMQ)

[Principios SOLID - 5 + 1 Reglas que CAMBIARÁN tu forma de PROGRAMAR](https://www.youtube.com/watch?v=E_mSr-VFd3g&list=PLrn69hTK5FBxoY9NLgB8eWf2VMxCF6-cb)



## Algunos aspectos prácticos (con ejemplos de código)

### Interfaz gráfico de usuario

#### Layouts para organizar elementos en la pantalla

[Layouts in views](https://developer.android.com/develop/ui/views/layout/declaring-layout)

#### Algunos elementos

[Views](https://developer.android.com/reference/android/view/View)

Algunos elementos "View" habituales:

- [Autosize TextViews](https://developer.android.com/develop/ui/views/text-and-emoji/autosizing-textview)

- [ImageView](https://developer.android.com/reference/android/widget/ImageView)

  nota: Con imágenes descargadas desde la red, suele ser habitual usar `Glide` para descargarlas y mostrarlas en un ImageView.  (ver el apartado correspondiente, más adelante en este documento)

- [Add pickers to your app](https://developer.android.com/develop/ui/views/components/pickers)

  [Add spinners to your app](https://developer.android.com/develop/ui/views/components/spinner)

  [Android Spinner - drop down list - tutorial](https://www.digitalocean.com/community/tutorials/android-spinner-drop-down-list)

  [Configuring an Android Spinner control to use an array of java objects](http://katr.com/article_android_spinner01.php)

```
        final Spinner selectorDeItems = (Spinner) findViewById(R.id.selectorDeItems);

        List<String> listaDeItems = new ArrayList<String>();
        listaDeItems.add("Item 1");
        listaDeItems.add("Item 2");
        listaDeItems.add("Item 3");

        ArrayAdapter<String> dataAdapter = new ArrayAdapter<String>(view.getContext(), android.R.layout.simple_spinner_item, listaDeItems);

        // Drop down layout style - list view with radio button
        dataAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);

        selectorDeItems.setAdapter(dataAdapter);
        
..//..
      
    selectorDeItems.setOnItemSelectedListener(new OnItemSelectedListener() {
        @Override
        public void onItemSelected(AdapterView<?> parentView, View selectedItemView, int position, long id) {
            // your code here
            
            ..//..
            
            item = parent.getItemAtPosition(position).toString();  
                      
            ..//..
            
            item = dataAdapter.getItem(position);
                  
            ..//..
                  
            item = selectorDeItems.getSelectedItem();
        }
    
        @Override
        public void onNothingSelected(AdapterView<?> parentView) {
            // your code here
        }
    
    });
    
```


#### Avisos y notificaciones

Para mostrar durante unos segundos un mensaje en la pantalla:

[Toast, brief little message in the bottom of the screen](https://developer.android.com/guide/topics/ui/notifiers/toasts)
```
  Toast.makeText(getApplicationContext(), "mensaje a mostrar", Toast.LENGTH_LONG).show();
```

[Snackbar, like Toast but with user-actionable options](https://developer.android.com/develop/ui/views/notifications/snackbar)
```
  Snackbar snackbar = Snackbar.make(getApplicationContext(), view, "mensaje a mostrar", Snackbar.LENGTH_INDEFINITE);
  snackbar.setAction(..........);
  snackbar.show();
```
note: You can use also Snackbar instead of `Toast`
```
  Snackbar snackbar = Snackbar.make(getApplicationContext(), view, "mensaje a mostrar", Snackbar.LENGTH_LONG).show();
```


[Notification](https://developer.android.com/develop/ui/views/notifications)
```
```


#### Internacionalization (i18n) y Localization (l10n)

[Localize your app](https://developer.android.com/guide/topics/resources/localization)

[Manage strings for localization](https://developer.android.com/guide/topics/resources/localization#managing-strings)

El archivo `strings.xml` en la carpeta `res` / `values` para poner los textos por defecto.

Cada texto definido en ese archivo se referencia luego en el código con `@string/nombredeltexto`.

Para las versiones en otros idiomas distintos al de por defecto, crear diferentes archivos `string.xml` en sus respectivas carpetas `res` / `values-xx-XX` (donde xx es la abreviatura ISO del idioma y XX es la abreviatura ISO del pais; se puede poner solo xx si no queremos distinguir entre variantes de distintos paises).

Se aplica lo mismo para los recursos en `drawable`, `layout`,...

Las distintas alternativas son jerárquicas:
- Primero se busca en "values-xx-XX"
- Si no se encuentra, se busca en "values-xx"
- Si no se encuentra, se busca en "values"

Es decir, en "values" es obligatorio que estén todos los textos. En el resto solo es necesario poner aquellos que sean diferentes respecto de su anterior jerárquico.

Las diversas alternativas se usan según el `Locale` seleccionado en la aplicación.

[Languaje and locale resolution](https://developer.android.com/guide/topics/resources/multilingual-support)




#### Cambios de orientación o de tamaño de la pantalla

Se pueden crear variantes de los recursos (layouts, drawables,...), específicas para según que tamaños de pantalla, según qué orientación, según qué tema (claro u oscuro), según qué pais o idioma, según...

[How to Support ALL Screen Sizes on Android](https://youtu.be/5lSQcJjZPFs?t=931)

[Resources & Qualifiers](https://youtu.be/vj1ZdUfPlJM?list=PLQkwcJG4YTCSVDhww92llY3CAnc_vUhsm&t=513)

¡aviso!: Muchos de los cambios en la pantalla destruyen y recrean actividad|vistas, provocando que se pierda y reinicie el estado. En esos casos es necesario usar algún mecanismo que permita preservar el estado de un cambio a otro.
 
[ViewModels & Configuration Changes](https://youtu.be/9sqvBydNJSg?list=PLQkwcJG4YTCSVDhww92llY3CAnc_vUhsm&t=546)

[Activity Recreation - Handle configuration changes](https://developer.android.com/guide/topics/resources/runtime-changes)

[Handling State in Orientation Changes on Android](https://medium.com/hootsuite-engineering/handling-orientation-changes-on-android-41a6b62cb43f)


#### Interacciones con gestos tactiles

[MotionEvent](https://developer.android.com/reference/android/view/MotionEvent)


##### Arrastre de elementos (swipe animations)

[How to Add Swipe Animations to a CardView in an Android App - freecodecamp](https://www.freecodecamp.org/news/add-swipe-animations-to-a-card-view-in-android-app/)

Para implementar el arrastre de algún elemento se utiliza la detección de gestos tactiles sobre dicho elemento. Concretamente la detección de ACTION_MOVE (arrastrar algo) y de ACTION_UP (dejar de tocar la pantalla)
```
binding.tarjeta.setOnTouchListener(new View.OnTouchListener() {
    @Override
    public boolean onTouch(View view, MotionEvent event) {

        DisplayMetrics displayMetrics = getResources().getDisplayMetrics();
        int anchoDeLaTarjeta = binding.tarjeta.getWidth();
        int bordeInicialDeLaTarjeta = (displayMetrics.widthPixels / 2) - (anchoDeLaTarjeta / 2);

        float posicionDown = 0;
        float posicionUp;
        switch (event.getAction()) {

            case MotionEvent.ACTION_DOWN:
                posicionDown = view.getX();

            case MotionEvent.ACTION_UP:
                posicionUp = view.getX();
                final float MOVIMIENTO_MINIMO_A_TENER_EN_CUENTA = 100;
                if(Math.abs(posicionUp - posicionDown) > MOVIMIENTO_MINIMO_A_TENER_EN_CUENTA){
                    if(posicionUp - posicionDown > 0){
                        //TODO hacer lo que se quiera hacer al arrastrar de izda a dcha;
                        Toast.makeText(getContext(), "izda a dcha", Toast.LENGTH_SHORT).show();
                    }
                    if(posicionUp - posicionDown < 0){
                        //TODO hacer lo que se quiera hacer al arrastrar de dcha a izda;
                        Toast.makeText(getContext(), "dcha a izda", Toast.LENGTH_SHORT).show();
                    }
                }
                binding.tarjeta.animate()
                        .x(bordeInicialDeLaTarjeta)
                        .setDuration(10)
                        .start();
                break;

            case MotionEvent.ACTION_MOVE:
                float posicion = event.getRawX();
                binding.tarjeta.animate()
                        .x(posicion - ((float) anchoDeLaTarjeta / 2))
                        .setDuration(0)
                        .start();
                break;
        }

        return true;
    }
});
```


[...has setOnTouchListener called on it but does not override performClick](https://stackoverflow.com/questions/47107105/android-button-has-setontouchlistener-called-on-it-but-does-not-override-perform)

#### Navegación de un fragmento a otro

- `NavHost` es el marco general que maneja todo el interface de navegación. 

- `NavHostFragment` es el marco que maneja las transiciones entre las distintas partes.

- `FragmentContainerView` es el componente que va colocado en el .xml de la pantalla principal (activity_main.xml). Está ligado con el `NavHostFragment` y dentro de él irán apareciendo los diversos fragmentos a los que se vaya navegando.

Para trabajar con Jetpack Navigation, hay que añadir estas dependencias en el archivo `build.gradle.kts`
```
  implementation("androidx.navigation:navigation-fragment:2.7.3")
  implementation("androidx.navigation:navigation-ui:2.7.3")
```

Un mapa de navegación define de dónde a dónde se puede ir. Suele colocarse en la carpeta `res` / `navigation`  y se suele denominar  `nav_graph.xml`
```
    Para pintar un nav graph dentro de Android Studio: 
    clic-dcho sobre la carpeta `app` 
    y lanzar el menú "new", "Android resource file", 
    with type "Navigation". 
    Esa orden se encarga de crear la carpeta y el archivo .xml
```
(también se pueden crear esa carpeta y ese archivo manualmente; justo con ese nombre, o con otro cualquiera)

Ese mapa de navegación mapea `NavDestination`s y `Actions` (xxxxFragment_to_yyyyFragment).

  ```
    Los fragmentos se añaden al mapa de navegación, 
    haciendo clic sobre el icono con forma de un movil 
    con un signo + encima.
    
    El fragmento marcado como "Start destination" (casita) 
    será el primero que aparezca en pantalla cuando arranque la aplicación.
    
    La acciones de navegación se establecen clic-arrastrando enlaces
    entre un fragmento y otro.
  ```

Como se ha indicado anteriormente, es necesario incluir un container `FragmentContainerView` en la declaración de la pantalla principal (en el `activity_main.xml`).
```
    <androidx.fragment.app.FragmentContainerView
        android:id="@+id/fragmentContainerView"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        app:defaultNavHost="true"
        android:name="androidx.navigation.fragment.NavHostFragment"
        app:navGraph="@navigation/nav_graph"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" />
```

En ese container es donde "asomarán" los diversos fragmentos según se vaya transicionando de uno a otro.

Desde el código, `NavController` es el marco que gestiona las transiciones con su método `navigate(action)`. 
```
import static androidx.navigation.Navigation.findNavController;

../..

  findNavController(vista).navigate(R.id.action_xxxxxx_to_yyyyyyyyy)
```

Desde el interfaz de usuario, las transiciones se realizan con componentes tales como "top app bar", "bottom navigation bar", "navigation drawer",... Estos componentes deben conectarse al sistema de navegación general: (https://developer.android.com/guide/navigation/integrations/ui)

##### Bottom bar navigation

[Using bottom navigation](https://m2.material.io/components/bottom-navigation/android#using-bottom-navigation)

[Bottom Navigation en Java y Android Studio - Youtube](https://youtu.be/FW9mFpcZCLw)

[Bottom Navigation Bar in Android Studio using Java](https://androidknowledge.com/bottom-navigation-bar-androidstudio/)

[Bottom navigation bar](https://danielme.com/2023/09/01/android-bottomnavigationbar-listener-badges-navigationcomponent/)

Forma de hacerlo:

- "menu resource file" en la carpeta "res" "menu" (crear la carpeta si no existiera)  
con un <item> por cada fragmento al que vamos a navegar con cada botón del interfaz
````
    <item
        android:id="@+id/homeFragment"
        android:icon="@drawable/ic_home_black_24dp"
        android:title="@string/title_home"/>
````

- Los botones del interfaz de usuario (`BottomNavigationView`) se ponen en la pantalla principal ("activity_main.xml").
  En ese "activity_main.xml" va también el `FragmentContainerView` donde se van a pintar los distintos fragmentos según navegemos 
de uno a otro.

- La navegación propiamente dicha se configura en el "nav_graph". Y se enlaza con la "bottom navigation bar" con estas dos instruciones en el método onCreate() del MainActivity.
````
  NavHostFragment navHost = (NavHostFragment) getSupportFragmentManager().findFragmentById(R.id.contenedorDeFragmentos);
  NavigationUI.setupWithNavController(binding.menuInferior, navHost.getNavController());
````
  (https://stackoverflow.com/questions/59275009/fragmentcontainerview-using-findnavcontroller)

nota: El sistema antiguo de realizar la navegación con la "bottom navigation bar" era reemplazando manualmente un fragmento por otro usando `FragmentTransaction`. Lo indico aquí simplemente para saberlo, porque aún hay por ahí mucho código hecho de esa manera...
````
private void setupBottomMenu() {
  bottomNavigationView = findViewById(R.id.bottom_navigation);
  bottomNavigationView.setOnItemSelectedListener(this::onItemSelectedListener);
  //muestra el fragment inicial cuando la aplicación se inicia
  bottomNavigationView.setSelectedItemId(R.id.page_home);
}
 
  private boolean onItemSelectedListener(MenuItem item) {
    switch (item.getItemId()) {
      case R.id.page_home -> {
        showPageFragment(R.drawable.baseline_home_black_48, R.string.bottom_nav_home);
        return true;
      }
      case R.id.page_search -> {
        showPageFragment(R.drawable.baseline_search_black_48, R.string.bottom_nav_search);
        return true;
      }
      case R.id.page_settings -> {
        showPageFragment(R.drawable.baseline_app_settings_alt_black_48, R.string.bottom_nav_settings);
        return true;
      }
      default -> throw new IllegalArgumentException("item not implemented : " + item.getItemId());
    }
  }
  
  private void showPageFragment(@DrawableRes int iconId, @StringRes int title) {
    Fragment frg = PageFragment.newInstance(iconId);
    getSupportFragmentManager()
            .beginTransaction()
            .setCustomAnimations(R.anim.bottom_nav_enter, R.anim.bottom_nav_exit)
            .replace(R.id.container, frg)
            .commit();
  }
````
(https://developer.android.com/guide/fragments/transactions)


##### Pasar datos entre fragmentos al navegar de uno a otro

A lo largo del tiempo ha habido varias maneras de pasar información de un fragmento a otro al navegar: pasando Bundles, compartiendo ViewModels,... Pero la manera recomendada hoy en día es utilizando argumentos `SafeArgs` en las acciones del mapa de navegación.

[SafeArgs](https://developer.android.com/guide/navigation/use-graph/safe-args)

[SafeArgs - Youtube](https://youtu.be/fIDc5dzpsNs)

[Using SafeArgs with the Android navigation component](https://www.kodeco.com/19327407-using-safe-args-with-the-android-navigation-component)

[Navigating with SafeArgs](https://medium.com/androiddevelopers/navigating-with-safeargs-bf26c17b1269)

[SafeArgs - Yotube](https://youtu.be/1N6xmCHZexo?t=1397)

[Navigation , SafeArgs](https://developer.android.com/jetpack/androidx/releases/navigation#safe_args)

[Use Safe Args to pass data with type safety](https://developer.android.com/guide/navigation/use-graph/pass-data#Safe-args)

Para usar `SafeArgs` se ha de cargar un plugin. Para ello poner esto en el archivo "build.gradle" general (el de app no, el otro):
- para Kotlin
````
def nav_version = "2.3.0"
classpath “androidx.navigation:navigation-safe-args-gradle-plugin:$nav_version”
apply plugin: "androidx.navigation.safeargs.kotlin"
````
- para Java
````
buildscript {
  repositories {
   google()
  }
  dependencies {
  
    classpath("androidx.navigation:navigation-safe-args-gradle-plugin:2.8.5")

  }
}
````

Y se ha de ejecutar ese plugin. Poner esto en el archivo "build.gradle" de app:
````
plugins {

  id("androidx.navigation.safeargs")

}
````

Para que funcione, dentro del archivo "gradle.properties" tiene que estar definido
````
android.useAndroidX=true
````


En el "nav_graph", se ha de añadir un argumento al fragmento que va a recibir datos.

> aviso: Aunque se pueden enviar objetos "parcelables" o "serializables, no es recomendable enviar objetos grandes. 
> Se deben enviar solo datos básicos, con tipos nativos, tales como números o strings.

> consejo: El fragmento que recibe los datos, puede recibir solo un id y obtener el resto de datos que necesite él mismo.

El plugin de `SafeArgs` genera código que nos permite navegar con esta instrucción
````
findNavController(...).navigate(nombredelfragmentoorigenDirections.actionNombreDelFragmentoOrigenToNombreDelFragmentoDestino(valorXXXXXapasar));
````
en lugar de con la habitual instrucción
````
findNavController(...).navigate(R.id.action_nombredelfragmentoorigen_to_nombredelfragmentodestino);
````

En el fragmento que recibe los datos, tendremos un tipo de datos `nombredelfragmentoArgs`, suministrado por `navArgs()`, que podemos utilizar dentro del método "onViewCreated" para recuperar valor del argumento.
````
tipo variable = nombredelfragmentodestinoArgs.fromBundle(getArguments()).getXXXXXdata();
````

#### algo de documentación variada

[How to Move Between Fragments Using the Navigation Component](https://learntodroid.com/how-to-move-between-fragments-using-the-navigation-component/)

[Navigation Basic Sample](https://github.com/android/architecture-components-samples/tree/master/NavigationBasicSample)

[Navigation Advanced Sample](https://github.com/android/architecture-components-samples/tree/master/NavigationAdvancedSample)

[Navigation ModernAndroidDevelopment Skills Sample - Donut Tracker](https://github.com/android/architecture-components-samples/tree/master/MADSkillsNavigationSample)


### MVP, viewBinding y binding 

MVP se refiere a: Model View Presenter

Binding es un mecanismo para interactuar con elementos de una vista desde el código.

[View binding](https://developer.android.com/topic/libraries/view-binding#java)

Se ha de activar en el archivo `build.gradle.kts` de la carpeta `app`
```
android {

    ../..
    
    buildFeatures {
        viewBinding = true
    }
    
}
```

A partir de ese momento, Android Studio comienza a crear automáticamente código para mapear todos los elementos que estén identificados con `@+id:/` en cualquier archivo .xml del interfaz. Y se podrán utilizar expresiones del tipo `binding.xxxxxxxx` para referirse a esos elementos desde el código.

Ese código se crea automáticamente en clases con el mismo nombre que el .xml, pero escrito en CamelCase y con la palabra "Binding" por detrás. Por ejemplo, para `activity_main.xml`, se creará la clase `ActivityMainBinding.java`

> consejo: (no sé por qué), pero si no se generan esas clases "xxxxxxxxBinding.java", probar con usar dataBinding (ver más adelante)...

En el código de la actividad principal, el mapeo (binding) se realiza al llamar a la función `inflate()` sobre la vista o fragmento correspondiente.

Por ejemplo:
```
../..

import com.example.pruebasapi.databinding.ActivityMainBinding;

../..

public class MainActivity extends AppCompatActivity {

    private ActivityMainBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        binding = ActivityMainBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());

../..

    });
```


En el código de los fragmentos, el proceso de `inflate()` es algo distinto. Por ejemplo, para un fragmento declarado en el archivo `result_profile.xml`, el código seria:
```
../..

import com.example.pruebasapi.databinding.ResultProfileBinding;

../..

private ResultProfileBinding binding;

@Override
public View onCreateView (LayoutInflater inflater,
                          ViewGroup container,
                          Bundle savedInstanceState) {
    binding = ResultProfileBinding.inflate(inflater, container, false);
    View view = binding.getRoot();
    return view;
}

@Override
public void onDestroyView() {
    super.onDestroyView();
    binding = null;
}
```

Una vez completado el "inflate", se puede utilizar esa variable "binding" para acceder a cada componente (View) del interfaz que tenga un `android:id="@+id/...."`, como por ejemplo android:id="@+id/txtSaludo" o android:id="@+id/bntCalcular":
```
binding.txtSaludo.setText("Hola, mundo.");

binding.btnCalcular.setOnClickListener(new View.OnClickListener() {
    @Override
    public void onClick(View v) {
        manejoDeDatos.realizarCalculos()
    }
```



### MVVM, dataBinding y LiveData

MVVM se refiere a: Model View ViewModel

[Data Binding](https://developer.android.com/topic/libraries/data-binding)

[Data Binding Architecture](https://developer.android.com/topic/libraries/data-binding/architecture)

[ViewModel](https://developer.android.com/topic/libraries/architecture/viewmodel)

[LiveData](https://developer.android.com/topic/libraries/architecture/livedata)

[ViewModels and LiveData: Patterns + AntiPatterns](https://medium.com/androiddevelopers/viewmodels-and-livedata-patterns-antipatterns-21efaef74a54)

dataBinding es un paso más allá del viewBinding. Pero también es más pesado que viewBindig. Solo merece la pena usarlo en arquitecturas complejas, donde realmente se saque partido a la arquitectura MVVM. Por ejemplo, en aplicaciones con ciclos de vida complejos, con cambios de orientación de la pantalla de portrait a landscape y viceversa, con estados que se han de preservar, etc.

En la arquitectura MVVM, la parte ViewModel no necesita saber nada de la parte View. Es View quien conoce a ViewModel:

- View se subscribe (observa) a ciertas variables de ViewModel, para ser notificada cuando el valor de alguna de estas cambia. 

- View llama a ciertos métodos de ViewModel cuando se necesita realizar alguna acción.

#### La configuración para usarlo

Para utilizar dataBindig: se ha de activar en el archivo `build.gradle.kts` de la carpeta `app`
```
android {

    ../..
    
    buildFeatures {
        dataBinding = true
    }
    
}
```
nota: dataBindig incluye también las funcionalidades de viewBinding.

Para utilizar LiveData: se han de añadir unas dependencias ese mismo archivo `build.gradle.kts` de la carpeta `app`
```
dependencies {
    implementation "androidx.lifecycle:lifecycle-extensions:2.2.0"
    implementation 'androidx.lifecycle:lifecycle-livedata-ktx:2.3.1' 
    implementation 'androidx.lifecycle:lifecycle-viewmodel-ktx:2.3.1' 
    implementation "androidx.databinding:databinding-runtime:7.0.0"
}
```

Y las vistas han de estar completamente dentro de un `<layout>`. Para que el compilador sepa de qué vistas ha de generar código "xxxxxxBinding" automáticamente:
```
<layout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto">

    ../..

</layout>
```



#### La parte `ViewModel` 

Los "ViewModel" se encargan de declarar y manejar las variables de tipo `LiveData<T>` y `MutableLiveData<T>` que las vistas irán observando.

Las clases que van a ser "**ViewModel**"s, se han de derivar de la clase base [ViewModel](https://developer.android.com/reference/androidx/lifecycle/ViewModel). 
```
public class PruebaViewModel extends ViewModel {

    public MutableLiveData<String> saludo = new MutableLiveData<>();
    
    public MutableLiveData<String> avisoDeSeEstaCalculando = new MutableLiveData<>();
    
    public void realizarCalculos() {
        ...........   
    }
     
}
```

El valor de cada una de esas variables se puede modificar con su método `.setValue()` (en las partes síncronas) o con `.postValue()` (en las partes asíncronas).

nota: si se desea que una variable sea solo lectura cuando se vea desde fuera del ViewModel, esa variable se puede definir de esta forma:
```
    private MutableLiveData<String> _saludo = new MutableLiveData<>();
    public LiveData<String> saludo = new LiveData<>() {
        @Override
        Public String getValue(){ return _saludo.getValue(); }
    };
```

#### La parte `View`

En los layout (.xml) de las clases que van a ser "**View**"s, se colocan anotaciones:

- `@{clasedelviewmodel.saludo}`, para acceder al valor de una variable.

- `@={clasedelviewmodel.saludo}`, para ese acceso sea bidireccional.

- `@{()-> viewModel.realizarCalculos()}`, para llamar a un método.

¡importante!: aunque no tengan la parte `<data>`, todas las View han de tener la parte `<layout.....` general. Para que se generen las correspondientes clases "XxxxxxxXxxxxxBinding" para ellas.
```
<?xml version="1.0" encoding="utf-8"?>
<layout xmlns:android="http://schemas.android.com/apk/res/android">

    <data>
        <variable name="modeloDeVista" type="com.example.xxxxx.PruebaViewModel"/>
    </data>
                                                                                          
    <LinearLayout
           android:orientation="vertical"
           android:layout_width="match_parent"
           android:layout_height="match_parent">
    
        <TextView
            android:id="@+id/txtSaludo"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginTop="10dp"
            android:layout_marginBottom="10dp"
            android:background="#DCCBCB"
            android:text="@{modeloDeVista.saludo}"
            android:textAlignment="center" />
    
        
        <Button
            android:id="@+id/btnCalcular"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:layout_marginTop="8dp"
            android:onClick="@{()-> modeloDeVista.realizarCalculos()}"
            android:text="Calcular"
            bind:toastMessage="@{modeloDeVista.avisoDeSeEstaCalculando}" />
    
        ..//..
    
    </LinearLayout>
    
    ..//..

</layout>
```

En el código de las clases que van a ser "**View**"s, se ha de obtener una instancia del "ViewModel" a utilizar y se ha de llamar al método `.observe` de cada una de las variables que se vayan a utilizar. 
```
public class PruebaFragment extends Fragment {

    private FragmentPruebaBinding binding;
    private PruebaViewModel pruebaViewModel;

    public static PruebaFragment newInstance() {
        return new PruebaFragment();
    }

    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, @Nullable ViewGroup container,
                             @Nullable Bundle savedInstanceState) {
        binding = DataBindingUtil.inflate(getLayoutInflater(), R.layout.fragment_prueba, container, false);
        return binding.getRoot();
    }

    @Override
    public void onViewCreated(@NonNull View view, @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);

        pruebaViewModel = new ViewModelProvider(this).get(PruebaViewModel.class);
        binding.setModeloDeVista(pruebaViewModel);
        
        pruebaViewModel.saludo.observe(this, new Observer<String>() {
            @Override
            public void onChanged(String texto) {
                binding.txtSaludo.setText(texto);
            }
        });

    }

}
```

(https://developer.android.com/reference/androidx/lifecycle/LiveData#observe(androidx.lifecycle.LifecycleOwner,%20androidx.lifecycle.Observer%3C?%20super%20T%3E))


#### unas notas históricas

En un primer momento el interface `Observable` se implementaba explícitamente con anotaciones `@Bindable`.

[Using data binding in Android - with `BaseObservable` and `@Bindable`](https://www.vogella.com/tutorials/AndroidDatabinding/article.html#using-data-binding-in-android-applications)

Posteriormente se incorporó `LiveData`. 

`LiveData` es "lifecycle aware", cosa que `@Bindable` no es.
 
`dataBinding` incluye `viewBinding` y `LiveData incluye `@Bindable`. 

nota: Es posible, por ejemplo, llamar a `.observe()` sobre propiedades del tipo LiveData para subscribirse a sus cambios de valor y usar `binding.` dentro de los Observer para actualizar lo que corresponda en la vista.

nota: Se pueden utilizar un `@BindingAdapter(.....)` si es necesario hacer alguna adaptación entre el formato de dato en alguna de las propiedades suministradas por un "ViewModel" y el formato que necesita un "View" para visualizarla. Pero utilizarlos solo en casos puntuales donde no haya otra solución; procurar no abusar de ellos.


#### algo de documentación variada

[ViewModels & Configuration Changes](https://www.youtube.com/watch?v=9sqvBydNJSg&list=PLQkwcJG4YTCSVDhww92llY3CAnc_vUhsm&index=3)

[LiveData in Android](https://medium.com/@anandgaur2207/livedata-in-android-12c9950ce9a9)

[Mastering Android Data Binding with ViewModel, LiveData, and Binding Adapters](https://medium.com/@abhisheksuman413/mastering-android-data-binding-with-viewmodel-livedata-and-binding-adapters-2293ac60bb91)

[Implementing MVVM Architecture in Android with Live Data](https://medium.com/thejuniordeveloper/implementing-mvvm-architecture-in-android-with-livedata-29bc03a11646)

[Android MVVM Design Pattern - DigitalOcean](https://www.digitalocean.com/community/tutorials/android-mvvm-design-pattern)

[Android LiveData - DigitalOcean](https://www.digitalocean.com/community/tutorials/android-livedata)

[Android MVVM LiveData Data Binding - DigitalOcean](https://www.digitalocean.com/community/tutorials/android-mvvm-livedata-data-binding)

[MVVM en Android con DataBinding & Kotlin 👉 Guía completa - YouTube](https://www.youtube.com/watch?v=gr0ontvr-jw) nota: esta guia comienza con MVP y luego lo convierte a MVVM

[👉 Guía completa - minuto donde empieza MVVM con observable](https://youtu.be/gr0ontvr-jw?t=1044)

[👉 Guía completa - minuto donde empieza MVV con dataBindig](https://youtu.be/gr0ontvr-jw?t=1946)

[SavedStateHandle en MVVM 🔵 Haz que tu estado sobreviva siempre de forma sencilla](https://youtu.be/EqEfYyu4KaI)

[Android Build a Clean Architecture MVVM Auth Module with Industry Level Code - Android Studio](https://youtu.be/aCjOmyd_62U)

[Android MVVM Architecture Tutorial - Simplified Coding](https://www.youtube.com/watch?v=67bdklHmXA8&list=PLk7v1Z2rk4hjVaZ8DZKe8iT9RIM9OUrwp&index=1)

[How to update a Recycler view with LiveData](https://stackoverflow.com/a/56535850)

[MVVM With Retrofit and Recyclerview in Kotlin](https://medium.com/android-beginners/mvvm-with-retrofit-and-recyclerview-in-kotlin-example-f01a7bd41073)

[Implementing ListView inside RecyclerView and observing LiveData](https://dev.to/anureet19/implementing-listview-inside-recyclerview-and-observing-livedata-40k)

[Model-View-ViewModel (MVVM) en Android [en 2024]](https://youtu.be/LHBbs6QXvic)


### ReciclerView, listas dinámicas

ReciclerView permite mostrar largas listas dinámicas en pantalla. Haciendo un uso eficiente de la memoria al cachear los elementos según se van utilizando.

[Jetpack ReciclerView](https://developer.android.com/jetpack/androidx/releases/recyclerview)

[Guia de usuario](https://developer.android.com/develop/ui/views/layout/recyclerview)

Consta de tres componentes: 

- El componente `ReciclerView`: muestra la lista en la pantalla.

```
    AlmacenDePlantas almacenDeDatos = new AlmacenDePlantas();
    ArrayList<Planta> datos = almacenDeDatos.getListaDePlantas();
    ListaDePlantas listaDePlantas = new ListaDePlantas(datos);

    binding.vistaParaLaListaDePlantas.setLayoutManager(new LinearLayoutManager(this));
    binding.vistaParaLaListaDePlantas.setHasFixedSize(true);
    binding.vistaParaLaListaDePlantas.setAdapter(listaDePlantas);
```

```
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    xmlns:tools="http://schemas.android.com/tools"
    android:id="@+id/main"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    tools:context=".MainActivity">

    <TextView
        android:id="@+id/titulo"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Prueba de APIs" />

    <androidx.recyclerview.widget.RecyclerView
        android:id="@+id/vistaParaLaListaDePlantas"
        android:layout_width="409dp"
        android:layout_height="729dp"
        android:layout_marginStart="8dp"
        android:layout_marginTop="38dp"
        android:layout_marginEnd="8dp"
        app:layout_constraintTop_toBottomOf="@+id/titulo"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent" />

</androidx.constraintlayout.widget.ConstraintLayout>
```

- El componente `ViewHolder`: define la forma en que se mostrará cada elemento de la lista.

```
import android.view.View;
import android.widget.Toast;

import androidx.recyclerview.widget.RecyclerView;

import com.example.pruebasapi.databinding.FichaDeUnaPlantaBinding;

public class FichaDeUnaPlanta extends RecyclerView.ViewHolder {

    private final FichaDeUnaPlantaBinding binding;

    public FichaDeUnaPlanta(FichaDeUnaPlantaBinding binding) {
        super(binding.getRoot());

        this.binding = binding;

    }

    public void mostrarDatos(Planta planta) {
    
        binding.txtNombreComun.setText(planta.common_name);
        binding.txtGenero.setText(planta.genus);
        binding.txtFamilia.setText(planta.family);
        Glide.with(binding.imgPlanta.getContext())
                .load(planta.image_url)
                .diskCacheStrategy(DiskCacheStrategy.ALL)
                .into(binding.imgPlanta);
    }
}
```

```
<?xml version="1.0" encoding="utf-8"?>

<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:orientation="vertical"
    android:layout_marginTop="6dp"
    >

    <LinearLayout
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:orientation="horizontal">

        <ImageView
            android:id="@+id/imgPlanta"
            android:layout_width="128dp"
            android:layout_height="128dp"
            android:layout_margin="6dp"
            app:srcCompat="@drawable/ic_launcher_foreground" />

        <LinearLayout
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:orientation="vertical"
            android:layout_margin="6dp">

            <TextView
                android:id="@+id/txtNombreComun"
                android:textStyle="bold"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:minWidth="128dp"
                android:layout_margin="6dp"/>

            <LinearLayout
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:orientation="horizontal"
                android:layout_margin="6dp">

                <TextView
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:text="Género: " />

                <TextView
                    android:id="@+id/txtGenero"
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:minWidth="128dp" />

            </LinearLayout>

            <LinearLayout
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:orientation="horizontal"
                android:layout_margin="6dp">

                <TextView
                    android:layout_width="wrap_content"
                    android:layout_height="wrap_content"
                    android:text="Familia: " />

                <TextView
                android:id="@+id/txtFamilia"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:minWidth="128dp" />

            </LinearLayout>

        </LinearLayout>

    </LinearLayout>

    <View
        android:layout_width="match_parent"
        android:layout_height="1dp"
        android:background="@android:color/black"
        android:layout_marginTop="6dp"/>


</LinearLayout>
```

- El componente `Adapter`: maneja los datos y va creando una copia del ViewHolder para cada item de la lista.

```
import android.view.LayoutInflater;
import android.view.ViewGroup;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import com.example.pruebasapi.databinding.FichaDeUnaPlantaBinding;

import java.util.ArrayList;

public class ListaDePlantas extends RecyclerView.Adapter<FichaDeUnaPlanta> {

    private final ArrayList<Planta> datosDePlantas;
    public ListaDePlantas(ArrayList<Planta> datosDePlantas) {
        this.datosDePlantas = datosDePlantas;
    }

    @NonNull
    @Override
    public FichaDeUnaPlanta onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        FichaDeUnaPlantaBinding binding = FichaDeUnaPlantaBinding.inflate(LayoutInflater.from(parent.getContext()), parent, false);
        return new FichaDeUnaPlanta(binding);
    }

    @Override
    public void onBindViewHolder(@NonNull FichaDeUnaPlanta ficha, int position) {
        ficha.mostrarDatos(datosDePlantas.get(position));
    }

    @Override
    public int getItemCount() {
        return datosDePlantas.size();
    }

}
```

[Un ejemplo completo](https://medium.com/@timzowen/recyclerview-in-android-kotlin-f29228c319cc)

[How to Use View Binding in RecyclerView Adapter](https://medium.com/swlh/how-to-use-view-binding-in-recyclerview-adapter-f818b96c678a)


#### AsyncListDiffer, manejo de listas que se van modificando

Por ejemplo, cuando en la propia aplicación se van insertando, modificando o borrando items de la lista.

https://developer.android.com/reference/androidx/recyclerview/widget/AsyncListDiffer trae un ejemplo de código bastante claro:
```
@Dao
interface UserDao {
    @Query("SELECT * FROM user ORDER BY lastName ASC")
    public abstract LiveData<List<User>> usersByLastName();
}

class MyViewModel extends ViewModel {
    public final LiveData<List<User>> usersList;
    public MyViewModel(UserDao userDao) {
        usersList = userDao.usersByLastName();
    }
}

class MyActivity extends AppCompatActivity {
    @Override
    public void onCreate(Bundle savedState) {
        super.onCreate(savedState);
        MyViewModel viewModel = new ViewModelProvider(this).get(MyViewModel.class);
        RecyclerView recyclerView = findViewById(R.id.user_list);
        UserAdapter adapter = new UserAdapter();
        viewModel.usersList.observe(this, list -> adapter.submitList(list));
        recyclerView.setAdapter(adapter);
    }
}

class UserAdapter extends RecyclerView.Adapter<UserViewHolder> {
    private final AsyncListDiffer<User> mDiffer = new AsyncListDiffer(this, DIFF_CALLBACK);
    @Override
    public int getItemCount() {
        return mDiffer.getCurrentList().size();
    }
    public void submitList(List<User> list) {
        mDiffer.submitList(list);
    }
    @Override
    public void onBindViewHolder(UserViewHolder holder, int position) {
        User user = mDiffer.getCurrentList().get(position);
        holder.bindTo(user);
    }
    public static final DiffUtil.ItemCallback<User> DIFF_CALLBACK
            = new DiffUtil.ItemCallback<User>() {
        @Override
        public boolean areItemsTheSame(
                @NonNull User oldUser, @NonNull User newUser) {
            // User properties may have changed if reloaded from the DB, but ID is fixed
            return oldUser.getId() == newUser.getId();
        }
        @Override
        public boolean areContentsTheSame(
                @NonNull User oldUser, @NonNull User newUser) {
            // NOTE: if you use equals, your object must properly override Object#equals()
            // Incorrectly returning false here will result in too many animations.
            return oldUser.equals(newUser);
        }
    }
}
```



### Glide, manejo de imágenes online

Glide es un componente para descargar imágenes en Internet y mostrarlas en un `ImageView`.

[About Glide](https://bumptech.github.io/glide/)

[Wiki](https://github.com/bumptech/glide/wiki/)

[How to use a RecyclerView with loading URL image and using Glide](https://ledron.github.io/RecyclerView/)

````
implementation 'com.github.bumptech.glide:glide:4.14.2'
````

````
Si imágenes locales:
<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />

Si imágenes de red:
<uses-permission android:name="android.permission.INTERNET"/>
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>
````

````
    Glide.with(fragment)
        .load(url)
        .diskCacheStrategy(DiskCacheStrategy.ALL)
        .into(holder.imageView);


        .fitCenter()
        
        
        .placeholder(R.drawable.xxxxxxxxx)
        
        .placeholder(new ColorDrawable(Color.GREY)
````


[Cómo cargar imágenes desde una URL — Android Glide](https://oliver404.medium.com/c%C3%B3mo-cargar-im%C3%A1genes-desde-una-url-android-glide-f255bc914ee3)

nota: Otra alternativa podria ser Picaso: [About Picaso](https://square.github.io/picasso/)


### Retrofit, llamadas a APIs

Retrofit es un componente para hacer llamadas a APIs REST y similares.

(https://square.github.io/retrofit/)

- Poner las dependencias necesarias, en el archivo `build.gradle.kts`
```
    implementation("com.squareup.retrofit2:retrofit:2.9.0")
    implementation("com.squareup.retrofit2:converter-gson:2.6.4¨)
```
  escrito en modo catalog quedarian
```
build.gradle.kts (:app)

    implementation(libs.retrofit)
    implementation(libs.converter.gson)
    
    
libs.versions.toml:
    
    retrofit = { module = "com.squareup.retrofit2:retrofit", version.ref = "retrofit" }
    converter-gson = { module = "com.squareup.retrofit2:converter-gson", version.ref = "converterGson" }
```

- Solicitar permiso para conectar a Internet, en el archivo `AndroidManifest.xml`
```
<manifest xlmns:android...>
../..

 <uses-permission android:name="android.permission.INTERNET" />

 <application ...
 ../..
</manifest>
```

- Definir los POJO para soporte de datos, (con las correspondientes anotaciones `@SerializedName` en los campos cuyo nombre no coincida con la respectiva etiqueta en el JSON de la API).

Por ejemplo, para datos como estos:
```
{
    "data": [
        {
            "id": 77116,
            "common_name": "Evergreen oak",
            "slug": "quercus-rotundifolia",
            "scientific_name": "Quercus rotundifolia",
            "year": 1785,
            "bibliography": "Encycl. 1: 723 (1785)",
            "author": "Lam.",
            "status": "accepted",
            "rank": "species",
            "family_common_name": null,
            "genus_id": 3519,
            "image_url": "https://d2seqvvyy3b8p2.cloudfront.net/40ab8e7cdddbe3e78a581b84efa4e893.jpg",
            "synonyms": [
              "Quercus ilex var. rotundifolia",
                "Quercus sugaro",
                "Quercus ilex subvar. pendula",
                "Quercus ilex f. pendula",
                "Quercus ilex f. ballota",
                "Quercus ilex subsp. ballota",
                "Quercus ilex var. dolichocalyx",
                "Quercus rotundifolia var. pilosella",
                "Quercus rotundifolia var. brevicupulata",
                "Quercus rotundifolia subsp. maghrebiana"
            ],
            "genus": "Quercus",
            "family": "Fagaceae",
            "links": {
                "self": "/api/v1/species/quercus-rotundifolia",
                "plant": "/api/v1/plants/quercus-rotundifolia",
                "genus": "/api/v1/genus/quercus"
            }
        },
        {
            "id": 109482,
            "common_name": "Common nettle",
            "slug": "urtica-dioica",
            "scientific_name": "Urtica dioica",
            "year": 1753,
            "bibliography": "Sp. Pl.: 984 (1753)",
            "author": "L.",
            "status": "accepted",
            "rank": "species",
            "family_common_name": null,
            "genus_id": 5550,
            "image_url": "https://bs.plantnet.org/image/o/9db58cbb3538a6b77384f972971d51869228e545",
            "synonyms": [
                "Urtica dioica var. vulgaris",
                "Urtica dioica var. ramosa",
                "Urtica dioica subsp. eudioica"
            ],
            "genus": "Urtica",
            "family": "Urticaceae",
            "links": {
                "self": "/api/v1/species/urtica-dioica",
                "plant": "/api/v1/plants/urtica-dioica",
                "genus": "/api/v1/genus/urtica"
            }
        },

../..

    ],
    "links": {
        "self": "/api/v1/plants",
        "first": "/api/v1/plants?page=1",
        "next": "/api/v1/plants?page=2",
        "last": "/api/v1/plants?page=21863"
    },
    "meta": {
        "total": 437255
    }
}
```

Se definirian estas clases (...y algunas más...):
```
import java.util.ArrayList;
import com.google.gson.annotations.SerializedName;

public class ListaTrefle {
    ArrayList<PlantaTrefle> data = new ArrayList < > ();
    @SerializedName("links")
    ListaTrefleLinks listaTrefleLinksObject;
    @SerializedName("meta")
    ListaTrefleMeta listaTrefleMetaObject;

}
```

```
import java.util.ArrayList;
import com.google.gson.annotations.SerializedName;

public class PlantaTrefle {
    public float id;
    public String common_name;
    public String slug;
    public String scientific_name;
    public float year;
    public String bibliography;
    public String author;
    public String status;
    public String rank;
    public String family_common_name = null;
    public float genus_id;
    public String image_url;
    ArrayList< Object > synonyms = new ArrayList < Object > ();
    public String genus;
    public String family;
    @SerializedName("links")
    PlantaTrefleLinks plantaTrefleLinksObject;

}
```
nota: para generar las clases POJO automáticamente a partir de una muestra de datos JSON, se pueden usar utilidades como por ejemplo https://www.jsonschema2pojo.org/

- Crear el interface que define los endpoint a considerar. Esta es la parte importante, ya que es la encargada de mapear:
  - La API HTTP (endpoints) que se piensa usar, con las funciones (en el código) a través de las cuales se va a usar.
  - Los datos (JSON) que maneja la API, con objetos (POJO) que maneja el código.

  nota:para enviar datos en las consultas:
    - En la URL: @Path, @Query, @QueryMap
    - En el cuerpo: @Body
    - Lo rellenado en un formulario: @FormUrlEncoded, @Field, @Multipart, @Part
    - Para poner elementos en la cabecera: @Headers, @Header, @HeaderMap

```
import retrofit2.Call;
import retrofit2.http.GET;
import retrofit2.http.Path;

public interface InterfacePlantasTrefle {

    @GET("api/v1/plants")
    public Call<ListaTrefle> obtenerDatosDesdeApiTrefle(@Query("page") int numPagina, @Query("token") String tokenSecretoDeTrefle);

    @GET("api/v1/plants/{ID}")
    public Call<PlantaTrefle> obtenerDatosDeUnaPlantaDesdeApiTrefle(@Path("ID") int idPlanta);

}

// Por ejemplo, el primer método llamaria al endpoint https://trefle.io/api/v1/plants/?page=xx&token=xxxxxxxxxxxxxxxxxx 

// Por ejemplo, el segundo método llamaria al endpoint https://trefle.io/api/v1/plants/xx/?token=xxxxxxxxxxxxxxxxxx 

```

- Crear el cliente Retrofit, usando `Retrofit.Builder` y `GsonBuilder` 
```
     Retrofit clienteRetrofit = new Retrofit.Builder()
             .baseUrl("https://trefle.io/")
             .addConverterFactory(GsonConverterFactory.create())
             .build();
```

- Crear el servicio, llamando a la función `create` del cliente retrofit.
```
    InterfacePlantasTrefle apiTrefle = clienteRetrofit.create(InterfacePlantasTrefle.class);
```

- Utilizar ese servicio para procesar las llamadas a los endpoints.
```
    Call<ListaTrefle> llamada = apiTrefle.obtenerDatosDesdeApiTrefle(tokenSecretoDeTrefle);
    llamada.enqueue(new Callback<ListaTrefle>() {
         @Override
         public void onResponse(Call<ListaTrefle> call, Response<ListaTrefle> response) {
             ListaTrefle listaDePlantas = response.body();
         }

         @Override
         public void onFailure(Call<ListaTrefle> call, Throwable t) {
             Log.d("AdapterRetrofit", "Se ha producido un error al llamar a la API. El error es: " + t.getMessage())
         }
     });
```

[Peticiones HTTP usando Retrofit - curso Android #24](https://www.youtube.com/watch?v=lnVhFw8hB50&list=PLrn69hTK5FByEfJEtLzJMEi0cKIwCVgJi&index=26)

[Servicio de Retrofit - curso Android #25](https://www.youtube.com/watch?v=gyfPncrbBuY&list=PLrn69hTK5FByEfJEtLzJMEi0cKIwCVgJi&index=27)

[Cliente de Retrofit - curso Android #26](https://www.youtube.com/watch?v=95qUUqQZJOM&list=PLrn69hTK5FByEfJEtLzJMEi0cKIwCVgJi&index=27)

[The Ultimate Retrofit Crash Course](https://www.youtube.com/watch?v=t6Sql3WMAnk)

[Retrofit tutorial](https://www.digitalocean.com/community/tutorials/retrofit-android-example-tutorial)

[Retrofit and RxJava](https://www.digitalocean.com/community/tutorials/android-rxjava-retrofit)

[Retrofit Android Example Kotlin[Step By Step]](https://howtodoandroid.com/retrofit-android-example-kotlin/)

### Trabajar con fuentes de datos asíncronas

Habitualmente las llamadas a APIs suelen realizarse sin necesidad de bloquear la ejecución hasta que el servidor responda. (Esa es, por ejemplo, la finalidad de los métodos `onResponse` y `onFailure` de Retrofit.)

Es decir, no sabemos cuándo los datos estarán disponibles. De ahí que sea necesario mantener la asincronicidad durante todo el camino, desde el punto donde se solicitan los datos hasta el punto donde se utilizan.

Esto, aplicado a vistas. Nos obliga a trabajar con ViewModel para solicitar los datos y guardarlos en variables de tipo MutableLiveData cuando la API conteste. Mientras que las View esperan a observar esas variables y refrescar el interface cuando los datos estén disponibles.


### Trabajar con fuentes de datos paginadas

[Paging library overview](https://developer.android.com/topic/libraries/architecture/paging/v3-overview)

[Paging3 — Doing Recyclerview Pagination the Right Way](https://medium.com/swlh/paging3-recyclerview-pagination-made-easy-333c7dfa8797)


### Almacenar datos de forma persistente

[Data and Files Storage](https://developer.android.com/training/data-storage)

Hay varias maneras de guardar información en el dispositivo:

- pares clave-valor

- archivos para uso exclusivo de la aplicación

- archivos compartidos con otras aplicaciones (shared storage)

- una base de datos local (usando, por ejemplo SQLite y Room)

#### pares clave-valor

Se usan para guardar una pequeña cantidad de datos.

[SharedPreferences](https://developer.android.com/training/data-storage/shared-preferences)

Antiguamente se usaba `SharedPreferences`, pero ahora se recomienda utilizar `DataStore`.

[Jetpack DataStore](https://developer.android.com/topic/libraries/architecture/datastore)

El mecanismo `DataStore` tiene dos implementaciones:
- Preferences DataStore: modo simple, directamente pares de clave-valor.
- Proto DataStore: modo robusto, usando un esquema que define la estructura y tipos de datos a almacenar en forma de clave-valor. (para ello, usa [protocol buffers](https://protobuf.dev/))

Para usarlo en el modo simple:

- Poner las dependencias necesarias, en el archivo `build.gradle.kts`
```
  implementation("androidx.datastore:datastore-preferences:1.1.2")
  implementation("androidx.datastore:datastore-rxjava3:1.1.2")
```
  
  escrito en modo catalog quedarian
```
build.gradle.kts (:app)

    implementation(libs.datastore.preferences)
    implementation(libs.datastore.rxjava3)
    
    
libs.versions.toml:
    
  datastore-preferences = { module = "androidx.datastore:datastore-preferences", version.ref = "datastoreRxjava3" }
  datastore-rxjava3 = { module = "androidx.datastore:datastore-rxjava3", version.ref = "datastoreRxjava3" }
```

- Crear el almacenamiento
```
  RxDataStore<Preferences> dataStore =
    new RxPreferenceDataStoreBuilder(context, "nombredeldatastore").build();
```

- Leer del almacenamiento
```
  Preferences.Key<Integer> EXAMPLE_COUNTER = PreferencesKeys.int("example_counter");

  Flowable<Integer> exampleCounterFlow =
    dataStore.data().map(prefs -> prefs.get(EXAMPLE_COUNTER));
```

```
String getStringValue(String Key) {
  Preferences.Key<String> PREF_KEY = PreferencesKeys.stringKey(Key);
  Single<String> value = dataStore.data().firstOrError().map(prefs -> prefs.get(PREF_KEY)).onErrorReturnItem("null");
  return value.blockingGet();
}
```

- Escribir al almacenamiento
```
  Single<Preferences> updateResult =  dataStore.updateDataAsync(prefsIn -> {
      MutablePreferences mutablePreferences = prefsIn.toMutablePreferences();
      Integer currentInt = prefsIn.get(INTEGER_KEY);
      mutablePreferences.set(INTEGER_KEY, currentInt != null ? currentInt + 1 : 1);
      return Single.just(mutablePreferences);
   });
// The update is completed once updateResult is completed.
```

```
public boolean putStringValue(String Key, String value){
  boolean returnvalue;
  Preferences.Key<String> PREF_KEY = PreferencesKeys.stringKey(Key);
  Single<Preferences> updateResult =  dataStore.updateDataAsync(prefsIn -> {
      MutablePreferences mutablePreferences = prefsIn.toMutablePreferences();
      mutablePreferences.set(PREF_KEY, value);
      return Single.just(mutablePreferences);
  }).onErrorReturnItem(pref_error);

  returnvalue = updateResult.blockingGet() != pref_error;
  return returnvalue;
}
```


[Introduction to DataStore - MAD Skills](https://www.youtube.com/watch?v=mdQjuZbLv9Y)

[Preferences DataStore - MAD Skills](https://www.youtube.com/watch?v=kp53qL_O5gk)

[Proto DataStore - MAD Skills](https://www.youtube.com/watch?v=aYhgwII6_VM)

[DataStore: Best practices - MAD Skills](https://www.youtube.com/watch?v=S10ci36lBJ4)

[DataStore: Best practices (part 2) - MAD Skills](https://www.youtube.com/watch?v=ZqlZnSdSqI4)

[Simple Preferences & Proto DataStore Demo App](https://vtsen.hashnode.dev/simple-preferences-proto-datastore-demo-app)

[Using the Android DataStore Library instead of SharedPreferences in Java](https://medium.com/@deadmanapple/using-the-android-datastore-library-instead-of-sharedpreferences-in-java-d6744c348a05)


#### archivos locales

Se usan para almacenar grandes cantidades de datos.

El sistema Android suministra un espacio de almacenamiento interno propio para cada aplicación (*internal storage*). Con dos carpetas: una para archivos y otra para cachés.

[Access from internal storage](https://developer.android.com/training/data-storage/app-specific#internal)

También existe un espacio de almacenamiento externo, que puede ser de dos tipos:
- almacenamiento externo (*external storage*), solo para uso de la aplicación.
- almacenamiento externo compartido (*shared storage*), para compartir con otras aplicaciones.

[Access from external storage](https://developer.android.com/training/data-storage/app-specific#external)

[Sharing files](https://developer.android.com/training/secure-file-sharing)


#### base de datos local

Se usa para almacenar en el propio dispositivo grandes cantidades de datos de forma estructurada.

El sistema Android trae incluida la base de datos `SQLLite`. 

- Se puede utilizar directamente, usando [SQLiteOpenHelper](https://developer.android.com/reference/android/database/sqlite/SQLiteOpenHelper). 

- O se puede usar a través del ORM (Object-Relational Mapping) [Jetpack Room](https://developer.android.com/training/data-storage/room)


#### base de datos en la nube

Se usa o bien cuando se necesita escalabilidad para almacenar grandes cantidades de datos, o bien cuando múltiples dispositivos requieren acceso a unos mismos datos.

Por ejemplo:

https://firebase.google.com/products/data-connect

https://firebase.google.com/products/firestore

https://firebase.google.com/products/realtime-database



### Room y SQLite, base de datos local

Room es un componente ORM (Object-Relational Mapping) para manejar persistencia de grandes cantidades de información estructurada en una base de datos (como por ejemplo SQLite, la bd que viene incluida de serie en el sistema operativo Android).

(https://developer.android.com/jetpack/androidx/releases/room)

[Guia de usuario](https://developer.android.com/training/data-storage/room)


Room tiene tres componentes principales:

- La base de datos. (tablas)

- Las entidades. (objetos)

- Los objetos de acceso. (DAOs)

Para usarlo:

- Poner las dependencias necesarias, en el archivo `build.gradle.kts`
```
  implementation("androidx.room:room-runtime:$room_version"
  annotationProcessor("androidx.room:room-compiler:$room_version")
```

  escrito en modo catalog quedarian
```
build.gradle.kts (:app)

    implementation(libs.room.common)
    implementation(libs.room.runtime)

    annotationProcessor(libs.room.compiler)


libs.versions.toml:

  room-common = { group = "androidx.room", name = "room-common", version.ref = "roomCommon" }
  room-runtime = { group = "androidx.room", name = "room-runtime", version.ref = "roomRuntime" }
  room-compiler = { group = "androidx.room", name = "room-compiler", version.ref = "roomCompiler" }
```

- Podemos definir tantas entidades y sus datos (propiedades) como necesitemos. Por ejemplo
```
@Entity
public class User {

    @PrimaryKey
    public int uid;

    @ColumnInfo(name = "first_name")
    public String firstName;

    @ColumnInfo(name = "last_name")
    public String lastName;
    
}
```

- Para cada entidad, hay que definir la interfaz de trabajo con sus datos. Por ejemplo
```
@Dao
public interface UserDao {

    @Query("SELECT * FROM user")
    List<User> getAll();

    @Query("SELECT * FROM user WHERE uid IN (:userIds)")
    List<User> loadAllByIds(int[] userIds);

    @Query("SELECT * FROM user WHERE first_name LIKE :first AND last_name LIKE :last LIMIT 1")
    User findByName(String first, String last);

    @Insert
    void insertAll(User... users);
    
    @Update
    void updateUser(User user);

    @Delete
    void delete(User user);
    
}
```

- Definir la base de datos para soportar todas esas entidades y sus datos. Por ejemplo
```
@Database(entities = {User.class, .....class, .......}, version = 1)
public abstract class AppDatabase extends RoomDatabase {
    public abstract UserDao userDao();
    public abstract ....Dao ....Dao();
    ......;
}
```

- En la aplicación, se creará una instancia de esa base de datos y con ella podremos acceder a las entidades y a su manejo. Por ejemplo
```
AppDatabase db = Room.databaseBuilder(getApplicationContext(),
                                      AppDatabase.class, 
                                      "database-name")
                                      .build();
UserDao userDao = db.userDao();
List<User> users = userDao.getAll();
```

nota: Es conveniente usar el [patrón singleton](https://refactoring.guru/es/design-patterns/singleton) para asegurarse de que cualquier parte del programa que lo necesite tiene acceso a la base de datos, pero que solo hay una única instancia de la base de datos en todo el programa.
```
@Database(entities = {User.class, .....class, .......}, version = 1)
public abstract class AppDatabase extends RoomDatabase {
    public abstract UserDao userDao();
    public abstract ....Dao ....Dao();
    ......;

    private static volatile AppDatabase databaseInstance = null;
    
    private AppDatabase() {
        // el constructor es private para evitar que nadie lo use
    }
    
    public static AppDatabase getDatabase(Context context) {
        if (databaseInstance == null) {
            synchronized (AppDatabase.class) {
            if (databaseInstance == null) {
                AppDatabase databaseInstance = Room.databaseBuilder(context,
                                                 AppDatabase.class, 
                                                 "database-name")
                                                 .build();
            }
        }
        return databaseInstance;
    }

}
```

```
AppDatabase db = AppDatabase.getDatabase(getApplicationContext());

UserDao userDao = db.userDao();
List<User> users = userDao.getAll();
```


#### algo de documentación variada

[codelab: Persist data with Room](https://developer.android.com/codelabs/basic-android-kotlin-compose-persisting-data-room#0)

[👨‍💻 Bases de datos en Android con ROOM](https://youtu.be/7N8X4DPQlNY)





### Firebase, servicios "cloud"

nota: Los servicios Firebase no son exclusivos de Android; pueden utilizarse también con otras plataformas tales como React, Angular, Next, Unity, C++, ...

[página principal](https://firebase.google.com/?hl=es-419)

[tarifas de precios de los distintos productos](https://firebase.google.com/pricing?hl=es-419)

[documentacion](https://firebase.google.com/docs?hl=es-419)

[muestras de código](https://firebase.google.com/docs/samples)

[muestras de código - android](https://github.com/firebase/quickstart-android)

[para utilizar Firebase en un proyecto Android](https://firebase.google.com/docs/android/setup?hl=es-419)

Los servicios Firebase se apoyan en Google Cloud. Son escalables a demanda y pueden cubrir necesidades a nivel global. Desde pequeñas aplicaciones locales hasta aplicaciones a nivel planetario. Tiene productos para:

- [Servicios de desarrollo](https://firebase.google.com/docs/build?hl=es-419): testing (Emulator Suite), almacenamiento (Storage), base de datos relacional (Data Connect), base de datos noSQL (Firestore), machine learning, IA (Vertex, Gemini, Genkit),... 

- [Servicios de despliegue](https://firebase.google.com/docs/run): alojamiento (App Hosting, Cloud Functions), analítica, monitorización, mensajeria, actualizaciones, configuración remota, despliegues progresivos,...

- [Seguridad](https://firebase.google.com/docs/auth?hl=es-419): autentificación, autorización,...


nota: Se dispone de una suite de emuladores de todos esos productos. Con esta suite se puede establecer entornos de pruebas donde testear las aplicaciones antes de desplegarlas al entorno de producción. [emulator suite](https://firebase.google.com/docs/emulator-suite?hl=es-419)

#### preparación previa

[Como conectar Firebase con Android Studio (Java) agregando las dependencias manualmente en Español - Rzy](https://www.youtube.com/watch?v=NA70hqggx-k)

[How to Connect Firebase with your Android Studio Project - Philipp Lackner](https://www.youtube.com/watch?v=WcA8OElRc8c)

Partes de la consola de Firebase se pueden acceder desde dentro de Android Studio, con el menú `Tools` , `Firebase`. Si la usamos así, ciertos datos se rellenan de forma automática y el archivo `google-services.json` se descarga automaticamente a su sitio.

Pero es recomendable trabajar directamente con la propia consola: [https://console.firebase.google.com/](https://console.firebase.google.com/) y seguir, paso a paso, las instrucciones que nos va dando.

Los servicios Firebase se contratan-configuran según proyectos. Cada proyecto puede contener una o varias aplicaciones, que comparten esos servicios.

En la preparación para usar Firebase en nuestra aplicación:

- El primer paso es dar de alta la aplicación dentro de un proyecto. Para ello se necesitan tres datos:

  - El nombre del paquete:  com.

  - Una descripción.

  - La huella SHA1: (se puede obtener lanzando la tarea `gradle signingReport` desde la pestaña Gradle de Android Studio)

- El segundo paso es descargar el archivo `google-services.json` que nos suministra la consola y ponerlo dentro de la carpeta `app` de nuesta aplicación.

  > ¡Aviso!: este archivo `google-services.json` contiene claves que permiten acceder a la consola Firebase; es importante incluirlo en `gitignore` para que no suba al repositorio.

- El tercer paso es comenzar a implementar los servicios en el código. Por cada servicio que se vaya a usar, ir a "Get Started" de ese servicio en la consola y seguir las instrucciones para añadir a nuestra aplicación el SDK (las dependencias) correspondiente.

 > nota: cada nuevo servicio que se incorpore, modifica el archivo `google-services.json`; la consola suministrará un nuevo archivo para sustituir al que está dentro de la carpeta `app` de nuestra aplicación.

Una vez preparada nuestra aplicación para utilizar Firebase, desde la consola podremos gestionar/configurar cada uno de los servicios Firebase que tengamos asociados con ella.

[Firebase Console](https://console.firebase.google.com/)


##### plantilla Firebase UI

Una alternativa para facilitar el trabajo es usar todas o alguna de las partes de esta plantilla: [FirebaseUI Template](https://github.com/firebase/FirebaseUI-Android)

nota: Aunque no se use directamente esta plantilla, comentar que es también una buena fuente de ejemplos y de recursos. Merece la pena echarle un vistazo.

nota: Una fuente más sencilla de ejemplos y recursos es la colección [Firebase Quickstarts for Android](https://github.com/firebase/quickstart-android). Merece la pena también echarle un vistazo.


#### Auth: identificación de usuarios

[Servicios de Firebase - Auth](https://firebase.google.com/products/auth?hl=es-419)

Para autentificar usuarios con Firebase Auth, se pueden utilizar alguno (o varios) de estos métodos: 

- Directo: con una dirección de correo-e y contraseña

- Correo: con códigos que se envian por email

- Teléfono: con códigos que se envian por SMS

- Proveedor federado: con una cuenta ya existente de Google, Apple, Meta, X, Github,...

- Plataforma de identidades: con una cuenta ya existente de cualquier otro proveedor de identidades que permita utilizar OpenID o SAML.


Las dependencias necesarias son:
- build.gradle (project-level)
```
plugins {
    alias(libs.plugins.android.application) apply false
    id("com.google.gms.google-services") version "4.4.2" apply false

}
```
- app/build.gradle
```
plugins {
    alias(libs.plugins.android.application)
    id("com.google.gms.google-services")
}

../..

dependencies {
        ../..
        implementation 'com.google.firebase:firebase-auth:23.2.0'
        implementation 'androidx.credentials:credentials:1.5.0'
        implementation 'androidx.credentials:credentials-play-services-auth:1.5.0'
        implementation 'com.google.android.libraries.identity.googleid:googleid:1.1.1'
        ../..
}
```

##### con un correo-e y una contraseña

Un ejemplo ilustrativo, usando Firebase para [identificar usuarios con un correo-e y una contraseña](https://firebase.google.com/docs/auth/android/password-auth?hl=es-419)

````
mAuth.createUserWithEmailAndPassword(email, password)
        .addOnCompleteListener(this, new OnCompleteListener<AuthResult>() {
            @Override
            public void onComplete(@NonNull Task<AuthResult> task) {
                if (task.isSuccessful()) {
                    // Sign in success, update UI with the signed-in user's information
                    Log.d(TAG, "createUserWithEmail:success");
                    FirebaseUser user = mAuth.getCurrentUser();
                    updateUI(user);
                } else {
                    // If sign in fails, display a message to the user.
                    Log.w(TAG, "createUserWithEmail:failure", task.getException());
                    Toast.makeText(EmailPasswordActivity.this, "Authentication failed.",
                            Toast.LENGTH_SHORT).show();
                    updateUI(null);
                }
            }
        });
````

[How to Register and Login Users with Firebase Auth - Philipp Lackner](https://www.youtube.com/watch?v=xu3bHQWD6A0)

[How to Save Username and Profile Picture with Firebase Auth - Philipp Lackner](https://www.youtube.com/watch?v=ymnKQVLs93c)

[Save User Credentials With the Google Credential Manager - Philipp Lackner](https://www.youtube.com/watch?v=FULNucVxf94)



Otro ejemplo ilustrativo.

[Login con correo y contraseña usando Firebase en android studio - Pluartz](https://www.youtube.com/watch?v=y1vGhTkUi7c)

```
public class Login extends Fragment {

    private FragmentLoginBinding binding;

    private FirebaseAuth mAuth;


    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        mAuth = FirebaseAuth.getInstance();
    }

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {

        binding =  FragmentLoginBinding.inflate(inflater,container,false);
        View view = binding.getRoot();

        binding.btnEntrar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String correoe = binding.txtCorreoe.getText().toString();
                String contraseña = binding.txtContraseña.getText().toString();

                if (!correoe.isEmpty() && !contraseña.isEmpty()){
                    login(correoe, contraseña);
                }else{
                    Toast.makeText(view.getContext(), "Por favor, escriba algo...", Toast.LENGTH_SHORT).show();
                }
            }
        });

        binding.btnRegistrarUnNuevoUsuario.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String correoe = binding.txtCorreoe.getText().toString();
                String contraseña = binding.txtContraseña.getText().toString();

                if (!correoe.isEmpty() && !contraseña.isEmpty()){
                    registrarUnNuevoUsuario(correoe, contraseña);
                }else{
                    Toast.makeText(view.getContext(), "Por favor, escriba algo...", Toast.LENGTH_SHORT).show();
                }
            }
        });

        return view;
    }

    @Override
    public void onDestroyView() {
        super.onDestroyView();
        binding = null;
    }

    private void login(String correoe, String contraseña){
        mAuth.signInWithEmailAndPassword(correoe, contraseña).addOnCompleteListener(new OnCompleteListener<AuthResult>() {
            @Override
            public void onComplete(@NonNull Task<AuthResult> task) {
                if (task.isSuccessful()) {
                    if(mAuth.getCurrentUser().isEmailVerified()){
                        Toast.makeText(binding.getRoot().getContext(), "Login correcto", Toast.LENGTH_SHORT).show();
                        findNavController(binding.getRoot()).navigate(R.id.action_login_to_pantallaPrincipalDeMiApp);
                    }else {
                        Toast.makeText(binding.getRoot().getContext(), "Esa dirección de correo-e no esta verificada. Por favor, vaya a su buzón y responda al correo de validación.", Toast.LENGTH_SHORT).show();
                    }

                }else {
                    Toast.makeText(binding.getRoot().getContext(), "La dirección de correo-e o la contraseña no son correctos.", Toast.LENGTH_SHORT).show();
                }
            }
        }).addOnFailureListener(new OnFailureListener() {
            @Override
            public void onFailure(@NonNull Exception e) {
                Toast.makeText(binding.getRoot().getContext(), "Problemas con el servicio de autentificación de Firebase al verificar las credenciales.", Toast.LENGTH_SHORT).show();
            }
        });
    }

    public void registrarUnNuevoUsuario(String correoe, String contraseña){
        mAuth.createUserWithEmailAndPassword(correoe, contraseña).addOnCompleteListener(new OnCompleteListener<AuthResult>() {
            @Override
            public void onComplete(@NonNull Task<AuthResult> task) {
                if (task.isSuccessful()) {
                    Toast.makeText(binding.getRoot().getContext(), "Se ha registrado correctamente.", Toast.LENGTH_SHORT).show();
                    mAuth.getCurrentUser().sendEmailVerification().addOnCompleteListener(new OnCompleteListener<Void>() {
                        @Override
                        public void onComplete(@NonNull Task<Void> task) {
                            if (task.isSuccessful()){
                                Toast.makeText(binding.getRoot().getContext(), "Por favor, vaya a su buzón de correo-e y responda al correo que le hemos enviado con la petición de verificación.", Toast.LENGTH_SHORT).show();
                            }
                        }
                    });
                }else {
                    Toast.makeText(binding.getRoot().getContext(), "La dirección de correo-e o la contraseña no son correctos.", Toast.LENGTH_SHORT).show();
                }            }
        }).addOnFailureListener(new OnFailureListener() {
            @Override
            public void onFailure(@NonNull Exception e) {
                Toast.makeText(binding.getRoot().getContext(), "Problemas con el servicio de autentificación de Firebase al registrar nuevo usuario.", Toast.LENGTH_SHORT).show();
            }
        });

    }

}
```



##### con un número de teléfono

Un ejemplo ilustrativo, usando Firebase para [identificar usuarios con un número de teléfono](https://firebase.google.com/docs/auth/android/phone-auth?hl=es-419#java)

- Poner las dependencias necesarias, en el archivo `build.gradle.kts`
```
    implementation(platform("com.google.firebase:firebase-bom:33.10.0"))
```

- Habilitar Auth para esta app en la [consola Firebase](https://console.firebase.google.com/) y, más concretamente, la autentificación por SMS.

- Enviar un código al teléfono y verificarlo en la app (callback)
```
    PhoneAuthOptions options = 
      PhoneAuthOptions.newBuilder(mAuth) 
          .setPhoneNumber(phoneNumber)       // Phone number to verify
          .setTimeout(60L, TimeUnit.SECONDS) // Timeout and unit
          .setActivity(this)                 // (optional) Activity for callback binding
          // If no activity is passed, reCAPTCHA verification can not be used.
          .setCallbacks(mCallbacks)          // OnVerificationStateChangedCallbacks
          .build();
      PhoneAuthProvider.verifyPhoneNumber(options);     
```

```
mCallbacks = new PhoneAuthProvider.OnVerificationStateChangedCallbacks() {

    @Override
    public void onVerificationCompleted(@NonNull PhoneAuthCredential credential) {
        Log.d(TAG, "onVerificationCompleted:" + credential);

        signInWithPhoneAuthCredential(credential);
    }

    @Override
    public void onVerificationFailed(@NonNull FirebaseException e) {
        Log.w(TAG, "onVerificationFailed", e);

        if (e instanceof FirebaseAuthInvalidCredentialsException) {
            // Invalid request
        } else if (e instanceof FirebaseTooManyRequestsException) {
            // The SMS quota for the project has been exceeded
        } else if (e instanceof FirebaseAuthMissingActivityForRecaptchaException) {
            // reCAPTCHA verification attempted with null Activity
        }
        
    }

    @Override
    public void onCodeSent(@NonNull String verificationId,
                           @NonNull PhoneAuthProvider.ForceResendingToken token) {
        Log.d(TAG, "onCodeSent:" + verificationId);

        mVerificationId = verificationId;
        mResendToken = token;
    }
};
```


##### con una cuenta Google

Las dependencias necesarias en el archivo `build.gradle.kts` de project
```
en plugins{
    id("com.google.gms.google-services") version "4.4.2" apply false

```

Las dependencias necesarias en el archivo `build.gradle.kts` de app
```
en plugins{
    id("com.google.gms.google-services")

en dependencies {
    implementation(platform("com.google.firebase:firebase-bom:33.14.0"))
    implementation("com.google.firebase:firebase-auth")
    implementation("androidx.credentials:credentials:1.3.0")
    implementation("androidx.credentials:credentials-play-services-auth:1.3.0")
    implementation("com.google.android.libraries.identity.googleid:googleid:1.1.1")

```


Un ejemplo ilustrativo, usando Firebase para [identificar usuarios a través una cuenta de Google](https://firebase.google.com/docs/auth/android/google-signin?hl=es-419)

````
GetGoogleIdOption googleIdOption = new GetGoogleIdOption.Builder()
        .setFilterByAuthorizedAccounts(true)
        .setServerClientId(getString(R.string.default_web_client_id))
        .build();

GetCredentialRequest request = new GetCredentialRequest.Builder()
        .addCredentialOption(googleIdOption)
        .build();
````

```
    private void launchCredentialManager(GetCredentialRequest request) {
        credentialManager.getCredentialAsync(
                requireContext(),
                request,
                new CancellationSignal(),
                Executors.newSingleThreadExecutor(),
                new CredentialManagerCallback<>() {
                    @Override
                    public void onResult(GetCredentialResponse result) {
                        // Extract credential from the result returned by Credential Manager
                        handleSignIn(result.getCredential());
                    }

                    @Override
                    public void onError(GetCredentialException e) {
                        Log.e(TAG, "Couldn't retrieve user's credentials: " + e.getLocalizedMessage());
                    }
                }
        );
    }
```


````
private void handleSignIn(Credential credential) {
    if (credential instanceof CustomCredential customCredential
        && credential.getType().equals(TYPE_GOOGLE_ID_TOKEN_CREDENTIAL)) {
        
          Bundle credentialData = customCredential.getData();
          GoogleIdTokenCredential googleIdTokenCredential = GoogleIdTokenCredential.createFrom(credentialData);
          String idToken = googleIdTokenCredential.getIdToken();
          
          firebaseAuthWithGoogle(idToken);
          
    } else {
        Log.w(TAG, "Credential is not of type Google ID!");
    }
}
````

````
private FirebaseAuth mAuth;

../..

   mAuth = FirebaseAuth.getInstance();

../..

private void firebaseAuthWithGoogle(String idToken) {
    AuthCredential credential = GoogleAuthProvider.getCredential(idToken, null);
    mAuth.signInWithCredential(credential)
            .addOnCompleteListener(this, task -> {
                if (task.isSuccessful()) {
                    Log.d(TAG, "signInWithCredential:success");
                    FirebaseUser user = mAuth.getCurrentUser();
                    updateUI(user);
                } else {
                    Log.w(TAG, "signInWithCredential:failure", task.getException());
                    updateUI(null);
                }
            });
}
````


Otro ejemplo ilustrativo, [github - quickstart android - GoogleSignInFragment.java](https://github.com/firebase/quickstart-android/blob/master/auth/app/src/main/java/com/google/firebase/quickstart/auth/java/GoogleSignInFragment.java)
```

../..

import androidx.credentials.Credential;
import androidx.credentials.CredentialManager;
import androidx.credentials.CustomCredential;
import androidx.credentials.GetCredentialRequest;
import androidx.credentials.CredentialManagerCallback;
import androidx.credentials.GetCredentialResponse;
import androidx.credentials.exceptions.GetCredentialException;
import android.os.CancellationSignal;
import androidx.credentials.ClearCredentialStateRequest;
import androidx.credentials.exceptions.ClearCredentialException;
import static com.google.android.libraries.identity.googleid.GoogleIdTokenCredential.TYPE_GOOGLE_ID_TOKEN_CREDENTIAL;

../..

import com.google.android.libraries.identity.googleid.GetGoogleIdOption;
import com.google.android.libraries.identity.googleid.GetSignInWithGoogleOption;
import com.google.android.libraries.identity.googleid.GoogleIdTokenCredential;
import com.google.firebase.auth.AuthCredential;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;
import com.google.firebase.auth.GoogleAuthProvider;

../..

import java.util.concurrent.Executors;
import android.util.Log;

../..

public class GoogleSignInFragment extends BaseFragment {
    private static final String TAG = "GoogleFragment";
    
    private FragmentGoogleBinding binding;

    private FirebaseAuth mAuth;
    private CredentialManager credentialManager;
    
    @Nullable
    @Override
    public View onCreateView(@NonNull LayoutInflater inflater, 
                             @Nullable ViewGroup container, 
                             @Nullable Bundle savedInstanceState) {
        binding = FragmentGoogleBinding.inflate(inflater, container, false);
        return binding.getRoot();
    }

    @Override
    public void onStart() {
        super.onStart();
        // Check if user is signed in (non-null) and update UI accordingly.
        FirebaseUser currentUser = mAuth.getCurrentUser();
        updateUI(currentUser);
    }

    @Override
    public void onViewCreated(@NonNull View view, 
                              @Nullable Bundle savedInstanceState) {
        super.onViewCreated(view, savedInstanceState);

        setProgressBar(binding.progressBar);

        credentialManager = CredentialManager.create(requireContext());

        mAuth = FirebaseAuth.getInstance();

        binding.signInButton.setOnClickListener(v -> signIn());
        binding.signOutButton.setOnClickListener(v -> signOut());

        // Display Credential Manager Bottom Sheet if user isn't logged in
        if (mAuth.getCurrentUser() == null) {
            showBottomSheet();
        }
    }

    private void signIn() {
        GetSignInWithGoogleOption signInWithGoogleOption = new GetSignInWithGoogleOption
            .Builder(requireContext().getString(R.string.default_web_client_id))
            .build();
        GetCredentialRequest request = new GetCredentialRequest.Builder()
            .addCredentialOption(signInWithGoogleOption)
            .build();
        launchCredentialManager(request);
    }

    private void showBottomSheet() {
        GetGoogleIdOption googleIdOption = new GetGoogleIdOption.Builder()
            .setFilterByAuthorizedAccounts(true)
            .setServerClientId(requireContext().getString(R.string.default_web_client_id))
            .build();
        GetCredentialRequest request = new GetCredentialRequest.Builder()
            .addCredentialOption(googleIdOption)
            .build();
        launchCredentialManager(request);
    }

    private void launchCredentialManager(GetCredentialRequest request) {
        credentialManager.getCredentialAsync(
            requireContext(),
            request,
            new CancellationSignal(),
            Executors.newSingleThreadExecutor(),
            new CredentialManagerCallback<>() {
                @Override
                public void onResult(GetCredentialResponse result) {
                    Credential credential = result.getCredential();
                    
                    // Update UI to show progress bar while response is being processed
                    requireActivity().runOnUiThread(this::showProgressBar);

                    if (credential instanceof CustomCredential customCredential
                            && credential.getType().equals(TYPE_GOOGLE_ID_TOKEN_CREDENTIAL)) {
                        Bundle credentialData = customCredential.getData();
                        GoogleIdTokenCredential googleIdTokenCredential = GoogleIdTokenCredential.createFrom(credentialData);
                        String idToken = googleIdTokenCredential.getIdToken();
                        
                        // Sign in to Firebase with using the token
                        AuthCredential authCredential = GoogleAuthProvider.getCredential(idToken, null);
                        mAuth.signInWithCredential(authCredential)
                            .addOnCompleteListener(requireActivity(), task -> {
                                if (task.isSuccessful()) {
                                    Log.d(TAG, "signInWithCredential:success");
                                    // Sign in success, update UI with the signed-in user's information
                                    FirebaseUser user = mAuth.getCurrentUser();
                                    updateUI(user);
                                } else {
                                    Log.w(TAG, "signInWithCredential:failure", task.getException());
                                    // If sign in fails, display a message to the user.
                                    Snackbar.make(binding.mainLayout, "Authentication Failed.", Snackbar.LENGTH_SHORT).show();
                                    updateUI(null);
                                }

                                hideProgressBar();
                            });
                    } else {
                        Log.w(TAG, "Credential is not of type Google ID!");
                    }
                }

                @Override
                public void onError(GetCredentialException e) {
                    Log.e(TAG, "Couldn't retrieve user's credentials: " + e.getLocalizedMessage());
                }
            }
        );
    }


    private void signOut() {

        mAuth.signOut();

        // This will notify all providers that any stored credential session for the given app should be cleared.
        ClearCredentialStateRequest clearRequest = new ClearCredentialStateRequest();
        credentialManager.clearCredentialStateAsync(
            clearRequest,
            new CancellationSignal(),
            Executors.newSingleThreadExecutor(),
            new CredentialManagerCallback<>() {
                @Override
                public void onResult(@NonNull Void result) {
                    updateUI(null);
                }

                @Override
                public void onError(@NonNull ClearCredentialException e) {
                    Log.e(TAG, "Couldn't clear user credentials: " + e.getLocalizedMessage());
                }
            }
        );
    }

    private void updateUI(FirebaseUser user) {
        requireActivity().runOnUiThread(() -> {
            hideProgressBar();
            if (user != null) {
                binding.status.setText(getString(R.string.google_status_fmt, user.getEmail()));
                binding.detail.setText(getString(R.string.firebase_status_fmt, user.getUid()));

                binding.signInButton.setVisibility(View.GONE);
                binding.signOutButton.setVisibility(View.VISIBLE);
            } else {
                binding.status.setText(R.string.signed_out);
                binding.detail.setText(null);

                binding.signInButton.setVisibility(View.VISIBLE);
                binding.signOutButton.setVisibility(View.GONE);
            }
        });
    }

    @Override
    public void onDestroyView() {
        super.onDestroyView();
        binding = null;
    }
}
```


[Google Sign-In with Firebase Auth - Philipp Lackner](https://www.youtube.com/watch?v=mhLlbWQ0p4s)

[LOGIN Android Studio (Google Sign In) - Brais Moure](https://www.youtube.com/watch?v=xjsgRe7FTCU&list=PLNdFk2_brsRcaGhfeeiVkW72qTYcn_nfQ&index=4)

[Add a sign-in workflow](https://developer.android.com/identity/sign-in)

[Authenticate users with Sign in with Google](https://developer.android.com/identity/sign-in/credential-manager-siwg)

[Android Credential Manager API](https://developers.google.com/identity/android-credential-manager)

[SignInButton resource](https://developers.google.com/android/reference/com/google/android/gms/common/SignInButton)
```
<com.google.android.gms.common.SignInButton
 android:id="@+id/sign_in_button"
 android:layout_width="wrap_content"
 android:layout_height="wrap_content" />
```
[Google logo drawable resource](https://github.com/firebase/FirebaseUI-Android/blob/master/auth/src/main/res/drawable/fui_ic_googleg_color_24dp.xml)

#### Cloud Storage: almacenamiento de archivos

[Servicios de Firebase - Cloud Storage](https://firebase.google.com/products/storage?hl=es-419)

#### Data Connect: base de datos SQL

[Servicios de Firebase - Data Connect](https://firebase.google.com/products/data-connect?hl=es-419)

#### Firestore: base de datos no-SQL

[Servicios de Firebase - Firestore](https://firebase.google.com/products/firestore?hl=es-419)

#### Real Time Database: no-SQL distribuido

[Servicios de Firebase - Real Time Database](https://firebase.google.com/products/realtime-database?hl=es-419)

Real Time Database es una extensión de Firebase Firestore. Se utiliza para tener unos mismos datos sincronizados automáticamente en múltiples dispositivos, en tiempo real.


#### Analytics: recoger información sobre el uso de la app

#### Hosting: alojar y publicar la app en Internet

#### Gemini: inteligencia artificial

#### etc...

### Gráficos empresariales, "charts"

Hay variadas bibliotecas de terceros, como por ejemplo:

[MPAndroidChart](https://github.com/PhilJay/MPAndroidChart)

[GraphView](https://github.com/jjoe64/GraphView?tab=readme-ov-file)

[HelloChart](https://github.com/lecho/hellocharts-android)

[WilliamChart](https://github.com/diogobernardino/williamchart)

[Vico](https://github.com/patrykandpatrick/vico)

[AnyChart](https://github.com/AnyChart/AnyChart-Android)

[a List of Android Chart Libraries](https://github.com/lucasrafagnin/android-charts?tab=readme-ov-file#list-of-android-chart-libraries)

#### MPAndroidChart

[github](https://github.com/PhilJay/MPAndroidChart)

[wiki](https://weeklycoding.com/mpandroidchart/)

[How to Quickly Implement Beautiful Charts in Your Android App](https://medium.com/@mobindustry/how-to-quickly-implement-beautiful-charts-in-your-android-app-cf4caf050772)

en `settings.gradle`
````
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        google()
        mavenCentral()
        maven("https://jitpack.io")
    }
}
````
en `build.gradle` (app)
````
dependencies {
    implementation 'com.github.PhilJay:MPAndroidChart:v3.1.0'
}
````

en el layout XML
````
    <com.github.mikephil.charting.charts.BarChart
        android:id="@+id/unGraficoDeBarras"
        android:layout_width="match_parent"
        android:layout_height="wrap_content" />
````

en el código
````
    private ArrayList getDataSet() {
        ArrayList dataSets = null;
 
        ArrayList meanTemperartureValueSet = new ArrayList();
        valueSet.add(new BarEntry(0f, 3.4f));
        valueSet.add(new BarEntry(1f, 5.1f));
        ../..
        BarDataSet meanTemperartureBarDataSet = new BarDataSet(meanTemperartureValueSet, "Mean Temperature");
        meanTemperartureBarDataSet.setColor(Color.rgb(0, 155, 0));
        
        ArrayList rainValueSet = new ArrayList();
        valueSet.add(new BarEntry(0f, 138f));
        valueSet.add(new BarEntry(1f, 75f));
        ../..
        BarDataSet rainBarDataSet = new BarDataSet(rainValueSet, "Rain");
        rainBarDataSet.setColor(Color.rgb(0, 0, 150));
 
        dataSets = new ArrayList();
        dataSets.add(meanTemperartureBarDataSet);
        dataSets.add(rainBarDataSet);
        
        return dataSets;
    }
 
    private ArrayList getXAxisValues() {
        ArrayList xAxis = new ArrayList();
        xAxis.add("Enero");
        xAxis.add("Febrero");
        ../..
        return xAxis;
    }

````

````
        BarChart chart = (BarChart) findViewById(R.id.unGraficoDeBarras);
 
        BarData data = new BarData(getXAxisValues(), getDataSet());
        chart.setData(data);
        chart.setDescription("Datos Metereológicos 1985");
        chart.animateXY(2000, 2000);
        chart.invalidate();
````
[Setting data for a BarChart](https://github.com/PhilJay/MPAndroidChart/wiki/Setting-Data#barchart)

[Gráficas en Android](https://www.youtube.com/watch?v=8FJkt4ZwAnQ)


## Apéndice: documentación variada

[Android Fundamentals for Beginners](https://www.youtube.com/watch?v=3Ri9PPsGCEg&list=PLQkwcJG4YTCTq1raTb5iMuxnEB06J1VHX)

[Android Basics](https://www.youtube.com/watch?v=SJw3Nu_h8kk&list=PLQkwcJG4YTCSVDhww92llY3CAnc_vUhsm)

[Jetpack Compose](https://www.youtube.com/watch?v=cDabx3SjuOY&list=PLQkwcJG4YTCSpJ2NLhDTHhi6XBNfk9WiC)

[Testing in Android](https://www.youtube.com/watch?v=EkfVL5vCDmo&list=PLQkwcJG4YTCSYJ13G4kVIJ10X5zisB2Lq)

[MVVM Running Tracker App](https://www.youtube.com/watch?v=XqkFTG10sRk&list=PLQkwcJG4YTCQ6emtoqSZS2FVwZR9FT3BV)

[MVVM Pokedex App, with Jetpack Compose](https://www.youtube.com/watch?v=v0of23TxIKc&list=PLQkwcJG4YTCTimTCpEL5FZgaWdIZQuB7m)

[MVVM News App, with Retrofit, Room, Coroutines, Navigation,...](https://www.youtube.com/watch?v=asuOWE5KuFM&list=PLQkwcJG4YTCRF8XiCRESq1IFFW8COlxYJ)

[MVVM Spotify Clone App](https://www.youtube.com/watch?v=yV1152xCBzA&list=PLQkwcJG4YTCT-lTlkOmE-PpRkuyNXq6sW)

[How to Build a Camera App, with CameraX](https://www.youtube.com/watch?v=12_iKwGIP64&list=PLQkwcJG4YTCRJxkPPDBcKqDWrfF5qanQs)

[How to Register and Login Users, with Firebase Auth](https://www.youtube.com/watch?v=xu3bHQWD6A0&list=PLQkwcJG4YTCQGK2N-Sl4jKlX9M3GtPUJd)

[more from Philip Lacker...](https://www.youtube.com/@PhilippLackner)

### algunos avisos, problemas y...

#### http en vez de https

Usar conexiones sin certificar/encriptar, suele dar este error:

> HTTP FAILED: java.net.UnknownServiceException: CLEARTEXT communication to xxxxxxxx not permitted by network security policy

[Para permtir usar fuentes sin certificar (http en lugar de https)](https://stackoverflow.com/questions/45940861/android-8-cleartext-http-traffic-not-permitted)

`rest/xml/network_security_config.xml`
```
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <domain-config cleartextTrafficPermitted="true">
        <domain includeSubdomains="true">xxxxxxxx</domain>
    </domain-config>
</network-security-config>
```

`AndroidManifest.xml`
```
<?xml version="1.0" encoding="utf-8"?>
<manifest ...>
    <uses-permission android:name="android.permission.INTERNET" />
    <application
        ...
        android:networkSecurityConfig="@xml/network_security_config"
        ...>
        ...
    </application>
</manifest>
```

#### localhost

El emulador de Android no puede conectarse con la  propia maquina donde se esta ejecutando? Es decir, ¿qué hacer con localhost?

[How to connect your Android emulator to a local web service](https://medium.com/livefront/how-to-connect-your-android-emulator-to-a-local-web-service-47c380bff350)

Usar el bucle local 10.0.2.2 en lugar de los clásicos 127.0.0.1 o localhost.

[Set up Android Emulator networking](https://developer.android.com/studio/run/emulator-networking)
 

#### ¡cuidado con keys, tokens y otros secretos!

[How to Hide & Protect API Keys in Your Android App (Reverse Engineering)](https://www.youtube.com/watch?v=-2ckvIzs0nU)

[Save User Credentials With the Google Credential Manager](https://www.youtube.com/watch?v=FULNucVxf94)

### algunos canales Youtube

[DevExpert - canal de YouTube](https://www.youtube.com/@devexpert_io)

[Philipp Lackner - Youtube channel](https://www.youtube.com/@PhilippLackner)

[K Apps](https://www.youtube.com/@kapps7407/featured)

[Stevdza-San - YouTube channel](https://www.youtube.com/@StevdzaSan/featured)

[Programación Android by AristiDevs - canal Youtube](https://www.youtube.com/@AristiDevs)

[Beginner Android Programming (Java)](https://www.youtube.com/playlist?list=PL_c9BZzLwBRJLm0QETVj_XcN4jRsV4LkR)

[danielme.com - blog about Android development](https://danielme.com/android/)

[Foxandroid - YouTube channel](https://www.youtube.com/@_foxandroid)


### algunos materiales

[Android Fundamentals - Philipp Lackner](https://www.youtube.com/watch?v=3Ri9PPsGCEg&list=PLQkwcJG4YTCTq1raTb5iMuxnEB06J1VHX)

[Android Basics - Philipp Lackner](https://www.youtube.com/watch?v=SJw3Nu_h8kk&list=PLQkwcJG4YTCSVDhww92llY3CAnc_vUhsm)

[curso ANDROID desde cero - lista Youtube - DevExpert](https://www.youtube.com/watch?v=DX-CIdg3jWY&list=PLrn69hTK5FByEfJEtLzJMEi0cKIwCVgJi)

[curso Jetpack COMPOSE - lista Youtube - DevExpert](https://www.youtube.com/watch?v=ZZQYJmn3grg&list=PLrn69hTK5FBwu7VmWBg76v23atiMqz_pY)

[Android - Jetpack Compose - Room - Retrofit - MVVM - Hilt - Pruebas unitarias - REST API - SQLite - YouTube](https://www.youtube.com/watch?v=Td4wHh_ZivE)

[Create an Android App With Kotlin and Jetpack Compose - freecodecamp.org](https://www.freecodecamp.org/news/create-an-android-app/)

[MAD-ModernAndroidDevelopment- Navigation course](https://www.youtube.com/watch?v=fiQiMy0HzsY&list=PLWz5rJ2EKKc9VpBMZUS9geQtc5RJ2RsUd)

[Retrofit in Android](https://medium.com/@vikasalex1996/retrofit-in-android-a-step-by-step-guide-to-calling-get-apis-with-json-body-and-mapping-responses-9544f793594e)

[Learn Android development with Views/Java or Compose/Kotlin](https://androidknowledge.com/roadmap/)

[👨‍💻 TESTING en Android ► ¿Qué es? 😏 TIPOS de tests](https://youtu.be/F9s3wc6_pxc)

[⚠ TESTING: 7 razones por las que te cuesta tanto hacer tests](https://youtu.be/46ixQtqxH4w)

[Principios SOLID - 5 + 1 Reglas que CAMBIARÁN tu forma de PROGRAMAR](https://www.youtube.com/watch?v=E_mSr-VFd3g&list=PLrn69hTK5FBxoY9NLgB8eWf2VMxCF6-cb)

[🗡Dagger HILT: How to do DEPENDENCY INJECTION on Android ⚡](https://youtu.be/qbxUwpZjniw)

[MVVM With Retrofit and Recyclerview in Kotlin [Example]](https://medium.com/android-beginners/mvvm-with-retrofit-and-recyclerview-in-kotlin-example-f01a7bd41073)

[HowToAndroid](https://howtodoandroid.com/)

[Glide Image Gallery and Multiple Image Picker - Robert Petitto](https://www.youtube.com/watch?v=4o01pOwnxJ0)

[Adding accessibility features to apps for blind and visually-impaired users](https://youtu.be/1by5J7c5Vz4)